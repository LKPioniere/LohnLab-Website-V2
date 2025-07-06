import EmployeeTable from "@/components/common/EmployeeTable";
import BusinessCase from "@/components/common/BusinessCase";
import BusinessMetrics from "@/components/common/BusinessMetrics";
import { DEMO_EMPLOYEES } from "@/constants/demo-data";

/**
 * Demo-Calculator Sektion Komponente
 */
export default function DemoCalculatorSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
            Praxis-Beispiel: Messbare Erfolge
          </h2>
          <p className="text-xl text-gray-600">
            Sehen Sie selbst, wie Lohnoptimierung konkrete Ergebnisse liefert
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-6">
                Optimierung auf Knopfdruck
              </h3>
              <EmployeeTable employees={DEMO_EMPLOYEES} />
            </div>

            <div>
              <BusinessCase />
              <BusinessMetrics />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}