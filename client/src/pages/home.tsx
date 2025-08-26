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

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeatureCardsSection />
      <CombinedBenefitsSection />
      <ReferencesSection />
      <HiringHighlightSection />
      <DatevIntegration />
      <TargetAudiencesSection />
      <TeamSection />
      <Footer />
    </div>
  );
}
