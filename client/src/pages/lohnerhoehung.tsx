import React, { useEffect } from "react";
import Navigation from "@/components/navigation";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Calculator, Heart, Shield, Target, Crown, DollarSign, Gift, PiggyBank, Timer, AlertTriangle, TrendingDown, Briefcase, Award, Lightbulb, Eye, Banknote, CheckCircle, ArrowRight, Sparkles, Rocket, Building2, HandHeart } from "lucide-react";
import lohnlabCalculatorPrecise from "@/assets/lohnlab-calculator-precise.png";
import employeeSelection from "@/assets/employee-selection.png";
import payrollComparison from "@/assets/payroll-comparison.png";
import fruitBasketImage from "@/assets/fruit-basket.jpg";
import ciCardImage from "@/assets/ci-card-lohnlab.png";

export default function Lohnerhoehung() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Understanding Decision Makers */}
      <section className="bg-gradient-to-br from-[var(--lohn-primary)] via-[var(--lohn-secondary)] to-[var(--lohn-purple)] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Lohnerhöhungen, die <span className="text-yellow-300">zuerst</span><br/>
              <span className="text-green-300">bei Ihren Mitarbeitern ankommen</span>
            </h1>
            <p className="text-xl mb-12 max-w-4xl mx-auto text-blue-100 leading-relaxed">
              In der aktuellen Wirtschaftslage stehen Sie vor explodierenden Kosten und dem Kampf um Fachkräfte. 
              Wir haben verstanden: <strong className="text-white">Der Fokus liegt auf der Bindung bestehender Mitarbeiter.</strong> 
              Unsere Lösung bringt Lohnerhöhungen dort an, wo sie ankommen sollen – im Netto Ihrer Mitarbeiter.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                onClick={() => scrollToSection('mitarbeiter-first')}
                className="bg-white text-[var(--lohn-primary)] hover:bg-gray-100 font-semibold px-12 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <Heart className="mr-2" size={20} />
                Employee First Ansatz
              </Button>
              <Button 
                onClick={() => scrollToSection('kontakt')}
                className="bg-white text-[var(--lohn-primary)] hover:bg-gray-100 font-semibold px-12 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <Rocket className="mr-2" size={20} />
                Kostenlose Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Economic Challenges */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--lohn-primary)] mb-6">
              Die aktuelle Wirtschaftslage verstehen
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Als Entscheider in deutschen Unternehmen kennen Sie diese Herausforderungen nur zu gut
            </p>
          </div>

          {/* Three Key Challenges */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-red-50">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                  <TrendingDown className="text-orange-600" size={32} />
                </div>
                <CardTitle className="text-xl text-gray-800">Explodierende Kosten</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Steigende Energiekosten, Inflation und gestiegene Rohstoffpreise belasten das Budget. 
                  Jede Ausgabe muss sorgfältig abgewogen werden.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-xl text-gray-800">Kampf um Fachkräfte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Der Fachkräftemangel verschärft sich. <a href="/loesungen/neueinstellungen" className="text-[var(--lohn-primary)] hover:underline">Neue Talente zu finden</a> wird immer schwieriger 
                  und teurer.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="text-green-600" size={32} />
                </div>
                <CardTitle className="text-xl text-gray-800">Mitarbeiterbindung im Fokus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Bestehende Mitarbeiter zu halten ist kostengünstiger als neue zu rekrutieren. 
                  Die Bindung wird zur strategischen Priorität.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Insight */}
          <div className="bg-gradient-to-r from-[var(--lohn-primary)] to-[var(--lohn-secondary)] rounded-3xl p-8 lg:p-12 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <Lightbulb className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                Unsere Erkenntnis: Es geht um smarte Lösungen, nicht um höhere Ausgaben
              </h3>
              <p className="text-xl text-blue-100 leading-relaxed">
                Statt einfach nur Gehälter zu erhöhen, brauchen Sie intelligente Employer Branding Lösungen, 
                die Ihre Mitarbeiter wertschätzen und gleichzeitig Ihre Kosten optimieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Employee-First Approach */}
      <section id="mitarbeiter-first" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 border-green-200 mb-6 px-4 py-2 text-base font-semibold">
              Employee First Ansatz
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--lohn-primary)] mb-6">
              Lohnerhöhungen, die <span className="text-green-600">im Netto ankommen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              "Fassen Sie Lohnerhöhung da an, wo sie ankommen soll, im Netto ihrer Mitarbeiter 
              und zeigen Sie so, dass Sie zuerst an Ihre Mitarbeiter denken!"
            </p>
          </div>

          {/* Core Message with Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200">
                <Heart className="w-12 h-12 text-green-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Ihre Mitarbeiter spüren den Unterschied
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <strong>Maximales Netto:</strong> Durch intelligente Lohnbausteine kommt mehr bei Ihren Mitarbeitern an
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <strong>Transparente Kommunikation:</strong> Zeigen Sie Ihren Mitarbeitern, dass Sie an sie denken
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">
                      <strong>Langfristige Bindung:</strong> Wertschätzung führt zu höherer Mitarbeiterzufriedenheit
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={lohnlabCalculatorPrecise} 
                alt="LohnLab Cockpit - Präzise Netto-Berechnung" 
                className="w-full rounded-2xl shadow-2xl border border-gray-200"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-6 py-3 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Banknote className="w-5 h-5" />
                  <span className="font-semibold">Mehr Netto = Glücklichere Mitarbeiter</span>
                </div>
              </div>
            </div>
          </div>

          {/* givve® Card - Branded Employee Benefits */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 lg:p-12 border border-purple-200 mb-20">
            <div className="text-center mb-12">
              <Crown className="w-16 h-16 mx-auto text-purple-600 mb-6" />
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                givve® Card - Lohnerhöhungen sichtbar machen
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Die wiederaufladbare Mastercard mit Ihrem Firmenlogo macht jeden Cent Ihrer Wertschätzung sichtbar
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src={ciCardImage} 
                  alt="givve® Card mit LohnLab Branding" 
                  className="w-full rounded-2xl shadow-2xl border border-gray-200"
                />
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Crown className="w-5 h-5" />
                    <span className="font-semibold">Ihr Logo auf jeder Karte</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Gift className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">Universell einsetzbar</h4>
                  </div>
                  <p className="text-gray-600">
                    Ihre Mitarbeiter können die Mastercard bei <strong>allen Akzeptanzstellen</strong> nutzen - 
                    für Tanken, Einkaufen, Shoppen oder jeden anderen Bedarf in ihrer Region.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">Ihr Firmenlogo im Portemonnaie</h4>
                  </div>
                  <p className="text-gray-600">
                    Die Karte kann mit <strong>Ihrem Firmendesign und Logo</strong> gebrandelt werden. 
                    Bei jeder Zahlung sehen Ihre Mitarbeiter Ihr Unternehmen als Arbeitgeber, der an sie denkt.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <HandHeart className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">Lohnerhöhung wird täglich sichtbar</h4>
                  </div>
                  <p className="text-gray-600">
                    Anders als reguläre Gehaltsüberweisungen <strong>werden Zahlungen auf die Karte bewusst wahrgenommen</strong>. 
                    Ihre Wertschätzung geht nicht in der monatlichen Abrechnung unter.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-6 border border-purple-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                    <span className="font-semibold text-gray-800">550.000+ zufriedene Kartennutzer</span>
                  </div>
                  <div className="flex items-center space-x-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                    <span className="font-semibold text-gray-800">23.000+ Firmenkunden seit 2015</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                    <span className="font-semibold text-gray-800">Vollständig steuerkonform für Sachbezüge</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lohnerhöhungsmodul im LohnLab Cockpit */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 lg:p-12 border border-blue-200">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Lohnerhöhungsmodul im LohnLab Cockpit
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Das spezialisierte Modul für präzise Lohnerhöhungsberechnungen - 
                entwickelt für maximale Effizienz und echte Kosteneinsparungen.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Calculator className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">Präzise Lohnberechnung</h4>
                  </div>
                  <p className="text-gray-600">
                    Das Lohnerhöhungsmodul berechnet alle Mitarbeiter gleichzeitig mit höchster Genauigkeit. 
                    Keine manuellen Fehler, keine Excel-Schätzungen mehr.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <PiggyBank className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">Automatische Optimierung</h4>
                  </div>
                  <p className="text-gray-600">
                    Das Modul optimiert automatisch jeden Lohnerhöhungsfall für maximales Netto bei 
                    bis zu 50% reduzierten Arbeitgeberkosten.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">Professionelle Dokumentation</h4>
                  </div>
                  <p className="text-gray-600">
                    Automatische Erstellung von Gehaltsvergleichen und Probeabrechnungen für 
                    transparente Mitarbeiterkommunikation direkt aus dem Modul.
                  </p>
                </div>
              </div>

              <div className="relative">
                <img 
                  src={employeeSelection} 
                  alt="LohnLab Cockpit - Lohnerhöhungsmodul Mitarbeiterauswahl" 
                  className="w-full rounded-2xl shadow-2xl border border-gray-200"
                />
                <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-6 py-3 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-5 h-5" />
                    <span className="font-semibold">Speziell für Lohnerhöhungen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Payroll Communication */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--lohn-primary)] mb-6">
              Professionelle Mitarbeiterkommunikation
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Zeigen Sie Ihren Mitarbeitern transparent und verständlich, 
              wie ihre Lohnerhöhung ihr Netto-Einkommen verbessert
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 border border-teal-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Einzigartige Vorher-Nachher-Darstellung
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Zwei-Spalten-Abrechnung</h4>
                      <p className="text-gray-600">
                        Links das aktuelle Gehalt, rechts die neue Struktur mit Lohnerhöhung - 
                        so verstehen Mitarbeiter sofort den Unterschied.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Klare Netto-Verbesserung</h4>
                      <p className="text-gray-600">
                        Mitarbeiter sehen auf einen Blick, wie viel mehr Netto-Gehalt 
                        sie durch die intelligente Optimierung erhalten.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Wertschätzung kommunizieren</h4>
                      <p className="text-gray-600">
                        Zeigen Sie Ihren Mitarbeitern, dass Sie innovative Wege gehen, 
                        um ihr Einkommen zu optimieren.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={payrollComparison} 
                alt="Professionelle Gehaltsabrechnung mit Vorher-Nachher-Vergleich" 
                className="w-full rounded-2xl shadow-2xl border border-gray-200"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Mehr Netto für alle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results and ROI Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200 mb-6 px-4 py-2 text-base font-semibold">
              Messbare Ergebnisse
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--lohn-primary)] mb-6">
              Das Ergebnis: Glückliche Mitarbeiter, geringere Kosten
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Unser Employee First Ansatz schafft eine Win-Win-Situation für alle Beteiligten
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Bis zu 50% Kosteneinsparung</h3>
              <p className="text-gray-600">
                Durch intelligente Lohnbausteine reduzieren Sie Ihre echten Lohnkosten erheblich
              </p>
            </Card>

            <Card className="text-center p-8 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Höhere Mitarbeiterzufriedenheit</h3>
              <p className="text-gray-600">
                Mitarbeiter erhalten mehr Netto und fühlen sich wertgeschätzt durch den transparenten Ansatz
              </p>
            </Card>

            <Card className="text-center p-8 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Stärkere Mitarbeiterbindung</h3>
              <p className="text-gray-600">
                Innovatives Employer Branding positioniert Sie als attraktiven, zukunftsorientierten Arbeitgeber
              </p>
            </Card>
          </div>

        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}