/**
 * Zielgruppen-Daten
 */
export const TARGET_AUDIENCES = {
  steuerberater: {
    id: 'steuerberater',
    title: 'Für Steuerberater',
    description: 'Erweitere dein Dienstleistungsportfolio um moderne Lohnoptimierung und generiere zusätzliche Umsätze mit deinen bestehenden Mandanten.',
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
    description: 'Optimiere deine Lohnkosten und spare bei jeder Lohnerhöhung und Neueinstellung bis zu 50% der Kosten.',
    benefits: [
      'Exakte Lohnerhöhungen berechnen',
      'Verlässliches Kostencontrolling',
      'Bis zu 50% Kosten sparen',
      'Präzise Budgetplanung'
    ]
  }
} as const;