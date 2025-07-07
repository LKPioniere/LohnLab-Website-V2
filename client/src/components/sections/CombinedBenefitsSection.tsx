import { TrendingUp, Euro, Calculator, Crown, Check } from "lucide-react";
import { DEMO_EMPLOYEES } from "@/constants/demo-data";
import { GENERAL_BENEFITS } from "@/constants/benefits";
import fruitBasketImage from "@/assets/fruit-basket.jpg";

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

        {/* Zwei-Spalten Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Linke Spalte - Vorteile */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <img 
                src={fruitBasketImage} 
                alt="Obstkorb als Symbol für Sachbezüge" 
                className="w-20 h-20 rounded-xl object-cover mr-4"
              />
              <h3 className="text-2xl font-bold text-[var(--lohn-primary)]">
                Ihre Vorteile auf einen Blick
              </h3>
            </div>
            
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

          {/* Rechte Spalte - Live Demo */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-[var(--lohn-primary)]">
                Live-Berechnung: 5% Lohnerhöhung
              </h3>
              <Crown className="w-8 h-8 text-[var(--lohn-purple)]" />
            </div>

            {/* Mini Calculator Demo */}
            <div className="space-y-4">
              {DEMO_EMPLOYEES.slice(0, 3).map((employee) => (
                <div key={employee.id} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-[var(--lohn-primary)]">{employee.name}</div>
                      <div className="text-sm text-gray-600">{employee.department}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[var(--lohn-teal)] font-bold">
                        {employee.monthlySavings}/Monat
                      </div>
                      <div className="text-xs text-gray-500">
                        {employee.optimization}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gesamtersparnis */}
            <div className="mt-6 bg-gradient-to-r from-[var(--lohn-primary)] to-[var(--lohn-secondary)] rounded-xl p-6 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-blue-100 text-sm">Jährliche Ersparnis</p>
                  <p className="text-3xl font-bold">{totalYearlySavings.toLocaleString('de-DE')} €</p>
                </div>
                <Calculator className="w-12 h-12 text-blue-200" />
              </div>
              <p className="text-blue-100 text-sm mt-3">
                Bei nur 4 Mitarbeitern mit 5% Lohnerhöhung
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}