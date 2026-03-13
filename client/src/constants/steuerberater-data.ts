/**
 * Steuerberater-Seite: Stats, Vorteile, Features, Referenzen
 */

import type { LucideIcon } from "lucide-react";
import {
  Clock,
  Database,
  Shield,
  Euro,
  Users,
  TrendingUp,
  FileText,
} from "lucide-react";
import martinGrauImage from "@/assets/images/team/martin-grau.jpg";
import haackSchubertLogo from "@/assets/logos/kunden/haack-schubert.png";

export interface StatItem {
  number: string;
  label: string;
  sublabel: string;
}

export const STEURBERATER_STATS: StatItem[] = [
  { number: "Umsatz+", label: "bei vielen Mandaten", sublabel: "durch Upselling" },
  { number: "Ø 2.000 €", label: "Ersparnis pro Mandant", sublabel: "Im Jahr" },
  { number: "< 3 Monate", label: "ROI", sublabel: "Typischerweise" },
  { number: "100%", label: "Rechtssicher", sublabel: "Made in Germany" },
];

export interface BenefitItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function getSteurberaterPartnerBenefits(gendered: boolean): BenefitItem[] {
  return [
    {
      title: "Wettbewerbsvorteil",
      description: `Durch innovativen Mehrwert positionierst du dich als ${gendered ? "moderne*r Partner*in" : "moderner Partner"} für deine Mandanten.`,
      icon: TrendingUp,
    },
    {
      title: "Höhere Mandantenbindung",
      description:
        "Erweiterte Dienstleistung stärkt die Beziehung zu deinen Mandanten nachhaltig.",
      icon: Users,
    },
    {
      title: "Transparent & Rechtssicher",
      description:
        "Transparente Preisgestaltung ohne versteckte Gebühren. 100% rechtssicher durch 'Made in Germany' Qualität.",
      icon: Shield,
    },
  ];
}

export function getSteurberaterBenefits(gendered: boolean): BenefitItem[] {
  return [
    {
      icon: Clock,
      title: "Zeitersparnis durch Automatisierung",
      description:
        "Mandanten erstellen selbständig Berechnungen und Probeabrechnungen - kein E-Mail-Pingpong mehr",
    },
    {
      icon: Database,
      title: "DATEV-Integration",
      description:
        "DSGVO-konforme Datenübertragung in perfekt verarbeitbarer Struktur direkt aus dem Cockpit",
    },
    {
      icon: Shield,
      title: "Rechtssicherheit als Filter",
      description:
        "Das Cockpit prüft automatisch die rechtliche Zulässigkeit aller Lohnoptimierungen",
    },
    {
      icon: Euro,
      title: "Mehrwert für Mandanten",
      description: `Bis zu 2.000€ Ersparnis pro ${gendered ? "Mitarbeiter*in" : "Mitarbeiter"} und Jahr - ein einzigartiges Angebot für deine Kanzlei`,
    },
  ];
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function getSteurberaterFeatures(gendered: boolean): FeatureItem[] {
  return [
    {
      title: "Neueinstellungsrechner",
      description: `Mandanten kalkulieren optimal strukturierte Vergütungspakete für neue ${gendered ? "Mitarbeiter*innen" : "Mitarbeiter"}`,
      icon: Users,
    },
    {
      title: "Lohnerhöhungsrechner",
      description:
        "Effiziente Berechnung von Gehaltsanpassungen mit sofortiger Probeabrechnung",
      icon: TrendingUp,
    },
    {
      title: "Monatliche Importdatei",
      description:
        "Monatliche Bewegungslohn-Datei für saubere Trennung aller Lohnbausteine",
      icon: FileText,
    },
    {
      title: "Cloud-Dokumentation",
      description: `Alle Zusatzvereinbarungen und Listen zentral für ${gendered ? "Sachbearbeiter*innen" : "Sachbearbeiter"} und ${gendered ? "Betriebsprüfer*innen" : "Betriebsprüfer"}`,
      icon: Database,
    },
  ];
}

export interface ReferenceItem {
  quote: string;
  name: string;
  position: string;
  company: string;
  image: string;
  keywords: string[];
}

export function getSteurberaterReferences(gendered: boolean): ReferenceItem[] {
  return [
    {
      quote: `Wir als Verantwortlicher für die Lohnbuchhaltung von vielen Unternehmen standen ${gendered ? "Lohnoptimierer*innen" : "Lohnoptimierern"} auf Grund der Zusatzaufwände immer skeptisch gegenüber. Die LohnLab hat es geschafft uns für das Thema zu begeistern, da der Kostenersparnis beim Mandanten bei gleichzeitig höherem Nutzen für ${gendered ? "die*den Mitarbeiter*in" : "den Mitarbeiter"} durch die hohe Automatisierung fast kein Zusatzaufwand gegenübersteht.`,
      name: "Martin Grau",
      position: gendered ? "Steuerberater*in & Inhaber*in" : "Steuerberater & Inhaber",
      company: "megra / Neuplaner",
      image: martinGrauImage,
      keywords: ["hohe Automatisierung", "fast kein Zusatzaufwand"],
    },
    {
      quote: `LohnLab hat sich im Markt der ${gendered ? "Lohnoptimierer*innen" : "Lohnoptimierer"} als Premium-Dienstleister herauskristallisiert, der besonderen Wert auf das Thema Rechtssicherheit legt. Dieser Aspekt war uns für unsere Mandanten das wichtigste.`,
      name: "Hartmut Schubert",
      position: gendered ? "Geschäftsführer*in" : "Geschäftsführer",
      company: "HaackSchubert Partnerschaftsgesellschaft mbB",
      image: haackSchubertLogo,
      keywords: ["Premium-Dienstleister", "Rechtssicherheit"],
    },
  ];
}
