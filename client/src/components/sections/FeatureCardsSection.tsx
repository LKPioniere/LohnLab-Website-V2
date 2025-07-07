import FeatureCard from "@/components/common/FeatureCard";
import { PRODUCT_FEATURES } from "@/constants/features";

/**
 * Feature-Karten Sektion
 */
export default function FeatureCardsSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
            Unsere Lösungen im Detail
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie die vielfältigen Funktionen des LohnLab Cockpits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCT_FEATURES.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}