import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useSEO } from "@/hooks/useSEO";
import { neueinstellungenSEO } from "@/constants/neueinstellungen-data";
import {
  NeueinstellungenHeroSection,
  NeueinstellungenProcessSection,
  NeueinstellungenCandidateBenefitsSection,
  NeueinstellungenScreenshotsSection,
  NeueinstellungenBenefitsSection,
} from "@/components/sections/neueinstellungen";

export default function Neueinstellungen() {
  useSEO({
    title: neueinstellungenSEO.title,
    description: neueinstellungenSEO.description,
    keywords: neueinstellungenSEO.keywords,
    canonical: neueinstellungenSEO.canonical,
    ogTitle: neueinstellungenSEO.ogTitle,
    ogDescription: neueinstellungenSEO.ogDescription,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <NeueinstellungenHeroSection />
      <NeueinstellungenProcessSection />
      <NeueinstellungenCandidateBenefitsSection />
      <NeueinstellungenScreenshotsSection />
      <NeueinstellungenBenefitsSection />

      <Footer />
    </div>
  );
}
