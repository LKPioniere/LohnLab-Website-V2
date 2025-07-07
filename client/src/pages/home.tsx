import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/sections/HeroSection";
import DevelopmentStatus from "@/components/development-status";
import ProductFeaturesSection from "@/components/sections/ProductFeaturesSection";

import DatevIntegration from "@/components/datev-integration";
import TargetAudiencesSection from "@/components/sections/TargetAudiencesSection";
import ReferencesSection from "@/components/sections/ReferencesSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/footer";
import DemoCalculatorSection from "@/components/sections/DemoCalculatorSection";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <DevelopmentStatus />
      <ProductFeaturesSection />
      <DemoCalculatorSection />
      <ReferencesSection />
      <DatevIntegration />
      <TargetAudiencesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
