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
            Was kann unser LohnLab Cockpit alles für Sie tun?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hier bekommen Sie den kompletten Überblick - von A bis Z, alles was Sie brauchen, 
            um Ihren Mitarbeitern mehr Netto zu geben und dabei selbst Kosten zu sparen.
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