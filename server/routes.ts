import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

// Simple contact form schema
const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  userType: z.string(),
  message: z.string().optional(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  // Note: This currently just logs the submission
  // TODO: Add email service integration (e.g., SendGrid, Mailgun) to actually send emails
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);

      // Log the contact form submission
      console.log("Contact form submission:", {
        ...validatedData,
        timestamp: new Date().toISOString(),
      });

      // In production, you would send this via email service
      // Example: await sendEmail({ to: 'info@lohnlab.de', subject: 'New Contact', data: validatedData });

      res.json({
        success: true,
        message: "Contact form received",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          error: "Invalid form data",
          details: error.errors,
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({
          success: false,
          error: "Failed to submit contact form",
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
