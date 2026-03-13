import { useEffect } from "react";
import Navigation from "@/components/navigation";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/footer";
import {
  NewHireCompensationHeroSection,
  NewHireCompensationValueSection,
  NewHireCompensationOptimizationModesSection,
  NewHireCompensationApiDocsSection,
  NewHireCompensationLohnbausteineSection,
  NewHireCompensationServicesSection,
  NewHireCompensationMarketTrendsSection,
} from "@/components/sections/new-hire-compensation";

export default function NewHireCompensationAPI() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <NewHireCompensationHeroSection />
      <NewHireCompensationValueSection />
      <NewHireCompensationOptimizationModesSection />
      <NewHireCompensationApiDocsSection />
      <NewHireCompensationLohnbausteineSection />
      <NewHireCompensationServicesSection />
      <NewHireCompensationMarketTrendsSection />

      <ContactSection />
      <Footer />
    </div>
  );
}
