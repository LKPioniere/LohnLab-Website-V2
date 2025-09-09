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

// Rate limiting state
let lastAPICall = 0;
const MIN_API_INTERVAL = 3000; // 3 seconds between API calls

function getSmartFallbackResponse(message: string, session: any): string {
  const messageLower = message.toLowerCase();
  const completedCount = session.completedFields?.length || 0;
  
  // Welcome/Start responses
  if (completedCount === 0) {
    return "Willkommen! Ich helfe Ihnen dabei, alle wichtigen Stammdaten systematisch zu erfassen. Lassen Sie uns mit dem Vornamen des neuen Mitarbeiters beginnen. Wie lautet der Vorname?";
  }
  
  // Check for name patterns
  if (completedCount === 0 && messageLower.match(/^[a-zA-ZäöüßÄÖÜ\s-]{2,30}$/)) {
    return `Vielen Dank! Vorname "${message}" ist notiert. Wie lautet der Nachname des Mitarbeiters?`;
  }
  
  if (completedCount === 1 && messageLower.match(/^[a-zA-ZäöüßÄÖÜ\s-]{2,50}$/)) {
    return `Perfekt! Name ist vollständig erfasst. Als nächstes benötige ich das Geburtsdatum. Bitte geben Sie es im Format TT.MM.JJJJ ein (z.B. 15.03.1990).`;
  }
  
  // Check for date patterns
  if (messageLower.match(/^\d{1,2}\.\d{1,2}\.\d{4}$/)) {
    return `Geburtsdatum erfasst! Nun zur Adresse: Bitte geben Sie Straße und Hausnummer ein (z.B. Musterstraße 123).`;
  }
  
  // Check for address patterns
  if (messageLower.match(/^[a-zA-ZäöüßÄÖÜ\s\.-]+\s+\d+[a-z]?$/i)) {
    return `Straße notiert! Wie lautet die 5-stellige Postleitzahl?`;
  }
  
  // Check for PLZ patterns
  if (messageLower.match(/^\d{5}$/)) {
    return `Postleitzahl erfasst! In welchem Ort wohnt der Mitarbeiter?`;
  }
  
  // Generic progress responses based on completion count
  const nextFields = [
    "Sozialversicherungsnummer (11-stellig, Format: DDMMJJSSBBVV)",
    "Steuerliche Identifikationsnummer (11-stellig)",
    "Familienstand (ledig, verheiratet, geschieden, verwitwet)",
    "Anzahl Kinder (für die Lohnsteuerberechnung)",
    "Konfession (ev, rk, keine, sonstige)",
    "Name der Krankenversicherung",
    "Krankenversicherungsnummer",
    "Gewünschtes Bruttogehalt in Euro"
  ];
  
  if (completedCount < nextFields.length) {
    return `Danke! Information erfasst. Als nächstes benötige ich: ${nextFields[completedCount - 5] || nextFields[0]}. (${completedCount + 1} von 14 Angaben erfasst)`;
  }
  
  return `Information erhalten! Können Sie mir bitte die nächste benötigte Angabe mitteilen? Wir haben bereits ${completedCount} von 14 Stammdaten erfasst.`;
}

async function callMistralAPI(messages: MistralMessage[]): Promise<string> {
  const apiKey = process.env.MISTRAL_API_KEY;
  if (!apiKey) {
    throw new Error("MISTRAL_API_KEY not found in environment");
  }

  // Rate limiting check
  const now = Date.now();
  if (now - lastAPICall < MIN_API_INTERVAL) {
    throw new Error("Rate limited - too many requests");
  }

  try {
    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'mistral-small-latest',
        messages,
        temperature: 0.7,
        max_tokens: 150,
        top_p: 1,
        stream: false,
        presence_penalty: 0,
        frequency_penalty: 0.1, // Slightly reduce repetition
      } as MistralChatRequest),
    });

    lastAPICall = now;

    if (!response.ok) {
      if (response.status === 429) {
        throw new Error("Rate limited by API");
      }
      if (response.status === 401) {
        return "Es gibt ein Problem mit der API-Konfiguration. Bitte kontaktieren Sie den Support.";
      }
      if (response.status >= 500) {
        throw new Error("API server error");
      }
      throw new Error(`Mistral API error: ${response.status} ${response.statusText}`);
    }

    const data: MistralChatResponse = await response.json();
    return data.choices[0]?.message?.content || "Entschuldigung, ich konnte keine Antwort generieren.";
  } catch (error) {
    throw error;
  }
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

      let response: string;
      
      try {
        const messages: MistralMessage[] = [
          { role: "system", content: getSystemPrompt() },
          { role: "system", content: contextMessage },
          { role: "user", content: message }
        ];

        response = await callMistralAPI(messages);
      } catch (error: any) {
        // Use smart fallback when API is rate limited or unavailable
        console.log("Using fallback response due to API error:", error?.message || error);
        response = getSmartFallbackResponse(message, session);
      }

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
