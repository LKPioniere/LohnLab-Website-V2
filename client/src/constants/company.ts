/**
 * Firmen-Konstanten
 */
export const COMPANY_INFO = {
  name: "LohnLab GmbH",
  address: {
    street: "Hauptstraße 20",
    city: "Alzenau",
    zip: "63755",
  },
  contact: {
    // E-Mail in Komponenten mit ObfuscatedEmail anzeigen
    emailUser: "service",
    emailDomain: "lohnlab.de",
    phone: "06023 / 9180-10",
  },
} as const;
