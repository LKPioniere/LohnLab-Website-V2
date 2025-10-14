import { useEffect } from "react";
import Navigation from "@/components/navigation";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Crown,
  DollarSign,
  Gift,
  PiggyBank,
  TrendingUp,
  Calculator,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Target,
  Users,
  FileCheck,
} from "lucide-react";
import optimierungsInsights from "@/assets/lohnoptimierung-insights.png";

export default function Lohnoptimierung() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--lohn-purple)] via-purple-600 to-[var(--lohn-primary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Crown className="w-20 h-20 text-yellow-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Lohnoptimierung
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-purple-100">
              Bis zu 50% Kosteneinsparung bei Lohnerhöhungen durch intelligente
              Nutzung <br className="block sm:hidden" />
              steuer- und sozialversicherungsoptimierter Lohnbausteine.
            </p>
            <div className="flex justify-center space-x-4 sm:space-x-6 px-6 sm:px-0">
              <Button
                onClick={() => scrollToSection("kontakt")}
                className="bg-white text-[var(--lohn-primary)] hover:bg-gray-100 transition-colors rounded-full px-8 py-4 font-semibold"
              >
                Kostenlose Beratung
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("funktionsweise")}
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[var(--lohn-primary)] transition-colors rounded-full px-8 py-4 font-semibold"
              >
                Mehr erfahren
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Was ist Lohnoptimierung */}
      <section id="funktionsweise" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
              Was ist Lohnoptimierung?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Die intelligente Nutzung gesetzlicher Möglichkeiten zur
              Kostenoptimierung bei Lohnerhöhungen
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-6">
                Steuer- und sozialversicherungsoptimierte Lohnbausteine
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Lohnoptimierung nutzt legale steuerliche und
                sozialversicherungsrechtliche Möglichkeiten, um Lohnkosten
                erheblich zu reduzieren, ohne dass der Mitarbeiter Nachteile hat
                - Sie sparen Kosten bei gleichbleibender Attraktivität.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Gift className="w-6 h-6 text-[var(--lohn-purple)] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Sachbezüge</h4>
                    <p className="text-gray-600">
                      Warengutscheine, Tankgutscheine bis 50€/Monat steuerfrei
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calculator className="w-6 h-6 text-[var(--lohn-purple)] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Fahrtkosten & Reisekosten
                    </h4>
                    <p className="text-gray-600">
                      Optimierte Abrechnung von Dienstreisen und Fahrtkosten
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-[var(--lohn-purple)] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Kindergartenkostenzuschüsse
                    </h4>
                    <p className="text-gray-600">
                      Steuerfreie Unterstützung für Kinderbetreuungskosten
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-[var(--lohn-purple)] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Betriebliche Altersvorsorge
                    </h4>
                    <p className="text-gray-600">
                      Steuer- und sozialversicherungsfreie Altersvorsorge
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-6">
                Beispielrechnung: 500€ Lohnerhöhung
              </h3>

              <div className="space-y-6">
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                  <h4 className="font-semibold text-red-800 mb-2">
                    Ohne LohnLab
                  </h4>
                  <div className="space-y-1 text-sm text-red-700">
                    <div className="flex justify-between">
                      <span>Arbeitgeberkosten total:</span>
                      <span className="font-bold">≈ 620€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Brutto:</span>
                      <span>500€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Nettoplus:</span>
                      <span>≈ 280€</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-800 mb-2">
                    Mit LohnLab
                  </h4>
                  <div className="space-y-1 text-sm text-green-700">
                    <div className="flex justify-between">
                      <span>Arbeitgeberkosten total:</span>
                      <span className="font-bold">≈ 400€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Brutto:</span>
                      <span>0€</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Nettoplus:</span>
                      <span className="font-bold">≈ 320€</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--lohn-purple)]/10 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-[var(--lohn-purple)]">
                      Ihre Kostenersparnis:
                    </span>
                    <span className="text-2xl font-bold text-[var(--lohn-purple)]">
                      220€
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-[var(--lohn-purple)]">
                      Einsparung in %:
                    </span>
                    <span className="text-2xl font-bold text-[var(--lohn-purple)]">
                      35%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Was können Sie mit der Ersparnis tun */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
              Was können Sie mit der Ersparnis tun?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Die gesparten Lohnkosten bieten verschiedene strategische
              Möglichkeiten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Reinvestition
              </h3>
              <p className="text-blue-700">
                Gesparte Mittel zurück ins Unternehmen investieren für Wachstum
                und Entwicklung.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">
                Kostenreduzierung
              </h3>
              <p className="text-green-700">
                Erhebliche Senkung der Lohnnebenkosten bei jeder
                Gehaltsanpassung.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Gift className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">
                Benefits
              </h3>
              <p className="text-purple-700">
                Attraktive Zusatzleistungen wie Jobtickets, Gesundheitsvorsorge
                oder Weiterbildung.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <PiggyBank className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-3">
                Altersvorsorge
              </h3>
              <p className="text-orange-700">
                Aufbau einer betrieblichen Rentenversicherung mit langfristigem
                Rentenpotential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Optimierungs-Insights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
              Optimierungs-Insights in Echtzeit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Das LohnLab Cockpit zeigt Ihnen sofort nach jeder Lohnberechnung
              konkrete Optimierungspotentiale auf
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-xl">
            <img
              src={optimierungsInsights}
              alt="LohnLab Optimierungs-Insights Dashboard"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                <strong>Echte Optimierungs-Insights:</strong> Das Dashboard
                zeigt sofort die mögliche Lohnkosten-Ersparnis, prozentuale
                Einsparungen und verwendete Lohnbausteine für maximale
                Transparenz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LohnLab Service */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
              Was liefert LohnLab?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Komplette Lohnoptimierung von der Analyse bis zur Umsetzung
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 flex-shrink-0 bg-[var(--lohn-primary)] rounded-xl flex items-center justify-center mb-6">
                <Calculator className="text-white text-lg" />
              </div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">
                Analyse
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <span className="text-gray-600">
                    Automatische Optimierungsvorschläge
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <span className="text-gray-600">Rechtskonforme Lösungen</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <span className="text-gray-600">
                    Maximale Ersparnisberechnung
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <span className="text-gray-600">
                    Verschiedene Verwendungsszenarien
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 flex-shrink-0 bg-[var(--lohn-secondary)] rounded-xl flex items-center justify-center mb-6">
                <FileCheck className="text-white text-lg" />
              </div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">
                Umsetzungsbegleitung
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <span className="text-gray-600">
                    Detaillierte Umsetzungspläne
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <span className="text-gray-600">
                    Vertragsvorlagen und Dokumentation
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <span className="text-gray-600">
                    Integration in bestehende Systeme
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <span className="text-gray-600">
                    Laufende Überwachung und Anpassung
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 flex-shrink-0 bg-[var(--lohn-purple)] rounded-xl flex items-center justify-center mb-6">
                <Target className="text-white text-lg" />
              </div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">
                Betreuung & Support
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <span className="text-gray-600">
                    Persönliche Beratung durch Experten
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <span className="text-gray-600">
                    Regelmäßige Optimierungsreviews
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <span className="text-gray-600">
                    Updates bei Gesetzesänderungen
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <span className="text-gray-600">Direkter Support-Kanal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[var(--lohn-purple)] to-[var(--lohn-primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit für bis zu 50% Kosteneinsparung?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Lassen Sie uns gemeinsam das Optimierungspotential Ihrer Lohnkosten
            analysieren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("kontakt")}
              className="bg-white text-[var(--lohn-primary)] hover:bg-gray-100 transition-colors rounded-full px-8 py-4 font-semibold"
            >
              Kostenlose Potentialanalyse
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("kontakt")}
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[var(--lohn-primary)] transition-colors rounded-full px-8 py-4 font-semibold"
            >
              Beratungstermin buchen
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
