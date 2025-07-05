import { UserCheck, Building, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TargetAudiences() {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">Für wen ist das LohnLab Cockpit?</h2>
          <p className="text-xl text-gray-600">Zwei Zielgruppen, ein gemeinsamer Nutzen</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div id="steuerberater" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-[var(--lohn-primary)] rounded-2xl flex items-center justify-center mr-4">
                <UserCheck className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--lohn-primary)]">Für Steuerberater</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Erweitern Sie Ihr Dienstleistungsportfolio um moderne Lohnoptimierung und 
              generieren Sie zusätzliche Umsätze mit Ihren bestehenden Mandanten.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Check className="text-[var(--lohn-teal)] w-5 h-5" />
                <span className="text-gray-700">Neue Einnahmequelle ohne Mehraufwand</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-[var(--lohn-teal)] w-5 h-5" />
                <span className="text-gray-700">Stärkere Mandantenbindung durch Mehrwert</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-[var(--lohn-teal)] w-5 h-5" />
                <span className="text-gray-700">Wettbewerbsvorteil durch Digitalisierung</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-[var(--lohn-teal)] w-5 h-5" />
                <span className="text-gray-700">Nahtlose DATEV Integration</span>
              </div>
            </div>
            <Button 
              onClick={scrollToContact}
              className="w-full bg-[var(--lohn-primary)] text-white hover:bg-[var(--lohn-secondary)] transition-colors rounded-xl py-3 font-medium"
            >
              Informationen für Steuerberater
            </Button>
          </div>

          <div id="unternehmen" className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-[var(--lohn-teal)] rounded-2xl flex items-center justify-center mr-4">
                <Building className="text-[var(--lohn-primary)] text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--lohn-primary)]">Für Unternehmen</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Optimieren Sie Ihre Lohnkosten und bieten Sie Ihren Mitarbeitern mehr Netto 
              ohne höhere Bruttokosten für das Unternehmen.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Check className="text-[var(--lohn-teal)] w-5 h-5" />
                <span className="text-gray-700">Exakte Lohnerhöhungen berechnen</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-[var(--lohn-teal)] w-5 h-5" />
                <span className="text-gray-700">Verlässliches Kostencontrolling</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-[var(--lohn-teal)] w-5 h-5" />
                <span className="text-gray-700">Mehr Netto für Mitarbeiter</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-[var(--lohn-teal)] w-5 h-5" />
                <span className="text-gray-700">Präzise Budgetplanung</span>
              </div>
            </div>
            <Button 
              onClick={scrollToContact}
              className="w-full bg-[var(--lohn-teal)] text-[var(--lohn-primary)] hover:bg-[var(--lohn-teal)]/80 transition-colors rounded-xl py-3 font-medium"
            >
              Informationen für Unternehmen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
