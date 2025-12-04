import { TrendingUp, Euro, Calculator, Crown } from "lucide-react";
import { DEMO_EMPLOYEES } from "@/constants/demo-data";

/**
 * Demo-Calculator Sektion Komponente
 */
export default function DemoCalculatorSection() {
  // Calculate total savings
  const totalMonthlySavings = DEMO_EMPLOYEES.reduce((sum, emp) => 
    sum + parseInt(emp.monthlySavings.replace(' €', '')), 0
  );
  const totalYearlySavings = totalMonthlySavings * 12;

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
            Lohnoptimierung aus der Praxis
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Vier Mitarbeiter erhalten eine 5% Brutto-Lohnerhöhung - und du sparst trotzdem Kosten.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* Employee List - Wider Layout */}
            <div className="xl:col-span-2">
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-6 flex items-center">
                <Crown className="w-6 h-6 text-[var(--lohn-purple)] mr-2" />
                Optimierung auf Knopfdruck
              </h3>
              
              <div className="space-y-4">
                {DEMO_EMPLOYEES.map((employee, index) => (
                  <div key={employee.id} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                      <div>
                        <div className="font-semibold text-[var(--lohn-primary)]">{employee.name}</div>
                        <div className="text-sm text-gray-600">{employee.department}</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-sm text-gray-500">Aktuell</div>
                        <div className="font-semibold">{employee.salary}</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-sm text-gray-500">+ {employee.increase}</div>
                        <div className="font-semibold text-[var(--lohn-teal)]">{employee.newSalary}</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="bg-green-100 rounded-lg p-3">
                          <div className="text-sm text-green-700">Ersparnis/Monat</div>
                          <div className="font-bold text-green-800">{employee.monthlySavings}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Savings Potential */}
            <div className="xl:col-span-1">
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 text-[var(--lohn-teal)] mr-2" />
                Dein Sparpotential
              </h3>
              
              <div className="space-y-6">
                {/* Monthly Savings */}
                <div className="bg-gradient-to-br from-[var(--lohn-teal)] to-[var(--lohn-secondary)] rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <Euro className="w-8 h-8" />
                    <div className="text-right">
                      <div className="text-sm opacity-90">Pro Monat</div>
                      <div className="text-2xl font-bold">{totalMonthlySavings} €</div>
                    </div>
                  </div>
                  <div className="text-sm opacity-90">Eingesparte Lohnkosten</div>
                </div>

                {/* Yearly Projection */}
                <div className="bg-gradient-to-br from-[var(--lohn-purple)] to-[var(--lohn-primary)] rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <Calculator className="w-8 h-8" />
                    <div className="text-right">
                      <div className="text-sm opacity-90">Pro Jahr</div>
                      <div className="text-2xl font-bold">{totalYearlySavings.toLocaleString()} €</div>
                    </div>
                  </div>
                  <div className="text-sm opacity-90">Hochgerechnet</div>
                </div>

                {/* Benefits Summary */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-[var(--lohn-primary)] mb-4">Das erreichst du:</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[var(--lohn-teal)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Mitarbeiter erhalten eine vollwertige Lohnerhöhung
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[var(--lohn-purple)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Du sparst dabei bis zu 50% der Kosten
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[var(--lohn-primary)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      LohnLab übernimmt die rechtssichere Umsetzung
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}