import { Crown } from "lucide-react";

export default function DemoCalculator() {
  const employees = [
    { id: "10112", name: "Sarah Schröder", department: "Management", salary: "8.500 €", optimized: true, savings: "+ 27,05 €" },
    { id: "10164", name: "Frank Becker", department: "Verkauf", salary: "5.000 €", optimized: false, savings: null },
    { id: "10168", name: "Daniel Weber", department: "Produktion", salary: "3.500 €", optimized: false, savings: null },
    { id: "10921", name: "Angelika Schwarz", department: "Personal", salary: "3.500 €", optimized: true, savings: "+ 27,05 €" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">Praxis-Beispiel: Messbare Erfolge</h2>
          <p className="text-xl text-gray-600">Sehen Sie selbst, wie Lohnoptimierung konkrete Ergebnisse liefert</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-6">Optimierung auf Knopfdruck</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 text-[var(--lohn-primary)] font-semibold">Personalnummer</th>
                      <th className="text-left py-3 text-[var(--lohn-primary)] font-semibold">Name</th>
                      <th className="text-left py-3 text-[var(--lohn-primary)] font-semibold">Abteilung</th>
                      <th className="text-left py-3 text-[var(--lohn-primary)] font-semibold">Bruttogehalt</th>
                      <th className="text-left py-3 text-[var(--lohn-primary)] font-semibold">Optimierung</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((employee, index) => (
                      <tr key={employee.id} className={index < employees.length - 1 ? "border-b border-gray-100" : ""}>
                        <td className="py-3">{employee.id}</td>
                        <td className="py-3">{employee.name}</td>
                        <td className="py-3">{employee.department}</td>
                        <td className="py-3">{employee.salary}</td>
                        <td className="py-3">
                          {employee.optimized ? (
                            <div className="flex items-center">
                              <div className="w-6 h-6 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mr-2">
                                <Crown className="text-[var(--lohn-primary)] text-xs" />
                              </div>
                              <span className="text-[var(--lohn-teal)] font-semibold">{employee.savings}</span>
                            </div>
                          ) : (
                            <div className="w-12 h-6 bg-gray-200 rounded-full relative">
                              <div className="w-6 h-6 bg-[var(--lohn-primary)] rounded-full absolute left-0"></div>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-[var(--lohn-teal)] to-[var(--lohn-secondary)] rounded-xl p-6 text-white">
                <h4 className="text-lg font-semibold mb-4">Ihr Business Case</h4>
                <p className="text-sm opacity-90 mb-4">
                  <strong>Für Steuerberater:</strong> Bei nur 50 optimierten Mitarbeitenden generieren Sie 
                  <strong>1.352 € monatlich</strong> - das sind <strong>16.230 € Zusatzhonorar pro Jahr</strong>.<br/>
                  <strong>Für Unternehmen:</strong> Bis zu 50% Lohnkosteneinsparung bei gesteigerter Mitarbeiterzufriedenheit.
                </p>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">+ 1.352 €</div>
                  <div className="text-sm">monatlich bei 50 Mitarbeitern</div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Steuerberater - Zusatzerlös/Jahr:</span>
                  <span className="font-bold text-[var(--lohn-primary)]">16.230 €</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Unternehmen - Kosteneinsparung:</span>
                  <span className="font-bold text-[var(--lohn-secondary)]">Bis zu 50%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-[var(--lohn-teal)]/10 rounded-lg">
                  <span className="text-[var(--lohn-primary)]">Implementierungsaufwand:</span>
                  <span className="font-bold text-[var(--lohn-primary)]">Minimal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
