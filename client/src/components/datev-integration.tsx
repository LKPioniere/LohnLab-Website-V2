import { RefreshCw, Shield, Calculator, FileDown, Send, ArrowRight, ArrowLeft, Database, Users } from "lucide-react";
import datevWorkflowImage from "@/assets/datev-lohnlab-workflow.png";

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
                  <p className="text-gray-600">Optimierte Gehaltsdaten zurück nach DATEV – nahtlos und fehlerfrei</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={datevWorkflowImage} 
              alt="Bidirektionale DATEV-LohnLab Integration" 
              className="rounded-2xl shadow-xl w-full max-w-md h-auto"
            />
          </div>
        </div>

        {/* Erweiterte DATEV-Features */}
        <div className="bg-gradient-to-r from-[var(--lohn-primary)] to-[var(--lohn-secondary)] rounded-2xl p-8 text-white mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Von der Berechnung zur Umsetzung</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="text-white text-xl" />
              </div>
              <h4 className="font-semibold mb-3">Berechnung</h4>
              <p className="text-blue-100 text-sm">Präzise Lohnoptimierung mit echtem DATEV-Lohnprogramm</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileDown className="text-white text-xl" />
              </div>
              <h4 className="font-semibold mb-3">Probeabrechnungen</h4>
              <p className="text-blue-100 text-sm">Transparente Downloads im DATEV-Format für Mandantenkommunikation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="text-white text-xl" />
              </div>
              <h4 className="font-semibold mb-3">Umsetzung</h4>
              <p className="text-blue-100 text-sm">Direkte Übertragung ins DATEV-System ohne Medienbrüche</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4">Vorteile für Unternehmen und ihre Steuerberater</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-100">
              <div>
                <p>✓ Kein Email-Ping-Pong</p>
                <p>✓ Keine Übertragungsfehler</p>
              </div>
              <div>
                <p>✓ DSGVO-konform</p>
                <p>✓ Zeitersparnis durch Automatisierung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
