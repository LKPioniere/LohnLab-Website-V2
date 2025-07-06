import { Crown } from "lucide-react";

interface Employee {
  id: string;
  name: string;
  department: string;
  salary: string;
  optimized: boolean;
  savings: string | null;
}

interface EmployeeTableProps {
  employees: readonly Employee[];
}

/**
 * Mitarbeiter-Tabelle Komponente
 */
export default function EmployeeTable({ employees }: EmployeeTableProps) {
  return (
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
  );
}