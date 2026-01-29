import type { Express } from "express";
import { createServer, type Server } from "http";
import { Resend } from "resend";
import { z } from "zod";
import rateLimit from "express-rate-limit";
import { escape } from "html-escaper";
import multer from "multer";
import type { Request } from "express";

// Simple contact form schema
const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  userType: z.string(),
  message: z.string().optional(),
});

// Application form schema
const applicationSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  position: z.string().min(1),
  message: z.string().min(10),
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

// Multer configuration for file uploads (memory storage)
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB per file
    files: 2, // max 2 files
  },
  fileFilter: (req, file, cb) => {
    // Accept only PDF and DOC/DOCX files
    const allowedMimes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Nur PDF, DOC und DOCX Dateien sind erlaubt.'));
    }
  },
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
            to: process.env.RESEND_TO_EMAIL || "service@lohnlab.de",
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

  // Application form submission endpoint with file uploads
  app.post("/api/applications", contactFormLimiter, upload.array('files', 2), async (req: Request, res) => {
    try {
      const validatedData = applicationSchema.parse(req.body);
      const files = req.files as Express.Multer.File[] | undefined;

      // Log the application submission (DSGVO-compliant - no email address logged)
      console.log("Application submission:", {
        name: validatedData.name,
        position: validatedData.position,
        hasPhone: !!validatedData.phone,
        fileCount: files?.length || 0,
        timestamp: new Date().toISOString(),
      });

      // Send email via Resend if API key is configured
      if (process.env.RESEND_API_KEY) {
        try {
          const resend = new Resend(process.env.RESEND_API_KEY);

          // Prepare attachments
          const attachments = files?.map(file => ({
            filename: file.originalname,
            content: file.buffer,
          })) || [];

          await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
            to: "service@lohnlab.de",
            replyTo: validatedData.email,
            subject: `Neue Bewerbung: ${escape(validatedData.position)} - ${escape(validatedData.name)}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #1e3a8a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
                  Neue Bewerbung über LohnLab Karriereseite
                </h2>
                
                <div style="margin: 20px 0; padding: 20px; background-color: #f3f4f6; border-radius: 8px;">
                  <p style="margin: 10px 0;"><strong>Position:</strong> ${escape(validatedData.position)}</p>
                  <p style="margin: 10px 0;"><strong>Name:</strong> ${escape(validatedData.name)}</p>
                  <p style="margin: 10px 0;"><strong>E-Mail:</strong> <a href="mailto:${escape(validatedData.email)}">${escape(validatedData.email)}</a></p>
                  ${validatedData.phone ? `<p style="margin: 10px 0;"><strong>Telefon:</strong> ${escape(validatedData.phone)}</p>` : ''}
                  
                  <div style="margin-top: 20px; padding: 15px; background-color: white; border-left: 4px solid #3b82f6; border-radius: 4px;">
                    <strong>Nachricht/Motivation:</strong><br/>
                    <p style="margin: 10px 0; white-space: pre-wrap;">${escape(validatedData.message)}</p>
                  </div>
                  
                  ${files && files.length > 0 ? `
                    <div style="margin-top: 20px;">
                      <strong>Anhänge:</strong>
                      <ul style="margin: 10px 0;">
                        ${files.map(f => `<li>${escape(f.originalname)} (${(f.size / 1024).toFixed(2)} KB)</li>`).join('')}
                      </ul>
                    </div>
                  ` : '<p style="margin-top: 20px;"><em>Keine Anhänge</em></p>'}
                </div>
                
                <p style="color: #6b7280; font-size: 12px; margin-top: 30px;">
                  Gesendet am: ${escape(new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" }))}
                </p>
              </div>
            `,
            attachments: attachments,
          });

          console.log("Application email sent successfully via Resend");
        } catch (emailError) {
          console.error("Failed to send application email via Resend:", emailError);
          // Don't fail the request if email fails, just log it
        }
      } else {
        console.warn("RESEND_API_KEY not configured - email not sent");
      }

      res.json({
        success: true,
        message: "Application submitted successfully",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          error: "Invalid form data",
          details: error.errors,
        });
      } else if (error instanceof multer.MulterError) {
        res.status(400).json({
          success: false,
          error: error.message,
        });
      } else {
        console.error("Application form error:", error);
        res.status(500).json({
          success: false,
          error: "Failed to submit application",
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
