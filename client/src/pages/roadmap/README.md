# Roadmap Seite - Dokumentation

Diese Dokumentation erklärt, wie die Roadmap-Seite funktioniert und wie sie einfach gewartet und erweitert werden kann.

## 📋 Überblick

Die Roadmap-Seite ist ein modulares System, das es ermöglicht, den Entwicklungsfortschritt des LohnLab Cockpits transparent darzustellen. Das System ist vollständig über Konfigurationsdateien steuerbar.

## 🗂️ Dateistruktur

```
client/src/
├── constants/
│   └── roadmap-features.ts     # Haupt-Konfigurationsdatei
├── components/roadmap/
│   ├── FeatureCard.tsx         # Einzelne Feature-Darstellung
│   ├── FunctionGroupCard.tsx   # Funktionsgruppen-Container
│   └── TypeformPlaceholder.tsx # Umfrage-Platzhalter
└── pages/
    └── roadmap.tsx             # Hauptseite
```

## ⚙️ Konfiguration

### Feature Status

In `constants/roadmap-features.ts` sind folgende Status verfügbar:

| Status | Label | Farbe | Icon | Beschreibung |
|--------|--------|-------|------|--------------|
| `completed` | Abgeschlossen | Grün | Check | Feature ist vollständig implementiert |
| `in-progress` | In Arbeit | Blau | Clock | Feature wird aktuell entwickelt |
| `planned` | Geplant | Orange | Calendar | Feature ist für die Entwicklung eingeplant |
| `concept` | Konzept | Lila | Lightbulb | Feature ist in der Konzeptphase |
| `backlog` | Backlog | Grau | Archive | Feature ist für später vorgemerkt |

### Prioritäten

- `high` → "Hoch" (Rotes Badge)
- `medium` → "Mittel" (Gelbes Badge)  
- `low` → "Niedrig" (Graues Badge)

### Kategorien

- `lohnerhöhung` - Lohnerhöhungs-Features
- `neueinstellungen` - Neueinstellungs-Features
- `reporting` - Reporting & Analytics
- `integration` - System-Integrationen
- `ui-ux` - Benutzeroberfläche
- `api` - API-Features
- `mobile` - Mobile Features
- `automation` - Automatisierung

### Funktionsgruppen Status

- `active` → "Aktiv" (Grün) - Feature ist produktiv verfügbar
- `beta` → "Beta" (Blau) - Feature ist in der Beta-Phase
- `planned` → "Geplant" (Orange) - Feature ist geplant

### Farbschemas für Funktionsgruppen

- `blue` → Blau-Gradient (Primärfarbe)
- `teal` → Teal-Gradient (Sekundärfarbe)
- `purple` → Lila-Gradient (Akzentfarbe)
- `green` → Grün-Gradient (Erfolgsfarbe)

## 🔧 Neue Features hinzufügen

### 1. Einzelnes Feature hinzufügen

Öffne `constants/roadmap-features.ts` und füge ein neues Feature zu einer bestehenden Funktionsgruppe hinzu:

```typescript
{
  id: 'eindeutige-id',
  title: 'Feature Titel',
  description: 'Detaillierte Beschreibung des Features',
  status: 'planned', // siehe Status-Tabelle oben
  category: 'lohnerhöhung', // siehe Kategorien oben
  priority: 'high', // high | medium | low
  releaseQuarter: 'Q2 2025' // Optional
}
```

### 2. Neue Funktionsgruppe hinzufügen

Füge eine neue Funktionsgruppe zum `ROADMAP_DATA` Array hinzu:

```typescript
{
  id: 'neue-funktionsgruppe',
  title: 'Titel der Funktionsgruppe',
  description: 'Beschreibung was diese Funktionsgruppe macht',
  icon: 'Settings', // Lucide Icon Name
  color: 'blue', // blue | teal | purple | green
  status: 'planned', // active | beta | planned
  completionPercentage: 0, // Wird automatisch berechnet
  features: [
    // Array von Features (siehe oben)
  ]
}
```

### 3. Status eines Features ändern

Einfach den `status` Wert in der Feature-Definition ändern:

```typescript
{
  id: 'existing-feature',
  // ... andere Eigenschaften
  status: 'completed' // von 'in-progress' zu 'completed'
}
```

## 🎨 Icons verfügbar

Die folgenden Lucide Icons können verwendet werden:

**Funktionsgruppen:**
- `TrendingUp` - Lohnerhöhung
- `UserPlus` - Neueinstellungen  
- `BarChart3` - Reporting/Analytics
- `Database` - Integrationen
- `Settings` - Konfiguration
- `Smartphone` - Mobile
- `Zap` - Automatisierung
- `Shield` - Sicherheit

**Feature Status:**
- `Check` - Abgeschlossen
- `Clock` - In Arbeit
- `Calendar` - Geplant
- `Lightbulb` - Konzept
- `Archive` - Backlog

## 📊 Automatische Berechnungen

Das System berechnet automatisch:

- **Gesamtfortschritt**: Prozentsatz aller abgeschlossenen Features
- **Features pro Status**: Anzahl Features in jedem Status
- **Funktionsgruppen-Fortschritt**: Wird aus abgeschlossenen Features berechnet

## 🔄 Typeform Integration

Der Typeform-Platzhalter befindet sich in `components/roadmap/TypeformPlaceholder.tsx`.

Um eine echte Umfrage zu integrieren:

1. Öffne `TypeformPlaceholder.tsx`
2. Ersetze den Platzhalter-Div mit dem Typeform Embed-Code:

```tsx
{/* Ersetze diesen Bereich: */}
<div className="bg-white rounded-lg p-8 border-2 border-dashed border-blue-300 text-center">
  {/* Typeform Embed hier einfügen */}
</div>
```

## 🎯 Wartung & Best Practices

### Regelmäßige Updates

1. **Status aktualisieren**: Features von `planned` → `in-progress` → `completed`
2. **Neue Features hinzufügen**: Basierend auf Entwicklungsplanung
3. **Release Quarter anpassen**: Bei Verschiebungen

### Datenqualität

- **Eindeutige IDs**: Jedes Feature braucht eine einzigartige ID
- **Klare Beschreibungen**: Verständliche Feature-Beschreibungen
- **Korrekte Kategorien**: Features den richtigen Kategorien zuordnen
- **Realistische Quartale**: Release-Termine realistisch setzen

### Performance

- Das System ist für bis zu 100+ Features optimiert
- Neue Funktionsgruppen sollten maximal 20 Features haben
- Bei mehr Features "Mehr anzeigen" Button verwenden

## 🚀 Deployment

Nach Änderungen an den Roadmap-Daten:

1. Änderungen in `roadmap-features.ts` speichern
2. Linter prüfen: `npm run check`
3. Lokal testen: `npm run dev`
4. Änderungen committen und deployen

## 📱 Responsive Design

Das System ist vollständig responsive:
- **Desktop**: Grid-Layout mit 2 Spalten
- **Tablet**: Grid-Layout mit 1-2 Spalten
- **Mobile**: Einzelne Spalte mit angepassten Karten

## 🔧 Entwickler-Tipps

### Neue Status hinzufügen

1. Erweitere den `FeatureStatus` Type
2. Füge Konfiguration zu `STATUS_CONFIG` hinzu
3. Importiere das passende Icon in `FeatureCard.tsx`

### Neue Icons hinzufügen

1. Importiere das Icon in der jeweiligen Komponente
2. Füge es zur `ICON_MAP` hinzu
3. Verwende den Icon-Namen als String in der Konfiguration

### Custom Styling

Alle Komponenten verwenden Tailwind CSS und können über die bestehenden Klassen angepasst werden.

## 📞 Support

Bei Fragen zur Roadmap-Implementierung:
- Dokumentation konsultieren
- Code-Kommentare in den Komponenten lesen
- TypeScript-Typen für Hilfe bei der Konfiguration nutzen
