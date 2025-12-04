// Roadmap Feature Status Types
export type FeatureStatus = 'completed' | 'in-progress' | 'planned' | 'concept' | 'backlog';

// Feature Categories
export type FeatureCategory = 'lohnerhöhung' | 'neueinstellungen' | 'reporting' | 'integration' | 'ui-ux' | 'api' | 'mobile' | 'automation';

// Single Feature Interface
export interface Feature {
  id: string;
  title: string;
  description: string;
  status: FeatureStatus;
  releaseQuarter?: string; // e.g., "Q1 2025"
  icon?: string; // Lucide icon name
}

// Function Group Interface
export interface FunctionGroup {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  color: string; // CSS color class
  completionPercentage: number;
  features: Feature[];
}

// Status Configuration
export const STATUS_CONFIG = {
  completed: {
    label: 'Abgeschlossen',
    color: 'bg-green-100 text-green-800',
    icon: 'Check'
  },
  'in-progress': {
    label: 'In Arbeit',
    color: 'bg-blue-100 text-blue-800',
    icon: 'Clock'
  },
  planned: {
    label: 'Geplant',
    color: 'bg-orange-100 text-orange-800',
    icon: 'Calendar'
  },
  concept: {
    label: 'Konzept',
    color: 'bg-purple-100 text-purple-800',
    icon: 'Lightbulb'
  },
  backlog: {
    label: 'Backlog',
    color: 'bg-gray-100 text-gray-800',
    icon: 'Archive'
  }
} as const;

// Current Roadmap Data - Easy to maintain and extend
export const ROADMAP_DATA: FunctionGroup[] = [
  {
    id: 'lohnerhöhung',
    title: 'Lohnerhöhung',
    description: 'Mit dieser Funktion kann effizient der Lohn für einen oder mehrere Mitarbeiter erhöht werden.',
    icon: 'TrendingUp',
    color: 'blue',
    completionPercentage: 85,
    features: [
      {
        id: 'le-flexible-eingabe',
        title: 'Flexible Eingabemöglichkeiten',
        description: 'Wähle, wie du Lohnerhöhungen definieren möchtest: als Netto-Betrag, Brutto-Betrag oder Arbeitgeberkosten. Verwende einen gemeinsamen Prozentsatz für alle oder individuelle Werte pro Mitarbeiter.',
        status: 'completed',
        releaseQuarter: 'Q2 2025'
      },
      {
        id: 'le-batch-verarbeitung',
        title: 'Massenverarbeitung von Mitarbeitern',
        description: 'Bearbeite hunderte von Mitarbeitern gleichzeitig in einem einzigen Berechnungslauf - perfekt für unternehmensweite Lohnrunden oder größere Anpassungen.',
        status: 'completed',
        releaseQuarter: 'Q2 2025'
      },
      {
        id: 'le-lohnabrechner-uebergabe',
        title: 'Übergabe an Lohnabrechner',
        description: 'Nahtlose Übertragung der berechneten Lohnerhöhung an die Lohnabrechnung zur direkten Verarbeitung.',
        status: 'planned',

        releaseQuarter: 'Q4 2025'
      },
      {
        id: 'le-mitarbeiter-details',
        title: 'Mitarbeiter-Details Anzeige',
        description: 'Detaillierte Anzeige pro Mitarbeiter mit Lohnsteuerbezug und weiteren relevanten Informationen.',
        status: 'planned',

        releaseQuarter: 'Q4 2025'
      },
      {
        id: 'le-ergebnismaske-redesign',
        title: 'Ergebnismaske Neugestaltung',
        description: 'Komplette Überarbeitung und Neugestaltung der Ergebnisdarstellung für bessere Benutzerfreundlichkeit.',
        status: 'planned',

        releaseQuarter: 'Q4 2025'
      }
    ]
  },
  {
    id: 'neueinstellungen',
    title: 'Neueinstellung',
    description: 'Im Handumdrehen mit einem Bewerber auf eine Vergütung einigen und alle Daten in den Lohn übernehmen.',
    icon: 'UserPlus',
    color: 'teal',
    completionPercentage: 75,
    features: [
      {
                  id: 'ne-csv-export',
          title: 'Vereinfachter Export als CSV',
          description: 'Einfacher Export der Vergütungsdaten zur direkten Weiterleitung an Ihren Steuerberater oder Lohnbuchhalter.',
        status: 'completed',

        releaseQuarter: 'Q3 2025'
      },
      {
                  id: 'ne-stammdatenaufnahme',
          title: 'Vollständige Stammdatenerfassung',
          description: 'Erfassung aller wichtigen Mitarbeiterdaten mit automatischer Übertragung in die Lohnabrechnung für einen nahtlosen Onboarding-Prozess.',
        status: 'planned',

        releaseQuarter: 'Q4 2025'
      },
      {
                  id: 'ne-optimierung-abstufung',
          title: 'Erweiterte Optimierungsoptionen',
          description: 'Flexible Anpassung der Vergütungsoptimierung mit individuellen Zielvorgaben und intelligenten Vorschlägen für die optimale Verwendung von Ersparnissen.',
        status: 'backlog',

        releaseQuarter: 'Q1 2026'
      }
    ]
  },
  {
    id: 'mitarbeiter-kommunikation',
    title: 'Mitarbeiter Kommunikation',
    description: 'Professionelle Kommunikationstools für die transparente Übermittlung von Lohninformationen an Mitarbeiter.',
    icon: 'MessageSquare',
    color: 'green',
    completionPercentage: 0,
    features: [
      {
        id: 'probelohnabrechnung-datev',
        title: 'Probelohnabrechnung im DATEV Layout',
        description: 'Erstellung von professionellen Probelohnabrechnungen im vertrauten DATEV-Design für bessere Mitarbeiterkommunikation.',
        status: 'planned',

        releaseQuarter: 'Q4 2025'
      },
      {
        id: 'probelohnabrechnung-andere',
        title: 'Probelohnabrechnung in weiteren gängigen Formaten',
        description: 'Erstellung von professionellen Probelohnabrechnungen in weiteren gängigen Formaten.',
        status: 'backlog',

        releaseQuarter: '/'
      }
    ]
  },
  {
    id: 'rollen-rechteverwaltung',
    title: 'Rollen und Rechteverwaltung',
    description: 'Umfassende Verwaltung von Benutzerrollen und Zugriffsrechten für verschiedene Nutzergruppen.',
    icon: 'Shield',
    color: 'purple',
    completionPercentage: 0,
    features: [
      {
        id: 'rr-lohnbausteine-einschraenkung',
        title: 'Lohnbausteine Einschränkung für Steuerberater',
        description: 'Steuerberater können die für ihre Mandanten zulässigen Lohnbausteine individuell definieren und einschränken.',
        status: 'planned',

        releaseQuarter: 'Q1 2025'
      },
      {
        id: 'rr-multi-client',
        title: 'Multi-Mandanten-Fähigkeit',
        description: 'User können zwischen ihnen freigeschalteten Mandanten wechseln ohne sich ein und wieder ausloggen zu müssen.',
        status: 'completed',

        releaseQuarter: 'Q2 2025'
      }
    ]
  },
      {
      id: 'lohn-sync',
      title: 'Lohnprohramm Synchronisation',
      description: 'Alle Mitarbeiterdaten immer aktuell im Cockpit synchron zum Lohnprogramm. Ready to use.',
      icon: 'CheckCheck',
    color: 'purple',
    completionPercentage: 30,
    features: [
      {
        id: 'ascii-processing',
        title: 'DATEV: ASCII Datei Verarbeitung',
        description: 'Durch eine Vorlage generierte Datensätze können ins Cockpit übernommen werden.',
        status: 'completed',

        releaseQuarter: 'Q3 2025'
      },
      {
        id: 'rep-exports',
        title: 'DATEV:Online Schnittstelle',
        description: 'Laufende vollautomatische Synchronisation mit DATEV.',
        status: 'in-progress',

        releaseQuarter: 'Q4 2025'
      }
    ]
  },
  {
    id: 'lohnrechner-core',
    title: 'Vollständiger Lohnrechner',
    description: 'Ein professioneller Lohnrechner, der alle gesetzlichen Bestimmungen korrekt abbildet und stets aktuell gehalten wird.',
    icon: 'Calculator',
    color: 'emerald',
    completionPercentage: 100,
    features: [
      {
        id: 'lc-gesetzeskonforme-berechnung',
        title: 'Gesetzeskonforme Lohnberechnung',
        description: 'Ein vollständig funktionaler Lohnrechner, der alle aktuellen gesetzlichen Bestimmungen korrekt umsetzt und automatisch bei Gesetzesänderungen aktualisiert wird.',
        status: 'completed',
        releaseQuarter: 'Q1 2025'
      },
      {
        id: 'lc-minijobs-uebergangsbereich',
        title: 'Minijobs und Übergangsbereich',
        description: 'Präzise Berechnung von Minijobs (520€-Jobs) und dem Übergangsbereich (Midijobs) mit korrekter Anwendung aller Sozialversicherungsregelungen und Freibeträge.',
        status: 'completed',
        releaseQuarter: 'Q1 2025'
      }
    ]
  }
];

// Placeholder data for easy testing and extension
export const PLACEHOLDER_FEATURES: Feature[] = [
  {
    id: 'placeholder-1',
    title: 'Lorem ipsum feature',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    status: 'planned',
    releaseQuarter: 'Q3 2025'
  },
  {
    id: 'placeholder-2',
    title: 'Dolor sit amet',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    status: 'concept',

    releaseQuarter: 'Q4 2025'
  }
];
