import { Euro, Wallet, TrendingUp, Users, BarChart3 } from "lucide-react";
import { Link } from "wouter";

export default function CalculationModes() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-[var(--lohn-light)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">Lohnerhöhung: Exakt statt Pi mal Daumen</h2>
          <p className="text-xl text-gray-600 mb-6">Präzise Lohnberechnungen auf DATEV-Niveau mit echtem hinterlegten Lohnprogramm</p>
          <div className="flex justify-center">
            <Link 
              href="/loesungen/lohnerhoehung"
              className="inline-flex items-center px-6 py-3 bg-[var(--lohn-teal)] text-[var(--lohn-primary)] rounded-full font-semibold hover:bg-[var(--lohn-teal)]/80 transition-colors"
            >
              Alle Details zur Lohnerhöhung →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-[var(--lohn-teal)] rounded-2xl flex items-center justify-center mb-6">
              <Euro className="text-[var(--lohn-primary)] text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">Statt Excel-Schätzungen</h3>
            <p className="text-gray-600">Exakte Berechnungen mit allen Lohnfaktoren, Umlagen und Berufsgenossenschaftsbeiträgen.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-[var(--lohn-secondary)] rounded-2xl flex items-center justify-center mb-6">
              <Users className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">Mehrere Mitarbeiter</h3>
            <p className="text-gray-600">Berechnung für alle Mitarbeiter gleichzeitig statt Einzelrechnungen.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-[var(--lohn-purple)] rounded-2xl flex items-center justify-center mb-6">
              <BarChart3 className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">Probeabrechnungen</h3>
            <p className="text-gray-600">DATEV-konforme Probeabrechnungen für transparente Kommunikation.</p>
          </div>
        </div>


      </div>
    </section>
  );
}
