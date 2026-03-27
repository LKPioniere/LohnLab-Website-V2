import BenefitsList from "@/components/common/BenefitsList";
import FeatureCard from "@/components/common/FeatureCard";
import { getProductFeatures } from "@/constants/features";
import { getGeneralBenefits, getHiringBenefits } from "@/constants/benefits";
import { useGender } from "@/lib/gender";
import fruitBasketImage from "@/assets/images/general/obstkorb-benefits.webp";
import teamPlanningImage from "@/assets/images/general/team-planung.jpg";

/**
 * Produkt-Features Sektion
 */
export default function ProductFeaturesSection() {
  const gendered = useGender();

  return (
    <section id="features" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-lohn-primary mb-4">
            Intelligente Lohngestaltung
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Systematische Kostenersparnis durch die Nutzung von Lohnbausteinen.
            <br />
            <span className="text-lohn-secondary font-semibold">
              Bis zu 50% Lohnkosteneinsparung{" "}
            </span>
            bei Lohnerhöhungen und Neueinstellungen.
          </p>
        </div>

        {/* Allgemeine Vorteile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={fruitBasketImage}
              alt="Obstkorb als Symbol für Sachbezüge und steuerfreie Zusatzleistungen"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-lohn-primary mb-6">
              Deine Vorteile auf einen Blick
            </h3>
            <BenefitsList benefits={getGeneralBenefits(gendered)} />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {getProductFeatures(gendered).map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>

        {/* Neueinstellungen Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-1">
            <h3 className="text-2xl font-bold text-lohn-primary mb-6">
              Mühelos Fachkräfte gewinnen
            </h3>
            <BenefitsList benefits={getHiringBenefits(gendered)} isHiringBenefits={true} />
          </div>
          <div className="order-2 lg:order-2">
            <img
              src={teamPlanningImage}
              alt="Team bei der Planung von Neueinstellungen"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
