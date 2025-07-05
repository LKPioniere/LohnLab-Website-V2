import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ProductFeatures() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">Lohnoptimierung neu gedacht</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intelligente Gehaltsgestaltung durch Sachbezüge, Essenzuschüsse und Fahrtkostenbeteiligungen. 
            <span className="text-[var(--lohn-secondary)] font-semibold">Bis zu 50% Lohnkosteneinsparung</span> 
            bei gleichzeitig höherem Nettoeinkommen für Mitarbeiter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Glücklicher Mandant im Gespräch mit Steuerberater" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-6">Ihre Vorteile auf einen Blick</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mt-1">
                  <Check className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Für Steuerberater: Neue Erlösquelle</h4>
                  <p className="text-gray-600">Zusätzliche Beratungsleistung ohne Mehraufwand - digitale Lohnoptimierung als Premium-Service.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mt-1">
                  <Check className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Für Unternehmen: Sofortige Kostensenkung</h4>
                  <p className="text-gray-600">Messbare Lohnkosteneinsparung bei gesteigerter Mitarbeiterzufriedenheit und -bindung.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mt-1">
                  <Check className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Wettbewerbsvorteil sichern</h4>
                  <p className="text-gray-600">Positionieren Sie sich als Experte für moderne Lohngestaltung und digitale HR-Lösungen.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mt-1">
                  <Check className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">DATEV-Integration inklusive</h4>
                  <p className="text-gray-600">Nahtlose Anbindung an bestehende Systeme - keine Umstellung, keine Zusatzarbeit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Neueinstellungen Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Team bei der Planung von Neueinstellungen" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-6">Neue Mitarbeiter perfekt einpreisen</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mt-1">
                  <Check className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Dreifache Flexibilität</h4>
                  <p className="text-gray-600">Berechnung ab Netto-Wunsch, verfügbarem Budget oder Brutto-Vorgabe - Sie haben die Wahl.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mt-1">
                  <Check className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Intelligente Vorlagen</h4>
                  <p className="text-gray-600">Abteilungs- und positionsspezifische Benefit-Pakete einmal definieren, immer wieder nutzen.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mt-1">
                  <Check className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Automatisierte Prozesse</h4>
                  <p className="text-gray-600">Stammdaten werden automatisch an DATEV übertragen - kein manueller Aufwand.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mt-1">
                  <Check className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Recruiting-Vorteil</h4>
                  <p className="text-gray-600">Bieten Sie 100-200€ mehr Netto bei gleichem Budget - und gewinnen die besten Kandidaten.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link href="/loesungen/neueinstellungen">
                <Button className="bg-[var(--lohn-primary)] text-white hover:bg-[var(--lohn-secondary)] transition-colors">
                  Mehr zu Neueinstellungen
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
