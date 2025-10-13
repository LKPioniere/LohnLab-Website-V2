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
    description: 'Optimieren Sie Ihre Lohnkosten und sparen Sie bei jeder Lohnerhöhung und Neueinstellung bis zu 50% der Kosten.',
    benefits: [
      'Exakte Lohnerhöhungen berechnen',
      'Verlässliches Kostencontrolling',
      'Bis zu 50% Kosten sparen',
      'Präzise Budgetplanung'
    ]
  }
} as const;