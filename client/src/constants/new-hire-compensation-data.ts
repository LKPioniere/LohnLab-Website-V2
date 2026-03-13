/**
 * New Hire Compensation API Page: Data constants
 */

import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Package,
  Target,
  TrendingUp,
  Users,
  Calculator,
  Database,
  Settings,
  Shield,
  Gift,
  Workflow,
  FileText,
  Code,
} from "lucide-react";

// --- API Examples ---

export const API_REQUEST_EXAMPLE = `{
  "amount": 5000,
  "mode": "brutto",
  "goal": "maxErsparnis",
  "context": {
    "lohnbausteineToUse": [
      {
        "bausteinname": "Internet",
        "lohnbausteinId": "86361d71-0249-4915-badc-d678838b7cac",
        "maxAmount": 50,
        "paymentModes": ["givve"]
      },
      {
        "bausteinname": "Sachbezug P8",
        "lohnbausteinId": "d062b9c6-7c28-400d-b532-6fd26c1b2df9",
        "maxAmount": 50,
        "paymentModes": ["givve"]
      },
      {
        "bausteinname": "Handy",
        "lohnbausteinId": "2c709c20-bb67-43a0-b089-999f53043cf9",
        "maxAmount": 20,
        "paymentModes": ["givve"]
      },
      {
        "bausteinname": "Fahrtkosten P15",
        "lohnbausteinId": "cef7a7e2-f107-4a25-bde7-f6a4561dd65f",
        "maxAmount": 40,
        "paymentModes": ["givve"]
      }
    ]
  }
}`;

export const API_RESPONSE_EXAMPLE = `{
  "calculationComplete": true,
  "normal": {
    "einstellungsgehalt": {
      "netto": 3054.75,
      "brutto": 5000,
      "lohnKosten": 6270.75
    }
  },
  "optimiert": {
    "einstellungsgehalt": {
      "netto": 3054.75,
      "brutto": 4663.21,
      "lohnKosten": 6038.10
    },
    "Lohnbausteine": [
      {
        "name": "Internet",
        "betrag": 50,
        "lohnNebenKosten": 13.81
      },
      {
        "name": "Sachbezug P8",
        "betrag": 50,
        "lohnNebenKosten": 0
      }
    ],
    "summeAllerLohnbausteine": 165,
    "Nebenkosten": {
      "summeAllerNebenkosten": 232.65
    }
  }
}`;

export const GET_OPTIONS_LIST_RESPONSE = `{
  "errorText": "",
  "lohnbausteine": [
    {
      "bausteinname": "Fahrtkosten",
      "lohnbausteinId": "cef7a7e2-f107-4a25-bde7-f6a4561dd65f",
      "paymentModes": ["givve", "cash"],
      "maxAmount": 230
    },
    {
      "bausteinname": "CleverLunch",
      "lohnbausteinId": "9e0dfb22-7d81-4c0d-9f0e-eb98aab05959",
      "paymentModes": ["givve"],
      "maxAmount": 108
    },
    {
      "bausteinname": "Handy",
      "lohnbausteinId": "2c709c20-bb67-43a0-b089-999f53043cf9",
      "paymentModes": ["givve", "cash", "non_cash"],
      "maxAmount": 50
    },
    {
      "bausteinname": "Job Ticket",
      "lohnbausteinId": "1301ec10-f9f6-4f88-9b97-6d7d4c840ad1",
      "paymentModes": ["givve", "non_cash"],
      "maxAmount": 230
    },
    {
      "bausteinname": "Internet",
      "lohnbausteinId": "86361d71-0249-4915-badc-d678838b7cac",
      "paymentModes": ["givve", "cash"],
      "maxAmount": 50
    },
    {
      "bausteinname": "Sachbezug P8",
      "lohnbausteinId": "d062b9c6-7c28-400d-b532-6fd26c1b2df9",
      "paymentModes": ["givve"],
      "maxAmount": 50
    }
  ]
}`;

export const GET_OPTIONS_LIST_ENDPOINT =
  "https://iszozxpglzuicbukmhah.supabase.co/functions/v1/getOptionsList";

// --- Optimization Modes ---

export type OptimizationMode = "maxErsparnis" | "maxNetto" | "freeCalc";

export interface OptimizationModeItem {
  id: OptimizationMode;
  title: string;
  description: string;
  highlight: string;
  icon: LucideIcon;
  iconBgClass: string;
  iconColorClass: string;
  highlightBgClass: string;
  highlightTextClass: string;
}

export function getOptimizationModes(gendered: boolean): OptimizationModeItem[] {
  return [
    {
      id: "maxErsparnis",
      title: "MaxErsparnis",
      description: `Viel Geld sparen: Maximiert Ihre Einsparungen bei gleichbleibendem Netto-Gehalt ${gendered ? "der*des Mitarbeiter*in" : "des Mitarbeiters"}`,
      highlight: `✓ Bis zu 232,65€ Ersparnis pro ${gendered ? "Mitarbeiter*in" : "Mitarbeiter"}`,
      icon: TrendingUp,
      iconBgClass: "bg-green-100",
      iconColorClass: "text-green-600",
      highlightBgClass: "bg-green-50",
      highlightTextClass: "text-green-700",
    },
    {
      id: "maxNetto",
      title: "MaxNetto",
      description:
        "Jede Fachkraft bekommen: Maximiert das Netto-Gehalt bei gleichbleibenden Arbeitgeberkosten",
      highlight: "✓ Mehr Gehalt zum gleichen Preis",
      icon: Users,
      iconBgClass: "bg-blue-100",
      iconColorClass: "text-blue-600",
      highlightBgClass: "bg-blue-50",
      highlightTextClass: "text-blue-700",
    },
    {
      id: "freeCalc",
      title: "FreeCalc",
      description:
        "Gehalt plus On-Top Benefits: Freie Berechnung mit individuellen Lohnbausteinen",
      highlight: "✓ Maximale Flexibilität",
      icon: Calculator,
      iconBgClass: "bg-purple-100",
      iconColorClass: "text-purple-600",
      highlightBgClass: "bg-purple-50",
      highlightTextClass: "text-purple-700",
    },
  ];
}

// --- Value Props (Cards) ---

export interface ValuePropItem {
  title: string;
  description: string;
  tip: string;
  icon: LucideIcon;
  iconGradientClass: string;
  tipBgClass: string;
}

export function getValueProps(gendered: boolean): ValuePropItem[] {
  return [
    {
      title: "Unglaubliche Flexibilität",
      description:
        "Berechnen Sie Gehälter basierend auf Netto, Brutto oder Budget. Definieren Sie eigene Parameter und nutzen Sie beliebige Lohnbausteine.",
      tip: "💡 Von einfachen Gehaltsberechnungen bis zu komplexen Szenarien mit 15+ Lohnbausteinen",
      icon: Sparkles,
      iconGradientClass: "from-lohn-primary to-lohn-secondary",
      tipBgClass: "bg-blue-50",
    },
    {
      title: "Intelligente Templates",
      description:
        "Erstellen Sie vorkonfigurierte Szenarien für verschiedene Abteilungen oder Positionen. Einmal definiert, immer wieder nutzen.",
      tip: "⚡ Außendienst = Dienstwagen, Homeoffice = Jobticket + Home-Office-Pauschale",
      icon: Package,
      iconGradientClass: "from-lohn-teal to-green-600",
      tipBgClass: "bg-green-50",
    },
    {
      title: "Automatische Optimierung",
      description:
        "Die API findet automatisch die beste Kombination aus Lohnbausteinen für Ihre Ziele - mehr Netto oder weniger Kosten.",
      tip: `🎯 Bis zu 232,65€ Ersparnis pro ${gendered ? "Mitarbeiter*in" : "Mitarbeiter"} möglich`,
      icon: Target,
      iconGradientClass: "from-lohn-purple to-purple-600",
      tipBgClass: "bg-purple-50",
    },
  ];
}

// --- Main Features ---

export interface MainFeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const MAIN_FEATURES: MainFeatureItem[] = [
  {
    title: "Flexible Dateneingabe",
    description:
      "Berechnen Sie basierend auf Netto, Brutto oder Budget - die API passt sich Ihren Bedürfnissen an",
    icon: Database,
  },
  {
    title: "Intelligente Optimierung",
    description:
      "Automatische Auswahl der besten Lohnbausteine für Ihre Ziele",
    icon: Settings,
  },
  {
    title: "Rechtssicher & Aktuell",
    description:
      "Immer auf dem neuesten Stand der Gesetzgebung und Sozialversicherung",
    icon: Shield,
  },
];

// --- Lohnbausteine Info ---

export interface LohnbausteineInfoItem {
  title: string;
  description: string;
  icon: LucideIcon;
  bgClass: string;
  iconColorClass: string;
}

export const LOHNBAUSTEINE_INFO: LohnbausteineInfoItem[] = [
  {
    title: "15+ Lohnbausteine",
    description: "Von Fahrtkosten bis Sachbezug - alles verfügbar",
    icon: Gift,
    bgClass: "bg-blue-50",
    iconColorClass: "text-blue-600",
  },
  {
    title: "Maximale Beträge",
    description: "Rechtssichere Höchstgrenzen für jeden Baustein",
    icon: Calculator,
    bgClass: "bg-green-50",
    iconColorClass: "text-green-600",
  },
  {
    title: "Payment Modes",
    description: "Givve Card, Cash oder Non-Cash Optionen",
    icon: Workflow,
    bgClass: "bg-purple-50",
    iconColorClass: "text-purple-600",
  },
];

// --- Services ---

export interface ServiceItem {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  iconGradientClass: string;
}

export const SERVICES: ServiceItem[] = [
  {
    title: "Lohnprogramm-Integration",
    description:
      "Nahtlose Umsetzung im Lohnprogramm per Schnittstelle - keine manuelle Übertragung notwendig",
    items: ["DATEV-kompatibel", "Automatische Übertragung", "Fehlerfreie Datenübermittlung"],
    icon: Workflow,
    iconGradientClass: "from-blue-500 to-blue-600",
  },
  {
    title: "Probelohnabrechnung",
    description:
      "Erhalten Sie eine fertige Probelohnabrechnung direkt über die API für transparente Kommunikation",
    items: ["PDF-Export verfügbar", "Mitarbeitergerecht aufbereitet", "Sofort einsatzbereit"],
    icon: FileText,
    iconGradientClass: "from-green-500 to-green-600",
  },
  {
    title: "Lohnbausteine-Betreuung",
    description:
      "Vollständige Verwaltung und Betreuung aller Lohnbausteine inklusive Givve Card Integration",
    items: ["15+ Lohnbausteine verfügbar", "Rechtssichere Umsetzung", "Kontinuierliche Updates"],
    icon: Package,
    iconGradientClass: "from-purple-500 to-purple-600",
  },
];

// --- Market Trends ---

export interface MarketTrendItem {
  title: string;
  stat: string;
  statLabel: string;
  description: string;
  source: string;
  icon: LucideIcon;
  iconBgClass: string;
  iconColorClass: string;
  statBgClass: string;
  statTextClass: string;
}

export function getMarketTrends(gendered: boolean): MarketTrendItem[] {
  return [
    {
      title: "Fachkräftemangel verschärft sich",
      stat: "570.000",
      statLabel: "unbesetzte Fachkräftestellen in Deutschland",
      description:
        "Deutsche Unternehmen müssen attraktive Gehaltsstrukturen und Benefits bieten, um im Wettbewerb zu bestehen",
      source: "Quelle: Institut der Deutschen Wirtschaft (IW) 2025",
      icon: Users,
      iconBgClass: "bg-red-100",
      iconColorClass: "text-red-600",
      statBgClass: "bg-red-50",
      statTextClass: "text-red-600",
    },
    {
      title: "Lohnoptimierung wird wichtiger",
      stat: "3.000€",
      statLabel: `zusätzliches Netto pro ${gendered ? "Mitarbeiter*in" : "Mitarbeiter"}/Jahr durch steuerfreie Benefits`,
      description:
        "Deutsche Unternehmen setzen verstärkt auf steueroptimierte Vergütungsstrategien statt reine Gehaltserhöhungen",
      source: "Quelle: Mitarbeiter-Benefits-Vergleich.de 2025",
      icon: TrendingUp,
      iconBgClass: "bg-blue-100",
      iconColorClass: "text-blue-600",
      statBgClass: "bg-blue-50",
      statTextClass: "text-blue-600",
    },
    {
      title: "Individuelle Lösungen",
      stat: "63%",
      statLabel: "würden Gehalt für bessere Benefits tauschen",
      description:
        "Personalisierte Benefits werden wichtiger als standardisierte Gehaltserhöhungen",
      source: "Quelle: BambooHR Benefits Report 2025",
      icon: Target,
      iconBgClass: "bg-purple-100",
      iconColorClass: "text-purple-600",
      statBgClass: "bg-purple-50",
      statTextClass: "text-purple-600",
    },
    {
      title: "HR-Automatisierung boomt",
      stat: "90%",
      statLabel: "nutzen Tech-Plattformen für Benefits",
      description:
        "APIs und Automatisierung werden zur Grundvoraussetzung für effiziente HR-Prozesse",
      source: "Quelle: Paychex Employee Benefits Trends 2025",
      icon: Code,
      iconBgClass: "bg-green-100",
      iconColorClass: "text-green-600",
      statBgClass: "bg-green-50",
      statTextClass: "text-green-600",
    },
  ];
}
