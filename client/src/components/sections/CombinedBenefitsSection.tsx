import { TrendingUp, Euro, Calculator, Crown, Check, ArrowDown, ChevronRight } from "lucide-react";
import { DEMO_EMPLOYEES } from "@/constants/demo-data";
import { GENERAL_BENEFITS } from "@/constants/benefits";
import benefitsImage from "@assets/generated_images/Business_benefits_and_savings_7ce3e3e1.png";

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
            Erleben Sie, wie Sie mit uns bei Gehaltserhöhungen ganz leicht 
            <span className="text-[var(--lohn-secondary)] font-semibold"> bis zu 50% der Kosten sparen</span> – bei 
            gleichbleibender Attraktivität für Ihre Mitarbeiter.
          </p>
        </div>

        {/* Vertikales Layout mit Verbindung */}
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Vorteile Karte */}
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src={benefitsImage} 
                  alt="Unternehmensvorteile und Kosteneinsparungen" 
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
            <div className="mb-8 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 text-[var(--lohn-primary)] font-semibold">ID</th>
                    <th className="text-left py-3 text-[var(--lohn-primary)] font-semibold">Name</th>
                    <th className="text-left py-3 text-[var(--lohn-primary)] font-semibold">Abteilung</th>
                    <th className="text-left py-3 text-[var(--lohn-primary)] font-semibold">Gehalt alt</th>
                    <th className="text-left py-3 text-[var(--lohn-primary)] font-semibold">Gehalt neu</th>
                    <th className="text-left py-3 text-[var(--lohn-purple)] font-semibold">Ersparnis</th>
                  </tr>
                </thead>
                <tbody>
                  {DEMO_EMPLOYEES.map((employee, index) => (
                    <tr key={employee.id} className={index < DEMO_EMPLOYEES.length - 1 ? "border-b border-gray-100" : ""}>
                      <td className="py-3">{employee.id}</td>
                      <td className="py-3">{employee.name}</td>
                      <td className="py-3">{employee.department}</td>
                      <td className="py-3">{employee.salary}</td>
                      <td className="py-3">{employee.newSalary}</td>
                      <td className="py-3">
                        <div className="flex items-center">
                          <Crown className="w-4 h-4 text-[var(--lohn-purple)] mr-2" />
                          <span className="text-[var(--lohn-purple)] font-semibold">{employee.monthlySavings}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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