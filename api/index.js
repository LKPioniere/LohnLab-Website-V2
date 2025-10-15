// Vercel serverless function for contact form
import { Resend } from "resend";

// Simple HTML escaper for security
function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// User type labels for better email formatting
const userTypeLabels = {
  steuerberater: "Steuerberater",
  unternehmen: "Unternehmen",
  interessent: "Interessent",
  sonstiges: "Sonstiges",
};

// Simple validation
function validateContactForm(data) {
  if (
    !data.name ||
    typeof data.name !== "string" ||
    data.name.trim().length === 0
  ) {
    return { valid: false, error: "Name ist erforderlich" };
  }
  if (
    !data.email ||
    typeof data.email !== "string" ||
    !data.email.includes("@")
  ) {
    return { valid: false, error: "Gültige E-Mail-Adresse ist erforderlich" };
  }
  if (!data.userType || typeof data.userType !== "string") {
    return { valid: false, error: "Benutzertyp ist erforderlich" };
  }
  return { valid: true };
}

// Rate limiting storage (in-memory for this deployment)
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5;

function checkRateLimit(identifier) {
  const now = Date.now();
  const userRequests = rateLimitStore.get(identifier) || [];

  // Remove old requests
  const recentRequests = userRequests.filter(
    (time) => now - time < RATE_LIMIT_WINDOW
  );

  if (recentRequests.length >= RATE_LIMIT_MAX) {
    return false;
  }

  recentRequests.push(now);
  rateLimitStore.set(identifier, recentRequests);

  // Cleanup old entries periodically
  if (Math.random() < 0.1) {
    for (const [key, times] of rateLimitStore.entries()) {
      const recent = times.filter((time) => now - time < RATE_LIMIT_WINDOW);
      if (recent.length === 0) {
        rateLimitStore.delete(key);
      } else {
        rateLimitStore.set(key, recent);
      }
    }
  }

  return true;
}

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle OPTIONS preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only allow POST to /api/contacts
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  // Route handling
  const path = req.url || "";
  if (!path.includes("/contacts")) {
    return res.status(404).json({
      success: false,
      error: "Not found",
    });
  }

  try {
    // Rate limiting based on IP or a header
    const identifier =
      req.headers["x-forwarded-for"] || req.headers["x-real-ip"] || "unknown";
    if (!checkRateLimit(identifier)) {
      return res.status(429).json({
        success: false,
        error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut.",
      });
    }

    // Validate request body
    const validation = validateContactForm(req.body);
    if (!validation.valid) {
      return res.status(400).json({
        success: false,
        error: validation.error,
      });
    }

    const { name, email, userType, message } = req.body;

    // Log the contact form submission (DSGVO-compliant)
    console.log("Contact form submission:", {
      name,
      userType,
      hasMessage: !!message,
      timestamp: new Date().toISOString(),
    });

    // Send email via Resend if API key is configured
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const userTypeLabel = userTypeLabels[userType] || userType;

        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
          to: process.env.RESEND_TO_EMAIL || "info@lohnlab.de",
          replyTo: email,
          subject: `Neue Kontaktanfrage von ${escapeHtml(
            name
          )} (${userTypeLabel})`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1e3a8a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
                Neue Kontaktanfrage über LohnLab Website
              </h2>
              
              <div style="margin: 20px 0; padding: 20px; background-color: #f3f4f6; border-radius: 8px;">
                <p style="margin: 10px 0;"><strong>Name:</strong> ${escapeHtml(
                  name
                )}</p>
                <p style="margin: 10px 0;"><strong>E-Mail:</strong> <a href="mailto:${escapeHtml(
                  email
                )}">${escapeHtml(email)}</a></p>
                <p style="margin: 10px 0;"><strong>Typ:</strong> ${escapeHtml(
                  userTypeLabel
                )}</p>
                ${
                  message
                    ? `
                  <div style="margin-top: 20px; padding: 15px; background-color: white; border-left: 4px solid #3b82f6; border-radius: 4px;">
                    <strong>Nachricht:</strong><br/>
                    <p style="margin: 10px 0; white-space: pre-wrap;">${escapeHtml(
                      message
                    )}</p>
                  </div>
                `
                    : '<p style="margin: 10px 0;"><em>Keine Nachricht angegeben</em></p>'
                }
              </div>
              
              <p style="color: #6b7280; font-size: 12px; margin-top: 30px;">
                Gesendet am: ${escapeHtml(
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
        // Continue even if email fails
      }
    } else {
      console.warn("RESEND_API_KEY not configured - email not sent");
    }

    return res.status(200).json({
      success: true,
      message: "Contact form received",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      success: false,
      error: "Failed to submit contact form",
    });
  }
}
