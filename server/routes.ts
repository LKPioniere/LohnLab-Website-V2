import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertChatbotSessionSchema, employeeDataFields, employeeDataFieldLabels } from "@shared/schema";
import { z } from "zod";
import { embeddingService } from "./rag";

interface AnthropicMessage {
  role: "user" | "assistant";
  content: string;
}

interface AnthropicChatRequest {
  model: string;
  max_tokens: number;
  messages: AnthropicMessage[];
  system?: string;
  temperature?: number;
}

interface AnthropicChatResponse {
  content: Array<{
    type: string;
    text: string;
  }>;
}

// Rate limiting state
let lastAPICall = 0;
const MIN_API_INTERVAL = 1000; // 1 second between API calls

async function callAnthropicAPI(messages: AnthropicMessage[], systemPrompt: string, maxRetries: number = 3): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY not found in environment");
  }

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      // Rate limiting check with exponential backoff
      const now = Date.now();
      const timeSinceLastCall = now - lastAPICall;
      const requiredInterval = MIN_API_INTERVAL * Math.pow(2, attempt); // Exponential backoff

      if (timeSinceLastCall < requiredInterval) {
        const waitTime = requiredInterval - timeSinceLastCall;
        console.log(`Rate limiting: waiting ${waitTime}ms before attempt ${attempt + 1}`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 25,
          system: systemPrompt,
          messages,
          temperature: 0.0,
        } as AnthropicChatRequest),
      });

      lastAPICall = Date.now();

      if (response.ok) {
        const data: AnthropicChatResponse = await response.json();
        const content = data.content?.[0]?.text;
        if (content) {
          return content;
        }
      }

      if (response.status === 429) {
        console.log(`Rate limit hit on attempt ${attempt + 1}, retrying...`);
        if (attempt === maxRetries - 1) {
          throw new Error("Rate limited by API after all retries");
        }
        // Wait exponentially longer for rate limits
        const backoffTime = Math.min(1000 * Math.pow(2, attempt + 1), 8000); // Cap at 8 seconds
        await new Promise(resolve => setTimeout(resolve, backoffTime));
        continue;
      }

      if (response.status === 401) {
        throw new Error("API key authentication failed");
      }

      if (response.status >= 500) {
        console.log(`Server error ${response.status} on attempt ${attempt + 1}`);
        if (attempt === maxRetries - 1) {
          throw new Error("API server error after all retries");
        }
        await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)));
        continue;
      }

      // Other errors
      throw new Error(`Anthropic API error: ${response.status} ${response.statusText}`);

    } catch (error: any) {
      if (attempt === maxRetries - 1) {
        throw error;
      }
      
      console.log(`API call failed on attempt ${attempt + 1}:`, error.message);
      // Wait before retry
      await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)));
    }
  }

  throw new Error("Max retries exceeded");
}

function getSystemPrompt(): string {
  return `WICHTIG: Du bist ein HR-Assistent. Der User ist Sachbearbeiter, du erfasst Daten für einen NEUEN MITARBEITER.

ABSOLUTE REGELN:
- Antworte MAXIMAL 5 Wörter
- NIEMALS "Fortschritt" oder "Angaben erfasst" schreiben
- NIEMALS Listen oder Aufzählungen
- Frage nur nach EINEM Datum
- Sprich vom "neuen Mitarbeiter", NICHT "Sie/Ihr"

BEISPIELE GUTER ANTWORTEN:
"Danke! Nachname?"
"Verstanden. Geburtsdatum?"
"Notiert. Straße?"

NIEMALS SO ANTWORTEN:
❌ "Fortschritt: X von 14"
❌ "Ich habe erfasst..."  
❌ Listen mit Punkten`;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to submit contact form" });
      }
    }
  });

  // Chatbot session management
  app.post("/api/chatbot/sessions", async (req, res) => {
    try {
      const sessionData = {
        sessionId: req.body.sessionId || `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        currentStep: 0,
        completedFields: [],
        employeeData: {},
        lastMessage: "",
        isCompleted: false
      };
      
      const session = await storage.createChatbotSession(sessionData);
      res.json({ success: true, session });
    } catch (error) {
      res.status(500).json({ error: "Failed to create chatbot session" });
    }
  });

  app.get("/api/chatbot/sessions/:sessionId", async (req, res) => {
    try {
      const session = await storage.getChatbotSession(req.params.sessionId);
      if (!session) {
        return res.status(404).json({ error: "Session not found" });
      }
      res.json({ success: true, session });
    } catch (error) {
      res.status(500).json({ error: "Failed to get chatbot session" });
    }
  });

  // Chatbot chat endpoint
  app.post("/api/chatbot/chat", async (req, res) => {
    try {
      const { sessionId, message } = req.body;
      
      if (!sessionId || !message) {
        return res.status(400).json({ error: "sessionId and message are required" });
      }

      // Get or create session
      let session = await storage.getChatbotSession(sessionId);
      if (!session) {
        session = await storage.createChatbotSession({
          sessionId,
          currentStep: 0,
          completedFields: [],
          employeeData: {},
          lastMessage: "",
          isCompleted: false
        });
      }

      // Store user message in RAG system
      await embeddingService.storeConversationEmbedding(
        sessionId,
        message,
        'user',
        { step: session.currentStep + 1 }
      );

      // Get RAG context for better responses
      const ragContext = await embeddingService.getSessionSummary(sessionId);
      
      // Ultra-minimal context
      const nextField = employeeDataFields.find(field => !session.completedFields.includes(field));
      const nextFieldLabel = nextField ? employeeDataFieldLabels[nextField] : "Alle Daten erfasst";

      const basicContext = `Nächstes Feld: ${nextFieldLabel}`;
      
      const fullContext = `${basicContext}. ANTWORTE KURZ (max 5 Wörter), KEINE Fortschrittsanzeigen!`;

      const messages: AnthropicMessage[] = [
        { role: "user", content: `${fullContext}\n\nAktuelle Benutzer-Nachricht: ${message}` }
      ];

      const response = await callAnthropicAPI(messages, getSystemPrompt());

      // Store assistant response in RAG system
      await embeddingService.storeConversationEmbedding(
        sessionId,
        response,
        'assistant',
        { step: session.currentStep + 1, relatedQuery: message }
      );

      // Update session with the interaction
      const updatedSession = await storage.updateChatbotSession(sessionId, {
        lastMessage: response,
        currentStep: session.currentStep + 1
      });

      res.json({ 
        success: true, 
        response,
        session: updatedSession,
        progress: {
          completed: session.completedFields.length,
          total: employeeDataFields.length,
          completedFields: session.completedFields,
          nextFields: employeeDataFields.filter(field => !session.completedFields.includes(field)).slice(0, 3)
        }
      });
    } catch (error) {
      console.error("Chatbot error:", error);
      res.status(500).json({ error: "Failed to process chat message" });
    }
  });

  // Update employee data from chat
  app.post("/api/chatbot/update-data", async (req, res) => {
    try {
      const { sessionId, field, value } = req.body;
      
      if (!sessionId || !field || value === undefined) {
        return res.status(400).json({ error: "sessionId, field, and value are required" });
      }

      // Validate field is one of the allowed employee data fields
      if (!employeeDataFields.includes(field as any)) {
        return res.status(400).json({ error: "Invalid field name" });
      }

      let session = await storage.getChatbotSession(sessionId);
      if (!session) {
        return res.status(404).json({ error: "Session not found" });
      }

      // Update employee data
      const updatedEmployeeData = { ...session.employeeData, [field]: value };
      const completedFields = Array.from(new Set([...session.completedFields, field]));
      const isCompleted = completedFields.length === employeeDataFields.length;

      session = await storage.updateChatbotSession(sessionId, {
        employeeData: updatedEmployeeData,
        completedFields,
        isCompleted
      });

      res.json({ 
        success: true, 
        session,
        progress: {
          completed: completedFields.length,
          total: employeeDataFields.length,
          completedFields,
          isCompleted
        }
      });
    } catch (error) {
      console.error("Update data error:", error);
      res.status(500).json({ error: "Failed to update employee data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
