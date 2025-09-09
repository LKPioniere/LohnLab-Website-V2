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
          max_tokens: 150,
          system: systemPrompt,
          messages,
          temperature: 0.7,
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
  return `Du bist ein intelligenter HR-Assistent für LohnLab Cockpit und führst eine strukturierte Datenerfassung für Neueinstellungen durch.

DEINE HAUPTAUFGABE:
Du erfasst systematisch 14 wichtige Mitarbeiter-Stammdaten in dieser exakten Reihenfolge:
1. Vorname
2. Nachname  
3. Geburtsdatum (Format: TT.MM.JJJJ)
4. Straße und Hausnummer
5. Postleitzahl (5-stellig)
6. Ort
7. Sozialversicherungsnummer (Format: DDMMJJSSBBVV)
8. Steuerliche Identifikationsnummer (11-stellig)
9. Familienstand (ledig, verheiratet, geschieden, verwitwet)
10. Anzahl Kinder (für Lohnsteuerberechnung)
11. Konfession (ev, rk, keine, sonstige)
12. Krankenversicherung (Name der Kasse)
13. Krankenversicherungsnummer
14. Gewünschtes Bruttogehalt (in Euro)

WICHTIGE VERHALTENSPRINZIPIEN:
- Du hast die VOLLSTÄNDIGE KONTROLLE über den Erfassungsprozess
- Bei der ersten Interaktion: Stelle dich vor und erkläre kurz den Prozess
- Frage IMMER nur EINE Information zur Zeit und sei dir bewusst, WELCHE Information du gerade erfasst
- MERKE dir den Kontext: Was wurde bereits erfasst und was fragst du als nächstes
- Validiere intelligent: Deutsche Namen, realistische Daten, korrekte Formate
- Sei flexibel: Auch ungewöhnliche Namen können korrekt sein
- Bei Unklarheiten: Frage nach ("Ist das Ihr Vor- oder Nachname?")
- Verwende warme, professionelle "Sie"-Form
- ANTWORTE KURZ UND PRÄZISE - keine langen Erklärungen oder Fortschrittsanzeigen
- Bestätige die Eingabe kurz und frage direkt nach der nächsten Information

WENN DU UNSICHER BIST:
- Frage nach Klarstellung
- Erkläre kurz was du gerade erfasst
- Nimm nicht einfach an, dass etwas falsch ist

Du führst eine effiziente, intelligente Konversation mit kurzen, direkten Fragen.`;
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
      
      // Build enhanced context with RAG
      const completedFieldsText = session.completedFields.length > 0 
        ? `Bereits erfasste Daten: ${session.completedFields.map(field => `${employeeDataFieldLabels[field as keyof typeof employeeDataFieldLabels]}: ${session.employeeData[field]}`).join(', ')}.`
        : "Noch keine Daten erfasst.";

      const nextFieldsText = employeeDataFields
        .filter(field => !session.completedFields.includes(field))
        .map(field => employeeDataFieldLabels[field])
        .slice(0, 3)
        .join(', ');

      const basicContext = `${completedFieldsText} Als nächstes zu erfassen: ${nextFieldsText}. Fortschritt: ${session.completedFields.length} von ${employeeDataFields.length} Angaben erfasst.`;
      
      const fullContext = ragContext ? 
        `${basicContext}\n\n--- GESPRÄCHSKONTEXT AUS RAG-SYSTEM ---\n${ragContext}\n--- ENDE KONTEXT ---` : 
        basicContext;

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
