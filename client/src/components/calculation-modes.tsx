import { Euro, Wallet, TrendingUp, Users, BarChart3 } from "lucide-react";
import { Link } from "wouter";

export default function CalculationModes() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-[var(--lohn-light)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">Lohnerhöhungen strategisch geplant</h2>
          <p className="text-xl text-gray-600 mb-6">Präzise Kalkulationen statt Bauchgefühl - für Steuerberater und Unternehmen, die auf Nummer sicher gehen</p>
          <div className="flex justify-center">
            <Link 
              href="/loesungen/lohnerhoehung"
              className="inline-flex items-center px-6 py-3 bg-[var(--lohn-teal)] text-white rounded-full font-semibold hover:bg-[var(--lohn-teal)]/80 transition-colors"
            >
              Alle Details zur Lohnerhöhung →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-[var(--lohn-teal)] rounded-2xl flex items-center justify-center mb-6">
              <Euro className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">Präzision auf DATEV-Niveau</h3>
            <p className="text-gray-600">Exakte Berechnungen mit allen Umlagen und Steuerfaktoren - verlassen Sie sich auf professionelle Standards.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-[var(--lohn-secondary)] rounded-2xl flex items-center justify-center mb-6">
              <Users className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">Effizienz für große Teams</h3>
            <p className="text-gray-600">Optimieren Sie alle Mitarbeiter gleichzeitig - maximale Zeitersparnis bei konstant hoher Qualität.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-[var(--lohn-purple)] rounded-2xl flex items-center justify-center mb-6">
              <BarChart3 className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">Überzeugende Transparenz</h3>
            <p className="text-gray-600">Klare Vorher-Nachher-Vergleiche schaffen Vertrauen und erleichtern schwierige Gespräche.</p>
          </div>
        </div>


      </div>
    </section>
  );
}
