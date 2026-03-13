/**
 * FAQ-Daten für Mitarbeiter- und Arbeitgeber-Bereich
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export function getMitarbeiterFAQs(gendered: boolean): FAQItem[] {
  return [
    {
      id: "m1",
      question: "Welche Vorteile bietet ein Lohnkonzept für mich?",
      answer: `Ein Teil deines Bruttogehalts, der sonst in die gesetzliche Rentenkasse geflossen wäre, kann dein ${gendered ? "Arbeitgeber*in" : "Arbeitgeber"} in eine betriebliche Altersvorsorge investieren. Das bedeutet für dich: Du zahlst keinen Euro mehr als vorher, bekommst aber später eine hochwertigere und vor allem kapitalgedeckte Rentenversicherung. Anders gesagt: Deine Beiträge arbeiten gezielter für deine Zukunft.`,
    },
    {
      id: "m2",
      question:
        "Was passiert wenn sich die gesetzlichen Rahmenbedingungen ändern?",
      answer: `Sobald sich gesetzliche Rahmenbedingungen ändern, analysiert unser ${gendered ? "Expert*innenteam" : "Expertenteam"} die Änderungen und passt das Lohnkonzept entsprechend an. Wir informieren dich und ${gendered ? "deine*n Arbeitgeber*in" : "deinen Arbeitgeber"} rechtzeitig über notwendige Anpassungen, um sicherzustellen, dass eure Lohnoptimierungsstrategien immer auf dem neuesten Stand und rechtlich sicher sind. Anmerkung: In aller Regel fallen gesetzliche Änderungen positiv für ${gendered ? "Arbeitgeber*innen" : "Arbeitgeber"} und ${gendered ? "Arbeitnehmer*innen" : "Arbeitnehmer"} aus!`,
    },
    {
      id: "m3",
      question: "Warum muss ich eine Zusatzvereinbarung unterschreiben?",
      answer: `Die Zusatzvereinbarung sichert dein Lohnkonzept rechtlich ab. So stellen wir sicher, dass alle Änderungen transparent und korrekt dokumentiert sind und dass sowohl du als auch dein ${gendered ? "Arbeitgeber*in" : "Arbeitgeber"} die neuen Bedingungen verstehen und akzeptieren.`,
    },
    {
      id: "m4",
      question: "Bleibt mein Gehalt transparent?",
      answer:
        "Ja, dein Gehalt bleibt transparent. Du erhältst weiterhin eine Gehaltsabrechnung. Dort werden alle Bestandteile deines Gehalts aufgeführt. So behältst du jederzeit den Überblick.",
    },
    {
      id: "m5",
      question: "Wer kann mir bei Fragen zum neuen Lohnkonzept weiterhelfen?",
      answer:
        "Bei Fragen zum neuen Lohnkonzept kannst du dich an deine Personalabteilung wenden. Diese wurde von LohnLab mit allen Informationen zum Lohnkonzept ausgestattet. Sollte eine Frage einmal nicht direkt beantwortet werden können, hat deine Personalabteilung die Möglichkeit sich mit LohnLab in Verbindung zu setzen.",
    },
    {
      id: "m6",
      question:
        "Wo kann ich nachschauen wie sich mein Lohnkonzept zusammensetzt?",
      answer:
        "Du findest alle Details auf deiner Lohnabrechnung, im Kartenportal und in der Zusatzvereinbarung.",
    },
    {
      id: "m7",
      question:
        "Wie funktioniert eine Sachbezugskarte und wie kann ich sie nutzen?",
      answer:
        "Die givve® Card ist notwendig, damit du deine Zahlungen aus dem Lohnkonzept erhalten kannst. Mit der Karte kannst du ganz normal wie mit deiner Bankkarte auch alle Einkäufe erledigen, oder das Geld für größere Anschaffungen ansparen. Informiere dich in deiner givve®-App über deinen regionalen Bereich (siehe: Akzeptanzstellen), indem du dein Guthaben ausgeben kannst.",
    },
    {
      id: "m8",
      question: "Wo kann ich mein Guthaben einsehen?",
      answer: "In der givve®-App, oder unter https://card.givve.com/",
    },
    {
      id: "m9",
      question:
        "Was passiert, wenn ich das Geld auf der givve® Card nicht direkt ausgebe?",
      answer: "Du kannst das Guthaben faktisch unbegrenzt lange ansparen",
    },
    {
      id: "m10",
      question: "Wo kann ich mit der givve® Card überall bezahlen?",
      answer:
        "Bei jedem Geschäft, welches Kreditkartenzahlung (Mastercard) akzeptiert. Also bei allen Supermärkten, Bekleidungsläden, Tankstellen, usw.",
    },
    {
      id: "m11",
      question: "Warum ist die givve® Card auf eine PLZ-Region beschränkt?",
      answer:
        "Nach aktueller Rechtsprechung muss die givve® Card auf eine Region beschränkt werden. Dazu wird Deutschland in 2-stellige PLZ-Gebiete unterteilt. Du kannst in deinem PLZ-Gebiet und in allen Angrenzenden PLZ-Gebieten bei jeder Mastercard Akzeptanzstelle bezahlen.",
    },
    {
      id: "m12",
      question: "Was tue ich, wenn ich meine Karte verloren habe?",
      answer: `Bitte lass deine Karte sofort sperren, das kannst du entweder selber in deiner givve® -App auf deinem Smartphone, oder unter https://card.givve.com/ erledigen. Oder du wendest dich damit an ${gendered ? "deine*n Arbeitgeber*in" : "deinen Arbeitgeber"} und er macht das für dich. Es wird dann eine neue Karte für dich bestellt - das dauert etwa 10 Werktage. Die Karte wird dir dann von ${gendered ? "deinem/deiner Arbeitgeber*in" : "deinem Arbeitgeber"} ausgehändigt.`,
    },
  ];
}

export function getArbeitgeberFAQs(gendered: boolean): FAQItem[] {
  return [
    {
      id: "a1",
      question: `Ab wie vielen ${gendered ? "Mitarbeiter*innen" : "Mitarbeitern"} kann ich LohnLab nutzen?`,
      answer: `Wir beraten ${gendered ? "jede*n Kund*in" : "jeden Kunden"} individuell und richten das Konzept nach seinen Wünschen unabhängig von der Mitarbeiterzahl ein. Ab 10 ${gendered ? "Mitarbeiter*innen" : "Mitarbeitern"} fällt für dich bei der Einrichtung des Konzepts keine Einrichtungsgebühr an.`,
    },
    {
      id: "a2",
      question: `Für welche ${gendered ? "Mitarbeiter*innen" : "Mitarbeiter"} ist LohnLab relevant?`,
      answer: `LohnLab ist für alle ${gendered ? "Mitarbeiter*innen" : "Mitarbeiter"} relevant, die: Nicht den Mindestlohn verdienen (der gesetzliche Mindestlohn darf nicht unterschritten werden) und keine Minijobber sind.`,
    },
    {
      id: "a3",
      question: "Was ist, wenn mein Unternehmen tarifgebunden ist?",
      answer: `Auch bei tarifgebundenen Unternehmen können alle Lohnbestandteile, die nicht zum festen Grundlohn gehören, optimiert werden. Das umfasst Überstunden, Prämien, Boni und ähnliches. Wenn ${gendered ? "ein*e Mitarbeiter*in" : "ein Mitarbeiter"} den reinen Tariflohn erhält können tarifliche Lohnerhöhungen leider nicht optimiert werden.`,
    },
    {
      id: "a4",
      question:
        "Entsteht durch LohnLab zusätzlicher Aufwand in meinem Unternehmen?",
      answer:
        "Alle Daten, die wir benötigen, können ohne größeren Aufwand aus dem Lohnsystem übermittelt werden (Brutto-Gehälter, Steuerklassen, etc.). Bei der Umsetzung gibt es einen kurzen Termin, bei dem der Lohnimport und die Kommunikation zwischen Buchhaltung und LohnLab abgestimmt werden. Du meldest uns danach nur noch Updates zu Änderungen wie bspw. Ein- und Austritten.",
    },
    {
      id: "a5",
      question: "Wie lange dauert die Einrichtung des Konzepts?",
      answer:
        "Üblicherweise circa 4 bis 8 Wochen. Allerdings lassen sich auch Lösungen für kurzfristigere Projekte finden.",
    },
    {
      id: "a6",
      question: `Wie erkläre ich das Konzept unseren ${gendered ? "Mitarbeiter*innen" : "Mitarbeitern"}?`,
      answer: `LohnLab kann unterschiedliche Hilfen zur Verfügung stellen, neben einer Vergleichs-Lohnabrechnung, können wir auch erprobte Unterlagen für die ${gendered ? "Mitarbeiter*innen\u00ADkommunikation" : "Mitarbeiterkommunikation"} zur Verfügung stellen.`,
    },
    {
      id: "a7",
      question: "Welche Lohnbausteine gibt es?",
      answer:
        "Steuerfrei: Sachbezug (50€/Monat), Handykosten, Kindergarten, Werbung (21€/Monat), Fehlgeld (16€/Monat), Verpflegungsmehraufwand (210€/Monat), Jobticket (49€/Monat), Berufskleidung, Aufmerksamkeiten (4x60€/Jahr), Ladezuschuss (15-70€/Monat). Pauschalversteuert: Internet (50€/Monat), Fahrtkostenzuschuss, Verpflegungsmehraufwand II (210€/Monat), Erholungsbeihilfe, §37b EStG (10.000€/Jahr), Essensmarken (108,45€/Monat).",
    },
    {
      id: "a8",
      question: "Wie gehe ich mit dem Rentennachteil um?",
      answer:
        "Pro 100€ Brutto und pro Jahr Betriebszugehörigkeit entsteht etwa 1€ monatlicher Rentenanspruch. Diese Differenz kann durch eine arbeitgeberfinanzierte Firmenrente kompensiert werden. Die Beiträge sind nur ein Bruchteil der zu erzielenden Ersparnis und das kann im Gesamtpaket eine sehr sinnvolle Ergänzung sein.",
    },
    {
      id: "a9",
      question: `Können auch ${gendered ? "Teilzeitmitarbeiter*innen" : "Teilzeitmitarbeiter"} von LohnLab profitieren?`,
      answer: `Ja, unsere Konzepte sind auch für ${gendered ? "Teilzeitmitarbeiter*innen" : "Teilzeitmitarbeiter"} anwendbar, sofern die allgemeinen Voraussetzungen erfüllt sind.`,
    },
    {
      id: "a10",
      question:
        "Funktioniert das auch reibungslos mit meinem Zeiterfassungs-/Lohnabrechnungssystem?",
      answer:
        "Ja, wir haben Schnittstellen zu über 20 bestehenden Systemen und programmieren kostenlos bei neuen Programmen nach und passen uns an dich an.",
    },
    {
      id: "a11",
      question: `Warum macht das nicht mein ${gendered ? "Steuerberater*in" : "Steuerberater"}?`,
      answer: `Die meisten ${gendered ? "Steuerberater*innen" : "Steuerberater"} haben ein sehr hohes Arbeitspensum und konzentrieren sich auf andere Schwerpunkte. Wenn ${gendered ? "der/die Steuerberater*in" : "der Steuerberater"} ${gendered ? "der/die Hausärzt*in" : "der Hausarzt"} für die Steuern ist, sind wir ${gendered ? "der/die Fachärzt*in" : "der Facharzt"} für das Thema Lohn.`,
    },
    {
      id: "a12",
      question: "Was passiert bei einer Betriebsprüfung?",
      answer: `Kein Grund zur Sorge: Unsere Zusatzvereinbarungen erfüllen alle Anforderungen, auf die ${gendered ? "Prüfer*innen" : "Prüfer"} Wert legen. Wir stellen die nötigen Unterlagen zentral in einer digitalen Personalakte bereit und unterstützen bei Bedarf persönlich während der Prüfung. Unsere Erfahrung zeigt: Alle unsere ${gendered ? "Kund*innen" : "Kunden"} sind bisher beanstandungsfrei durch Betriebsprüfungen gekommen.`,
    },
    {
      id: "a13",
      question: "Wie kann ich starten?",
      answer:
        "Du buchst dir über die Homepage ein Erstgespräch, in dem wir dir die Möglichkeiten erklären und dich bei Interesse gerne durch den weiteren Prozess führen.",
    },
  ];
}
