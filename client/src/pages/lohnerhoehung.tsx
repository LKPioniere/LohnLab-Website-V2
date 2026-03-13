import { useEffect } from "react";
import Navigation from "@/components/navigation";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/footer";
import {
  LohnerhoehungHeroSection,
  LohnerhoehungEconomicChallengesSection,
  LohnerhoehungEmployeeFirstSection,
  LohnerhoehungPayrollCommunicationSection,
  LohnerhoehungResultsSection,
} from "@/components/sections/lohnerhoehung";
import { useSEO } from "@/hooks/useSEO";

export default function Lohnerhoehung() {
  useSEO({
    title: "Lohnerhöhungen mit 50% Kostenersparnis | LohnLab Cockpit",
    description:
      "Spare bei Lohnerhöhungen bis zu 50% Lohnkosten durch intelligente Lohnoptimierung. Rechtssicher, transparent und DATEV-integriert. Jetzt Demo buchen!",
    keywords:
      "Lohnerhöhung, Lohnkosten sparen, Gehaltserhöhung Kostenersparnis, Mitarbeiterbindung, Lohnoptimierung, DATEV",
    canonical: "https://www.lohnlab.de/loesungen/lohnerhoehung",
    ogTitle: "Lohnerhöhungen: Bis zu 50% Kosten sparen",
    ogDescription:
      "Intelligente Lohnoptimierung bei Gehaltserhöhungen. Rechtssicher und transparent mit DATEV-Integration.",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <LohnerhoehungHeroSection />
      <LohnerhoehungEconomicChallengesSection />
      <LohnerhoehungEmployeeFirstSection />
      <LohnerhoehungPayrollCommunicationSection />
      <LohnerhoehungResultsSection />

      <ContactSection />
      <Footer />
    </div>
  );
}
