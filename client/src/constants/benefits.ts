/**
 * Allgemeine Vorteile
 */
export function getGeneralBenefits(gendered: boolean) {
  return [
    {
      title: 'Sofort sparen bei Neueinstellungen',
      description: `Spare im Schnitt 2.000 € pro ${gendered ? "Mitarbeiter*in" : "Mitarbeiter"} und investiere gezielt in deine Arbeitgeberattraktivität.`
    },
    {
      title: 'Lohnerhöhungen kosteneffizient gestalten',
      description: 'Reduziere anfallende Lohnkosten um bis zu 50 % und erhöhe gezielt die Bindung im Team.'
    },
    {
      title: gendered ? 'Mitarbeiter*innen\u00ADzufriedenheit steigern' : 'Mitarbeiterzufriedenheit steigern',
      description: `Biete attraktive Benefits und steuerfreie Zusatzleistungen, die deine ${gendered ? "Mitarbeiter*innen" : "Mitarbeiter"} wirklich schätzen.`
    },
    {
      title: 'Einfache Integration in bestehende Prozesse',
      description: 'Nahtlose DATEV-Anbindung: keine Umstellung, keine Zusatzarbeit, sofort einsatzbereit.'
    }
  ];
}

/**
 * Neueinstellungs-Vorteile
 */
export function getHiringBenefits(gendered: boolean) {
  return [
    {
      title: 'Flexible Vorgaben',
      description: 'Ob Brutto, Netto oder Arbeitgeberbudget: du entscheidest, wie gerechnet wird.'
    },
    {
      title: 'Intelligente Templates',
      description: 'Abteilungs- und positionsspezifische Benefit-Pakete einmal definieren, immer wieder nutzen.'
    },
    {
      title: 'Schnelle Datenweitergabe',
      description: `Alle relevanten ${gendered ? "Mitarbeiter*innen\u00ADdaten" : "Mitarbeiterdaten"} erfassen und per Klick an den Lohnabrechner übermitteln.`
    },
    {
      title: 'Zahlt sich doppelt aus',
      description: 'Gewinne deine Favoriten mit attraktiven Gehaltspaketen und spare dabei selbst bares Geld.'
    }
  ];
}
