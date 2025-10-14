# LohnLab Cockpit

Ein modernes Payroll-Optimierungs-Tool für Steuerberater und Unternehmen im deutschen Markt.

## Deployment auf Vercel

### Voraussetzungen

1. Ein Vercel-Account
2. Git Repository mit dem Projekt

### Deployment-Schritte

1. **Projekt auf Vercel importieren**

   - Gehen Sie zu [vercel.com](https://vercel.com)
   - Klicken Sie auf "New Project"
   - Importieren Sie Ihr Git Repository

2. **Konfiguration**

   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

3. **Umgebungsvariablen (Optional)**

   Falls Sie eine PostgreSQL-Datenbank verwenden möchten:

   ```
   DATABASE_URL=postgresql://user:password@host/database
   ```

   Das Projekt funktioniert auch ohne Datenbank mit In-Memory-Speicher.

4. **Deploy**
   - Klicken Sie auf "Deploy"
   - Vercel baut und deployed Ihr Projekt automatisch

### Lokale Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Projekt bauen
npm run build

# Produktionsserver starten
npm start
```

### Projektstruktur

```
├── client/          # Frontend React Application
├── server/          # Backend Express Server
├── shared/          # Gemeinsame Types und Schemas
├── api/             # Vercel Serverless Functions
├── dist/            # Build Output
└── vercel.json      # Vercel Konfiguration
```

### Features

- React 18 mit TypeScript
- Tailwind CSS für Styling
- Express.js Backend
- Responsive Design
- SEO-optimiert
- **Security Features:**
  - Rate Limiting auf API-Endpunkten
  - Security Headers (Helmet)
  - HTML-Escaping für User-Input
  - DSGVO-konformes Logging
  - Honeypot Spam-Protection
  - Email-Obfuscation

### Security

Siehe [SECURITY.md](./SECURITY.md) für Details zu den implementierten Sicherheitsmaßnahmen.

### Environment Setup

1. Kopiere `env.example` zu `.env`
2. Fülle die erforderlichen Umgebungsvariablen aus:
   ```
   RESEND_API_KEY=your_api_key
   RESEND_FROM_EMAIL=noreply@yourdomain.com
   RESEND_TO_EMAIL=info@lohnlab.de
   ```

### Support

Bei Fragen oder Problemen erstellen Sie bitte ein Issue im Repository.
