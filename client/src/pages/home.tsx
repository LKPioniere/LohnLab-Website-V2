import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/sections/HeroSection";
import FeatureCardsSection from "@/components/sections/FeatureCardsSection";
import CombinedBenefitsSection from "@/components/sections/CombinedBenefitsSection";
import HiringHighlightSection from "@/components/sections/HiringHighlightSection";
import DatevIntegration from "@/components/datev-integration";
import TargetAudiencesSection from "@/components/sections/TargetAudiencesSection";
import ReferencesSection from "@/components/sections/ReferencesSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/footer";
import { useSEO } from "@/hooks/useSEO";

export default function Home() {
  useSEO({
    title:
      "LohnLab Cockpit - Lohnoptimierung für Steuerberater und Unternehmen",
    description:
      "Moderne Lohnoptimierungslösung mit DATEV-Integration. Bis zu 50% Lohnkosten sparen bei Lohnerhöhungen und Neueinstellungen. Rechtssicher und transparent.",
    keywords:
      "Lohnoptimierung, DATEV Integration, Steuerberater Software, Lohnkosten sparen, Gehaltsabrechnung, Mitarbeiterbindung",
    canonical: "https://www.lohnlab.de/",
    ogTitle: "LohnLab Cockpit - Bis zu 50% Lohnkosten sparen",
    ogDescription:
      "Moderne Lohnoptimierung für Unternehmen und Steuerberater. DATEV-Integration, rechtssicher, transparent.",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      {/* Psychologically optimized flow: Problem → Proof → Solution → Social Proof → Trust → Action */}
      <CombinedBenefitsSection />
      <ReferencesSection />
      <FeatureCardsSection />
      <DatevIntegration />
      <TargetAudiencesSection />
      <HiringHighlightSection />
      <TeamSection />
      <Footer />
    </div>
  );
}
