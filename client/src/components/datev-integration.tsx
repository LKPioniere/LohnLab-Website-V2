import { RefreshCw, Shield, Calculator, FileDown, Send, ArrowRight, ArrowLeft, Database, Users } from "lucide-react";

export default function DatevIntegration() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-6">Die perfekte Symbiose: DATEV meets LohnLab</h2>
            <p className="text-xl text-gray-600 mb-8">
              Erleben Sie den intelligenten Datenkreislauf zwischen Ihrem DATEV-System und LohnLab Cockpit. 
              Ihre Stammdaten bleiben immer aktuell, Ihre Berechnungen werden präziser denn je.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[var(--lohn-teal)] rounded-xl flex items-center justify-center">
                  <ArrowRight className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Stammdaten-Import</h4>
                  <p className="text-gray-600">Mitarbeiterdaten fließen automatisch ins Cockpit – für exakte Lohnerhöhungs-Berechnungen</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[var(--lohn-secondary)] rounded-xl flex items-center justify-center">
                  <Calculator className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Optimierungs-Engine</h4>
                  <p className="text-gray-600">Intelligente Berechnungen mit realen Daten – keine Schätzungen, nur präzise Ergebnisse</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[var(--lohn-purple)] rounded-xl flex items-center justify-center">
                  <ArrowLeft className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Rückübertragung</h4>
                  <p className="text-gray-600">Optimierte Gehaltsdaten zurück ins DATEV – nahtlos und fehlerfrei</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            {/* Bidirectional DATEV-LohnLab Workflow Diagram */}
            <div className="w-full max-w-md">
              <svg viewBox="0 0 400 300" className="w-full h-auto">
                {/* DATEV System */}
                <rect x="50" y="50" width="100" height="60" rx="10" fill="#2563eb" />
                <text x="100" y="75" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">DATEV</text>
                <text x="100" y="90" textAnchor="middle" fill="white" fontSize="10">System</text>
                
                {/* LohnLab Cockpit */}
                <rect x="250" y="50" width="100" height="60" rx="10" fill="#0891b2" />
                <text x="300" y="75" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">LohnLab</text>
                <text x="300" y="90" textAnchor="middle" fill="white" fontSize="10">Cockpit</text>
                
                {/* Top Arrow: DATEV to LohnLab (Stammdaten) */}
                <path d="M160 65 L240 65" stroke="#10b981" strokeWidth="3" fill="none" markerEnd="url(#arrowhead-green)" />
                <text x="200" y="60" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">Stammdaten</text>
                <text x="200" y="48" textAnchor="middle" fill="#6b7280" fontSize="9">Import</text>
                
                {/* Bottom Arrow: LohnLab to DATEV (Optimierte Daten) */}
                <path d="M240 95 L160 95" stroke="#f59e0b" strokeWidth="3" fill="none" markerEnd="url(#arrowhead-orange)" />
                <text x="200" y="110" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">Optimierte Daten</text>
                <text x="200" y="122" textAnchor="middle" fill="#6b7280" fontSize="9">Export</text>
                
                {/* Central Process Circle */}
                <circle cx="200" cy="80" r="25" fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" strokeWidth="2" strokeDasharray="5,5">
                  <animateTransform attributeName="transform" type="rotate" values="0 200 80;360 200 80" dur="10s" repeatCount="indefinite" />
                </circle>
                <text x="200" y="85" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">Live Sync</text>
                
                {/* Data Examples */}
                <g>
                  <rect x="30" y="140" width="140" height="100" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                  <text x="100" y="155" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold">Stammdaten Flow</text>
                  <text x="40" y="175" fill="#64748b" fontSize="9">• Mitarbeiter-Stammdaten</text>
                  <text x="40" y="190" fill="#64748b" fontSize="9">• Aktuelle Gehälter</text>
                  <text x="40" y="205" fill="#64748b" fontSize="9">• Sozialversicherung</text>
                  <text x="40" y="220" fill="#64748b" fontSize="9">• Steuerklassen</text>
                </g>
                
                <g>
                  <rect x="230" y="140" width="140" height="100" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                  <text x="300" y="155" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold">Optimierte Ausgabe</text>
                  <text x="240" y="175" fill="#64748b" fontSize="9">• Neue Gehaltsstrukturen</text>
                  <text x="240" y="190" fill="#64748b" fontSize="9">• Benefits-Pakete</text>
                  <text x="240" y="205" fill="#64748b" fontSize="9">• Neueinstellungen</text>
                  <text x="240" y="220" fill="#64748b" fontSize="9">• Anpassungen</text>
                </g>
                
                {/* Arrow markers */}
                <defs>
                  <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
                  </marker>
                  <marker id="arrowhead-orange" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
                  </marker>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Intelligenter Datenkreislauf */}
        <div className="bg-gradient-to-r from-[var(--lohn-primary)] to-[var(--lohn-secondary)] rounded-2xl p-8 text-white mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Der intelligente Datenkreislauf</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="text-white text-xl" />
              </div>
              <h4 className="font-semibold mb-3">Stammdaten-Sync</h4>
              <p className="text-blue-100 text-sm">Ihre DATEV-Daten fließen automatisch ins Cockpit – immer aktuell, immer präzise</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="text-white text-xl" />
              </div>
              <h4 className="font-semibold mb-3">Intelligente Optimierung</h4>
              <p className="text-blue-100 text-sm">Lohnerhöhungen und Neueinstellungen werden mit echten Daten berechnet – fehlerfrei</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="text-white text-xl" />
              </div>
              <h4 className="font-semibold mb-3">Nahtlose Rückführung</h4>
              <p className="text-blue-100 text-sm">Optimierte Gehaltsdaten kehren direkt ins DATEV zurück – ohne Medienbruch</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4">Revolution für Steuerberater und Unternehmen</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-100">
              <div>
                <p>✓ Bidirektionale Schnittstelle eliminiert Doppelarbeiten</p>
                <p>✓ Echte Stammdaten statt Schätzungen</p>
                <p>✓ Fehlerfreie Datenübertragung</p>
              </div>
              <div>
                <p>✓ Automatisierter Workflow spart Stunden</p>
                <p>✓ DSGVO-konforme Verschlüsselung</p>
                <p>✓ Sofortige Verfügbarkeit optimierter Daten</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
