# Website Rebuild Guide - onepage.me → React/TypeScript

## 📋 Empfohlene Vorgehensweise

### 1. **Screenshots + Strukturierte Beschreibungen** (BESTE METHODE)

Für jede Sektion der Website:

#### Pro Sektion dokumentieren:

**A) Screenshot**
- Vollständiger Screenshot der Sektion
- Optional: Screenshot mit Developer Tools (F12) geöffnet für CSS-Details

**B) Strukturierte Beschreibung**

```markdown
## [Sektionsname, z.B. "Hero Section"]

### Layout
- [ ] Grid/Spalten: 2 Spalten, 50/50
- [ ] Responsive Breakpoints: Mobile Stack, Desktop Side-by-Side
- [ ] Container: max-width 1200px, zentriert

### Inhalte
- **Überschrift (H1)**: "Deine Überschrift hier"
- **Unterüberschrift**: "Deine Unterüberschrift"
- **CTA Button Text**: "Jetzt starten"
- **CTA Link**: "/kontakt"

### Design
- **Hintergrundfarbe**: #1a1a1a (oder Gradient: von #1a1a1a zu #2d2d2d)
- **Textfarbe**: #ffffff
- **Button Hintergrund**: #00ff88
- **Button Text**: #000000
- **Schriftarten**: 
  - Überschrift: Inter, Bold, 48px
  - Text: Inter, Regular, 18px

### Spacing
- **Padding Section**: 80px top/bottom
- **Padding Container**: 40px left/right
- **Gap zwischen Elementen**: 24px

### Animationen/Interaktionen
- Button Hover: Hintergrund wird heller (#00ffaa)
- Scroll Animation: Fade-in von unten
```

---

## 📸 Screenshot-Anleitung

### Was zu screenshoten:
1. **Jede Sektion einzeln** (Hero, Features, Testimonials, etc.)
2. **Mobile Ansicht** (Chrome DevTools: Responsive Mode)
3. **Desktop Ansicht** (1920px Breite)
4. **Interaktive Elemente** (Hover-States, Dropdowns)

### Screenshot-Tools:
- **Windows**: Snipping Tool oder Win + Shift + S
- **Browser**: Full Page Screenshot Extension
- **Developer Tools**: F12 → Screenshot Button

---

## 🔍 Developer Tools nutzen

### CSS-Informationen extrahieren:

1. **F12 drücken** auf der onepage.me Website
2. **Element auswählen** mit dem Inspector-Tool
3. **Rechtsklick → "Copy" → "Copy styles"** für vollständiges CSS
4. **Computed Tab** für finale Werte (nach allen CSS-Regeln)

### Farben extrahieren:
- Element auswählen → Styles Tab → Farbe anklicken → Hex-Code kopieren

### Fonts identifizieren:
- Computed Tab → font-family Wert

---

## 📝 Vorlage für jede Sektion

```markdown
## [Sektionsname]

### Screenshots
- [ ] Desktop Screenshot
- [ ] Mobile Screenshot
- [ ] Hover States (falls vorhanden)

### Layout-Struktur
```
[ASCII-Diagram oder Beschreibung]
┌─────────────────────────────────┐
│         Container               │
│  ┌──────────┐  ┌──────────┐   │
│  │  Col 1   │  │  Col 2   │   │
│  └──────────┘  └──────────┘   │
└─────────────────────────────────┘
```

### Inhalte (exakte Texte)
- Überschrift: 
- Text: 
- Button: 
- Link: 

### Design-Tokens
- Background: 
- Text Color: 
- Primary Color: 
- Secondary Color: 
- Border Radius: 
- Shadows: 

### Responsive Verhalten
- Mobile (< 768px): 
- Tablet (768px - 1024px): 
- Desktop (> 1024px): 

### Interaktionen
- Hover Effects: 
- Click Actions: 
- Animations: 
```

---

## 🎯 Priorisierung

### Phase 1: Struktur (Wichtigste Sektionen)
1. Navigation/Header
2. Hero Section
3. Haupt-Features
4. CTA Section
5. Footer

### Phase 2: Content
6. Alle anderen Sektionen
7. Interaktive Elemente
8. Animationen

---

## 💡 Tipps

1. **Farbpalette sammeln**: Erstelle eine Liste aller verwendeten Farben
2. **Schriftarten notieren**: Alle verwendeten Fonts dokumentieren
3. **Spacing-System**: Erkenne das Spacing-System (4px, 8px, 16px, etc.)
4. **Breakpoints**: Notiere alle Responsive-Breakpoints
5. **Assets**: Alle Bilder/Icons herunterladen oder Links notieren

---

## 📦 Was ich brauche, um loszulegen

1. **Screenshots** aller Sektionen (Desktop + Mobile)
2. **Strukturierte Beschreibungen** (kann ich auch aus Screenshots erstellen)
3. **Zugriff auf onepage.me** (falls möglich, für Live-Inspektion)
4. **Priorität**: Welche Sektionen zuerst?

---

## ✅ Checkliste vor Start

- [ ] Alle Screenshots gesammelt
- [ ] Farbpalette dokumentiert
- [ ] Schriftarten identifiziert
- [ ] Layout-Struktur verstanden
- [ ] Responsive Verhalten getestet
- [ ] Alle Texte kopiert
- [ ] Assets (Bilder/Icons) verfügbar
