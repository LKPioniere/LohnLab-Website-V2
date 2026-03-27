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
        style={{ height: "0.45em" }}
      >
        <path
          d="M2 10 C40 4, 80 14, 120 8 S200 3, 240 9 S280 6, 298 8"
          stroke="hsl(256, 39%, 53%)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </span>
  );
}

function CtaButton({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <Button
      className={`btn-cta bg-white hover:bg-white text-lohn-primary hover:text-white rounded-full ${className ?? ""}`}
    >
      <div className="cta-fill bg-lohn-purple" />
      <span className="cta-label">{children}</span>
    </Button>
  );
}

export default function HeroSection() {
  const gendered = useGender();
  const consent = useConsent();
  const marketingRejected = consent?.marketing === false;

  return (
    <section className="pb-8 md:pb-10 pt-8 md:pt-12 bg-linear-to-l from-lohn-primary to-lohn-secondary relative overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Headline — always on top */}
          <div className="lg:col-span-2 lg:row-span-2 flex flex-col space-y-5">
            <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
              Mehr Netto.
              <br />
              Weniger Lohnkosten.
              <br />
              <MarkerUnderline />
            </h1>

            {/* Buttons: auf Desktop sichtbar, auf Mobile versteckt */}
            <div className="pt-2 hidden lg:flex flex-col gap-3">
              <Link href="/kontakt" className="w-full">
                <CtaButton className="w-full px-8 py-6 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform duration-300">
                  Beratungsgespräch vereinbaren
                </CtaButton>
              </Link>
              <Button
                className="w-full border-2 border-white/30 text-white hover:border-white transition-colors rounded-full px-8 py-6 text-base md:text-lg font-semibold bg-transparent hover:bg-transparent"
                onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
              >
                Alle Case Studies ansehen
              </Button>
            </div>
          </div>

          {/* Video */}
          <div className="lg:col-span-3 relative">
            {marketingRejected ? (
              <ConsentPlaceholder service="Dieses Video" />
            ) : (
              <WistiaPlayer />
            )}
            {/* Hinweis neben Video - nur auf sehr breiten Screens */}
            <div
              className="hidden 2xl:block absolute video-hint-appear"
              style={{ left: "calc(100% - 20px)", top: "340px" }}
            >
              <svg
                width="260"
                height="117"
                viewBox="0 0 260 117"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M105 59 L105 57 L106 55 L106 53 L106 51 L106 49 L105 47 L105 44 L104 41 L103 38 L101 36 L99 34 L97 33 L95 32 L93 32 L92 33 L90 34 L90 35 L89 36 L90 37 L90 38 L92 39 L94 40 L96 41 L98 41 L101 40 L103 39 L105 37 L106 36 L106 34 L107 32 L106 30 L105 28 L103 26 L101 23 L98 22 L95 20 L92 19 L88 18 L84 17 L80 16 L78 16 L77 16 L75 15 L73 15 L71 15 L69 15"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  strokeDasharray="108"
                  strokeDashoffset="108"
                  className="video-hint-arrow"
                />
                <polygon
                  points="69,15 78,11 77,21"
                  fill="rgba(255,255,255,0.5)"
                  opacity="0"
                  className="video-hint-arrowhead"
                />
              </svg>
              <p
                className="text-white/70 text-sm font-medium leading-snug absolute"
                style={{ fontStyle: "italic", left: "15px", top: "82px", whiteSpace: "nowrap" }}
              >
                Das kann das LohnLab Cockpit!
              </p>
            </div>
          </div>

          {/* Buttons: auf Mobile sichtbar (unter Video), auf Desktop versteckt */}
          <div className="flex flex-col gap-3 lg:hidden">
            <Link href="/kontakt" className="w-full">
              <CtaButton className="w-full px-8 py-6 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform duration-300">
                Beratungsgespräch vereinbaren
              </CtaButton>
            </Link>
            <Button
              className="w-full border-2 border-white/30 text-white hover:border-white transition-colors rounded-full px-8 py-6 text-base md:text-lg font-semibold bg-transparent hover:bg-transparent"
              onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
            >
              Alle Case Studies ansehen
            </Button>
          </div>
        </div>

        {/* Logo Carousel */}
        <div className="mt-12">
          <div className="w-full">
            {/* Mobile: kleinere Logos */}
            <div className="block md:hidden">
              <InfiniteLogoCarousel
                logos={LOHN_SYSTEM_LOGOS}
                speed={0.8}
                logoHeight={28}
                slideWidth={100}
                slideGap={20}
                invertLogos
              />
            </div>
            {/* Desktop: normale Logos */}
            <div className="hidden md:block">
              <InfiniteLogoCarousel
                logos={LOHN_SYSTEM_LOGOS}
                speed={0.8}
                logoHeight={40}
                slideWidth={140}
                slideGap={28}
                invertLogos
              />
            </div>
            <p className="text-xs text-white/50 mt-5 text-center">
              mit jedem Lohnprogramm nutzbar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
