/**
 * Produkt-Features
 */
export function getProductFeatures(gendered: boolean) {
  return [
    {
      id: 'lohnerhoehung',
      title: 'Lohnerhöhung',
      description: 'Präzise Ermittlung der echten Kosten und des maximalen Einsparpotentials bei Lohnerhöhungen.',
      link: '/loesungen/lohnerhoehung'
    },
    {
      id: 'neueinstellungen',
      title: 'Neueinstellungen',
      description: `Automatische Kalkulation optimaler Gehaltspakete für neue ${gendered ? "Mitarbeiter*innen" : "Mitarbeiter"} inklusive aller Nebenkosten.`,
      link: '/loesungen/neueinstellungen'
    }
  ] as const;
}
