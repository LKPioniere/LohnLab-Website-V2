import { RefreshCw, Shield, Calculator, FileDown, Send, ArrowRight, ArrowLeft, Database, Users } from "lucide-react";
import datevWorkflowImage from "@/assets/datev-lohnlab-workflow.png";

export default function DatevIntegration() {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 to-gray-100 relative">
      {/* Visuelle Abtrennung oben */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--lohn-teal)] to-[var(--lohn-primary)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-[var(--lohn-teal)]/10 rounded-full px-8 py-3 mb-6">
            <span className="text-[var(--lohn-teal)] font-semibold text-lg">🔄 Integration</span>
          </div>
        </div>
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

        {/* Intelligenter Datenkreislauf */}
        <div className="bg-gradient-to-r from-[var(--lohn-primary)] to-[var(--lohn-secondary)] rounded-2xl p-8 text-white mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">So funktioniert es in der Praxis</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="text-white text-xl" />
              </div>
              <h4 className="font-semibold mb-3">Exakte Berechnung</h4>
              <p className="text-blue-100 text-sm">Lohnerhöhungen und neue Gehälter werden auf Basis aktueller Stammdaten berechnet</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileDown className="text-white text-xl" />
              </div>
              <h4 className="font-semibold mb-3">Entwürfe speichern</h4>
              <p className="text-blue-100 text-sm">Verschiedene Szenarien jederzeit für spätere Meetings oder Entscheidungen zwischenspeichern</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="text-white text-xl" />
              </div>
              <h4 className="font-semibold mb-3">Umsetzung per Klick</h4>
              <p className="text-blue-100 text-sm">Alle beschlossenen Änderungen gehen per Knopfdruck zurück ins DATEV-System</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4">Vorteile für Steuerberater und Unternehmen</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-100">
              <div>
                <p>✓ Kein E-Mail-Ping-Pong</p>
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
