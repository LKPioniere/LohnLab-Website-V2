import BenefitsList from "@/components/common/BenefitsList";
import FeatureCard from "@/components/common/FeatureCard";
import { PRODUCT_FEATURES } from "@/constants/features";
import { GENERAL_BENEFITS, HIRING_BENEFITS } from "@/constants/benefits";

/**
 * Produkt-Features Sektion
 */
export default function ProductFeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
            Lohnoptimierung neu gedacht
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intelligente Gehaltsgestaltung durch Sachbezüge, Essenzuschüsse und Fahrtkostenbeteiligungen. 
            <span className="text-[var(--lohn-secondary)] font-semibold"> Bis zu 50% Lohnkosteneinsparung</span> 
            bei gleichzeitig höherem Nettoeinkommen für Mitarbeiter.
          </p>
        </div>

        {/* Allgemeine Vorteile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Glücklicher Mandant im Gespräch mit Steuerberater" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-6">
              Ihre Vorteile auf einen Blick
            </h3>
            <BenefitsList benefits={GENERAL_BENEFITS} />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PRODUCT_FEATURES.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>

        {/* Neueinstellungen Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-1">
            <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-6">
              Neue Mitarbeiter perfekt einpreisen
            </h3>
            <BenefitsList benefits={HIRING_BENEFITS} />
          </div>
          <div className="order-2 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Team bei der Planung von Neueinstellungen" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}