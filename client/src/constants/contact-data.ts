/**
 * Kontaktseite: Team-Mitglieder und Kalender-Funnel-Daten
 */

import lrImage from "@/assets/images/team/lennart-reichert.jpg";
import kkImage from "@/assets/images/team/kilian-kraemer.jpg";
import rbImage from "@/assets/images/team/robin-betz.jpg";
import lindaDenkImage from "@/assets/images/team/linda-denk.jpg";
import type { LucideIcon } from "lucide-react";
import { Building, Headset, Handshake } from "lucide-react";

export interface ContactPerson {
  name: string;
  role: string;
  email: string;
  phone: string;
  image: string;
}

export const CONTACT_PERSONS: ContactPerson[] = [
  {
    name: "Robert Behrend",
    role: "Vertrieb & Partnerschaften",
    email: "rb@lohnlab.de",
    phone: "01621665562",
    image: rbImage,
  },
  {
    name: "Kilian Kaupp",
    role: "Bestandskundenmanagement",
    email: "kk@lohnlab.de",
    phone: "017666810923",
    image: kkImage,
  },
  {
    name: "Linda Denk",
    role: "Bestandskundenmanagement",
    email: "ld@lohnlab.de",
    phone: "06023918017",
    image: lindaDenkImage,
  },
  {
    name: "Lennart Reichert",
    role: "Produktentwicklung",
    email: "lr@lohnlab.de",
    phone: "01727738271",
    image: lrImage,
  },
];

export type CalendarType = "company" | "service" | "partner";

export const HUBSPOT_MEETING_URLS: Record<CalendarType, string> = {
  company:
    "https://meetings-eu1.hubspot.com/lukas20/unternehmen-kennenlerngesprach-website?embed=true",
  service: "https://meetings-eu1.hubspot.com/lreichert/service-termin?embed=true",
  partner: "https://meetings-eu1.hubspot.com/lreichert/kooperationspartner?embed=true",
};

export interface CalendarFunnelCardData {
  type: CalendarType;
  title: string;
  description: string;
  icon: LucideIcon;
}

export function getCalendarFunnelCards(gendered: boolean): CalendarFunnelCardData[] {
  return [
    {
      type: "company",
      title: "Unternehmen & Interessenten",
      description:
        "Interessiert an Lohnoptimierung und dem LohnLab Cockpit? Vereinbare jetzt ein Kennenlernengespräch.",
      icon: Building,
    },
    {
      type: "service",
      title: `${gendered ? "Bestandskund*innen" : "Bestandskunden"} Service`,
      description: `Du bist bereits ${gendered ? "Kund*in" : "Kunde"}? Buche hier einen Service-Termin für deine Anliegen.`,
      icon: Headset,
    },
    {
      type: "partner",
      title: gendered ? "Kooperationspartner*innen" : "Kooperationspartner",
      description: `${gendered ? "Steuerberater*innen" : "Steuerberater"} und Versicherungsvermittler: werde ${gendered ? "Partner*in" : "Partner"} oder nutze bestehende Vorteile.`,
      icon: Handshake,
    },
  ];
}
