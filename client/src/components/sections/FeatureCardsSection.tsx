import FeatureCard from "@/components/common/FeatureCard";
import { PRODUCT_FEATURES } from "@/constants/features";

/**
 * Feature-Karten Sektion
 */
export default function FeatureCardsSection() {
  return (
    <section className="py-32 bg-gray-50 relative">
      {/* Visuelle Abtrennung oben */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--lohn-primary)] via-[var(--lohn-teal)] to-[var(--lohn-secondary)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[var(--lohn-primary)]/10 rounded-full px-8 py-3 mb-6">
            <span className="text-[var(--lohn-primary)] font-semibold text-lg">🚀 Funktionen</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
            Was kann unser LohnLab Cockpit alles für Sie tun?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hier bekommen Sie den kompletten Überblick - von A bis Z, alles was Sie brauchen, 
            um bei Lohnerhöhungen und Neueinstellungen systematisch Kosten zu sparen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCT_FEATURES.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}