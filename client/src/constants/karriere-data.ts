/**
 * Karriere-Seite: Benefits und Stellenanzeigen
 */

import type { LucideIcon } from "lucide-react";
import {
  CreditCard,
  Train,
  Bike,
  Home,
  Clock,
  Baby,
  Smartphone,
  Wifi,
  GraduationCap,
  LineChart,
  Rocket,
  Target,
  UtensilsCrossed,
  CheckCircle2,
  Car,
  MessageCircle,
} from "lucide-react";

export interface JobOpening {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  mission: string[];
  profile: string[];
  weOffer: string[];
  compensation: string[];
}

export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  longDesc?: string;
}

export interface BenefitCategory {
  category: string;
  icon: LucideIcon;
  items: BenefitItem[];
}

export function getJobOpenings(gendered: boolean): JobOpening[] {
  return [
    {
      id: "sales-manager",
      title: "Sales Manager (Remote)",
      location: "Remote",
      type: "Vollzeit",
      department: "Vertrieb",
      description: "Werde Teil unseres Vertriebsteams und hilf uns, mehr Unternehmen zu erreichen",
      mission: [
        `Erstgespräche mit potenziellen ${gendered ? "Kund*innen" : "Kunden"} vereinbaren`,
      "Selbstständiger Aufbau unserer Vertriebspipeline",
      "Aktive Kaltakquise per Telefon",
      "Qualifizierung von Leads im B2B-Umfeld",
    ],
    profile: [
      "Kommunikationsstärke & Überzeugungskraft",
      "Eigeninitiative und strukturierte Arbeitsweise",
      "Idealerweise erste Erfahrung im Vertrieb (aber auch Quereinsteiger willkommen!)",
      "Affinität für digitale Tools & CRM-Systeme",
      "Deutsch auf Muttersprachler-Niveau",
    ],
    weOffer: [
      "Leads & modernes CRM (HubSpot) werden gestellt",
      "Klare KPIs für messbare Erfolge",
      "Schnelle Entscheidungswege in kleinem, ambitioniertem Team",
      "Remote-First Kultur mit optionalen Team-Events",
    ],
    compensation: [
      "Attraktives Fixgehalt + erfolgsbasierte Provision",
      "Plus alle unten genannten Benefits",
    ],
  },
  ];
}

export const benefits: BenefitCategory[] = [
  {
    category: "Finanzielle Benefits",
    icon: CreditCard,
    items: [
      {
        icon: CreditCard,
        title: "LohnLab Card",
        shortDesc: "50€ monatlich + 60€ Geburtstag + 156€ Urlaub",
        longDesc:
          "Jeden Monat erhältst du 50€ steuerfreien Sachbezug auf deine eigene LohnLab Card, ein echter Mehrwert, den du überall in deiner Region nutzen kannst, wo Kartenzahlung akzeptiert wird. Zusätzlich gibt's 60€ zu deinem Geburtstag und mindestens 156€ zum Urlaub. Alles 100% steuerfrei und kommt netto bei dir an!",
      },
      {
        icon: UtensilsCrossed,
        title: "Essenszuschuss",
        shortDesc: "7,23€ pro Arbeitstag",
        longDesc:
          "Pro Arbeitstag gibt es 7,23€ zurück auf dein Konto, für dein Mittagessen oder Lebensmitteleinkäufe. So kannst du dich während der Arbeit stärken, ohne dass es dein Gehalt belastet.",
      },
      {
        icon: CheckCircle2,
        title: "Betriebliche Altersvorsorge",
        shortDesc: "100% arbeitgeberfinanziert",
        longDesc:
          "Wir sorgen für deine Zukunft: Du erhältst eine vollständig arbeitgeberfinanzierte betriebliche Altersvorsorge, komplett ohne eigenen Beitrag! Zusätzlich hast du die Option, privat aufzustocken und profitierst dann von 30% Arbeitgeberzuschuss.",
      },
    ],
  },
  {
    category: "Mobilität",
    icon: Car,
    items: [
      {
        icon: Car,
        title: "Fahrtkostenzuschuss",
        shortDesc: "38 Cent pro Kilometer",
        longDesc:
          "Falls du doch mal ins Office kommst: Du erhältst 38 Cent für jeden Kilometer zur Arbeit als Fahrtkostenzuschuss. Außerdem gibt's bis zu 28€ Spesen pro Tag bei Geschäftsreisen und Vertriebsterminen.",
      },
      {
        icon: Train,
        title: "Jobticket",
        shortDesc: "Für deine Mobilität",
        longDesc:
          "Nutze öffentliche Verkehrsmittel steuerbegünstigt. Wir unterstützen deine Mobilität mit einem Jobticket, sodass du entspannt zur Arbeit oder zu Kundenterminen kommst.",
      },
      {
        icon: Bike,
        title: "Jobbike",
        shortDesc: "Inkl. Versicherung & Zubehör",
        longDesc:
          "Lease dein Wunschrad über uns, egal ob E-Bike, Mountainbike oder Citybike. Wir übernehmen die Versicherung und das Zubehör. Bleib fit und schone die Umwelt!",
      },
    ],
  },
  {
    category: "Work-Life-Balance",
    icon: Home,
    items: [
      {
        icon: Home,
        title: "100% Remote möglich",
        shortDesc: "Arbeite von überall in Deutschland",
        longDesc:
          "Bei uns bist du nicht an einen Standort gebunden. Arbeite von zu Hause, aus dem Café oder von wo immer du möchtest, solange du in Deutschland bist. Echte Flexibilität für deine Work-Life-Balance.",
      },
      {
        icon: Clock,
        title: "Flexible Arbeitszeit",
        shortDesc: "Vertrauensarbeitszeit",
        longDesc:
          "Wir arbeiten mit Vertrauensarbeitszeit. Das bedeutet: Du teilst dir deine Zeit flexibel ein, solange die Ergebnisse stimmen. Perfekt für Frühaufsteher, Nachteulen und alle dazwischen.",
      },
      {
        icon: Baby,
        title: "Kindergartenzuschuss",
        shortDesc: "In Höhe der tatsächlichen Betreuungskosten",
        longDesc:
          "Wir unterstützen Familien aktiv mit einem Kindergartenzuschuss in Höhe der tatsächlichen Betreuungskosten. So kannst du Beruf und Familie besser vereinbaren und dich auf beides konzentrieren.",
      },
      {
        icon: Smartphone,
        title: "Diensthandy",
        shortDesc: "Berufliches und Privates trennen",
        longDesc:
          "Du erhältst ein modernes Diensthandy mit passenden Tarifen. Nutze es auch privat, so kannst du Berufliches und Privates besser trennen oder hast nur noch ein Gerät.",
      },
      {
        icon: Wifi,
        title: "Internetkosten",
        shortDesc: "Volle Erstattung",
        longDesc:
          "Wer im Homeoffice arbeitet, braucht gutes Internet. Wir erstatten dir deine Internetkosten vollständig, damit du bestens ausgestattet bist.",
      },
    ],
  },
  {
    category: "Weiterbildung & Zusammenarbeit",
    icon: GraduationCap,
    items: [
      {
        icon: GraduationCap,
        title: "Strukturiertes Onboarding",
        shortDesc: "Mit persönlichem Mentor",
        longDesc:
          "Du startest nicht ins kalte Wasser: Unser strukturiertes Onboarding-Programm mit persönlichem Mentor sorgt dafür, dass du schnell ankommst und dich von Anfang an wohlfühlst.",
      },
      {
        icon: Rocket,
        title: "Weiterbildung",
        shortDesc: "Laufende Schulungen",
        longDesc:
          "Wir investieren in deine Entwicklung! Profitiere von internen und externen Schulungen, Workshops und Zertifizierungen. Dein Wachstum ist unser Erfolg.",
      },
      {
        icon: LineChart,
        title: "Klare KPIs",
        shortDesc: "Transparente Erfolgsmessung",
        longDesc:
          "Keine unklaren Ziele: Bei uns weißt du genau, woran du gemessen wirst. Klare, faire KPIs machen deinen Erfolg messbar und nachvollziehbar.",
      },
    ],
  },
  {
    category: "Individuelle Benefits",
    icon: MessageCircle,
    items: [
      {
        icon: MessageCircle,
        title: "Dein Lieblings-Benefit ist nicht dabei?",
        shortDesc: "Lass uns darüber sprechen!",
        longDesc:
          "Wir sind offen für individuelle Lösungen! Hast du einen Benefit im Kopf, der hier fehlt? Sprich uns einfach an, wir finden gemeinsam eine Lösung, die zu dir passt.",
      },
    ],
  },
];
