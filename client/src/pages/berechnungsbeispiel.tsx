import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Crown, TrendingUp, Euro, Users, ArrowRight, ChevronDown, ChevronUp, Package, Wifi, Smartphone, Car } from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Generate dummy employee data
const generateEmployees = () => {
  const departments = ["Vertrieb", "IT", "Marketing", "Verwaltung", "Produktion"];
  const names = [
    "Max Müller", "Anna Schmidt", "Peter Weber", "Laura Wagner", "Thomas Becker",
    "Sarah Schulz", "Michael Hoffmann", "Julia Koch", "Stefan Richter", "Lisa Klein",
    "Martin Zimmermann", "Sandra Braun", "Tobias Krüger", "Nicole Lehmann", "Daniel Schmitt",
    "Melanie Werner", "Christian Schwarz", "Katharina Mayer", "Andreas Köhler", "Simone Bauer",
    "Markus Schäfer", "Claudia Jung", "Frank Vogel", "Stefanie Friedrich", "Oliver Ludwig"
  ];
  
  return names.map((name, index) => {
    const baseSalary = 2800 + Math.floor(Math.random() * 4200); // 2800-7000€
    const increasedSalary = Math.round(baseSalary * 1.05);
    const optimization = Math.floor(Math.random() * 61) + 20; // 20-80€
    
    // Randomly select benefit combinations
    const benefits = [];
    const availableBenefits = [
      { name: "Sachbezug", max: 50, icon: Package },
      { name: "Internet", max: 50, icon: Wifi },
      { name: "Handy", max: 20, icon: Smartphone },
      { name: "Fahrtkosten", max: 25, icon: Car }
    ];
    
    let remainingOptimization = optimization;
    const shuffled = [...availableBenefits].sort(() => 0.5 - Math.random());
    
    for (const benefit of shuffled) {
      if (remainingOptimization > 0) {
        const amount = Math.min(benefit.max, remainingOptimization);
        if (amount > 0) {
          benefits.push({ ...benefit, amount });
          remainingOptimization -= amount;
        }
      }
    }
    
    return {
      id: index + 1,
      name,
      department: departments[Math.floor(Math.random() * departments.length)],
      baseSalary,
      increasedSalary,
      netIncrease: Math.round((increasedSalary - baseSalary) * 0.55), // Rough net calculation
      optimization,
      benefits,
      laborCostSavings: optimization * 1.25 // Including social security
    };
  });
};

export default function Berechnungsbeispiel() {
  const [showDetails, setShowDetails] = useState(false);
  const [employees] = useState(generateEmployees());
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Calculate totals
  const totals = {
    totalBaseSalary: employees.reduce((sum, emp) => sum + emp.baseSalary, 0),
    totalIncreasedSalary: employees.reduce((sum, emp) => sum + emp.increasedSalary, 0),
    totalOptimization: employees.reduce((sum, emp) => sum + emp.optimization, 0),
    totalLaborCostSavings: employees.reduce((sum, emp) => sum + emp.laborCostSavings, 0),
    averageIncrease: Math.round(employees.reduce((sum, emp) => sum + (emp.increasedSalary - emp.baseSalary), 0) / employees.length),
    averageOptimization: Math.round(employees.reduce((sum, emp) => sum + emp.optimization, 0) / employees.length)
  };

  const yearlyTotals = {
    salaryIncrease: (totals.totalIncreasedSalary - totals.totalBaseSalary) * 12,
    optimizationSavings: totals.totalOptimization * 12,
    laborCostSavings: totals.totalLaborCostSavings * 12
  };

  // Chart data
  const comparisonData = [
    {
      name: "Klassische Erhöhung",
      Lohnkosten: yearlyTotals.salaryIncrease * 1.25,
      Netto: yearlyTotals.salaryIncrease * 0.55
    },
    {
      name: "Mit Optimierung",
      Lohnkosten: yearlyTotals.salaryIncrease * 1.25 - yearlyTotals.laborCostSavings,
      Netto: yearlyTotals.salaryIncrease * 0.55
    }
  ];

  const savingsDistribution = [
    { name: "Sachbezug", value: employees.reduce((sum, emp) => sum + (emp.benefits.find(b => b.name === "Sachbezug")?.amount || 0), 0) },
    { name: "Internet", value: employees.reduce((sum, emp) => sum + (emp.benefits.find(b => b.name === "Internet")?.amount || 0), 0) },
    { name: "Handy", value: employees.reduce((sum, emp) => sum + (emp.benefits.find(b => b.name === "Handy")?.amount || 0), 0) },
    { name: "Fahrtkosten", value: employees.reduce((sum, emp) => sum + (emp.benefits.find(b => b.name === "Fahrtkosten")?.amount || 0), 0) }
  ].filter(item => item.value > 0);

  const COLORS = ["var(--lohn-primary)", "var(--lohn-teal)", "var(--lohn-purple)", "var(--lohn-secondary)"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--lohn-primary)] via-blue-700 to-[var(--lohn-teal)] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Berechnungsbeispiel
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              5% Lohnerhöhung für 25 Mitarbeiter
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-blue-100">
              Vergleich zwischen klassischer Bruttoerhöhung und intelligenter Lohnoptimierung
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-xl">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Euro className="mr-2 text-[var(--lohn-primary)]" size={20} />
                  Gesamte Lohnerhöhung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-[var(--lohn-primary)]">
                  {((totals.totalIncreasedSalary - totals.totalBaseSalary) * 12).toLocaleString('de-DE')}€
                </p>
                <p className="text-sm text-gray-600 mt-1">pro Jahr (brutto)</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-[var(--lohn-purple)] to-[var(--lohn-primary)] text-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Crown className="mr-2" size={20} />
                  Potenzielle Ersparnis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">
                  {yearlyTotals.laborCostSavings.toLocaleString('de-DE')}€
                </p>
                <p className="text-sm text-white/80 mt-1">pro Jahr bei gleicher Nettowirkung</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Users className="mr-2 text-[var(--lohn-teal)]" size={20} />
                  Durchschnitt pro Mitarbeiter
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-[var(--lohn-teal)]">
                  {totals.averageOptimization}€
                </p>
                <p className="text-sm text-gray-600 mt-1">monatliche Optimierung</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="overview">Gesamtübersicht</TabsTrigger>
              <TabsTrigger value="optimization">Optimierungsdetails</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              {/* Cost Comparison Chart */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl">Kostenvergleich pro Jahr</CardTitle>
                  <CardDescription>
                    Lohnkosten und Nettowirkung im direkten Vergleich
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={comparisonData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => `${value.toLocaleString('de-DE')}€`} />
                      <Legend />
                      <Bar dataKey="Lohnkosten" fill="var(--lohn-primary)" />
                      <Bar dataKey="Netto" fill="var(--lohn-teal)" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Employee Details */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center justify-between">
                    <span>Mitarbeiterübersicht</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowDetails(!showDetails)}
                    >
                      {showDetails ? (
                        <>Details ausblenden <ChevronUp className="ml-1" size={16} /></>
                      ) : (
                        <>Details anzeigen <ChevronDown className="ml-1" size={16} /></>
                      )}
                    </Button>
                  </CardTitle>
                  <CardDescription>
                    25 Mitarbeiter mit 5% Gehaltserhöhung
                  </CardDescription>
                </CardHeader>
                {showDetails && (
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Name</th>
                            <th className="text-left py-2">Abteilung</th>
                            <th className="text-right py-2">Aktuell</th>
                            <th className="text-right py-2">Neu (+5%)</th>
                            <th className="text-right py-2">Optimierung</th>
                          </tr>
                        </thead>
                        <tbody>
                          {employees.slice(0, 10).map((emp) => (
                            <tr key={emp.id} className="border-b">
                              <td className="py-2">{emp.name}</td>
                              <td className="py-2">{emp.department}</td>
                              <td className="text-right py-2">{emp.baseSalary.toLocaleString('de-DE')}€</td>
                              <td className="text-right py-2">{emp.increasedSalary.toLocaleString('de-DE')}€</td>
                              <td className="text-right py-2 text-[var(--lohn-purple)] font-semibold">
                                -{emp.optimization}€
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {employees.length > 10 && (
                        <p className="text-center text-gray-500 mt-4">
                          ... und {employees.length - 10} weitere Mitarbeiter
                        </p>
                      )}
                    </div>
                  </CardContent>
                )}
              </Card>
            </TabsContent>

            <TabsContent value="optimization" className="space-y-8">
              {/* Optimization Insights */}
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-[var(--lohn-purple)] to-[var(--lohn-primary)] p-6 text-white">
                  <div className="flex items-center mb-4">
                    <Crown className="mr-3" size={32} />
                    <h3 className="text-2xl font-bold">Optimierungsinsights</h3>
                  </div>
                  <p className="text-lg mb-6 text-white/90">
                    Durch intelligente Nutzung von Lohnbausteinen erzielen Sie die gleiche Nettowirkung
                    bei deutlich reduzierten Lohnkosten.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="text-white/80 text-sm">Ersparnis pro Monat</p>
                      <p className="text-2xl font-bold">{totals.totalOptimization.toLocaleString('de-DE')}€</p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="text-white/80 text-sm">Ersparnis pro Jahr</p>
                      <p className="text-2xl font-bold">{yearlyTotals.optimizationSavings.toLocaleString('de-DE')}€</p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="text-white/80 text-sm">ROI der Optimierung</p>
                      <p className="text-2xl font-bold">312%</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-white text-[var(--lohn-primary)] hover:bg-gray-100">
                      <Crown className="mr-2" size={20} />
                      Optimierung aktivieren
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      Ersparnis verteilen
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Benefits Distribution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl">Verteilung der Lohnbausteine</CardTitle>
                    <CardDescription>
                      Optimale Nutzung der steuerfreien Höchstbeträge
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={savingsDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={(entry) => `${entry.name}: ${entry.value}€`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {savingsDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl">Genutzte Lohnbausteine</CardTitle>
                    <CardDescription>
                      Steuerfreie und sozialversicherungsfreie Komponenten
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Package className="mr-3 text-[var(--lohn-primary)]" size={24} />
                        <div>
                          <p className="font-semibold">Sachbezug</p>
                          <p className="text-sm text-gray-600">bis 50€ monatlich</p>
                        </div>
                      </div>
                      <Badge>Aktiv</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Wifi className="mr-3 text-[var(--lohn-teal)]" size={24} />
                        <div>
                          <p className="font-semibold">Internet</p>
                          <p className="text-sm text-gray-600">bis 50€ monatlich</p>
                        </div>
                      </div>
                      <Badge>Aktiv</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Smartphone className="mr-3 text-[var(--lohn-purple)]" size={24} />
                        <div>
                          <p className="font-semibold">Handy</p>
                          <p className="text-sm text-gray-600">bis 20€ monatlich</p>
                        </div>
                      </div>
                      <Badge>Aktiv</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Car className="mr-3 text-[var(--lohn-secondary)]" size={24} />
                        <div>
                          <p className="font-semibold">Fahrtkosten</p>
                          <p className="text-sm text-gray-600">bis 25€ monatlich</p>
                        </div>
                      </div>
                      <Badge>Aktiv</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Call to Action */}
              <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-4">
                    Bereit für Ihre individuelle Berechnung?
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                    Lassen Sie uns gemeinsam das Optimierungspotenzial für Ihr Unternehmen ermitteln.
                    In einem persönlichen Gespräch zeigen wir Ihnen Ihre konkreten Einsparmöglichkeiten.
                  </p>
                  <Button size="lg" className="bg-[var(--lohn-primary)] hover:bg-[var(--lohn-secondary)]">
                    Kostenlose Beratung vereinbaren
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}