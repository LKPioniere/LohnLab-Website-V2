import { useState, useEffect } from "react";
import { Check, FlaskConical, Rocket, ChevronLeft, ChevronRight, Info, X, Activity, Calendar } from "lucide-react";

export default function DevelopmentStatusSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    // Calculate days until August 4, 2024 (MVP completion)
    const mvpDate = new Date('2024-08-04');
    const today = new Date();
    const timeDiff = mvpDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    setDaysLeft(daysDiff > 0 ? daysDiff : 0);
  }, []);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-lg rounded-l-lg p-3 z-40 transition-all duration-300 hover:shadow-xl ${
          isOpen ? 'translate-x-80' : ''
        }`}
      >
        <div className="flex items-center space-x-2">
          {isOpen ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          <Activity className="w-5 h-5" />
        </div>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-16 h-[calc(100%-4rem)] w-80 bg-white border-l border-gray-200 shadow-2xl z-30 transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-[var(--lohn-primary)]">
              Entwicklungsstatus
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
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
                <p className="text-[var(--lohn-secondary)] font-medium text-xs mt-1">Start: 04. August 2024</p>
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

          {/* Status Overview */}
          <div className="mt-8 space-y-4">
            <div className="p-4 bg-gradient-to-r from-[var(--lohn-primary)] to-[var(--lohn-secondary)] rounded-lg text-white">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-semibold text-sm flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Nächster Meilenstein
                </h5>
              </div>
              <div className="text-center py-4">
                <div className="text-4xl font-bold mb-1">{daysLeft}</div>
                <div className="text-sm text-blue-100">Tage verbleibend</div>
              </div>
              <div className="text-xs text-blue-100 text-center border-t border-white/20 pt-3">
                <div className="font-semibold">MVP Fertigstellung</div>
                <div>04. August 2024</div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
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
      </div>
    </>
  );
}