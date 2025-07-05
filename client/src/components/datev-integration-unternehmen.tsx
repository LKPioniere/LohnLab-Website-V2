import { RefreshCw, Shield, Calculator, Zap, FileCheck, Send } from "lucide-react";

export default function DatevIntegrationUnternehmen() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">Nahtlose Integration in Ihre bestehenden Prozesse</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Das LohnLab Cockpit arbeitet direkt mit DATEV zusammen - für maximale Genauigkeit und minimalen Aufwand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-6">Automatische DATEV-Synchronisation</h3>
            <p className="text-xl text-gray-600 mb-8">
              Ihre Mitarbeiterdaten werden automatisch über die DATEV-API synchronisiert - 
              immer aktuell, immer korrekt.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[var(--lohn-teal)] rounded-xl flex items-center justify-center">
                  <RefreshCw className="text-[var(--lohn-primary)] text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Automatische Updates</h4>
                  <p className="text-gray-600">Stammdaten werden automatisch synchronisiert</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[var(--lohn-secondary)] rounded-xl flex items-center justify-center">
                  <Shield className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Sichere Datenübertragung</h4>
                  <p className="text-gray-600">DSGVO-konforme, verschlüsselte Verbindung</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[var(--lohn-purple)] rounded-xl flex items-center justify-center">
                  <Calculator className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Echte DATEV-Berechnung</h4>
                  <p className="text-gray-600">Präzise Lohnberechnung auf DATEV-Niveau</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="DATEV integration dashboard" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>

        {/* Workflow Section */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-8 text-center">Einfacher Workflow - Von der Berechnung zur Umsetzung</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="text-[var(--lohn-primary)] text-xl" />
              </div>
              <h4 className="font-semibold text-[var(--lohn-primary)] mb-3">1. Berechnung</h4>
              <p className="text-gray-600 text-sm">Lohnerhöhungen mit echtem DATEV-Lohnprogramm berechnen. Verschiedene Modi für jede Situation verfügbar.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--lohn-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="text-white text-xl" />
              </div>
              <h4 className="font-semibold text-[var(--lohn-primary)] mb-3">2. Prüfung</h4>
              <p className="text-gray-600 text-sm">Transparente Probeabrechnungen im DATEV-Format herunterladen. Perfekt für Mitarbeiterkommunikation.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--lohn-purple)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="text-white text-xl" />
              </div>
              <h4 className="font-semibold text-[var(--lohn-primary)] mb-3">3. Umsetzung</h4>
              <p className="text-gray-600 text-sm">Per Knopfdruck direkt an Ihren Steuerberater übertragen. Keine Excel-Listen oder E-Mails mehr nötig.</p>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Zap className="text-[var(--lohn-teal)] w-8 h-8" />
              <h4 className="text-lg font-semibold text-[var(--lohn-primary)]">Maximale Effizienz</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h5 className="font-medium text-[var(--lohn-primary)] mb-2">Vorher:</h5>
                <ul className="text-gray-600 space-y-1">
                  <li>• Manuelle Excel-Berechnungen</li>
                  <li>• E-Mail-Austausch mit Steuerberater</li>
                  <li>• Rückfragen und Korrekturen</li>
                  <li>• Zeitaufwand: Mehrere Stunden</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-[var(--lohn-primary)] mb-2">Mit LohnLab Cockpit:</h5>
                <ul className="text-gray-600 space-y-1">
                  <li>• Automatische Berechnung</li>
                  <li>• Direkte DATEV-Übertragung</li>
                  <li>• Keine Rückfragen nötig</li>
                  <li>• Zeitaufwand: Wenige Minuten</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}