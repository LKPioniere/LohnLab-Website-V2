import { Users, Euro, Calendar, TrendingUp, PieChart, BarChart3, Target, Award } from "lucide-react";
import dashboardImage from "@/assets/dashboard-preview.png";

export default function DashboardPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
            Das LohnLab Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alle wichtigen Kennzahlen und Optimierungspotentiale auf einen Blick
          </p>
        </div>

        {/* Enhanced Dashboard */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Guten Abend</h3>
              <p className="text-gray-600">Übersicht für MS GmbH</p>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Users className="w-4 h-4" />
                <span>Mitarbeiter verwalten</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-[var(--lohn-primary)] text-white rounded-lg hover:bg-[var(--lohn-secondary)] transition-colors">
                <Euro className="w-4 h-4" />
                <span>Gehaltsrechner</span>
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-6 h-6" />
                <span className="text-blue-100 text-sm">davon aktiv: 102</span>
              </div>
              <div className="text-3xl font-bold">102</div>
              <div className="text-blue-100">Erfasste Mitarbeiter</div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <Euro className="w-6 h-6" />
                <span className="text-green-100 text-sm">Ø pro Mitarbeiter</span>
              </div>
              <div className="text-3xl font-bold">3.761 €</div>
              <div className="text-green-100">Bruttogehälter</div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <Calendar className="w-6 h-6" />
                <span className="text-purple-100 text-sm">Ø pro Mitarbeiter</span>
              </div>
              <div className="text-3xl font-bold">42</div>
              <div className="text-purple-100">Alter</div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <Target className="w-6 h-6" />
                <span className="text-orange-100 text-sm">Verfügbar</span>
              </div>
              <div className="text-3xl font-bold">847 €</div>
              <div className="text-orange-100">Optimierungspotential</div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Gehaltsverteilung */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <PieChart className="w-5 h-5 mr-2 text-[var(--lohn-primary)]" />
                Gehaltsverteilung
              </h4>
              <p className="text-sm text-gray-600 mb-4">Verteilung der Mitarbeiter nach Bruttogehaltsklassen</p>
              
              {/* Simplified pie chart representation */}
              <div className="relative w-48 h-48 mx-auto mb-4">
                <div className="w-full h-full rounded-full border-8 border-blue-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-teal-400 to-orange-400 rounded-full"></div>
                  <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">102</div>
                      <div className="text-sm text-gray-600">Mitarbeiter</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
                    <span className="text-sm">2.000€ - 3.000€</span>
                  </div>
                  <span className="text-sm font-medium">35</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-teal-400 rounded mr-2"></div>
                    <span className="text-sm">3.000€ - 4.000€</span>
                  </div>
                  <span className="text-sm font-medium">26</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-400 rounded mr-2"></div>
                    <span className="text-sm">4.000€ - 5.000€</span>
                  </div>
                  <span className="text-sm font-medium">19</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
                    <span className="text-sm">{">"} 5.000€</span>
                  </div>
                  <span className="text-sm font-medium">22</span>
                </div>
              </div>
            </div>

            {/* Lohnkostenentwicklung */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                Lohnkostenentwicklung
              </h4>
              <p className="text-sm text-gray-600 mb-4">Entwicklung der monatlichen Lohnkosten über Zeit</p>
              
              {/* Chart representation */}
              <div className="h-40 bg-white rounded-lg p-4 mb-4 relative">
                <div className="absolute bottom-4 left-4 right-4 top-4">
                  <svg className="w-full h-full" viewBox="0 0 300 120">
                    <polyline
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="3"
                      points="0,80 50,75 100,70 150,65 200,55 250,50 300,45"
                    />
                    <circle cx="300" cy="45" r="4" fill="#10b981" />
                  </svg>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-semibold text-gray-800">+12,5%</div>
                  <div className="text-sm text-gray-600">vs. Vorjahr</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-green-600">384.022 €</div>
                  <div className="text-sm text-gray-600">Aktueller Monat</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-blue-600">391.240 €</div>
                  <div className="text-sm text-gray-600">Prognose nächster Monat</div>
                </div>
              </div>
            </div>

            {/* Lohnoptimierungsstatus */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-purple-600" />
                Lohnoptimierungspotential
              </h4>
              <p className="text-sm text-gray-600 mb-4">Genutztes vs. verfügbares optimiertes Budget</p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Bereits genutzt</span>
                    <span className="text-sm font-bold text-purple-600">1.243 € / Monat</span>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-3">
                    <div className="bg-purple-600 h-3 rounded-full" style={{width: '59%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Noch verfügbar</span>
                    <span className="text-sm font-bold text-orange-600">847 € / Monat</span>
                  </div>
                  <div className="w-full bg-orange-200 rounded-full h-3">
                    <div className="bg-orange-600 h-3 rounded-full" style={{width: '41%'}}></div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 mt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">2.090 €</div>
                    <div className="text-sm text-gray-600">Maximales Optimierungspotential/Monat</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Branchenvergleich */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-600" />
                Branchenvergleich
              </h4>
              <p className="text-sm text-gray-600 mb-4">Deine Gehälter im Vergleich zu anderen Unternehmen</p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Dein Durchschnittsgehalt</span>
                    <span className="text-lg font-bold text-[var(--lohn-primary)]">3.761 €</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Branchendurchschnitt</span>
                    <span className="text-sm text-gray-600">3.540 €</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '106%'}}></div>
                  </div>
                  <div className="text-xs text-green-600 mt-1">+6,2% über Branchenschnitt</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-blue-600">Top 25%</div>
                    <div className="text-xs text-gray-600">Position in der Branche</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-green-600">+221€</div>
                    <div className="text-xs text-gray-600">über Durchschnitt</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}