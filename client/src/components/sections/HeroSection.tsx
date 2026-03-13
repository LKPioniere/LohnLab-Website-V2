import { useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import InfiniteLogoCarousel from "@/components/InfiniteLogoCarousel";
import ConsentPlaceholder from "@/components/ConsentPlaceholder";
import { useConsent } from "@/lib/cookie-consent";
import { useGender } from "@/lib/gender";
import sterneReferenzen from "@/assets/images/general/5-sterne-referenzen.png";
import { LOHN_SYSTEM_LOGOS } from "@/constants/logos";

/**
 * Hero-Sektion Komponente - Neue Landingpage
 */
const WISTIA_MEDIA_ID = "zrcdz7nm5p";

function WistiaPlayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  const loadWistia = useCallback(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    const playerScript = document.createElement("script");
    playerScript.src = "https://fast.wistia.com/player.js";
    playerScript.async = true;
    document.head.appendChild(playerScript);

    const embedScript = document.createElement("script");
    embedScript.src = `https://fast.wistia.com/embed/${WISTIA_MEDIA_ID}.js`;
    embedScript.async = true;
    embedScript.type = "module";
    document.head.appendChild(embedScript);
  }, []);

  useEffect(() => {
    loadWistia();
  }, [loadWistia]);

  return (
    <div ref={containerRef} className="rounded-2xl shadow-2xl overflow-hidden">
      <wistia-player media-id={WISTIA_MEDIA_ID} aspect="1.7777777777777777" />
    </div>
  );
}

export default function HeroSection() {
  const gendered = useGender();
  const consent = useConsent();
  const marketingRejected = consent?.marketing === false;

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#ebedf3" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-between space-y-6">
            {/* Google Bewertungen */}
            {/* <div>
              <img
                src={sterneReferenzen}
                alt="4.6/5 basierend auf über 1400 Bewertungen"
                className="h-auto w-auto max-w-xs mb-2"
              />
            </div> */}

            {/* Main Hero Text */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black leading-tight break-words">
              Mehr Netto für {gendered ? "Mitarbeiter*innen" : "Mitarbeiter"}.
              <br />
              Weniger Lohnkosten für dein Unternehmen.
            </h1>

            {/* Subheading */}
            <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-xl">
              Mit dem LohnLab Cockpit steuerst du deine komplette Gehaltsstruktur
              in Echtzeit – transparent, steueroptimiert und voll automatisiert.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 mt-auto">
              <Link href="/kontakt" className="w-full sm:w-auto">
                <Button
                  className="w-full sm:w-auto bg-lohn-primary text-white hover:bg-lohn-secondary transition-colors rounded-full px-6 py-5 text-base font-semibold shadow-md"
                >
                  Beratungsgespräch vereinbaren
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-gray-400 text-gray-700 hover:bg-gray-50 transition-colors rounded-full px-6 py-5 text-base font-semibold bg-transparent"
                onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
              >
                Alle Case Studies ansehen
              </Button>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="flex flex-col justify-end">
            {marketingRejected ? (
              <ConsentPlaceholder service="Dieses Video" />
            ) : (
              <WistiaPlayer />
            )}

            {/* Logo Carousel */}
            <div className="mt-8">
              <p className="text-xs text-gray-600 mb-2 text-center">20+ unterstützte Lohnabrechnungssysteme</p>
              <InfiniteLogoCarousel logos={LOHN_SYSTEM_LOGOS} speed={0.8} logoHeight={40} slideWidth={140} slideGap={28} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
