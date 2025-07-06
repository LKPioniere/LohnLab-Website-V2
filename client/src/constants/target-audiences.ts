/**
 * Zielgruppen-Daten
 */
export const TARGET_AUDIENCES = {
  steuerberater: {
    id: 'steuerberater',
    title: 'Für Steuerberater',
    description: 'Erweitern Sie Ihr Dienstleistungsportfolio um moderne Lohnoptimierung und generieren Sie zusätzliche Umsätze mit Ihren bestehenden Mandanten.',
    benefits: [
      'Neue Einnahmequelle ohne Mehraufwand',
      'Stärkere Mandantenbindung durch Mehrwert',
      'Wettbewerbsvorteil durch Digitalisierung',
      'Nahtlose DATEV Integration'
    ]
  },
  unternehmen: {
    id: 'unternehmen',
    title: 'Für Unternehmen',
    description: 'Optimieren Sie Ihre Lohnkosten und bieten Sie Ihren Mitarbeitern mehr Netto ohne höhere Bruttokosten für das Unternehmen.',
    benefits: [
      'Exakte Lohnerhöhungen berechnen',
      'Verlässliches Kostencontrolling',
      'Mehr Netto für Mitarbeiter',
      'Präzise Budgetplanung'
    ]
  }
} as const;