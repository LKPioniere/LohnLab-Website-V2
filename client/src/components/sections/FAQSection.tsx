import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Für welche Unternehmen ist das LohnLab Cockpit geeignet?",
    answer: (
      <div>
        <p className="mb-3">
          Für alle Unternehmen ab ca. 10 Mitarbeitern, die:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>steigende Personalkosten haben</li>
          <li>ihre Margen schützen wollen</li>
          <li>Mitarbeiter binden möchten</li>
          <li>ihre Arbeitgeberattraktivität steigern wollen</li>
        </ul>
        <p className="font-semibold mb-2">Besonders relevant für:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Mittelstand</li>
          <li>Industrie</li>
          <li>Handwerk</li>
          <li>Dienstleister</li>
          <li>wachstumsstarke Unternehmen</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Wie lange ist die Mindestvertragslaufzeit?",
    answer: <p>Es gibt keine Mindestvertragslaufzeit.</p>,
  },
  {
    question: "Wie unterscheidet sich LohnLab von klassischen Benefit-Lösungen?",
    answer: (
      <p>
        Klassische Anbieter verkaufen Einzellösungen oder Benefits.
        <br />
        LohnLab liefert ein ganzheitliches Steuerungssystem.
      </p>
    ),
  },
  {
    question: "Kann ich mit meinem Steuerberater weiter zusammenarbeiten?",
    answer: (
      <p>
        Ja. Wir arbeiten eng mit Ihrem Steuerberater / Lohnbüro zusammen und
        kümmern uns um den reibungslosen Ablauf.
      </p>
    ),
  },
  {
    question: "Ist das rechtssicher?",
    answer: (
      <div>
        <p className="mb-3">
          Ja. Alle Modelle basieren auf geltendem Steuer- und Arbeitsrecht und
          werden laufend rechtlich geprüft und aktualisiert.
        </p>
        <p className="font-semibold mb-2">Zusätzlich:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>DSGVO-konform</li>
          <li>revisionssicher</li>
          <li>dokumentiert</li>
          <li>DATEV-integriert</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Wie hoch ist der Implementierungsaufwand?",
    answer: (
      <p>
        Der Implementierungsaufwand ist minimal. Wir übernehmen die komplette
        Einrichtung und Integration in Ihre bestehenden Prozesse.
      </p>
    ),
  },
  {
    question: "Müssen bestehende Arbeitsverträge geändert werden?",
    answer: (
      <p>
        In der Regel nein. Die Optimierung erfolgt über intelligente
        Strukturierung und Benefit-Modelle, ohne bestehende Vertragsstrukturen
        aufzulösen.
      </p>
    ),
  },
  {
    question: "Wie schnell sehen wir Ergebnisse?",
    answer: (
      <div>
        <p className="mb-3 font-semibold">Sofort.</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Einsparpotenziale werden direkt im Cockpit sichtbar</li>
          <li>
            Nettoeffekte sind ab dem nächsten Abrechnungsmonat messbar
          </li>
          <li>ROI typischerweise &lt; 3 Monate</li>
        </ul>
      </div>
    ),
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-20 md:pt-28 pb-96 md:pb-[28rem] relative overflow-hidden bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Überschrift und Einleitung */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Wir haben Antworten auf die häufigsten Fragen unserer Kunden
            gesammelt – damit Sie unsere Prozesse, Zeitpläne und
            Kollaborationsbedingungen besser verstehen können.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
              >
                <span className="text-lg font-semibold text-black pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
