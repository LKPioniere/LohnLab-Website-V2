import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, TrendingUp, AlertTriangle, CheckCircle, Users } from "lucide-react";

type CalculationMode = "raise" | "hours";
type IncreaseType = "netto" | "brutto" | "agkosten";

interface CalculationResult {
  possible: boolean;
  reason?: string;
  newStructure?: {
    baseGross: number;
    sachbezug: number;
    internet: number;
    handy: number;
    fahrtkosten: number;
    totalNetto: number;
    agCosts: number;
    agSavings: number;
  };
  totalSavings?: number;
}

export default function MinijobCalculator() {
  const [mode, setMode] = useState<CalculationMode>("raise");
  const [calculating, setCalculating] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);

  // Raise mode fields
  const [currentHourlyWage, setCurrentHourlyWage] = useState("");
  const [currentMonthlyGross, setCurrentMonthlyGross] = useState("");
  const [increaseAmount, setIncreaseAmount] = useState("");
  const [increaseType, setIncreaseType] = useState<IncreaseType>("netto");

  // Hours mode fields
  const [hourlyWageHours, setHourlyWageHours] = useState("");
  const [currentWeeklyHours, setCurrentWeeklyHours] = useState("");
  const [additionalHours, setAdditionalHours] = useState("");

  // Common field
  const [numberOfEmployees, setNumberOfEmployees] = useState("");

  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isFormValid = () => {
    if (!numberOfEmployees || parseInt(numberOfEmployees) < 1) return false;

    if (mode === "raise") {
      return currentHourlyWage && currentMonthlyGross && increaseAmount;
    } else {
      return hourlyWageHours && currentWeeklyHours && additionalHours;
    }
  };

  const handleCalculate = async () => {
    setCalculating(true);
    
    // Simulate API call - später durch echte API ersetzen
    setTimeout(() => {
      // Platzhalter-Logik für Demo
      const mockResult: CalculationResult = {
        possible: true,
        newStructure: {
          baseGross: 556,
          sachbezug: 50,
          internet: 50,
          handy: 30,
          fahrtkosten: 14,
          totalNetto: 700,
          agCosts: 737,
          agSavings: 113,
        },
        totalSavings: 113 * parseInt(numberOfEmployees || "1"),
      };

      setResult(mockResult);
      setCalculating(false);
    }, 800);
  };

  const resetForm = () => {
    setCurrentHourlyWage("");
    setCurrentMonthlyGross("");
    setIncreaseAmount("");
    setHourlyWageHours("");
    setCurrentWeeklyHours("");
    setAdditionalHours("");
    setNumberOfEmployees("");
    setResult(null);
  };

  return (
    <div className="w-full">
      <Card className="border-2 border-[var(--lohn-teal)]">
        <CardHeader className="bg-gradient-to-r from-[var(--lohn-teal)]/10 to-[var(--lohn-primary)]/10">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[var(--lohn-teal)] rounded-xl flex items-center justify-center">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl text-[var(--lohn-primary)]">
              Minijob-Optimierungs-Rechner
            </CardTitle>
          </div>
          <p className="text-gray-600 mt-2">
            Prüfen Sie, ob Ihre Lohnerhöhung oder Stundenerhöhung mit LohnLab im Minijob bleiben kann
          </p>
        </CardHeader>

        <CardContent className="pt-6">
          <Tabs value={mode} onValueChange={(v) => { setMode(v as CalculationMode); resetForm(); }}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="raise">Lohnerhöhung geben</TabsTrigger>
              <TabsTrigger value="hours">Mehr Stunden ermöglichen</TabsTrigger>
            </TabsList>

            {/* Lohnerhöhung Mode */}
            <TabsContent value="raise" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="currentHourlyWage">Aktueller Stundenlohn (€)</Label>
                  <Input
                    id="currentHourlyWage"
                    type="number"
                    step="0.01"
                    placeholder="z.B. 12.50"
                    value={currentHourlyWage}
                    onChange={(e) => setCurrentHourlyWage(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="currentMonthlyGross">Aktuelles monatliches Brutto (€)</Label>
                  <Input
                    id="currentMonthlyGross"
                    type="number"
                    step="0.01"
                    placeholder="z.B. 556"
                    value={currentMonthlyGross}
                    onChange={(e) => setCurrentMonthlyGross(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="increaseType">Art der Erhöhung</Label>
                  <Select value={increaseType} onValueChange={(v) => setIncreaseType(v as IncreaseType)}>
                    <SelectTrigger id="increaseType">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="netto">Netto</SelectItem>
                      <SelectItem value="brutto">Brutto</SelectItem>
                      <SelectItem value="agkosten">AG-Kosten</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="increaseAmount">Gewünschte Erhöhung (€)</Label>
                  <Input
                    id="increaseAmount"
                    type="number"
                    step="0.01"
                    placeholder="z.B. 100"
                    value={increaseAmount}
                    onChange={(e) => setIncreaseAmount(e.target.value)}
                  />
                </div>
              </div>
            </TabsContent>

            {/* Mehr Stunden Mode */}
            <TabsContent value="hours" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="hourlyWageHours">Aktueller Stundenlohn (€)</Label>
                  <Input
                    id="hourlyWageHours"
                    type="number"
                    step="0.01"
                    placeholder="z.B. 12.50"
                    value={hourlyWageHours}
                    onChange={(e) => setHourlyWageHours(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="currentWeeklyHours">Aktuelle Wochenstunden</Label>
                  <Input
                    id="currentWeeklyHours"
                    type="number"
                    step="0.5"
                    placeholder="z.B. 10"
                    value={currentWeeklyHours}
                    onChange={(e) => setCurrentWeeklyHours(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="additionalHours">Zusätzlich gewünschte Wochenstunden</Label>
                <Input
                  id="additionalHours"
                  type="number"
                  step="0.5"
                  placeholder="z.B. 5"
                  value={additionalHours}
                  onChange={(e) => setAdditionalHours(e.target.value)}
                />
              </div>
            </TabsContent>
          </Tabs>

          {/* Common field - Number of employees */}
          <div className="mt-4">
            <Label htmlFor="numberOfEmployees" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Anzahl betroffener Mitarbeiter</span>
            </Label>
            <Input
              id="numberOfEmployees"
              type="number"
              min="1"
              placeholder="z.B. 5"
              value={numberOfEmployees}
              onChange={(e) => setNumberOfEmployees(e.target.value)}
            />
          </div>

          {/* Calculate Button */}
          <div className="mt-6">
            <Button
              onClick={handleCalculate}
              disabled={!isFormValid() || calculating}
              className="w-full bg-[var(--lohn-teal)] hover:bg-[var(--lohn-teal)]/90 text-white font-semibold py-6 text-lg"
            >
              {calculating ? "Berechne..." : "Jetzt berechnen"}
            </Button>
          </div>

          {/* Results */}
          {result && (
            <div className="mt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {result.possible ? (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <h3 className="text-xl font-bold text-green-800">
                      ✅ Mit LohnLab möglich!
                    </h3>
                  </div>

                  {result.newStructure && (
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4">
                        <h4 className="font-semibold text-gray-800 mb-3">Neue Lohnstruktur pro Mitarbeiter:</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Basisgehalt (Minijob):</span>
                            <span className="font-semibold">{result.newStructure.baseGross}€</span>
                          </div>
                          <div className="flex justify-between text-green-700">
                            <span>+ Sachbezug:</span>
                            <span className="font-semibold">{result.newStructure.sachbezug}€</span>
                          </div>
                          <div className="flex justify-between text-green-700">
                            <span>+ Internetzuschuss:</span>
                            <span className="font-semibold">{result.newStructure.internet}€</span>
                          </div>
                          <div className="flex justify-between text-green-700">
                            <span>+ Handyzuschuss:</span>
                            <span className="font-semibold">{result.newStructure.handy}€</span>
                          </div>
                          <div className="flex justify-between text-green-700">
                            <span>+ Fahrtkostenzuschuss:</span>
                            <span className="font-semibold">{result.newStructure.fahrtkosten}€</span>
                          </div>
                          <div className="border-t-2 border-gray-200 pt-2 mt-2"></div>
                          <div className="flex justify-between text-lg">
                            <span className="font-bold text-gray-800">Netto für Mitarbeiter:</span>
                            <span className="font-bold text-green-600">{result.newStructure.totalNetto}€</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-xl p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <TrendingUp className="w-5 h-5 text-[var(--lohn-teal)]" />
                            <span className="text-sm text-gray-600">AG-Kosten pro Mitarbeiter:</span>
                          </div>
                          <div className="text-2xl font-bold text-[var(--lohn-primary)]">
                            {result.newStructure.agCosts}€
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            Statt 850€ im Midijob
                          </div>
                        </div>

                        <div className="bg-white rounded-xl p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <TrendingUp className="w-5 h-5 text-green-600" />
                            <span className="text-sm text-gray-600">Ersparnis pro Mitarbeiter:</span>
                          </div>
                          <div className="text-2xl font-bold text-green-600">
                            {result.newStructure.agSavings}€/Monat
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            = {result.newStructure.agSavings * 12}€/Jahr
                          </div>
                        </div>
                      </div>

                      {numberOfEmployees && parseInt(numberOfEmployees) > 1 && (
                        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-4 text-white">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm opacity-90">Gesamtersparnis für {numberOfEmployees} Mitarbeiter:</div>
                              <div className="text-3xl font-bold mt-1">{result.totalSavings}€/Monat</div>
                              <div className="text-sm opacity-90 mt-1">{(result.totalSavings || 0) * 12}€/Jahr</div>
                            </div>
                            <CheckCircle className="w-12 h-12 opacity-80" />
                          </div>
                        </div>
                      )}

                      <Button
                        onClick={scrollToContact}
                        className="w-full bg-[var(--lohn-primary)] hover:bg-[var(--lohn-primary)]/90 text-white font-semibold py-6 text-lg mt-4"
                      >
                        Beratungstermin buchen
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <AlertTriangle className="w-8 h-8 text-orange-600" />
                    <h3 className="text-xl font-bold text-orange-800">
                      ⚠️ Leider nicht im Minijob möglich
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {result.reason || "Die gewünschte Änderung würde die Minijob-Grenze überschreiten oder ist aufgrund des kommenden Mindestlohns nicht umsetzbar."}
                  </p>
                  <div className="bg-white rounded-xl p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Unsere Empfehlung:</h4>
                    <p className="text-gray-600 text-sm">
                      Lassen Sie uns gemeinsam eine Alternative finden. Wir können andere Lohnoptimierungen prüfen oder einen fairen Midijob-Übergang gestalten.
                    </p>
                  </div>
                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-[var(--lohn-primary)] hover:bg-[var(--lohn-primary)]/90 text-white font-semibold py-4 mt-4"
                  >
                    Kostenlose Beratung anfragen
                  </Button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Info-Hinweis unter dem Rechner */}
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>
          💡 Dies ist eine vereinfachte Berechnung. Die tatsächliche Optimierung wird individuell für Ihre Situation berechnet.
        </p>
      </div>
    </div>
  );
}

