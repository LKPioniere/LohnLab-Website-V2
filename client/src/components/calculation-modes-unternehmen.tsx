import { Euro, Wallet, TrendingUp, Users, BarChart3, FileDown } from "lucide-react";

export default function CalculationModesUnternehmen() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-[var(--lohn-light)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">Flexible Lohnerhöhungsoptionen für jede Situation</h2>
          <p className="text-xl text-gray-600">Exakte Berechnungen mit echtem DATEV-Lohnprogramm für präzise Ergebnisse</p>
        </div>

        {/* Berechnungsmodi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-[var(--lohn-secondary)] rounded-2xl flex items-center justify-center mb-6">
              <Euro className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">Brutto-Modus</h3>
            <p className="text-gray-600 mb-6">Klassische Bruttogehalt-Berechnung für bekannte Budgetplanung.</p>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-600"><strong>Ideal für:</strong> Standardverhandlungen und bekannte Gehaltsstrukturen</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-[var(--lohn-teal)]">
            <div className="w-16 h-16 bg-[var(--lohn-teal)] rounded-2xl flex items-center justify-center mb-6">
              <Wallet className="text-[var(--lohn-primary)] text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">
              Netto-Modus <span className="text-[var(--lohn-teal)] text-sm font-normal">(Empfohlen)</span>
            </h3>
            <p className="text-gray-600 mb-6">Mitarbeiter erfahren genau, was nach Steuern und Abzügen ankommt.</p>
            <div className="bg-[var(--lohn-teal)]/10 rounded-xl p-4">
              <p className="text-sm text-[var(--lohn-primary)]"><strong>Vorteil:</strong> Transparenz und Zufriedenheit bei Mitarbeitern</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-[var(--lohn-purple)] rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">Lohnkosten-Modus</h3>
            <p className="text-gray-600 mb-6">Exakte Budgetplanung - Sie geben Ihr Budget vor und erhalten die optimale Verteilung.</p>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-600"><strong>Perfekt für:</strong> Kostencontrolling und Budgetplanung</p>
            </div>
          </div>
        </div>

        {/* Erweiterte Features */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
          <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-8 text-center">Erweiterte Lohnerhöhungs-Features</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[var(--lohn-secondary)] rounded-xl flex items-center justify-center mr-4">
                  <Users className="text-white text-lg" />
                </div>
                <h4 className="text-xl font-semibold text-[var(--lohn-primary)]">Flexible Erhöhungsoptionen</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--lohn-teal)] rounded-full"></div>
                  <span><strong>Gemeinsamer Faktor:</strong> z.B. 5% für alle Mitarbeiter</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--lohn-teal)] rounded-full"></div>
                  <span><strong>Fester Betrag:</strong> z.B. 300€ brutto mehr für alle</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--lohn-teal)] rounded-full"></div>
                  <span><strong>Individuelle Werte:</strong> Für jeden Mitarbeiter einzeln anpassbar</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[var(--lohn-teal)] rounded-xl flex items-center justify-center mr-4">
                  <BarChart3 className="text-[var(--lohn-primary)] text-lg" />
                </div>
                <h4 className="text-xl font-semibold text-[var(--lohn-primary)]">Transparente Ergebnisse</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--lohn-secondary)] rounded-full"></div>
                  <span><strong>Gesamtkosten:</strong> Direkte Kostendarstellung für Arbeitgeber</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--lohn-secondary)] rounded-full"></div>
                  <span><strong>Netto-Erhöhung:</strong> Was bei jedem Mitarbeiter effektiv ankommt</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--lohn-secondary)] rounded-full"></div>
                  <span><strong>Effektivität:</strong> Lohnkosten zu Netto-Ratio wird angezeigt</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Umsetzung */}
        <div className="bg-gradient-to-r from-[var(--lohn-primary)] to-[var(--lohn-secondary)] rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Von der Berechnung zur Umsetzung</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FileDown className="text-[var(--lohn-teal)] w-6 h-6" />
                  <span>Transparente Probeabrechnungen im DATEV-Format</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-[var(--lohn-teal)] w-6 h-6" />
                  <span>Perfekt für Mitarbeiterkommunikation und interne Planung</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="text-[var(--lohn-teal)] w-6 h-6" />
                  <span>Per Knopfdruck direkt an den Steuerberater übertragen</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4">Vorteile der direkten DATEV-Übertragung</h4>
              <ul className="space-y-2 text-blue-100">
                <li>✓ Keine Excel-Listen oder E-Mails mehr nötig</li>
                <li>✓ Exakte Datenübertragung ohne Fehlerquellen</li>
                <li>✓ Keine Rückfragen vom Steuerberater</li>
                <li>✓ DSGVO-konforme und sichere Übertragung</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}