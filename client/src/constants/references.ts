import christopherImage from "@/assets/christopher-bausch.webp";
import juliusImage from "@/assets/julius-henne.jpg";
import stephanImage from "@/assets/stephan-weppler.webp";

/**
 * Referenz-Interface für das Baukasten-System
 */
export interface Reference {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  image: string;
  tags: string[];
  themeColor: string; // Tailwind color class (e.g., 'blue', 'green', 'purple')
  industry: string;
}

/**
 * Verfügbare Theme-Farben für Referenz-Karten
 */
export const REFERENCE_THEMES = {
  blue: {
    primary: "bg-blue-600",
    secondary: "bg-blue-50",
    accent: "text-blue-600",
    gradient: "from-blue-500 to-blue-700",
    tag: "bg-blue-100 text-blue-800",
  },
  purple: {
    primary: "bg-purple-600",
    secondary: "bg-purple-50",
    accent: "text-purple-600",
    gradient: "from-purple-500 to-purple-700",
    tag: "bg-purple-100 text-purple-800",
  },
  emerald: {
    primary: "bg-emerald-600",
    secondary: "bg-emerald-50",
    accent: "text-emerald-600",
    gradient: "from-emerald-500 to-emerald-700",
    tag: "bg-emerald-100 text-emerald-800",
  },
  orange: {
    primary: "bg-orange-600",
    secondary: "bg-orange-50",
    accent: "text-orange-600",
    gradient: "from-orange-500 to-orange-700",
    tag: "bg-orange-100 text-orange-800",
  },
  rose: {
    primary: "bg-rose-600",
    secondary: "bg-rose-50",
    accent: "text-rose-600",
    gradient: "from-rose-500 to-rose-700",
    tag: "bg-rose-100 text-rose-800",
  },
  teal: {
    primary: "bg-teal-600",
    secondary: "bg-teal-50",
    accent: "text-teal-600",
    gradient: "from-teal-500 to-teal-700",
    tag: "bg-teal-100 text-teal-800",
  },
} as const;

/**
 * Referenzen-Daten - Einfach zu erweitern und zu warten
 */
export const REFERENCES: Reference[] = [
  {
    id: "christopher-bausch",
    name: "Christopher Bausch",
    title: "Kinobetreiber",
    company: "Casino Aschaffenburg & Arthouse Kinos Frankfurt",
    quote:
      "Für uns als kleiner Betrieb ist individuelle Betreuung wichtig. Aus diesem Grund schätzen wir die Beratung durch LohnLab.",
    image: christopherImage,
    tags: ["Individuelle Betreuung", "Entertainment", "Kleinbetrieb"],
    themeColor: "purple",
    industry: "Entertainment",
  },
  {
    id: "julius-henne",
    name: "Julius Henne",
    title: "Geschäftsführer",
    company: "Stebah GmbH & Co. KG",
    quote:
      "Die Firmenkreditkarte ist ein echter Gamechanger für uns. Die vielfältigen Einsatzmöglichkeiten und die einfache Verwaltung über LohnLab machen die Lohnoptimierung zum Kinderspiel.",
    image: juliusImage,
    tags: ["Firmenkreditkarte", "Baugewerbe", "Lohnoptimierung"],
    themeColor: "blue",
    industry: "Baugewerbe",
  },
  {
    id: "stephan-weppler",
    name: "Stephan Weppler",
    title: "Geschäftsführer",
    company: "Weppler Filter GmbH",
    quote:
      "Durch LohnLab haben wir die Möglichkeit das Optimierungspotential jedes einzelnen Mitarbeiters zu verstehen und zu nutzen. Gehaltserhöhungen können mittels Massenberechnung für unsere komplette Belegschaft berechnet und einfach umgesetzt werden.",
    image: stephanImage,
    tags: [
      "Massenberechnung",
      "Optimierungspotential",
      "Komplette Belegschaft",
    ],
    themeColor: "emerald",
    industry: "Filterindustrie",
  },
];
