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
- In-Memory Storage (optional: PostgreSQL)
- Responsive Design
- SEO-optimiert

### Support

Bei Fragen oder Problemen erstellen Sie bitte ein Issue im Repository.