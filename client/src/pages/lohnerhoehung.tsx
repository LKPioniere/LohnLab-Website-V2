import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown,
  Users, 
  Euro,
  Calculator,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  ChevronDown,
  FileText,
  Download,
  AlertCircle,
  CheckCircle,
  DollarSign,
  Percent,
  Target,
  Building2,
  PiggyBank,
  Gift
} from "lucide-react";
import lohnlabLogo from "@/assets/lohnlab-logo-blue.png";

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  currentSalary: number;
  raiseAmount: number;
  traditional: {
    totalCost: number;
    employeeNet: number;
    employeeGross: number;
  };
  optimized: {
    totalCost: number;
    employeeNet: number;
    employeeGross: number;
    components: {
      salary: number;
      benefits: number;
      card: number;
    };
  };
}

export default function Lohnerhoehung() {
  const [selectedScenario, setSelectedScenario] = useState<'traditional' | 'optimized'>('optimized');
  const [expandedEmployee, setExpandedEmployee] = useState<number | null>(null);

  // Mock data für Lohnerhöhungsberechnung
  const employees: Employee[] = [
    {
      id: 1,
      name: "Anna Mueller",
      position: "Senior Entwicklerin",
      department: "IT",
      currentSalary: 65000,
      raiseAmount: 5000,
      traditional: {
        totalCost: 70000,
        employeeNet: 3847,
        employeeGross: 5833
      },
      optimized: {
        totalCost: 67200,
        employeeNet: 4156,
        employeeGross: 5500,
        components: {
          salary: 4100,
          benefits: 1200,
          card: 533
        }
      }
    },
    {
      id: 2,
      name: "Thomas Schmidt",
      position: "Projektmanager",
      department: "Marketing",
      currentSalary: 58000,
      raiseAmount: 4000,
      traditional: {
        totalCost: 62000,
        employeeNet: 3421,
        employeeGross: 5167
      },
      optimized: {
        totalCost: 59600,
        employeeNet: 3681,
        employeeGross: 4867,
        components: {
          salary: 3700,
          benefits: 800,
          card: 467
        }
      }
    },
    {
      id: 3,
      name: "Sarah Weber",
      position: "HR Spezialistin",
      department: "Personal",
      currentSalary: 52000,
      raiseAmount: 3500,
      traditional: {
        totalCost: 55500,
        employeeNet: 3156,
        employeeGross: 4625
      },
      optimized: {
        totalCost: 53380,
        employeeNet: 3389,
        employeeGross: 4350,
        components: {
          salary: 3400,
          benefits: 650,
          card: 425
        }
      }
    },
    {
      id: 4,
      name: "Michael Fischer",
      position: "Teamleiter Vertrieb",
      department: "Vertrieb",
      currentSalary: 72000,
      raiseAmount: 6000,
      traditional: {
        totalCost: 78000,
        employeeNet: 4247,
        employeeGross: 6500
      },
      optimized: {
        totalCost: 74880,
        employeeNet: 4598,
        employeeGross: 6100,
        components: {
          salary: 4800,
          benefits: 900,
          card: 700
        }
      }
    }
  ];

  const totalStats = {
    traditional: {
      totalCost: employees.reduce((sum, emp) => sum + emp.traditional.totalCost, 0),
      employeeNetTotal: employees.reduce((sum, emp) => sum + emp.traditional.employeeNet, 0)
    },
    optimized: {
      totalCost: employees.reduce((sum, emp) => sum + emp.optimized.totalCost, 0),
      employeeNetTotal: employees.reduce((sum, emp) => sum + emp.optimized.employeeNet, 0)
    }
  };

  const savings = {
    cost: totalStats.traditional.totalCost - totalStats.optimized.totalCost,
    netImprovement: totalStats.optimized.employeeNetTotal - totalStats.traditional.employeeNetTotal,
    percentage: ((totalStats.traditional.totalCost - totalStats.optimized.totalCost) / totalStats.traditional.totalCost) * 100
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <img src={lohnlabLogo} alt="LohnLab" className="h-8 w-auto" />
                <div className="h-6 w-px bg-slate-200"></div>
                <span className="text-sm font-semibold text-slate-900 tracking-tight">Lohnerhöhungsanalyse</span>
              </div>
              <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 font-medium">
                Analyse abgeschlossen
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="text-slate-600 border-slate-300">
                <Download className="w-4 h-4 mr-2" />
                Bericht exportieren
              </Button>
              <div className="flex items-center space-x-3 pl-4 border-l border-slate-200">
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-secondary)] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  LR
                </div>
                <span className="text-sm font-medium text-slate-700">L. Reschtat</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6 max-w-7xl mx-auto space-y-8">
        {/* Executive Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 border-0 shadow-sm ring-1 ring-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-900 flex items-center">
                <Calculator className="w-6 h-6 mr-3 text-[var(--lohn-primary)]" />
                Executive Summary - Lohnerhöhungsanalyse
              </CardTitle>
              <p className="text-slate-600">
                Vergleich zwischen traditioneller Lohnerhöhung und optimierter LohnLab-Lösung für {employees.length} Mitarbeiter
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-8">
                {/* Traditional Scenario */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <h3 className="font-semibold text-slate-900">Traditionelle Lohnerhöhung</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-slate-600">Gesamtkosten Arbeitgeber</p>
                      <p className="text-2xl font-bold text-slate-900">€{totalStats.traditional.totalCost.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-600">Netto-Zugewinn Mitarbeiter</p>
                      <p className="text-xl font-semibold text-slate-700">€{totalStats.traditional.employeeNetTotal.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                {/* Optimized Scenario */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-[var(--lohn-primary)] rounded-full"></div>
                    <h3 className="font-semibold text-slate-900">LohnLab Optimierung</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-slate-600">Gesamtkosten Arbeitgeber</p>
                      <p className="text-2xl font-bold text-[var(--lohn-primary)]">€{totalStats.optimized.totalCost.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-600">Netto-Zugewinn Mitarbeiter</p>
                      <p className="text-xl font-semibold text-green-600">€{totalStats.optimized.employeeNetTotal.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Metrics */}
          <div className="space-y-6">
            <Card className="border-0 shadow-sm ring-1 ring-green-200 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <PiggyBank className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-700">€{savings.cost.toLocaleString()}</div>
                    <p className="text-sm text-green-600 font-medium">Kosteneinsparung</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <ArrowDownRight className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">{savings.percentage.toFixed(1)}% weniger Kosten</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm ring-1 ring-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-700">€{savings.netImprovement.toLocaleString()}</div>
                    <p className="text-sm text-blue-600 font-medium">Mehr Netto</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <ArrowUpRight className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">Zusätzlicher Vorteil für Mitarbeiter</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scenario Toggle */}
        <Card className="border-0 shadow-sm ring-1 ring-slate-200 bg-white">
          <CardHeader className="border-b border-slate-100">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-semibold text-slate-900">
                Mitarbeiterübersicht - Detaillierter Vergleich
              </CardTitle>
              
              <div className="flex items-center space-x-3">
                <span className="text-sm text-slate-600">Anzeige:</span>
                <div className="bg-slate-100 p-1 rounded-lg flex space-x-1">
                  <Button
                    size="sm"
                    onClick={() => setSelectedScenario('traditional')}
                    className={`h-8 px-4 text-xs font-medium transition-all ${
                      selectedScenario === 'traditional'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'bg-transparent text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Traditionell
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => setSelectedScenario('optimized')}
                    className={`h-8 px-4 text-xs font-medium transition-all ${
                      selectedScenario === 'optimized'
                        ? 'bg-[var(--lohn-primary)] text-white shadow-sm'
                        : 'bg-transparent text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Optimiert
                  </Button>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Mitarbeiter</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Aktuelles Gehalt</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Erhöhung</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">
                      {selectedScenario === 'traditional' ? 'Kosten AG' : 'Kosten AG (opt.)'}
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Netto Mitarbeiter</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">
                      {selectedScenario === 'optimized' ? 'Einsparung' : 'Details'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => {
                    const scenario = employee[selectedScenario];
                    const savings = employee.traditional.totalCost - employee.optimized.totalCost;
                    const netImprovement = employee.optimized.employeeNet - employee.traditional.employeeNet;
                    
                    return (
                      <tr 
                        key={employee.id} 
                        className="border-b border-slate-50 hover:bg-slate-50 transition-colors"
                      >
                        <td className="py-4 px-6">
                          <div>
                            <p className="font-semibold text-slate-900">{employee.name}</p>
                            <p className="text-sm text-slate-600">{employee.position}</p>
                            <Badge variant="outline" className="text-xs mt-1">
                              {employee.department}
                            </Badge>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <p className="font-medium text-slate-900">€{employee.currentSalary.toLocaleString()}</p>
                          <p className="text-xs text-slate-500">pro Jahr</p>
                        </td>
                        <td className="py-4 px-6">
                          <p className="font-semibold text-[var(--lohn-primary)]">+€{employee.raiseAmount.toLocaleString()}</p>
                        </td>
                        <td className="py-4 px-6">
                          <p className="font-semibold text-slate-900">€{scenario.totalCost.toLocaleString()}</p>
                          {selectedScenario === 'optimized' && (
                            <div className="flex items-center space-x-1 mt-1">
                              <ArrowDownRight className="w-3 h-3 text-green-600" />
                              <span className="text-xs text-green-600 font-medium">-€{savings.toLocaleString()}</span>
                            </div>
                          )}
                        </td>
                        <td className="py-4 px-6">
                          <p className="font-semibold text-slate-900">€{scenario.employeeNet.toLocaleString()}</p>
                          {selectedScenario === 'optimized' && (
                            <div className="flex items-center space-x-1 mt-1">
                              <ArrowUpRight className="w-3 h-3 text-blue-600" />
                              <span className="text-xs text-blue-600 font-medium">+€{netImprovement.toLocaleString()}</span>
                            </div>
                          )}
                        </td>
                        <td className="py-4 px-6">
                          {selectedScenario === 'optimized' ? (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setExpandedEmployee(expandedEmployee === employee.id ? null : employee.id)}
                              className="text-[var(--lohn-primary)] hover:text-[var(--lohn-secondary)]"
                            >
                              {expandedEmployee === employee.id ? (
                                <ChevronDown className="w-4 h-4 mr-1" />
                              ) : (
                                <ChevronRight className="w-4 h-4 mr-1" />
                              )}
                              Lohnbausteine
                            </Button>
                          ) : (
                            <Badge 
                              variant="secondary" 
                              className={`${
                                savings > 0 
                                  ? 'bg-green-50 text-green-700 border-green-200' 
                                  : 'bg-gray-50 text-gray-700 border-gray-200'
                              }`}
                            >
                              {savings > 0 ? `€${savings} sparen` : 'Standard'}
                            </Badge>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Expandable Details */}
            {expandedEmployee && selectedScenario === 'optimized' && (
              <div className="border-t border-slate-100 bg-slate-50 p-6">
                {(() => {
                  const employee = employees.find(emp => emp.id === expandedEmployee)!;
                  return (
                    <div className="max-w-4xl">
                      <h4 className="font-semibold text-slate-900 mb-4">
                        Lohnbausteine für {employee.name}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg p-4 border border-slate-200">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <Euro className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <h5 className="font-semibold text-slate-900">Grundgehalt</h5>
                              <p className="text-sm text-slate-600">Optimiert</p>
                            </div>
                          </div>
                          <p className="text-xl font-bold text-blue-600">€{employee.optimized.components.salary.toLocaleString()}</p>
                        </div>

                        <div className="bg-white rounded-lg p-4 border border-slate-200">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                              <Gift className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <h5 className="font-semibold text-slate-900">Sachbezüge</h5>
                              <p className="text-sm text-slate-600">Steuerfrei</p>
                            </div>
                          </div>
                          <p className="text-xl font-bold text-green-600">€{employee.optimized.components.benefits.toLocaleString()}</p>
                        </div>

                        <div className="bg-white rounded-lg p-4 border border-slate-200">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                              <Target className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                              <h5 className="font-semibold text-slate-900">LohnLab Card</h5>
                              <p className="text-sm text-slate-600">Steueroptimiert</p>
                            </div>
                          </div>
                          <p className="text-xl font-bold text-purple-600">€{employee.optimized.components.card.toLocaleString()}</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="w-5 h-5 text-blue-600" />
                          <span className="font-semibold text-blue-900">Optimierungsergebnis</span>
                        </div>
                        <p className="text-sm text-blue-700">
                          Durch die intelligente Kombination verschiedener Lohnbausteine erhält {employee.name} 
                          <strong className="text-blue-900"> €{employee.optimized.employeeNet - employee.traditional.employeeNet} mehr Netto</strong> 
                          bei <strong className="text-blue-900">€{employee.traditional.totalCost - employee.optimized.totalCost} geringeren Kosten</strong> für das Unternehmen.
                        </p>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <Button 
            size="lg"
            className="bg-[var(--lohn-primary)] hover:bg-[var(--lohn-secondary)] text-white px-8"
          >
            <FileText className="w-5 h-5 mr-2" />
            Detailbericht generieren
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-slate-300 text-slate-700 hover:border-slate-400 px-8"
          >
            <Users className="w-5 h-5 mr-2" />
            Mitarbeiter-Kommunikation erstellen
          </Button>
        </div>
      </div>
    </div>
  );
}