import React, { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Calculator, FileDown, CheckCircle, AlertCircle, Zap, BarChart3, FileCheck, Target, Crown, DollarSign, Gift, PiggyBank, Timer, HelpCircle, ExternalLink, Expand, X, Globe } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import berechnungsparameter from "@/assets/berechnungsparameter.png";
import excelSalaryCalculation from "@/assets/excel-salary-calculation.png";
import excelIcon from "@/assets/excel-icon.png";

export default function Lohnerhoehung() {
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [isMinijobActive, setIsMinijobActive] = useState(false);
  const [isMidijobActive, setIsMidijobActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMinijobToggle = () => {
    setIsMinijobActive(!isMinijobActive);
    if (!isMinijobActive) {
      setIsMidijobActive(false); // Deactivate Midijob when activating Minijob
    }
  };

  const handleMidijobToggle = () => {
    setIsMidijobActive(!isMidijobActive);
    if (!isMidijobActive) {
      setIsMinijobActive(false); // Deactivate Minijob when activating Midijob
    }
  };

  const calculateNettoAmount = () => {
    if (isMinijobActive) return "524€";
    if (isMidijobActive) return "1.450€";
    return "2.200€";
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--lohn-primary)] via-[var(--lohn-secondary)] to-[var(--lohn-purple)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Lohnerhöhung leicht gemacht
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Präzise Lohnberechnungen für Steuerberater und Unternehmen. 
              Schluss mit Excel-Schätzungen und ungenauen Online-Rechnern.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={() => scrollToSection('kontakt')}
                className="bg-white text-[var(--lohn-primary)] hover:bg-gray-100 transition-colors rounded-full px-8 py-4 font-semibold"
              >
                Kostenlose Demo
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('vorteile')}
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[var(--lohn-primary)] transition-colors rounded-full px-8 py-4 font-semibold"
              >
                Vorteile entdecken
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="problem" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
              Das Problem mit herkömmlichen Lohnberechnungen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Viele Unternehmen und Steuerberater kämpfen mit ungenauen Berechnungen und zeitaufwändigen Prozessen
            </p>
          </div>

          {/* Excel Problem - Detailed Section */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-red-100 mb-12 relative">
            {/* Excel Icon positioned over left edge */}
            <div className="absolute -left-8 top-8 w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center">
              <img src={excelIcon} alt="Excel" className="w-10 h-10" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="ml-8 lg:ml-0">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">Das Excel-Dilemma</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg">
                    <strong className="text-gray-800">Kein integrierter Lohnrechner:</strong> Excel kann nur mit simplen Faktoren 
                    vom Brutto zu den Lohnkosten hochrechnen für eine Budgetplanung. Das genaue Netto bleibt dabei völlig außer Acht.
                  </p>
                  <p className="text-lg">
                    <strong className="text-gray-800">Ständige Datenpflege:</strong> Die Excel-Tabelle muss konstant mit den 
                    aktuellen Mitarbeiterdaten gepflegt werden - ein zeitaufwändiger und fehleranfälliger Prozess.
                  </p>
                  <p className="text-lg">
                    <strong className="text-gray-800">Unübersichtlichkeit:</strong> Eine Excel-Tabelle kann schnell wahnsinnig 
                    unübersichtlich werden, besonders bei größeren Teams oder komplexeren Lohnstrukturen.
                  </p>
                </div>
              </div>
              <div className="order-first lg:order-last">
                <div className="relative">
                  <img 
                    src={excelSalaryCalculation} 
                    alt="Excel-Tabelle mit Lohnberechnungen" 
                    className="w-full rounded-xl shadow-lg border border-gray-200 cursor-pointer transition-transform hover:scale-105"
                    onClick={() => setIsImageExpanded(true)}
                  />
                  <div className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-lg opacity-75 hover:opacity-100 transition-opacity">
                    <Expand className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Ungenau
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Online Calculator Problem - Full Width Section */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-red-100 mb-12 relative">
            {/* Browser Icon positioned over left edge */}
            <div className="absolute -left-8 top-8 w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center">
              <Globe className="text-blue-600 text-2xl" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Interactive Calculator Demo */}
              <div className="order-first">
                <div className="relative">
                  <div 
                    className="rounded-xl p-8 border-2 shadow-lg"
                    style={{ 
                      background: 'linear-gradient(135deg, rgb(15,34,137) 0%, rgb(25,54,177) 100%)',
                      borderColor: 'rgb(15,34,137)'
                    }}
                  >
                    <h4 className="text-xl font-semibold text-white mb-6 text-center">
                      Übergangsbereich berücksichtigen?
                    </h4>
                    
                    {/* Minijob Slider */}
                    <div className="mb-6">
                      <div className="flex items-center gap-4">
                        <div 
                          className={`relative w-16 h-8 rounded-full cursor-pointer transition-all duration-300 shadow-inner ${
                            isMinijobActive ? "bg-green-400" : "bg-white/20"
                          }`}
                          onClick={handleMinijobToggle}
                        >
                          <div 
                            className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 ${
                              isMinijobActive ? "transform translate-x-8" : "translate-x-1"
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-medium text-white">Minijob (bis 538 €)</span>
                        </div>
                      </div>
                    </div>

                    {/* Midijob Slider */}
                    <div className="mb-8">
                      <div className="flex items-center gap-4">
                        <div 
                          className={`relative w-16 h-8 rounded-full cursor-pointer transition-all duration-300 shadow-inner ${
                            isMidijobActive ? "bg-green-400" : "bg-white/20"
                          }`}
                          onClick={handleMidijobToggle}
                        >
                          <div 
                            className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 ${
                              isMidijobActive ? "transform translate-x-8" : "translate-x-1"
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-medium text-white">Midijob (bis 2.000 €)</span>
                        </div>
                      </div>
                    </div>

                    {/* Dynamic Netto Amount */}
                    <div className="bg-white rounded-lg p-3 border border-gray-200 w-full">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Netto-Betrag:</span>
                        <div className="text-xl font-bold text-[rgb(15,34,137)] transition-all duration-300">
                          {calculateNettoAmount()}
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Aufwändig
                    </div>
                  </div>
                </div>
              </div>

              {/* Problem Description */}
              <div className="order-last lg:order-last ml-8 lg:ml-0">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">Ungenaue Online-Rechner</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg">
                    <strong className="text-gray-800">Ungewisse Aktualität:</strong> Online Brutto-Nettorechner sind weit verbreitet und rechnen bereits präziser als Excel-Schätzungen. Doch wer garantiert, dass diese Tools stets die neuesten kalkulatorischen Regelungen des BAMF berücksichtigen?
                  </p>
                  <p className="text-lg">
                    <strong className="text-gray-800">Hoher Aufwand:</strong> Jeder Mitarbeiter muss einzeln durchgerechnet und alle Stammdaten wiederholt eingegeben werden.
                  </p>
                  <p className="text-lg">
                    <strong className="text-gray-800">Fehlende Funktionen:</strong> Die meisten Online-Rechner können gar keinen Übergangsbereich berechnen und weisen nicht alle Arbeitgeberkosten oberhalb des Bruttogehaltes aus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="vorteile" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
              Unsere Lösung: Exakte Lohnberechnungen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Das LohnLab Cockpit bietet präzise Berechnungen auf DATEV-Niveau mit allen relevanten Faktoren
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">1. Exakte Ergebnisse</h3>
              <p className="text-gray-600 mb-4">
                Genaue Netto-, Brutto- und Lohnkostenberechnungen durch Berücksichtigung aller relevanten Faktoren.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Mitarbeiter- und Unternehmensstammdaten</li>
                <li>• Alle Lohnfaktoren und Umlagen</li>
                <li>• Berufsgenossenschaftsbeiträge</li>
                <li>• Korrekte Arbeitgeberkostenfaktoren</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">2. Mehrere Mitarbeiter</h3>
              <p className="text-gray-600 mb-4">
                Berechnung für beliebig viele Mitarbeiter gleichzeitig – keine Einzelberechnungen mehr nötig.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Gemeinsamer Faktor (z.B. 5% für alle)</li>
                <li>• Fester Betrag (z.B. 300€ für alle)</li>
                <li>• Individuelle Anpassungen möglich</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <FileCheck className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">3. Draft-Speicherung</h3>
              <p className="text-gray-600 mb-4">
                Speichern Sie Berechnungen als Entwürfe und rufen Sie sie jederzeit wieder auf.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Verschiedene Szenarien vergleichen</li>
                <li>• Iterative Anpassungen möglich</li>
                <li>• Keine Datenverluste</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <FileDown className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">4. Probeabrechnungen</h3>
              <p className="text-gray-600 mb-4">
                Generieren Sie transparente Probeabrechnungen für die Kommunikation mit Mandanten oder Mitarbeitern.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• DATEV-konforme Darstellung</li>
                <li>• Detaillierte Aufschlüsselung</li>
                <li>• Professionelle Präsentation</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Calculator className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">5. DATEV-Niveau</h3>
              <p className="text-gray-600 mb-4">
                Exakter Rechner auf DATEV-Niveau mit allen speziellen Berechnungsarten.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Midi-Job Berechnungen</li>
                <li>• Minijob-Berechnungen</li>
                <li>• Alle Steuerklassen</li>
                <li>• Aktuelle Beitragssätze</li>
              </ul>
            </div>
          </div>

          {/* Berechnungsparameter Screenshot */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--lohn-primary)] mb-4">
                Einfache Bedienung, professionelle Ergebnisse
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Intuitive Benutzeroberfläche für schnelle und exakte Lohnberechnungen
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 shadow-xl">
              <img 
                src={berechnungsparameter}
                alt="LohnLab Berechnungsparameter Interface"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  <strong>Professionelle Benutzerführung:</strong> Wählen Sie zwischen gemeinsamen Faktoren für alle Mitarbeiter 
                  oder individuellen Werten. Das System führt Sie Schritt für Schritt durch die Berechnung.
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-8 text-center">
              LohnLab vs. Herkömmliche Methoden
            </h3>
            <TooltipProvider>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="pb-4 text-gray-600 font-medium">Kriterium</th>
                      <th className="pb-4 text-center">Excel-Schätzung</th>
                      <th className="pb-4 text-center">Online-Rechner</th>
                      <th className="pb-4 text-center bg-[var(--lohn-purple)] text-white rounded-t-lg">
                        LohnLab Cockpit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="space-y-4">
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium">
                        <div className="flex items-center space-x-2">
                          <span>Genauigkeit</span>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="w-4 h-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>Präzise Berechnung aller steuerlichen und sozialversicherungsrechtlichen Aspekte einer Lohnerhöhung, einschließlich progressiver Steuereffekte und individueller Freibeträge.</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </td>
                      <td className="py-4 text-center">❌ Ungenau</td>
                      <td className="py-4 text-center">⚠️ Eingeschränkt</td>
                      <td className="py-4 text-center bg-[var(--lohn-purple)] text-white">
                        <span className="font-medium">✅ Professionell</span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium">
                        <div className="flex items-center space-x-2">
                          <span>Mehrere Mitarbeiter</span>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="w-4 h-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>Gleichzeitige Berechnung für alle Mitarbeiter eines Unternehmens mit unterschiedlichen Gehaltsstufen, Steuerklassen und Arbeitszeitmodellen.</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </td>
                      <td className="py-4 text-center">❌ Einzeln</td>
                      <td className="py-4 text-center">❌ Einzeln</td>
                      <td className="py-4 text-center bg-[var(--lohn-purple)] text-white">
                        <span className="font-medium">✅ Gleichzeitig</span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium">
                        <div className="flex items-center space-x-2">
                          <span>Speichern & Wiederholen</span>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="w-4 h-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>Alle Berechnungen werden automatisch gespeichert und können jederzeit reproduziert werden. Ideal für Vergleichsrechnungen und Dokumentationszwecke.</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </td>
                      <td className="py-4 text-center">⚠️ Manuell</td>
                      <td className="py-4 text-center">❌ Nicht möglich</td>
                      <td className="py-4 text-center bg-[var(--lohn-purple)] text-white">
                        <span className="font-medium">✅ Automatisch</span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium">
                        <div className="flex items-center space-x-2">
                          <span>Midi-/Minijobs</span>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="w-4 h-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>Vollständige Unterstützung für geringfügige Beschäftigungen und Midijobs mit korrekter Berechnung der reduzierten Sozialversicherungsbeiträge.</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </td>
                      <td className="py-4 text-center">❌ Nicht unterstützt</td>
                      <td className="py-4 text-center">❌ Meist nicht</td>
                      <td className="py-4 text-center bg-[var(--lohn-purple)] text-white">
                        <span className="font-medium">✅ Vollständig</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 font-medium">
                        <div className="flex items-center space-x-2">
                          <span>Probeabrechnungen</span>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="w-4 h-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>Erstellung von detaillierten Probeabrechnungen zur Mandantenkommunikation mit allen relevanten Berechnungsdetails und Hinweisen.</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </td>
                      <td className="py-4 text-center">❌ Nicht möglich</td>
                      <td className="py-4 text-center">❌ Nicht möglich</td>
                      <td className="py-4 text-center bg-[var(--lohn-purple)] text-white">
                        <span className="font-medium">✅ Professionell</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TooltipProvider>
          </div>
        </div>
      </section>

      {/* Benefits for Different Audiences */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
              Vorteile für Steuerberater und Unternehmen
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Für Steuerberater */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[var(--lohn-primary)] rounded-xl flex items-center justify-center mr-4">
                  <BarChart3 className="text-white text-lg" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--lohn-primary)]">Für Steuerberater</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Target className="text-green-600 mt-1 w-5 h-5" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Gewaltiger Mandantenvorteil</h4>
                    <p className="text-gray-600">Geben Sie Ihren Mandanten einen entscheidenden Wettbewerbsvorteil in die Hand.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Timer className="text-green-600 mt-1 w-5 h-5" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Zeit sparen für Ihre Sachbearbeiter</h4>
                    <p className="text-gray-600">Kein E-Mail-Ping-Pong mehr bei Lohnfragen - alle Antworten sofort verfügbar.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FileCheck className="text-green-600 mt-1 w-5 h-5" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Vollständige Datentransparenz</h4>
                    <p className="text-gray-600">Alle relevanten Berechnungsdetails und Hintergründe auf einen Blick.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Nahtlose Integration</h4>
                    <p className="text-gray-600">Direkter Export in Ihr gewohntes System.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Für Unternehmen */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[var(--lohn-teal)] rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="text-[var(--lohn-primary)] text-lg" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--lohn-primary)]">Für Unternehmen</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Exakte Kostenplanung</h4>
                    <p className="text-gray-600">Wissen Sie genau, was Lohnerhöhungen kosten werden.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Mitarbeiterzufriedenheit</h4>
                    <p className="text-gray-600">Klare Kommunikation über reale Netto-Erhöhungen.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Verschiedene Szenarien</h4>
                    <p className="text-gray-600">Vergleichen Sie unterschiedliche Erhöhungsmodelle.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Rechtssicherheit</h4>
                    <p className="text-gray-600">DATEV-konforme Berechnungen für alle Mitarbeitertypen.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lohnoptimierung - Kirsche auf der Sahnetorte */}
      <section className="py-20 bg-gradient-to-br from-[var(--lohn-purple)] via-purple-600 to-[var(--lohn-primary)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Crown className="w-16 h-16 text-yellow-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Die Kirsche auf der Sahnetorte
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Zusätzlich zur exakten Lohnberechnung bietet das Cockpit <strong>Lohnoptimierung</strong> an - 
              realistische und rechtskonforme Vorschläge für bis zu <strong>50% Kosteneinsparung</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Was ist Lohnoptimierung?</h3>
              <p className="text-purple-100 mb-6 leading-relaxed">
                Die Nutzung von steuer- und sozialversicherungsoptimierten Lohnbausteinen wie 
                Sachbezügen, Fahrtkosten oder Kindergartenkostenzuschüssen. Mit dem gleichen Budget 
                erhalten Sie die angedachte Lohnerhöhung plus echte Mitarbeiterbindung.
              </p>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h4 className="font-semibold mb-4 flex items-center">
                  <Gift className="w-5 h-5 mr-2" />
                  Was können Sie mit der Ersparnis tun?
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <DollarSign className="w-4 h-4 text-green-300" />
                    <span>Reinvestition ins eigene Unternehmen</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <TrendingUp className="w-4 h-4 text-green-300" />
                    <span>Nettoplus on top zur Lohnerhöhung</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Gift className="w-4 h-4 text-green-300" />
                    <span>Benefits wie Jobtickets oder Krankenversicherung</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <PiggyBank className="w-4 h-4 text-green-300" />
                    <span>Betriebliche Rentenversicherung</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Maximale Ersparnis-Analyse</h3>
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Mögliche Kosteneinsparung:</span>
                    <span className="text-2xl font-bold text-green-300">bis zu 50%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-400 to-green-300 h-3 rounded-full" style={{width: '50%'}}></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Das Tool zeigt Ihnen:</h4>
                  <ul className="space-y-2 text-purple-100">
                    <li>• Maximale Ersparnis für den Arbeitgeber</li>
                    <li>• Optimale Verwendung der gesparten Mittel</li>
                    <li>• Rechtskonforme Umsetzungsvorschläge</li>
                    <li>• Langzeit-Rentenpotential für Mitarbeiter</li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <a href="/lohnoptimierung" className="inline-flex items-center text-white hover:text-yellow-300 transition-colors">
                    <span className="border-b border-white hover:border-yellow-300">Detaillierte Informationen zur Lohnoptimierung</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />

      {/* Image Expansion Modal */}
      {isImageExpanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setIsImageExpanded(false)}
        >
          <div className="relative max-w-6xl max-h-full">
            <img 
              src={excelSalaryCalculation} 
              alt="Excel-Tabelle mit Lohnberechnungen - Vergrößerte Ansicht" 
              className="max-w-full max-h-full rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setIsImageExpanded(false)}
              className="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-2 hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}