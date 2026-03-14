import { useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import InfiniteLogoCarousel from "@/components/InfiniteLogoCarousel";
import ConsentPlaceholder from "@/components/ConsentPlaceholder";
import { useConsent } from "@/lib/cookie-consent";
import { useGender } from "@/lib/gender";
import { LOHN_SYSTEM_LOGOS } from "@/constants/logos";

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
    <div ref={containerRef} className="rounded-2xl overflow-hidden">
      <wistia-player media-id={WISTIA_MEDIA_ID} aspect="1.7777777777777777" />
    </div>
  );
}

function MarkerUnderline() {
  return (
    <span className="relative inline-block marker-underline">
      Null Aufwand.
      <svg
        className="absolute -bottom-2 left-0 w-full"
        viewBox="0 0 300 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ height: "0.35em" }}
      >
        <path
          d="M2 10 C40 4, 80 14, 120 8 S200 3, 240 9 S280 6, 298 8"
          stroke="hsl(256, 39%, 53%)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </span>
  );
}


export default function HeroSection() {
  const gendered = useGender();
  const consent = useConsent();
  const marketingRejected = consent?.marketing === false;

  return (
    <section className="pb-8 md:pb-10 pt-8 md:pt-12" style={{ backgroundColor: "#021065" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text + CTA (~40%) */}
          <div className="lg:col-span-2 flex flex-col space-y-5">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
              Mehr Netto.
              <br />
              Weniger Lohnkosten.
              <br />
              <MarkerUnderline />
            </h1>

            <div className="pt-2 flex flex-col gap-3">
              <Link href="/kontakt" className="w-full">
                <Button
                  className="btn-cta w-full bg-white text-lohn-primary rounded-full px-8 py-6 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform duration-300 hover:text-white"
                >
                  Beratungsgespräch vereinbaren
                </Button>
              </Link>
              <Button
                className="w-full border-2 border-white/30 text-white hover:border-white transition-colors rounded-full px-8 py-6 text-base md:text-lg font-semibold bg-transparent hover:bg-transparent"
                onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
              >
                Alle Case Studies ansehen
              </Button>
            </div>
          </div>

          {/* Right Column - Video (~60%) */}
          <div className="lg:col-span-3">
            {marketingRejected ? (
              <ConsentPlaceholder service="Dieses Video" />
            ) : (
              <WistiaPlayer />
            )}
          </div>
        </div>

        {/* Logo Carousel */}
        <div className="mt-12">
          <div className="w-full">
            <InfiniteLogoCarousel
              logos={LOHN_SYSTEM_LOGOS}
              speed={0.8}
              logoHeight={40}
              slideWidth={140}
              slideGap={28}
              invertLogos
            />
            <p className="text-xs text-white/50 mt-5 text-center">
              mit jedem Lohnprogramm nutzbar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
