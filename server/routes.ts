import type { Express } from "express";
import { createServer, type Server } from "http";
import { Resend } from "resend";
import { z } from "zod";
import rateLimit from "express-rate-limit";
import { escape } from "html-escaper";

// Simple contact form schema
const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  userType: z.string(),
  message: z.string().optional(),
});

// User type labels for better email formatting
const userTypeLabels: Record<string, string> = {
  steuerberater: "Steuerberater",
  unternehmen: "Unternehmen",
  interessent: "Interessent",
  sonstiges: "Sonstiges",
};

// Rate limiter for contact form to prevent spam and abuse
const contactFormLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // max 5 requests per IP
  message: {
    success: false,
    error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint with rate limiting
  app.post("/api/contacts", contactFormLimiter, async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);

      // Log the contact form submission (DSGVO-compliant - no email address logged)
      console.log("Contact form submission:", {
        name: validatedData.name,
        userType: validatedData.userType,
        hasMessage: !!validatedData.message,
        timestamp: new Date().toISOString(),
      });

      // Send email via Resend if API key is configured
      if (process.env.RESEND_API_KEY) {
        try {
          const resend = new Resend(process.env.RESEND_API_KEY);

          const userTypeLabel =
            userTypeLabels[validatedData.userType] || validatedData.userType;

          await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
            to: process.env.RESEND_TO_EMAIL || "info@lohnlab.de",
            replyTo: validatedData.email,
            subject: `Neue Kontaktanfrage von ${escape(
              validatedData.name
            )} (${userTypeLabel})`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #1e3a8a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
                  Neue Kontaktanfrage über LohnLab Website
                </h2>
                
                <div style="margin: 20px 0; padding: 20px; background-color: #f3f4f6; border-radius: 8px;">
                  <p style="margin: 10px 0;"><strong>Name:</strong> ${escape(
                    validatedData.name
                  )}</p>
                  <p style="margin: 10px 0;"><strong>E-Mail:</strong> <a href="mailto:${escape(
                    validatedData.email
                  )}">${escape(validatedData.email)}</a></p>
                  <p style="margin: 10px 0;"><strong>Typ:</strong> ${escape(
                    userTypeLabel
                  )}</p>
                  ${
                    validatedData.message
                      ? `
                    <div style="margin-top: 20px; padding: 15px; background-color: white; border-left: 4px solid #3b82f6; border-radius: 4px;">
                      <strong>Nachricht:</strong><br/>
                      <p style="margin: 10px 0; white-space: pre-wrap;">${escape(
                        validatedData.message
                      )}</p>
                    </div>
                  `
                      : '<p style="margin: 10px 0;"><em>Keine Nachricht angegeben</em></p>'
                  }
                </div>
                
                <p style="color: #6b7280; font-size: 12px; margin-top: 30px;">
                  Gesendet am: ${escape(
                    new Date().toLocaleString("de-DE", {
                      timeZone: "Europe/Berlin",
                    })
                  )}
                </p>
              </div>
            `,
          });

          console.log("Email sent successfully via Resend");
        } catch (emailError) {
          console.error("Failed to send email via Resend:", emailError);
          // Don't fail the request if email fails, just log it
        }
      } else {
        console.warn("RESEND_API_KEY not configured - email not sent");
      }

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
