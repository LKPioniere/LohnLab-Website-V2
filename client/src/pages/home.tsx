import { useEffect, useState } from "react";
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
import { Lightbulb, X } from "lucide-react";

export default function Home() {
  const [showFeedbackNotice, setShowFeedbackNotice] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

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
    // Nach 5 Sekunden minimieren
    const timer = setTimeout(() => {
      setIsMinimized(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // E-Mail-Vorlage für Feedback
  const feedbackEmail = {
    subject: encodeURIComponent("Feedback zur Landingpage"),
    body: encodeURIComponent(`Hi Lennart, bitte ändere noch folgendes auf der Page "Landingpage":

[Dein Feedback hier einfügen]

---
Feedback-Regeln:
• Beschreibe möglichst genau, was geändert werden soll
• Gib an, wo sich das Element befindet (z.B. "im Hero-Bereich", "in der FAQ-Sektion")
• Beschreibe das gewünschte Ergebnis
• Du kannst auch Screenshots anhängen, um dein Feedback zu verdeutlichen
`),
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ebedf3" }}>
      <Navigation />

      {/* Feedback Notice - schiebt sich von rechts rein */}
      {showFeedbackNotice && (
        <div 
          className={`fixed top-20 right-0 z-50 animate-slide-in-right transition-all duration-300 ${
            isMinimized ? 'group' : ''
          }`}
          onMouseEnter={() => {
            if (isMinimized) {
              setIsMinimized(false);
            }
          }}
        >
          <div className={`bg-white rounded-l-2xl shadow-2xl border-2 border-green-500 flex items-center gap-4 transition-all duration-300 ${
            isMinimized ? 'p-2' : 'p-4 pr-6'
          }`}>
            {/* Grüne Leuchte */}
            <div className="relative flex-shrink-0">
              <div className={`w-12 h-12 bg-green-500 rounded-full flex items-center justify-center ${
                isMinimized ? '' : 'animate-pulse'
              }`}>
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              {!isMinimized && (
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
              )}
            </div>
            {/* Text - nur sichtbar wenn nicht minimiert */}
            {!isMinimized && (
              <>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-black">
                    Verbesserungsvorschläge?
                  </p>
                  <p className="text-xs text-gray-600">
                    <a 
                      href={`mailto:lr@lohnlab.de?subject=${feedbackEmail.subject}&body=${feedbackEmail.body}`}
                      className="text-[var(--lohn-primary)] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      lr@lohnlab.de
                    </a>
                  </p>
                </div>
                {/* Minimize Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMinimized(true);
                  }}
                  className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Hinweis minimieren"
                >
                  <X className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
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
