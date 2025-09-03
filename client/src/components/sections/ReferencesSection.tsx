import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import ReferenceCard from "@/components/common/ReferenceCard";
import { REFERENCES } from "@/constants/references";

/**
 * Referenzen-Sektion Komponente
 */
export default function ReferencesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReference = () => {
    setCurrentIndex((prev) => (prev + 1) % REFERENCES.length);
  };

  const prevReference = () => {
    setCurrentIndex((prev) => (prev - 1 + REFERENCES.length) % REFERENCES.length);
  };

  const currentRef = REFERENCES[currentIndex];

  return (
    <section className="py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-y-4 border-[var(--lohn-teal)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[var(--lohn-teal)]/10 rounded-full px-8 py-3 mb-6">
            <span className="text-[var(--lohn-teal)] font-semibold text-lg">✓ Vertrauen durch Erfahrung</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
            Über 500 Unternehmen vertrauen bereits auf uns
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von Start-ups bis Konzerne - Firmen verschiedenster Branchen nutzen bereits erfolgreich unsere Lohnoptimierung
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Einheitliche Referenz-Karte */}
          <ReferenceCard reference={currentRef} />

          {/* Navigation - Only show when there are multiple references */}
          {REFERENCES.length > 1 && (
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevReference}
                className="p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              
              <div className="flex space-x-2 items-center">
                {REFERENCES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex 
                        ? `bg-[var(--lohn-primary)]` 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextReference}
                className="p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}