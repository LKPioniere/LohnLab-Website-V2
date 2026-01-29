# E-Mail Setup für Kontakt- und Bewerbungsformulare

## Lokales Testen (localhost)

Um die E-Mail-Funktionalität auf localhost zu testen, benötigst du einen **Resend API Key**.

### Schritt 1: Resend Account erstellen

1. Gehe zu [https://resend.com](https://resend.com)
2. Erstelle einen kostenlosen Account
3. Verifiziere deine E-Mail-Adresse

### Schritt 2: API Key generieren

1. Gehe zu [https://resend.com/api-keys](https://resend.com/api-keys)
2. Klicke auf "Create API Key"
3. Gib einen Namen ein (z.B. "LohnLab Development")
4. Kopiere den generierten Key (beginnt mit `re_`)

### Schritt 3: .env Datei erstellen

1. Erstelle eine `.env` Datei im Root-Verzeichnis des Projekts
2. Füge folgende Zeilen ein:

```env
RESEND_API_KEY=re_dein_api_key_hier
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=deine@email.de
```

**Wichtig:**
- `RESEND_FROM_EMAIL`: Im kostenlosen Plan musst du `onboarding@resend.dev` verwenden
- `RESEND_TO_EMAIL`: Die E-Mail-Adresse, an die Bewerbungen/Kontaktanfragen gesendet werden sollen

### Schritt 4: Server neu starten

```bash
npm run dev
```

## Produktions-Setup (Vercel)

### Domain verifizieren (für echte E-Mails)

1. Gehe zu [https://resend.com/domains](https://resend.com/domains)
2. Füge deine Domain hinzu (z.B. `lohnlab.de`)
3. Füge die DNS-Records zu deinem DNS-Provider hinzu
4. Warte auf Verifizierung (kann 24-48h dauern)
5. Nach Verifizierung kannst du E-Mails von `bewerbung@lohnlab.de` oder ähnlich senden

### Umgebungsvariablen in Vercel setzen

1. Gehe zu deinem Vercel-Projekt
2. Settings → Environment Variables
3. Füge hinzu:
   - `RESEND_API_KEY`: Dein Production API Key
   - `RESEND_FROM_EMAIL`: `bewerbung@lohnlab.de` (nach Domain-Verifizierung)
   - `RESEND_TO_EMAIL`: `service@lohnlab.de`

## Wie es funktioniert

### Kontaktformular (`/api/contacts`)
- Sendet E-Mails an `RESEND_TO_EMAIL`
- Verwendet `RESEND_FROM_EMAIL` als Absender
- `replyTo` wird auf die E-Mail des Absenders gesetzt

### Bewerbungsformular (`/api/applications`)
- Sendet E-Mails an `service@lohnlab.de` (hardcoded)
- Unterstützt Datei-Anhänge (max. 2 Dateien, je 5 MB)
- Akzeptierte Formate: PDF, DOC, DOCX
- `replyTo` wird auf die E-Mail des Bewerbers gesetzt

## Testen ohne Resend

Falls du **keinen Resend API Key** hast:
- Die Formulare funktionieren trotzdem
- Daten werden in der Konsole geloggt
- Es wird eine Warnung angezeigt: "RESEND_API_KEY not configured - email not sent"
- Der Request wird erfolgreich zurückgegeben (Status 200)

## Troubleshooting

### "RESEND_API_KEY not configured"
- Stelle sicher, dass die `.env` Datei im Root-Verzeichnis liegt
- Überprüfe, ob der Key korrekt eingetragen ist
- Starte den Server neu (`npm run dev`)

### E-Mails kommen nicht an
- Überprüfe in Resend Dashboard unter "Logs" ob E-Mails gesendet wurden
- Im kostenlosen Plan: Verwende `onboarding@resend.dev` als FROM-Adresse
- Überprüfe Spam-Ordner

### Datei-Upload funktioniert nicht
- Maximale Dateigröße: 5 MB pro Datei
- Maximal 2 Dateien
- Nur PDF, DOC, DOCX erlaubt
- Browser-Konsole auf Fehler prüfen

## Kosten

**Resend Preise:**
- Kostenlos: 100 E-Mails/Tag, 3.000 E-Mails/Monat
- Pro ($20/Monat): 50.000 E-Mails/Monat
- Weitere Infos: [https://resend.com/pricing](https://resend.com/pricing)
