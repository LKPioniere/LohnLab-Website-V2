import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import DevelopmentStatus from "@/components/development-status";
import ProductFeatures from "@/components/product-features";
import CalculationModes from "@/components/calculation-modes";
import DatevIntegration from "@/components/datev-integration";
import TargetAudiences from "@/components/target-audiences";
import TeamSection from "@/components/team-section";
import DashboardPreview from "@/components/dashboard-preview";
import DemoCalculator from "@/components/demo-calculator";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <DevelopmentStatus />
      <ProductFeatures />
      <CalculationModes />
      <DatevIntegration />
      <TargetAudiences />
      <DashboardPreview />
      <TeamSection />
      <DemoCalculator />
      <ContactSection />
      <Footer />
    </div>
  );
}
