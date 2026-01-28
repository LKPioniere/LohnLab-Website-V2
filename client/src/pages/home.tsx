import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import CockpitSection from "@/components/sections/CockpitSection";
import CustomerSuccessSection from "@/components/sections/CustomerSuccessSection";
import ReferencesSection from "@/components/sections/ReferencesSection";
import TeamSection from "@/components/sections/TeamSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
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
    <div className="min-h-screen" style={{ backgroundColor: "#ebedf3" }}>
      <Navigation />
      <HeroSection />
      <StatsSection />
      <CockpitSection />
      <CustomerSuccessSection />
      <ReferencesSection />
      <TeamSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
