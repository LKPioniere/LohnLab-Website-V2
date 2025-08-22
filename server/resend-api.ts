import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  userType: string;
  message: string;
}

function createEmailHtml(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Neue Kontaktanfrage - ${data.name}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td bgcolor="#2037B9" align="center" style="padding: 30px; border-radius: 8px 8px 0 0;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
                Neue Kontaktanfrage
              </h1>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 20px;">
                Kontaktdaten
              </h2>
              <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
                <tr>
                  <td style="background-color: #f9fafb; padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; width: 30%;">
                    Name:
                  </td>
                  <td style="background-color: #ffffff; padding: 12px; border: 1px solid #e5e7eb;">
                    ${data.name}
                  </td>
                </tr>
                <tr>
                  <td style="background-color: #f9fafb; padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">
                    E-Mail:
                  </td>
                  <td style="background-color: #ffffff; padding: 12px; border: 1px solid #e5e7eb;">
                    <a href="mailto:${data.email}" style="color: #2037B9; text-decoration: none;">
                      ${data.email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="background-color: #f9fafb; padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">
                    Nutzertyp:
                  </td>
                  <td style="background-color: #ffffff; padding: 12px; border: 1px solid #e5e7eb;">
                    ${data.userType}
                  </td>
                </tr>
              </table>
              
              <h2 style="color: #1f2937; margin: 30px 0 20px 0; font-size: 20px;">
                Nachricht
              </h2>
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; border-left: 4px solid #2037B9;">
                <p style="margin: 0; line-height: 1.6; color: #374151; white-space: pre-wrap;">
${data.message}
                </p>
              </div>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td bgcolor="#f9fafb" style="padding: 20px; border-radius: 0 0 8px 8px; text-align: center;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                Diese Nachricht wurde über das LohnLab Website Kontaktformular gesendet.
              </p>
              <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 12px;">
                LohnLab GmbH • Hauptstraße 20 • 63755 Alzenau
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Validierung der Resend-Konfiguration
    if (!process.env.RESEND_API_KEY) {
      console.error("Resend is not configured");
      return { success: false, error: "Resend is not configured" };
    }

    const emailHtml = createEmailHtml(data);

    // E-Mail mit Resend versenden
    const { data: result, error } = await resend.emails.send({
      from: "LohnLab Website <cockpit@lohnlab.de>",
      to: ["development@lohnlab.de"],
      subject: `Neue Kontaktanfrage von ${data.name}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Error sending email:", error);
      return { success: false, error: `Failed to send email: ${error.message || error}` };
    }

    return { success: true, data: result };
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error);
    if (error instanceof Error) {
      return { success: false, error: `Failed to send email: ${error.message}` };
    }
    return { success: false, error: 'Unknown error occurred' };
  }
}
