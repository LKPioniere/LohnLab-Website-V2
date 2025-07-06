import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/sections/HeroSection";
import DevelopmentStatus from "@/components/development-status";
import ProductFeaturesSection from "@/components/sections/ProductFeaturesSection";

import DatevIntegration from "@/components/datev-integration";
import TargetAudiencesSection from "@/components/sections/TargetAudiencesSection";
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
      
      {/* Hero & Status */}
      <HeroSection />
      <DevelopmentStatus />
      
      {/* Visual Separator */}
      <div className="h-1 bg-gradient-to-r from-[var(--lohn-teal)] via-[var(--lohn-secondary)] to-[var(--lohn-purple)]"></div>
      
      {/* Product Features */}
      <ProductFeaturesSection />
      
      {/* Demo Calculator */}
      <div className="bg-gradient-to-br from-gray-50 to-[var(--lohn-light)]/20">
        <DemoCalculatorSection />
      </div>
      
      {/* Visual Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      {/* DATEV Integration */}
      <DatevIntegration />
      
      {/* Visual Separator */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-6 text-sm text-gray-500 font-medium">Zielgruppen & Team</span>
        </div>
      </div>
      
      {/* Target Audiences */}
      <div className="bg-gradient-to-br from-[var(--lohn-light)]/30 to-gray-50">
        <TargetAudiencesSection />
      </div>
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Visual Separator */}
      <div className="h-1 bg-gradient-to-r from-[var(--lohn-purple)] via-[var(--lohn-secondary)] to-[var(--lohn-teal)]"></div>
      
      {/* Contact & Footer */}
      <ContactSection />
      <Footer />
    </div>
  );
}
