/**
 * Neueinstellungen-Seite: Daten für Hero, Prozess, Benefits und Screenshots
 */

import type { LucideIcon } from "lucide-react";
import {
  Calculator,
  Users,
  FileCheck,
  Zap,
  Euro,
  TrendingUp,
  Settings,
  Eye,
} from "lucide-react";

export const neueinstellungenSEO = {
  title: "Neueinstellungen kostenoptimiert berechnen | LohnLab Cockpit",
  description:
    "Optimiere Gehälter bei Neueinstellungen und spare Lohnkosten. Mit DATEV-Integration und präziser Gehaltsberechnung. Jetzt Demo anfragen!",
  keywords:
    "Neueinstellung, Gehaltsberechnung, Lohnkosten sparen, Recruiting, Mitarbeiter einstellen, DATEV Integration",
  canonical: "https://www.lohnlab.de/loesungen/neueinstellungen",
  ogTitle: "Neueinstellungen: Gehälter intelligent berechnen",
  ogDescription:
    "Optimierte Gehaltsberechnung für Neueinstellungen mit DATEV-Integration. Spare Lohnkosten von Anfang an.",
};

export interface ProcessFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  features: ProcessFeature[];
  tip: string;
  accentColor: "primary" | "teal";
}

export function getProcessSteps(gendered: boolean): ProcessStep[] {
  return [
    {
      stepNumber: 1,
      title: "Flexible Gehaltsberechnung",
      accentColor: "primary",
      features: [
        {
          icon: Calculator,
          title: "Drei Berechnungsarten",
          description:
            "Nettoeinkommen, Arbeitgeberbudget oder klassischer Bruttowert",
        },
        {
          icon: Settings,
          title: "Individuelle Vorlagen",
          description:
            "Abteilungsspezifische Richtlinien und Benefits vordefinieren",
        },
        {
          icon: TrendingUp,
          title: "Optimierungsvorschläge",
          description:
            "100-200€ Kostenersparnis durch intelligente Gehaltsoptimierung",
        },
      ],
      tip: "💡 Beispiel: Außendienst = Garagenzuschuss, E Ladezuschuss, Spesen",
    },
    {
      stepNumber: 2,
      title: "Perfekt im Prozess positioniert",
      accentColor: "teal",
      features: [
        {
          icon: Users,
          title: "Nach der Stellenausschreibung",
          description: `Optimales Gehaltspaket erstellen, sobald ${gendered ? "der/die richtige Kandidat*in" : "der richtige Kandidat"} gefunden ist`,
        },
        {
          icon: FileCheck,
          title: "Vor der Stammdatenerfassung",
          description:
            "Gehalt optimieren, bevor es in deine Lohnsysteme übernommen wird",
        },
        {
          icon: Zap,
          title: "Nahtlose Integration",
          description:
            "Fügt sich perfekt in Ihren bestehenden HR-Prozess ein",
        },
      ],
      tip: "⚡ Genau die Lücke geschlossen, die du bisher manuell ausfüllen musstest",
    },
  ];
}

export interface CandidateBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor: "teal" | "primary" | "purple";
}

export function getCandidateBenefits(gendered: boolean): CandidateBenefit[] {
  return [
    {
      icon: Eye,
      title: "Volle Transparenz",
      description:
        "Klare Aufschlüsselung aller Gehaltsbestandteile bei der Verhandlung - keine versteckten Details",
      iconBgColor: "teal",
    },
    {
      icon: FileCheck,
      title: "Nahtloser Prozess",
      description:
        "Optimales Gehaltspaket direkt nach der Zusage - perfekt integriert in Ihren Einstellungsprozess",
      iconBgColor: "primary",
    },
    {
      icon: TrendingUp,
      title: "Kosten sparen",
      description: `100-200€ Kostenersparnis pro ${gendered ? "Mitarbeiter*in" : "Mitarbeiter"} durch intelligente Lohnoptimierung.`,
      iconBgColor: "purple",
    },
  ];
}

export interface ScreenshotFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ScreenshotStep {
  stepNumber: number;
  title: string;
  features: ScreenshotFeature[];
  imageOrder: "left" | "right";
}

export const screenshotSteps: ScreenshotStep[] = [
  {
    stepNumber: 1,
    title: "Einstellungsgehalt berechnen",
    imageOrder: "right",
    features: [
      {
        icon: Calculator,
        title: "Flexible Eingabe",
        description: "Brutto-Netto Rechner mit verschiedenen Ausgangswerten",
      },
      {
        icon: Euro,
        title: "Sofortige Übersicht",
        description: "Alle Kosten und Optimierungspotentiale auf einen Blick",
      },
      {
        icon: TrendingUp,
        title: "Optimierungsvorschläge",
        description: "Automatische Berechnung der besten Gehaltsstruktur",
      },
    ],
  },
  {
    stepNumber: 2,
    title: "Prozess-Integration",
    imageOrder: "left",
    features: [
      {
        icon: Users,
        title: "Perfektes Timing",
        description:
          "Zwischen Zusage und Stammdatenerfassung - genau da, wo du uns brauchst",
      },
      {
        icon: FileCheck,
        title: "Optimierte Übergabe",
        description:
          "Sobald das Gehalt optimiert ist, wird es im Hintergrund schon für dein Lohnsystem importierbar gemacht. Keine Doppelarbeit, denn das LohnLab Cockpit ersetzt keine Systeme, es ergänzt und vereinfacht deinen Prozess.",
      },
    ],
  },
];

export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function getBenefitsItems(gendered: boolean): BenefitItem[] {
  return [
    {
      icon: Euro,
      title: "100-200€ Kostenersparnis",
      description: `Pro ${gendered ? "Mitarbeiter*in" : "Mitarbeiter"} durch intelligente Gehaltsoptimierung`,
    },
    {
      icon: Zap,
      title: "Schnellere Einstellung",
      description: "Automatisierte Prozesse reduzieren Verwaltungsaufwand erheblich",
    },
    {
      icon: TrendingUp,
      title: "Wettbewerbsvorteil",
      description: "Attraktivere Angebote bei gleichen oder niedrigeren Kosten",
    },
  ];
}
