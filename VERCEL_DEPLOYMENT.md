# Vercel Deployment Guide

## ✅ Ready for Deployment!

Your LohnLab website is now ready for Vercel deployment. All unnecessary database and RAG dependencies have been removed.

## Changes Made

### 1. Removed Unused Dependencies

- ❌ Database: `@neondatabase/serverless`, `drizzle-orm`, `drizzle-zod`
- ❌ AI/RAG: `@anthropic-ai/sdk`, `@huggingface/inference`, `vectorstore`
- ❌ Session/Auth: `express-session`, `passport`, `passport-local`, `connect-pg-simple`, `memorystore`
- ❌ WebSocket: `ws`, `bufferutil`
- ❌ Dev tools: `drizzle-kit`

### 2. Deleted Unused Files

- `server/db.ts` (database connection)
- `server/storage.ts` (in-memory storage)
- `server/rag.ts` (RAG/embedding service)
- `shared/schema.ts` (database schema)
- `drizzle.config.ts` (Drizzle ORM config)
- `client/src/components/common/FloatingChatbot.tsx` (chatbot component)

### 3. Simplified Backend

- `server/routes.ts` now only contains a simple contact form endpoint
- No database dependencies
- Contact form submissions are logged to console (ready for email service integration)

### 4. Updated Frontend

- Contact form types moved to `client/src/types/contact.ts`
- Removed chatbot from the Neueinstellungen page
- All imports updated to use local types

## Build Status

✅ TypeScript check: **PASSED**  
✅ Production build: **PASSED**  
✅ Output size: 612.91 kB (gzipped: 179.34 kB)

## Deployment Instructions

### 1. Push to GitHub

```bash
git add .
git commit -m "Remove database and RAG dependencies, prepare for Vercel deployment"
git push origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect your configuration from `vercel.json`
5. Click "Deploy"

### 3. Environment Variables (Optional)

Currently, no environment variables are required. The contact form will log submissions to the Vercel function logs.

## Next Steps (Optional)

### Add Email Service for Contact Form

To actually send emails from the contact form, you can integrate an email service:

1. **Resend** (Recommended for simplicity)
   ```bash
   npm install resend
   ```
2. **SendGrid**

   ```bash
   npm install @sendgrid/mail
   ```

3. **Mailgun**
   ```bash
   npm install mailgun.js
   ```

Then update `server/routes.ts` to send emails instead of just logging.

### Example with Resend:

```typescript
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/contacts", async (req, res) => {
  try {
    const validatedData = contactSchema.parse(req.body);

    await resend.emails.send({
      from: "noreply@lohnlab.de",
      to: "info@lohnlab.de",
      subject: `Neue Kontaktanfrage von ${validatedData.name}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Typ:</strong> ${validatedData.userType}</p>
        <p><strong>Nachricht:</strong> ${
          validatedData.message || "Keine Nachricht"
        }</p>
      `,
    });

    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    // handle error
  }
});
```

## File Structure

```
├── api/
│   └── index.js          # Vercel serverless function handler
├── client/
│   └── src/              # React frontend
├── server/
│   ├── index.ts          # Express server setup
│   ├── routes.ts         # API routes (contact form)
│   └── vite.ts           # Vite dev server integration
├── dist/                 # Build output
│   ├── public/           # Static files for Vercel
│   └── index.js          # Compiled server code
├── vercel.json           # Vercel configuration
└── package.json
```

## Configuration Files

### vercel.json

Your existing configuration is already set up correctly:

- Build command: `npm run build`
- Output directory: `dist/public`
- API routes: Handled by `api/index.js`
- Runtime: Node.js 20.x

## Support

For any issues or questions, refer to:

- [Vercel Documentation](https://vercel.com/docs)
- [Express on Vercel](https://vercel.com/guides/using-express-with-vercel)
