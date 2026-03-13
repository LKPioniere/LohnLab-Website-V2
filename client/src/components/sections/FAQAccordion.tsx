import { ChevronDown, HelpCircle } from "lucide-react";
import type { FAQItem } from "@/constants/faq-data";

interface FAQAccordionProps {
  faqs: FAQItem[];
  openAccordion: string;
  onAccordionChange: (id: string) => void;
}

export function FAQAccordion({
  faqs,
  openAccordion,
  onAccordionChange,
}: FAQAccordionProps) {
  if (faqs.length === 0) {
    return (
      <div className="text-center py-8">
        <HelpCircle className="mx-auto text-gray-400 mb-4" size={48} />
        <p className="text-gray-600 mb-2">Keine passenden Fragen gefunden.</p>
        <p className="text-sm text-gray-500">
          Versuche einen anderen Suchbegriff oder stelle deine Frage unten.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
        >
          <button
            onClick={() => onAccordionChange(faq.id)}
            className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
          >
            <span className="text-lg font-semibold text-black pr-4">
              {faq.question}
            </span>
            <ChevronDown
              className={`shrink-0 w-5 h-5 text-gray-500 transition-transform duration-300 ${
                openAccordion === faq.id ? "transform rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openAccordion === faq.id ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <div className="px-6 pb-5 text-gray-700 leading-relaxed">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
