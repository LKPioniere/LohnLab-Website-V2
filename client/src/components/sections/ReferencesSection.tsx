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
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
            Vertrauen Sie auf Erfahrung
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unternehmen verschiedenster Branchen nutzen bereits erfolgreich unsere Lohnoptimierung
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