import { TrendingUp, Euro, Calculator, Crown, Check, ArrowDown, ChevronRight } from "lucide-react";
import { DEMO_EMPLOYEES } from "@/constants/demo-data";
import { GENERAL_BENEFITS } from "@/constants/benefits";
import fruitBasketImage from "@/assets/fruit-basket.jpg";
import EmployeeTable from "@/components/common/EmployeeTable";

/**
 * Kombinierte Vorteile und Praxis-Demo Sektion
 */
export default function CombinedBenefitsSection() {
  // Calculate total savings
  const totalMonthlySavings = DEMO_EMPLOYEES.reduce((sum, emp) => 
    sum + parseInt(emp.monthlySavings.replace(' €', '')), 0
  );
  const totalYearlySavings = totalMonthlySavings * 12;

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
            Lohnoptimierung in der Praxis
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Erleben Sie, wie Sie mit intelligenter Gehaltsgestaltung 
            <span className="text-[var(--lohn-secondary)] font-semibold"> bis zu 50% Kosten sparen</span> und 
            gleichzeitig das Netto Ihrer Mitarbeiter erhöhen.
          </p>
        </div>

        {/* Vertikales Layout mit Verbindung */}
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Vorteile Karte */}
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src={fruitBasketImage} 
                  alt="Obstkorb als Symbol für Sachbezüge" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-6">
                  Ihre Vorteile auf einen Blick
                </h3>
                <div className="space-y-4">
                  {GENERAL_BENEFITS.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--lohn-primary)] text-lg">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 text-sm mt-1">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Verbindungselement */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-b from-[var(--lohn-primary)] to-[var(--lohn-secondary)] text-white rounded-full p-4 shadow-lg">
              <ArrowDown className="w-6 h-6" />
            </div>
          </div>

          {/* Live Demo Karte */}
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <div className="text-center mb-8">
              <Crown className="w-12 h-12 text-[var(--lohn-purple)] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-2">
                Live-Berechnung: 5% Lohnerhöhung optimiert
              </h3>
              <p className="text-gray-600">
                Sehen Sie das Einsparpotential bei einer typischen Gehaltsrunde
              </p>
            </div>

            {/* Mitarbeiter Tabelle */}
            <div className="mb-8">
              <EmployeeTable employees={DEMO_EMPLOYEES} />
            </div>

            {/* Gesamtersparnis Box */}
            <div className="bg-gradient-to-r from-[var(--lohn-primary)] to-[var(--lohn-secondary)] rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-blue-100 text-sm mb-1">Monatliche Ersparnis</p>
                  <p className="text-3xl font-bold">{totalMonthlySavings.toLocaleString('de-DE')} €</p>
                </div>
                <div>
                  <p className="text-blue-100 text-sm mb-1">Jährliche Ersparnis</p>
                  <p className="text-3xl font-bold">{totalYearlySavings.toLocaleString('de-DE')} €</p>
                </div>
                <div>
                  <p className="text-blue-100 text-sm mb-1">ROI</p>
                  <p className="text-3xl font-bold">Sofort</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20 text-center">
                <p className="text-blue-100 flex items-center justify-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Bei nur 4 Mitarbeitern mit optimierter 5% Lohnerhöhung
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}