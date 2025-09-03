import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Users, FileCheck, Zap, Euro, TrendingUp, Settings, Download, Eye, FileX, Heart } from "lucide-react";
import { Link } from "wouter";
import salaryCalculationImage from "@/assets/salary-calculation.png";
import employeeDataImage from "@/assets/employee-data-entry.png";

export default function Neueinstellungen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-teal)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Neueinstellungen <br />
              <span className="text-[var(--lohn-accent)]">intelligent gestalten</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Von der optimalen Gehaltsberechnung bis zur nahtlosen DATEV-Integration - 
              gestalten Sie Neueinstellungen effizienter und kostensparender.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <Button size="lg" className="bg-[var(--lohn-teal)] text-white hover:bg-[var(--lohn-teal)]/90">
                  Kostenlos testen
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button size="lg" variant="outline" className="border-white text-blue-600 bg-white hover:bg-gray-100">
                  Demo anfordern
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Step Process Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-6">
              Neueinstellungen in zwei einfachen Schritten
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vom flexiblen Einstellungsgehalt bis zur vollständigen DATEV-Integration
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[var(--lohn-primary)] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  1
                </div>
                <h3 className="text-2xl font-bold text-[var(--lohn-primary)]">Flexible Gehaltsberechnung</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Calculator className="text-[var(--lohn-teal)] mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-[var(--lohn-primary)]">Drei Berechnungsarten</h4>
                    <p className="text-gray-600">Nettoeinkommen, Arbeitgeberbudget oder klassischer Bruttowert</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Settings className="text-[var(--lohn-teal)] mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-[var(--lohn-primary)]">Individuelle Vorlagen</h4>
                    <p className="text-gray-600">Abteilungsspezifische Richtlinien und Benefits vordefinieren</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="text-[var(--lohn-teal)] mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-[var(--lohn-primary)]">Optimierungsvorschläge</h4>
                    <p className="text-gray-600">100-200€ mehr Netto durch intelligente Gehaltsoptimierung</p>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--lohn-accent)] bg-opacity-10 p-4 rounded-lg">
                <p className="text-sm text-[var(--lohn-primary)] font-medium">
                  💡 Beispiel: Außendienst = Dienstwagen, Homeoffice = Jobticket + Home-Office-Pauschale
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  2
                </div>
                <h3 className="text-2xl font-bold text-[var(--lohn-primary)]">Automatisierte Stammdatenerfassung</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Users className="text-[var(--lohn-teal)] mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-[var(--lohn-primary)]">Einfache Dateneingabe</h4>
                    <p className="text-gray-600">Intuitive Masken für alle Mitarbeiterstammdaten</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileCheck className="text-[var(--lohn-teal)] mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-[var(--lohn-primary)]">DATEV-Integration</h4>
                    <p className="text-gray-600">Direkter Transfer an Ihren Steuerberater</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="text-[var(--lohn-teal)] mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-[var(--lohn-primary)]">Sofortige Übertragung</h4>
                    <p className="text-gray-600">Alle Daten gebündelt und fehlerlos übermittelt</p>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--lohn-teal)] bg-opacity-10 p-4 rounded-lg">
                <p className="text-sm text-[var(--lohn-primary)] font-medium">
                  ⚡ Keine manuellen Übertragungsfehler mehr - alles automatisch und sicher
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Candidate Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-6">
              Auch Ihre Bewerber profitieren
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ein transparenter und unkomplizierter Bewerbungsprozess macht Sie als Arbeitgeber noch attraktiver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">Volle Transparenz</h3>
              <p className="text-gray-600">
                Klare Aufschlüsselung aller Gehaltsbestandteile bei der Verhandlung - keine versteckten Details
              </p>
            </div>
            
            <div className="text-center bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-[var(--lohn-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <FileX className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">Kein PDF-Chaos</h3>
              <p className="text-gray-600">
                Digitale Stammdatenerfassung statt nerviges Ausfüllen und Scannen von Personalfragebögen
              </p>
            </div>
            
            <div className="text-center bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-[var(--lohn-purple)] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">Mehr Netto möglich</h3>
              <p className="text-gray-600">
                Chance auf 100-200€ mehr Nettogehalt durch intelligente Lohnoptimierung - ohne Mehrkosten für den Arbeitgeber
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-6">
              So funktioniert's in der Praxis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Einblicke in die benutzerfreundliche Software-Oberfläche
            </p>
          </div>

          <div className="space-y-16">
            {/* Step 1 Screenshot */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-[var(--lohn-primary)] rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--lohn-primary)]">Einstellungsgehalt berechnen</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calculator className="text-[var(--lohn-teal)] mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-[var(--lohn-primary)]">Flexible Eingabe</h4>
                      <p className="text-gray-600">Brutto-Netto Rechner mit verschiedenen Ausgangswerten</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Euro className="text-[var(--lohn-teal)] mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-[var(--lohn-primary)]">Sofortige Übersicht</h4>
                      <p className="text-gray-600">Alle Kosten und Optimierungspotentiale auf einen Blick</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="text-[var(--lohn-teal)] mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-[var(--lohn-primary)]">Optimierungsvorschläge</h4>
                      <p className="text-gray-600">Automatische Berechnung der besten Gehaltsstruktur</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src={salaryCalculationImage} 
                  alt="LohnLab Einstellungsgehalt Berechnung" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>

            {/* Step 2 Screenshot */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src={employeeDataImage} 
                  alt="LohnLab Personalfragebogen für Festanstellung" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--lohn-primary)]">Stammdaten erfassen</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="text-[var(--lohn-teal)] mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-[var(--lohn-primary)]">Strukturierte Eingabe</h4>
                      <p className="text-gray-600">Personalfragebogen mit allen relevanten Daten</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileCheck className="text-[var(--lohn-teal)] mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-[var(--lohn-primary)]">Vollständige Erfassung</h4>
                      <p className="text-gray-600">Von persönlichen Daten bis Vertragsdetails</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Download className="text-[var(--lohn-teal)] mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-[var(--lohn-primary)]">DATEV-Export</h4>
                      <p className="text-gray-600">Automatische Übertragung an den Steuerberater</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-teal)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ihr Vorteil bei Neueinstellungen
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Gewinnen Sie begehrte Fachkräfte durch optimierte Gehaltspakete und sparen dabei noch Kosten
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Euro className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">100-200€ mehr Netto</h3>
              <p className="text-white text-opacity-90">Durch intelligente Gehaltsoptimierung aus dem gleichen Budget</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Schnellere Einstellung</h3>
              <p className="text-white text-opacity-90">Automatisierte Prozesse reduzieren Verwaltungsaufwand erheblich</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Wettbewerbsvorteil</h3>
              <p className="text-white text-opacity-90">Attraktivere Angebote bei gleichen oder niedrigeren Kosten</p>
            </div>
          </div>

          <div className="flex justify-center">
            <Link href="/kontakt">
              <Button size="lg" className="bg-[var(--lohn-teal)] text-white hover:bg-[var(--lohn-teal)]/90">
                Termin vereinbaren
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}