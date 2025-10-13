import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CreditCard,
  Wifi,
  Smartphone,
  Route,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Shield,
  Heart,
  DollarSign,
  Clock,
  Target,
  ExternalLink,
  Calculator,
  Users,
  ArrowRight,
  Plus,
  Scale,
  X,
} from "lucide-react";
import twodoxxLogo from "../../../attached_assets/logo_twodoxx.pdf.png";

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

export default function Minijobber() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculator state
  const [mode, setMode] = useState<CalculationMode>("raise");
  const [calculating, setCalculating] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);

  // Pre-filled example values
  const [currentHourlyWage, setCurrentHourlyWage] = useState("12.50");
  const [currentMonthlyGross, setCurrentMonthlyGross] = useState("556");
  const [increaseAmount, setIncreaseAmount] = useState("100");
  const [increaseType, setIncreaseType] = useState<IncreaseType>("netto");
  const [hourlyWageHours, setHourlyWageHours] = useState("12.50");
  const [currentWeeklyHours, setCurrentWeeklyHours] = useState("10");
  const [additionalHours, setAdditionalHours] = useState("5");
  const [numberOfEmployees, setNumberOfEmployees] = useState("5");

  // Validation errors
  const [validationErrors, setValidationErrors] = useState<{
    hourlyWageRaise?: string;
    monthlyGross?: string;
    hourlyWageHours?: string;
    calculatedGross?: string;
  }>({});

  // Validation for Lohnerhöhung mode
  useEffect(() => {
    if (mode === 'raise') {
      const errors: typeof validationErrors = {};
      
      // Validate hourly wage (min 12.50€)
      if (currentHourlyWage && parseFloat(currentHourlyWage) < 12.50) {
        errors.hourlyWageRaise = 'Mindestlohn unterschritten (min. 12,50€)';
      }
      
      // Validate monthly gross (max 556€)
      if (currentMonthlyGross && parseFloat(currentMonthlyGross) > 556) {
        errors.monthlyGross = 'Minijob-Grenze überschritten (max. 556€)';
      }
      
      setValidationErrors(errors);
    }
  }, [currentHourlyWage, currentMonthlyGross, mode]);

  // Validation for Mehr Stunden mode
  useEffect(() => {
    if (mode === 'hours') {
      const errors: typeof validationErrors = {};
      
      // Validate hourly wage (min 12.50€)
      if (hourlyWageHours && parseFloat(hourlyWageHours) < 12.50) {
        errors.hourlyWageHours = 'Mindestlohn unterschritten (min. 12,50€)';
      }
      
      // Validate calculated monthly gross (max 556€)
      if (hourlyWageHours && currentWeeklyHours) {
        const calculatedGross = parseFloat(hourlyWageHours) * parseFloat(currentWeeklyHours) * 4.33;
        if (calculatedGross > 556) {
          errors.calculatedGross = 'Minijob-Grenze überschritten (max. 556€)';
        }
      }
      
      setValidationErrors(errors);
    }
  }, [hourlyWageHours, currentWeeklyHours, mode]);

  const isFormValid = () => {
    if (!numberOfEmployees || parseInt(numberOfEmployees) < 1) return false;
    if (Object.keys(validationErrors).length > 0) return false;
    
    if (mode === "raise") {
      return currentHourlyWage && currentMonthlyGross && increaseAmount;
    } else {
      return hourlyWageHours && currentWeeklyHours && additionalHours;
    }
  };

  const handleCalculate = async () => {
    setCalculating(true);
    setTimeout(() => {
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

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--lohn-primary)] via-[var(--lohn-secondary)] to-[var(--lohn-purple)] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Minijobber: Mehr Netto <br />
              <span className="text-yellow-300">ohne Midijob-Falle</span>
            </h1>
            <p className="text-xl mb-12 max-w-4xl mx-auto text-blue-100 leading-relaxed">
              Bei 556€ ist nicht Schluss – mit intelligenten Lohnbausteinen bis zu <strong className="text-white">700€ netto</strong> auszahlen 
              und dabei <strong className="text-green-300">190€ pro Mitarbeiter im Monat</strong> sparen
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                onClick={() => scrollToSection('rechner')}
                className="bg-[var(--lohn-teal)] text-white hover:bg-[var(--lohn-teal)]/90 font-semibold px-12 py-6 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Jetzt berechnen
              </Button>
              <Button
                onClick={() => scrollToSection('kontakt')}
                variant="outline"
                className="border-2 border-white text-[var(--lohn-primary)] bg-white hover:bg-gray-100 font-semibold px-12 py-6 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Beratungstermin buchen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Sektion */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Die 556€-Falle
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Zwei typische Situationen, die du sicher kennst
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Szenario A */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 via-white to-blue-50/30 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <TrendingUp className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl text-gray-800">
                  Szenario A: Lohnerhöhung verdient
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Du möchtest den Stundenlohn deines Mitarbeiters anheben - kannst es dir aber nicht leisten auf Arbeitsstunden zu verzichten.
                </p>
                <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-white text-xs">!</span>
                    </div>
                    <div className="text-sm text-gray-700">
                      <strong>Das Problem:</strong> Eine leichte Anhebung über 556€ hinaus schadet dem Mitarbeiter, weil plötzlich weniger Netto als vorher ankommt.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Szenario B */}
            <Card className="border-blue-200 bg-gradient-to-br from-slate-50 via-white to-slate-50/30 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <Clock className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl text-gray-800">
                  Szenario B: Überstunden
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dein Mitarbeiter arbeitet mehr als der Minijob hergibt, Teile der Stunden müssen in den nächsten Monat geschoben werden.
                </p>
                <div className="bg-slate-50/50 border border-slate-100 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-slate-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-white text-xs">!</span>
                    </div>
                    <div className="text-sm text-gray-700">
                      <strong>Das Problem:</strong> Regelmäßig muss der Mitarbeiter mit Freizeitausgleich Überstunden abbauen und eine Erhöhung auf einen Midijob ist unattraktiv.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Das zentrale Problem */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-slate-200 shadow-lg">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800">
                  Das zentrale Problem: Der Sprung in den Übergangsbereich
                </h3>
                <p className="text-lg text-gray-600">
                  Sobald ein Minijobber die 556€-Grenze überschreitet, wird es teuer – für beide Seiten
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <span>Das Dilemma für Mitarbeiter</span>
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">
                        <strong>Weniger Netto trotz Erhöhung:</strong> Krankenversicherung, Rente und Lohnsteuer fallen jetzt an und schmälern den Nettoverdienst erheblich
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">
                        <strong>Krankenversicherungspflicht:</strong> Der Arbeitnehmer muss über den Midijob krankenversichert sein. Das kann z. B. den Verlust der kostenlosen Familienversicherung bedeuten
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center space-x-3">
                    <div className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <span>Das Dilemma für Arbeitgeber</span>
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">
                        <strong>Hohe Kompensation nötig:</strong> Um dem Mitarbeiter denselben Netto-Vorteil zu bieten, explodieren die AG-Kosten
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">
                        <strong>Reguläres Beschäftigungsverhältnis:</strong> Anspruch auf Lohnfortzahlung im Krankheitsfall
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">
                        <strong>Mehr Verpflichtungen:</strong> Anspruch auf Urlaub und Kündigungsschutz
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-100 to-blue-50 rounded-xl p-6 text-center border border-slate-200">
                <p className="text-gray-800 font-semibold text-base flex items-center justify-center space-x-2">
                  <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">→</span>
                  </div>
                  <span>Ergebnis: Weder Mitarbeiter noch Arbeitgeber profitieren vom Übergang in den Midijob</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lösung: LohnLab Minijob-Modell */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-slate-100 text-slate-900 border-slate-200 mb-6 px-4 py-2 text-base font-semibold">
              Die Lösung
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Das LohnLab Minijob-Modell
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Eine einfache Formel – mehr Netto, optimierte Kosten
            </p>
          </div>

          {/* Vergleich Links vs Rechts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* LINKS: In der Gleitzone */}
            <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-8 border border-slate-300 shadow-lg relative">
              <div className="absolute top-6 right-6 flex items-center space-x-2">
                <X className="w-4 h-4 text-slate-600" />
                <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Midijob</span>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center shadow-md">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">In der Gleitzone</h3>
                </div>
              </div>
              
              <div className="space-y-4">
                {/* Unsichtbarer Platzhalter für Lohnbausteine */}
                <div className="space-y-3 invisible">
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <span className="text-sm">Platzhalter</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <span className="text-sm">Platzhalter</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <span className="text-sm">Platzhalter</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <span className="text-sm">Platzhalter</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <span className="text-sm">Platzhalter</span>
                  </div>
                </div>

                <div className="border-t-2 border-slate-200 pt-4 mt-4"></div>

                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-600">Netto-Auszahlungsbetrag:</span>
                    <span className="text-xl font-bold text-gray-900">700,00€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Bruttogehalt:</span>
                    <span className="text-xl font-bold text-gray-900">763,89€</span>
                  </div>
                </div>

                <div className="bg-slate-200 rounded-lg p-4 border border-slate-300">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">AG-Gesamtkosten:</span>
                    <span className="text-xl font-bold text-red-600">986,84€</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RECHTS: Mit LohnLab */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-300 shadow-lg relative">
              <div className="absolute top-6 right-6 flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">Minijob</span>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-md">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Mit LohnLab</h3>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white rounded-lg p-3 border border-green-100">
                  <span className="text-gray-700">Basisgehalt (Netto)</span>
                  <span className="text-sm font-semibold text-gray-900">556€</span>
                </div>

                <div className="flex justify-between items-center bg-white rounded-lg p-3 border border-green-100">
                  <div className="flex items-center space-x-2">
                    <CreditCard className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">+ Sachbezug</span>
                  </div>
                  <span className="text-sm font-semibold text-green-600">50€</span>
                </div>

                <div className="flex justify-between items-center bg-white rounded-lg p-3 border border-green-100">
                  <div className="flex items-center space-x-2">
                    <Wifi className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">+ Internetzuschuss</span>
                  </div>
                  <span className="text-sm font-semibold text-green-600">50€</span>
                </div>

                <div className="flex justify-between items-center bg-white rounded-lg p-3 border border-green-100">
                  <div className="flex items-center space-x-2">
                    <Smartphone className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">+ Handyzuschuss</span>
                  </div>
                  <span className="text-sm font-semibold text-green-600">30€</span>
                </div>

                <div className="flex justify-between items-center bg-white rounded-lg p-3 border border-green-100">
                  <div className="flex items-center space-x-2">
                    <Route className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">+ Fahrtkostenzuschuss</span>
                  </div>
                  <span className="text-sm font-semibold text-green-600">14€</span>
                </div>

                <div className="border-t-2 border-green-300 pt-3 mt-3"></div>

                <div className="bg-green-100 rounded-lg p-4 border border-green-200">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-700 font-semibold">Netto-Auszahlungsbetrag:</span>
                    <span className="text-xl font-bold text-gray-900">700€</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-700 font-semibold">Bruttogehalt:</span>
                    <span className="text-xl font-bold text-gray-900">556€</span>
                  </div>
                </div>

                <div className="bg-green-200 rounded-lg p-4 border border-green-300">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">AG-Gesamtkosten:</span>
                    <span className="text-xl font-bold text-green-600">797€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ersparnis-Box */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center max-w-3xl mx-auto shadow-xl">
            <div className="text-sm text-green-100 mb-2">Deine Ersparnis pro Mitarbeiter</div>
            <div className="text-6xl font-bold mb-2">190€</div>
            <div className="text-lg text-green-50">pro Monat = 2.280€ pro Jahr</div>
          </div>
        </div>
      </section>

      {/* Interaktiver Rechner */}
      <section id="rechner" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Jetzt für deine Situation berechnen
            </h2>
            <p className="text-xl text-slate-600">
              Prüfe, ob deine Lohnerhöhung oder Stundenerhöhung im Minijob bleiben kann
            </p>
          </div>

          {/* Mode Switch */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center bg-white rounded-2xl p-1.5 shadow-xl border border-slate-200">
              <button
                onClick={() => setMode('raise')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  mode === 'raise' 
                    ? 'bg-gradient-to-r from-[var(--lohn-teal)] to-[var(--lohn-primary)] text-white shadow-lg scale-105' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <TrendingUp className="w-5 h-5" />
                <span>Lohnerhöhung</span>
              </button>
              <button
                onClick={() => setMode('hours')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  mode === 'hours' 
                    ? 'bg-gradient-to-r from-[var(--lohn-teal)] to-[var(--lohn-primary)] text-white shadow-lg scale-105' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Clock className="w-5 h-5" />
                <span>Mehr Stunden</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Eingabe Kachel */}
            <Card className="border-none shadow-2xl bg-white overflow-hidden hover:shadow-3xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-br from-[var(--lohn-teal)]/5 to-[var(--lohn-primary)]/5 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-11 h-11 bg-gradient-to-br from-[var(--lohn-teal)] to-[var(--lohn-primary)] rounded-xl flex items-center justify-center shadow-lg">
                      <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-slate-900">Deine Eingaben</CardTitle>
                      <p className="text-sm text-slate-500 mt-0.5">Beispieldaten vorausgefüllt</p>
                    </div>
                  </div>
                  {/* Anzahl Dropdown */}
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-slate-500" />
                    <Select value={numberOfEmployees} onValueChange={setNumberOfEmployees}>
                      <SelectTrigger className="w-[90px] border-slate-300 bg-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="25">25</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                        <SelectItem value="100">100</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-8 pb-8">
                <div className="space-y-4">

                  {mode === 'raise' ? (
                    <>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label className="text-slate-700 font-semibold">Aktuell</Label>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="relative">
                              <Label htmlFor="currentHourlyWage" className="text-xs text-slate-500 mb-1 flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>Stundenlohn</span>
                              </Label>
                              <div className="relative">
                                <Input
                                  id="currentHourlyWage"
                                  type="number"
                                  step="0.01"
                                  value={currentHourlyWage}
                                  onChange={(e) => setCurrentHourlyWage(e.target.value)}
                                  className={`border-slate-300 focus:border-slate-500 pr-12 ${validationErrors.hourlyWageRaise ? 'border-red-500' : ''}`}
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">€/h</span>
                              </div>
                              {validationErrors.hourlyWageRaise && (
                                <p className="text-xs text-red-600 mt-1 flex items-center space-x-1">
                                  <AlertTriangle className="w-3 h-3" />
                                  <span>{validationErrors.hourlyWageRaise}</span>
                                </p>
                              )}
                            </div>

                            <div className="relative">
                              <Label htmlFor="currentMonthlyGross" className="text-xs text-slate-500 mb-1 flex items-center space-x-1">
                                <DollarSign className="w-3 h-3" />
                                <span>mtl. Brutto</span>
                              </Label>
                              <div className="relative">
                                <Input
                                  id="currentMonthlyGross"
                                  type="number"
                                  step="0.01"
                                  value={currentMonthlyGross}
                                  onChange={(e) => setCurrentMonthlyGross(e.target.value)}
                                  className={`border-slate-300 focus:border-slate-500 pr-8 ${validationErrors.monthlyGross ? 'border-red-500' : ''}`}
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">€</span>
                              </div>
                              {validationErrors.monthlyGross && (
                                <p className="text-xs text-red-600 mt-1 flex items-center space-x-1">
                                  <AlertTriangle className="w-3 h-3" />
                                  <span>{validationErrors.monthlyGross}</span>
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-slate-700 font-semibold">Erhöhung</Label>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="relative">
                              <Label htmlFor="increaseType" className="text-xs text-slate-500 mb-1 flex items-center space-x-1">
                                <TrendingUp className="w-3 h-3" />
                                <span>Art der Erhöhung</span>
                              </Label>
                              <Select value={increaseType} onValueChange={(v) => setIncreaseType(v as IncreaseType)}>
                                <SelectTrigger id="increaseType" className="border-slate-300">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="netto">Netto</SelectItem>
                                  <SelectItem value="brutto">Brutto</SelectItem>
                                  <SelectItem value="agkosten">AG-Kosten</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="relative">
                              <Label htmlFor="increaseAmount" className="text-xs text-slate-500 mb-1 flex items-center space-x-1">
                                <DollarSign className="w-3 h-3" />
                                <span>Gewünschte Erhöhung</span>
                              </Label>
                              <div className="relative">
                                <Input
                                  id="increaseAmount"
                                  type="number"
                                  step="0.01"
                                  value={increaseAmount}
                                  onChange={(e) => setIncreaseAmount(e.target.value)}
                                  className="border-slate-300 focus:border-slate-500 pr-8"
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">€</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label className="text-slate-700 font-semibold">Aktuell</Label>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="relative">
                              <Label htmlFor="hourlyWageHours" className="text-xs text-slate-500 mb-1 flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>Stundenlohn</span>
                              </Label>
                              <div className="relative">
                                <Input
                                  id="hourlyWageHours"
                                  type="number"
                                  step="0.01"
                                  value={hourlyWageHours}
                                  onChange={(e) => setHourlyWageHours(e.target.value)}
                                  className={`border-slate-300 focus:border-slate-500 pr-12 ${validationErrors.hourlyWageHours ? 'border-red-500' : ''}`}
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">€/h</span>
                              </div>
                              {validationErrors.hourlyWageHours && (
                                <p className="text-xs text-red-600 mt-1 flex items-center space-x-1">
                                  <AlertTriangle className="w-3 h-3" />
                                  <span>{validationErrors.hourlyWageHours}</span>
                                </p>
                              )}
                            </div>

                            <div className="relative">
                              <Label className="text-xs text-slate-500 mb-1 flex items-center space-x-1">
                                <DollarSign className="w-3 h-3" />
                                <span>mtl. Brutto</span>
                              </Label>
                              <div className="relative">
                                <Input
                                  type="text"
                                  value={hourlyWageHours && currentWeeklyHours ? `${(parseFloat(hourlyWageHours) * parseFloat(currentWeeklyHours) * 4.33).toFixed(2)}` : '0.00'}
                                  disabled
                                  className={`border-slate-300 bg-slate-50 text-slate-600 pr-8 ${validationErrors.calculatedGross ? 'border-red-500' : ''}`}
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">€</span>
                              </div>
                              {validationErrors.calculatedGross && (
                                <p className="text-xs text-red-600 mt-1 flex items-center space-x-1">
                                  <AlertTriangle className="w-3 h-3" />
                                  <span>{validationErrors.calculatedGross}</span>
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-slate-700 font-semibold">Wochenstunden</Label>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="relative">
                              <Label htmlFor="currentWeeklyHours" className="text-xs text-slate-500 mb-1 flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>Aktuell</span>
                              </Label>
                              <div className="relative">
                                <Input
                                  id="currentWeeklyHours"
                                  type="number"
                                  step="0.5"
                                  value={currentWeeklyHours}
                                  onChange={(e) => setCurrentWeeklyHours(e.target.value)}
                                  className="border-slate-300 focus:border-slate-500 pr-14"
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">Std.</span>
                              </div>
                            </div>

                            <div className="relative">
                              <Label htmlFor="additionalHours" className="text-xs text-slate-500 mb-1 flex items-center space-x-1">
                                <Plus className="w-3 h-3" />
                                <span>Zusätzlich</span>
                              </Label>
                              <div className="relative">
                                <Input
                                  id="additionalHours"
                                  type="number"
                                  step="0.5"
                                  value={additionalHours}
                                  onChange={(e) => setAdditionalHours(e.target.value)}
                                  className="border-slate-300 focus:border-slate-500 pr-14"
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">Std.</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Button
                      onClick={handleCalculate}
                      disabled={!isFormValid() || calculating}
                      className="w-full bg-gradient-to-r from-[var(--lohn-teal)] to-[var(--lohn-primary)] hover:opacity-90 text-white font-semibold py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      {calculating ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Berechne...</span>
                        </div>
                      ) : (
                        "Jetzt berechnen"
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ergebnis Kachel */}
            <Card className="border-none shadow-2xl bg-white overflow-hidden hover:shadow-3xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-br from-[var(--lohn-teal)]/5 to-[var(--lohn-primary)]/5 border-b border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">Dein Ergebnis</CardTitle>
                    <p className="text-sm text-slate-500 mt-0.5">Automatisch nach Berechnung</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-8 pb-8">
                <div className="w-full">
                  {result && result.possible && result.newStructure ? (
                    <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-5 border border-emerald-200">
                        <div className="flex items-center space-x-3 mb-4">
                          <CheckCircle className="w-8 h-8 text-emerald-600" />
                          <h3 className="text-lg font-bold text-slate-900">
                            Mit LohnLab möglich!
                          </h3>
                        </div>
                        <p className="text-sm text-slate-600">Deine gewünschte Änderung kann als Minijob umgesetzt werden</p>
                      </div>

                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-5 border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-4 flex items-center space-x-2">
                          <DollarSign className="w-5 h-5 text-[var(--lohn-teal)]" />
                          <span>Neue Lohnstruktur</span>
                        </h4>
                        <div className="space-y-2.5 text-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-600">Basisgehalt (Minijob)</span>
                            <span className="font-bold text-slate-900">{result.newStructure.baseGross}€</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-600">+ Sachbezug</span>
                            <span className="font-semibold text-slate-700">{result.newStructure.sachbezug}€</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-600">+ Internet</span>
                            <span className="font-semibold text-slate-700">{result.newStructure.internet}€</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-600">+ Handy</span>
                            <span className="font-semibold text-slate-700">{result.newStructure.handy}€</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-600">+ Fahrtkosten</span>
                            <span className="font-semibold text-slate-700">{result.newStructure.fahrtkosten}€</span>
                          </div>
                          <div className="border-t-2 border-slate-300 pt-3 mt-3"></div>
                          <div className="flex justify-between items-center bg-white rounded-lg p-3 -mx-1">
                            <span className="font-bold text-slate-900">Netto für Mitarbeiter</span>
                            <span className="text-2xl font-bold text-emerald-600">{result.newStructure.totalNetto}€</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white rounded-xl p-4 border border-slate-200">
                          <div className="text-xs text-slate-500 mb-1">AG-Kosten</div>
                          <div className="text-xl font-bold text-slate-900">{result.newStructure.agCosts}€</div>
                          <div className="text-xs text-slate-400 mt-1">Statt 850€</div>
                        </div>

                        <div className="bg-white rounded-xl p-4 border border-emerald-200">
                          <div className="text-xs text-emerald-600 mb-1">Ersparnis</div>
                          <div className="text-xl font-bold text-emerald-600">{result.newStructure.agSavings}€</div>
                          <div className="text-xs text-emerald-500 mt-1">{result.newStructure.agSavings * 12}€/Jahr</div>
                        </div>
                      </div>

                      {numberOfEmployees && parseInt(numberOfEmployees) > 1 && (
                        <div className="bg-gradient-to-r from-[var(--lohn-teal)] to-[var(--lohn-primary)] rounded-2xl p-5 text-white shadow-xl">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm text-blue-100 mb-1">Gesamtersparnis ({numberOfEmployees} MA)</div>
                              <div className="text-3xl font-bold">{result.totalSavings}€</div>
                              <div className="text-sm text-blue-100 mt-1">pro Monat · {(result.totalSavings || 0) * 12}€/Jahr</div>
                            </div>
                            <CheckCircle className="w-14 h-14 text-white/30" />
                          </div>
                        </div>
                      )}

                      <Button
                        onClick={() => scrollToSection('kontakt')}
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-5 text-base shadow-xl hover:shadow-2xl transition-all duration-300"
                      >
                        Beratungstermin buchen
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-6 py-4">
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
                          <Calculator className="w-10 h-10 text-slate-400" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                          Was prüft dieser Rechner?
                        </h3>
                        <p className="text-sm text-slate-500">Fülle die Felder links aus und klicke auf "Jetzt berechnen"</p>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-gradient-to-br from-[var(--lohn-teal)]/5 to-[var(--lohn-primary)]/5 rounded-xl p-4 border border-[var(--lohn-teal)]/20">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-[var(--lohn-teal)] rounded-lg flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 text-sm mb-1">Lohnoptimierung möglich?</h4>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                Ob deine gewünschte Änderung als Minijob umgesetzt werden kann
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-[var(--lohn-teal)]/5 to-[var(--lohn-primary)]/5 rounded-xl p-4 border border-[var(--lohn-teal)]/20">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-[var(--lohn-primary)] rounded-lg flex items-center justify-center flex-shrink-0">
                              <DollarSign className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 text-sm mb-1">Maximales Optimierungspotential</h4>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                Wie viel Netto für den Mitarbeiter bei minimalen AG-Kosten möglich ist
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-[var(--lohn-teal)]/5 to-[var(--lohn-primary)]/5 rounded-xl p-4 border border-[var(--lohn-teal)]/20">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Scale className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900 text-sm mb-1">Mindestlohnerhöhung beachtet?</h4>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                Ob die kommende Mindestlohnerhöhung 2026 berücksichtigt wurde
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 text-center text-sm text-slate-500">
            <p className="flex items-center justify-center space-x-2">
              <Target className="w-4 h-4" />
              <span>Dies ist eine vereinfachte Berechnung. Die tatsächliche Optimierung wird individuell berechnet.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Lohnbausteine erklärt */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Was sind diese Lohnbausteine?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Steuerfreie und sozialversicherungsfreie Zusatzleistungen, die NICHT auf die 556€ angerechnet werden
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Sachbezug */}
            <Card className="text-center border-2 border-teal-200 hover:shadow-2xl hover:border-teal-400 transition-all bg-gradient-to-br from-teal-50 to-white">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-slate-900">Sachbezug</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Gutscheinkarte für Tanken, Einkaufen, Restaurants – universell einsetzbar
                </p>
                <div className="mt-4 text-xs text-teal-600 font-medium">
                  § 8 Abs. 2 Satz 11 EStG
                </div>
              </CardContent>
            </Card>

            {/* Internet */}
            <Card className="text-center border-2 border-teal-200 hover:shadow-2xl hover:border-teal-400 transition-all bg-gradient-to-br from-teal-50 to-white">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Wifi className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-slate-900">Internetzuschuss</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Zuschuss für Internet-Zugang zu Hause – teilweise beruflich genutzt
                </p>
                <div className="mt-4 text-xs text-teal-600 font-medium">
                  § 8 Abs. 2 EStG
                </div>
              </CardContent>
            </Card>

            {/* Handy */}
            <Card className="text-center border-2 border-teal-200 hover:shadow-2xl hover:border-teal-400 transition-all bg-gradient-to-br from-teal-50 to-white">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-slate-900">Handyzuschuss</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Zuschuss für berufliche und private Handy-Nutzung
                </p>
                <div className="mt-4 text-xs text-teal-600 font-medium">
                  § 8 Abs. 2 EStG
                </div>
              </CardContent>
            </Card>

            {/* Fahrtkosten */}
            <Card className="text-center border-2 border-teal-200 hover:shadow-2xl hover:border-teal-400 transition-all bg-gradient-to-br from-teal-50 to-white">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Route className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-slate-900">Fahrtkostenzuschuss</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Pauschaler Zuschuss für die Fahrt zur Arbeitsstätte
                </p>
                <div className="mt-4 text-xs text-teal-600 font-medium">
                  § 8 Abs. 2 EStG
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NeoLohn Partner-Sektion */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Noch mehr optimieren mit SFN-Zuschlägen
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Für Betriebe mit Sonn-, Feiertags- oder Nachtarbeit gibt es eine weitere Optimierungsebene
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 border-2 border-[rgb(40,66,100)] shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              {/* Logo */}
              <div className="lg:col-span-2 text-center lg:text-left">
                <img 
                  src={twodoxxLogo} 
                  alt="TwoDoxx neolohn Logo" 
                  className="h-16 mx-auto lg:mx-0 mb-6"
                />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Effektivlohn-Modell für die Gastronomie
                </h3>
                <p className="text-slate-600 mb-6">
                  Spezialisierte Software für optimale Nutzung steuerfreier SFN-Zuschläge
                </p>
                <Button
                  asChild
                  className="bg-[rgb(40,66,100)] hover:bg-[rgb(40,66,100)]/90 text-white font-semibold shadow-lg"
                >
                  <a href="https://neolohn.de/effektivlohn" target="_blank" rel="noopener noreferrer">
                    Mehr über Effektivlohn
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>

              {/* Erklärung */}
              <div className="lg:col-span-3">
                <h4 className="text-xl font-bold text-slate-900 mb-4">So funktioniert das Effektivlohn-Modell:</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[rgb(40,66,100)] rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                      <span className="font-bold text-white">1</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-900">Basisfixum festlegen</h5>
                      <p className="text-sm text-slate-600">
                        Bruttolohn pro Stunde vereinbaren (z.B. <span className="font-medium text-blue-600">10€</span>) – steuer- und sozialversicherungspflichtig
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[rgb(40,66,100)] rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                      <span className="font-bold text-white">2</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-900">Effektivlohn/h vereinbaren</h5>
                      <p className="text-sm text-slate-600">
                        Garantierter Nettolohn pro Stunde (z.B. <span className="font-medium text-green-600">15€</span>) für Planungssicherheit beim Mitarbeiter
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[rgb(40,66,100)] rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                      <span className="font-bold text-white">3</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-slate-900">SFN-Zuschläge clever nutzen</h5>
                      <p className="text-sm text-slate-600">
                        Steuer- und sozialversicherungsfreie Zuschläge für Sonntags-, Feiertags- und Nachtarbeit 
                        gleichen monatlich die Differenz zwischen Brutto- und Nettolohn aus
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 mt-6 border border-green-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-700">Mögliche Ersparnis:</span>
                    <span className="text-2xl font-bold text-green-600">bis zu 138€/Monat</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Pro Mitarbeiter bei optimaler SFN-Nutzung</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ausblick 2026 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-blue-200 shadow-2xl">
            <CardHeader className="text-center bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-3xl text-slate-900">Ausblick 2026: Noch mehr Spielraum</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  Die Bundesregierung prüft nach jeder Mindestlohnerhöhung eine Anpassung der Minijob-Grenze. 
                  Für 2026 wird die Grenze voraussichtlich auf <strong className="text-blue-600">603€</strong> angehoben, da der Mindestlohn auf <strong className="text-blue-600">13,90€ / Stunde</strong> steigt.
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-200">
                  <h4 className="font-semibold text-slate-900 mb-3">Was das für dich bedeutet:</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start space-x-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span>Basisgehalt steigt von <span className="font-medium text-gray-900">556€</span> auf <span className="font-medium text-blue-600">603€</span></span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span>Kombiniert mit Lohnbausteinen bis zu <span className="font-medium text-blue-600">747€</span> netto möglich</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span>Noch größere Ersparnis vs. Midijob-Modell</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h5 className="font-semibold text-slate-900 text-sm mb-2">Quellen:</h5>
                  <div className="space-y-1 text-xs">
                    <a 
                      href="https://www.tk.de/firmenkunden/service/fachthemen/versicherung-fachthema/mindestlohn-2026-minijobs-und-uebergangsbereich-2203074" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-blue-600 hover:underline"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Techniker Krankenkasse: Mindestlohn 2026</span>
                    </a>
                    <a 
                      href="https://de.ecovis.com/unternehmensberatung/mindestlohn-2026-2027-erhoehung-minijob-midijob-grenzen/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-blue-600 hover:underline"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Ecovis: Mindestlohn 2026/2027 Erhöhung</span>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Häufig gestellte Fragen
            </h2>
            <p className="text-xl text-slate-600">
              Alles, was du über Minijob-Optimierung wissen musst
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left font-semibold text-slate-900">
                Werden die Lohnbausteine auf die 556€-Grenze angerechnet?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                <strong>Nein.</strong> Alle vier Lohnbausteine (Sachbezug, Internet, Handy, Fahrtkosten) sind steuer- und 
                sozialversicherungsfrei und werden nicht auf die 556€ Minijob-Grenze angerechnet. Das ist gesetzlich 
                in § 8 EStG geregelt.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left font-semibold text-slate-900">
                Was passiert, wenn wir die 556€-Grenze überschreiten?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Bei Überschreitung der 556€-Grenze wird der Minijob automatisch zum <strong>Midijob</strong> 
                (Übergangsbereich 556,01€ bis 2.000€). Dann fallen Sozialabgaben an, die sowohl das Netto des 
                Mitarbeiters als auch deine Arbeitgeberkosten erhöhen. Mit LohnLab vermeidest du dies durch die 
                intelligente Nutzung von Lohnbausteinen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left font-semibold text-slate-900">
                Muss ich alle vier Lohnbausteine nutzen?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                <strong>Nein.</strong> Du kannst die Lohnbausteine flexibel kombinieren. Je nach Situation kannst du 
                nur einen, zwei, drei oder alle vier Bausteine nutzen. LohnLab berechnet automatisch die optimale 
                Kombination für deine individuelle Situation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left font-semibold text-slate-900">
                Funktioniert das in jeder Branche?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                <strong>Ja.</strong> Die steuerlichen Regelungen zu Lohnbausteinen gelten branchenübergreifend. 
                Egal ob Gastronomie, Einzelhandel, Pflege, Handwerk oder Büro – die Lohnoptimierung funktioniert 
                überall gleich. Branchen mit SFN-Zeiten (Sonntag/Feiertag/Nacht) haben sogar noch mehr 
                Optimierungspotential.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left font-semibold text-slate-900">
                Wie stelle ich auf das LohnLab-Modell um?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                LohnLab berechnet automatisch die optimale Lohnstruktur für deine Minijobber. Du erhältst eine 
                detaillierte Aufstellung und alle notwendigen Dokumente für die Umsetzung. Dein Steuerberater oder 
                Lohnbüro kann die neue Struktur dann problemlos in der Lohnabrechnung umsetzen. Wir begleiten dich 
                bei jedem Schritt.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
