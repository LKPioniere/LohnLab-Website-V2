import Navigation from "@/components/navigation";
import TeamSection from "@/components/team-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Euro, Wallet, TrendingUp, Users, BarChart3, FileDown, Send, RefreshCw, Shield, Calculator, Zap, FileCheck, Check } from "lucide-react";

function HeroSectionUnternehmen() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-[var(--lohn-teal)] via-[var(--lohn-secondary)] to-[var(--lohn-purple)] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Mehr Netto für Ihre Mitarbeiter. 
              <span className="text-white"> Weniger Kosten für Sie.</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Fachkräftemangel und Mitarbeiterbindung beschäftigt aktuell sehr viele Firmen. 
              LohnLab unterstützt Sie dabei, hohe Mehrwerte für Ihre Mitarbeiter zu generieren und zu nutzen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('kontakt')}
                className="bg-white text-[var(--lohn-primary)] hover:bg-gray-100 transition-colors rounded-full px-8 py-4 font-semibold"
              >
                Kostenlose Demo
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('features')}
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[var(--lohn-primary)] transition-colors rounded-full px-8 py-4 font-semibold"
              >
                Vorteile entdecken
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Happy employees in modern office" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center">
                  <span className="text-[var(--lohn-primary)] text-xl font-bold">€</span>
                </div>
                <div>
                  <p className="text-[var(--lohn-primary)] font-semibold">Kostenoptimierung</p>
                  <p className="text-gray-600 text-sm">Bis zu 15% Ersparnis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductFeaturesUnternehmen() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">Warum das LohnLab Cockpit für Ihr Unternehmen?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Durch intelligente Lohnoptimierung sparen Sie Kosten und machen Ihre Mitarbeiter glücklicher - 
            <span className="text-[var(--lohn-teal)] font-semibold"> eine Win-Win-Situation für alle</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-[var(--lohn-teal)] rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="text-[var(--lohn-primary)] text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">Kostenoptimierung</h3>
            <p className="text-gray-600 mb-6">Reduzieren Sie Ihre Lohnnebenkosten durch clevere Gehaltsoptimierung um bis zu 15%.</p>
            <div className="bg-[var(--lohn-teal)]/10 rounded-xl p-4">
              <p className="text-sm text-[var(--lohn-primary)]"><strong>Beispiel:</strong> Bei 50 Mitarbeitern sparen Sie bis zu 50.000€ pro Jahr</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-[var(--lohn-secondary)] rounded-2xl flex items-center justify-center mb-6">
              <Users className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">Mitarbeiterzufriedenheit</h3>
            <p className="text-gray-600 mb-6">Ihre Mitarbeiter erhalten mehr Netto ohne zusätzliche Kosten für Sie.</p>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-600"><strong>Resultat:</strong> Höhere Motivation und geringere Fluktuation</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-[var(--lohn-purple)] rounded-2xl flex items-center justify-center mb-6">
              <Calculator className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">Einfache Berechnung</h3>
            <p className="text-gray-600 mb-6">Präzise Lohnberechnungen auf DATEV-Niveau - einfach und transparent.</p>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-600"><strong>Vorteil:</strong> Keine Excel-Listen mehr nötig</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern HR dashboard" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-6">Konkrete Vorteile für Ihr Unternehmen</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mt-1">
                  <Check className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Sofortige Kosteneinsparungen</h4>
                  <p className="text-gray-600">Reduzieren Sie Lohnnebenkosten ohne Qualitätsverlust.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mt-1">
                  <Check className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Transparente Kommunikation</h4>
                  <p className="text-gray-600">Klare Gehaltsabrechnungen für bessere Mitarbeiterkommunikation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mt-1">
                  <Check className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Rechtssicherheit</h4>
                  <p className="text-gray-600">DSGVO-konforme Übertragung direkt an Ihren Steuerberater.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mt-1">
                  <Check className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Zeitersparnis</h4>
                  <p className="text-gray-600">Automatisierte Prozesse statt manueller Excel-Berechnungen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Unternehmen() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSectionUnternehmen />
      <ProductFeaturesUnternehmen />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}