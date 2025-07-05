/**
 * Produkt-Features
 */
export const PRODUCT_FEATURES = [
  {
    id: 'lohnoptimierung',
    title: 'Lohnoptimierung',
    description: 'Berechnet automatisch die optimale Zusammensetzung von Gehältern durch steuerfreie Zusatzleistungen.',
    link: '/lohnoptimierung'
  },
  {
    id: 'lohnerhoehung',
    title: 'Lohnerhöhung',
    description: 'Zeigt präzise, wie viel eine Erhöhung tatsächlich kostet und was beim Mitarbeiter ankommt.',
    link: '/lohnerhoehung'
  },
  {
    id: 'neueinstellungen',
    title: 'Neueinstellungen',
    description: 'Kalkuliert das optimale Gehaltspaket für neue Mitarbeiter unter Berücksichtigung aller Nebenkosten.',
    link: '/neueinstellungen'
  }
] as const;