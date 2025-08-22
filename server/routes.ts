import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { sendContactEmail } from "./resend-api";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // Send email via Resend
      const emailResult = await sendContactEmail(validatedData);
      
      if (!emailResult.success) {
        console.error('Resend error:', emailResult.error);
        return res.status(500).json({ 
          error: "Failed to send email",
          details: emailResult.error 
        });
      }
      
      // Optionally still store in database
      try {
        const contact = await storage.createContact(validatedData);
        res.json({ 
          success: true, 
          contact, 
          emailSent: true,
          message: "Email successfully sent to development@lohnlab.de"
        });
      } catch (dbError) {
        // Email was sent successfully, but DB storage failed
        console.error('Database error:', dbError);
        res.json({ 
          success: true, 
          emailSent: true,
          message: "Email successfully sent to development@lohnlab.de",
          dbError: "Failed to store in database" 
        });
      }
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        console.error('General error:', error);
        res.status(500).json({ error: "Failed to submit contact form" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
