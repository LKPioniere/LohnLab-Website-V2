import { RefreshCw, Shield, Calculator, FileDown, Send } from "lucide-react";

export default function DatevIntegration() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-6">Nahtlose DATEV Integration</h2>
            <p className="text-xl text-gray-600 mb-8">
              Über die API-Schnittstelle zu DATEV wird das Cockpit immer mit den aktuellen 
              Stammdaten der Mitarbeiter aktuell gehalten.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[var(--lohn-teal)] rounded-xl flex items-center justify-center">
                  <RefreshCw className="text-[var(--lohn-primary)] text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Automatische Synchronisation</h4>
                  <p className="text-gray-600">Stammdaten werden automatisch aktualisiert</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[var(--lohn-secondary)] rounded-xl flex items-center justify-center">
                  <Shield className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Sichere Datenübertragung</h4>
                  <p className="text-gray-600">Verschlüsselte Verbindung zu DATEV</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[var(--lohn-purple)] rounded-xl flex items-center justify-center">
                  <Calculator className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Echte Lohnberechnung</h4>
                  <p className="text-gray-600">Präzise Berechnung auf DATEV-Niveau</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="DATEV integration visualization" 
              className="rounded-2xl shadow-xl w-full h-auto"
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
              <h4 className="font-semibold mb-3">Direkte Übertragung</h4>
              <p className="text-blue-100 text-sm">Per Knopfdruck exakt ins DATEV-System - keine Excel-Listen mehr</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4">Vorteile für Ihre Mandanten</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-100">
              <div>
                <p>✓ Keine E-Mail-Korrekturen mehr nötig</p>
                <p>✓ Exakte Datenübertragung ohne Fehlerquellen</p>
              </div>
              <div>
                <p>✓ DSGVO-konforme und sichere Übertragung</p>
                <p>✓ Zeitersparnis durch automatisierte Prozesse</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
