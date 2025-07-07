import { useState } from "react";
import { Check, FlaskConical, Rocket, ChevronLeft, ChevronRight, Info } from "lucide-react";

export default function DevelopmentStatusSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-lg rounded-l-lg p-3 z-50 transition-all duration-300 hover:shadow-xl ${
          isOpen ? 'translate-x-80' : ''
        }`}
      >
        <div className="flex items-center space-x-2">
          {isOpen ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          <Info className="w-5 h-5" />
        </div>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-white border-l border-gray-200 shadow-2xl z-40 transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-2">
            Entwicklungsstatus
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            So entwickelt sich Ihr digitales Lohnoptimierungs-Werkzeug
          </p>

          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="relative pl-8">
              <div className="absolute left-0 top-1 w-6 h-6 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center">
                <Check className="text-white w-4 h-4" />
              </div>
              <div className="border-l-2 border-[var(--lohn-teal)] pl-4 pb-6 -ml-3">
                <h4 className="font-semibold text-[var(--lohn-primary)]">Entwicklung</h4>
                <p className="text-gray-600 text-sm">Grundfunktionen implementiert</p>
                <p className="text-[var(--lohn-teal)] font-medium text-xs mt-1">✓ Abgeschlossen</p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative pl-8">
              <div className="absolute left-0 top-1 w-6 h-6 bg-[var(--lohn-secondary)] rounded-full flex items-center justify-center animate-pulse">
                <FlaskConical className="text-white w-4 h-4" />
              </div>
              <div className="border-l-2 border-gray-300 pl-4 pb-6 -ml-3">
                <h4 className="font-semibold text-[var(--lohn-primary)]">MVP Testing</h4>
                <p className="text-gray-600 text-sm">Externe Tests mit Partnerkanzlei</p>
                <p className="text-[var(--lohn-secondary)] font-medium text-xs mt-1">In Bearbeitung</p>
                <div className="mt-2 bg-gray-100 rounded-full h-2 w-full">
                  <div className="bg-[var(--lohn-secondary)] h-full rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative pl-8">
              <div className="absolute left-0 top-1 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                <Rocket className="text-gray-500 w-4 h-4" />
              </div>
              <div className="pl-4 -ml-3">
                <h4 className="font-semibold text-gray-500">Offizieller Rollout</h4>
                <p className="text-gray-500 text-sm">Markteinführung für alle Kunden</p>
                <p className="text-gray-500 font-medium text-xs mt-1">November 2024</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h5 className="font-semibold text-[var(--lohn-primary)] text-sm mb-2">
              Aktueller Fortschritt
            </h5>
            <div className="flex items-center justify-between text-xs text-gray-600">
              <span>Gesamtfortschritt</span>
              <span className="font-semibold">60%</span>
            </div>
            <div className="mt-2 bg-gray-200 rounded-full h-2 w-full">
              <div className="bg-gradient-to-r from-[var(--lohn-teal)] to-[var(--lohn-secondary)] h-full rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}