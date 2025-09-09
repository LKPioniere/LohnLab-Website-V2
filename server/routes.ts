import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertChatbotSessionSchema, employeeDataFields, employeeDataFieldLabels } from "@shared/schema";
import { z } from "zod";

interface MistralMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

interface MistralChatRequest {
  model: string;
  messages: MistralMessage[];
  temperature?: number;
  max_tokens?: number;
}

interface MistralChatResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

async function callMistralAPI(messages: MistralMessage[]): Promise<string> {
  const apiKey = process.env.MISTRAL_API_KEY;
  if (!apiKey) {
    throw new Error("MISTRAL_API_KEY not found in environment");
  }

  const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'mistral-large-latest',
      messages,
      temperature: 0.7,
      max_tokens: 500,
    } as MistralChatRequest),
  });

  if (!response.ok) {
    throw new Error(`Mistral API error: ${response.status} ${response.statusText}`);
  }

  const data: MistralChatResponse = await response.json();
  return data.choices[0]?.message?.content || "Entschuldigung, ich konnte keine Antwort generieren.";
}

function getSystemPrompt(): string {
  return `Du bist ein intelligenter HR-Assistent für LohnLab Cockpit, spezialisiert auf die Erfassung von Mitarbeiter-Stammdaten für Neueinstellungen. 

Deine Aufgabe ist es, systematisch diese 10 wichtigsten Stammdaten zu erfassen:
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

WICHTIGE REGELN:
- Frage IMMER nur EINE Information zur Zeit
- Validiere jede Eingabe auf Plausibilität (PLZ 5-stellig, Geburtsdatum realistisch, etc.)
- Bei ungültigen Eingaben erkläre freundlich was falsch ist und frage erneut
- Verwende eine persönliche, professionelle aber warme Ansprache
- Nutze die "Sie"-Form
- Gib am Ende jeder Nachricht einen kurzen Hinweis zum Fortschritt (z.B. "3 von 14 Angaben erfasst")

Antworte nur mit deiner nächsten Frage oder Bestätigung. Keine langen Erklärungen.`;
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

      // Build context for Mistral
      const completedFieldsText = session.completedFields.length > 0 
        ? `Bereits erfasste Daten: ${session.completedFields.map(field => `${employeeDataFieldLabels[field as keyof typeof employeeDataFieldLabels]}: ${session.employeeData[field]}`).join(', ')}.`
        : "Noch keine Daten erfasst.";

      const nextFieldsText = employeeDataFields
        .filter(field => !session.completedFields.includes(field))
        .map(field => employeeDataFieldLabels[field])
        .slice(0, 3)
        .join(', ');

      const contextMessage = `${completedFieldsText} Als nächstes zu erfassen: ${nextFieldsText}. Fortschritt: ${session.completedFields.length} von ${employeeDataFields.length} Angaben erfasst.`;

      const messages: MistralMessage[] = [
        { role: "system", content: getSystemPrompt() },
        { role: "system", content: contextMessage },
        { role: "user", content: message }
      ];

      const response = await callMistralAPI(messages);

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
