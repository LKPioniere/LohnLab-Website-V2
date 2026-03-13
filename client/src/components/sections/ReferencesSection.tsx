import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Quote } from "lucide-react";
import casinoLogo from "@/assets/logos/casino.png";
import stebahLogo from "@/assets/logos/stebah.png";
import wepplerLogo from "@/assets/logos/weppler.png";

// Customer Logos
import akpLogo from "@/assets/logos/AKP-PLUS_Logo-1.png";
import atlasLogo from "@/assets/logos/Atlas-Logo-1024x774.png";
import huckLogo from "@/assets/logos/huck-logo.png";
import boltzplatzLogo from "@/assets/logos/Boltzplatz_Kombi_Slogan.png";
import computerklinikLogo from "@/assets/logos/Computerklinik.png";
import creacheckLogo from "@/assets/logos/cropped-CreaCheck_Logo_2021-1-300x120.png";
import designgenieLogo from "@/assets/logos/DesignGenie_Wortmarke-e1692364455564.png";
import dbaLogo from "@/assets/logos/dba-logo.png";
import digitaxpertsLogo from "@/assets/logos/Digitaxperts-Consulting.png";
import eichwaldLogo from "@/assets/logos/eichwald-logo.png";
import ergoLogo from "@/assets/logos/Ergo-Ripberger.png";
import fliesenfreiLogo from "@/assets/logos/fliesen-frei-logo.png";
import haackschubertLogo from "@/assets/logos/haackschubert.png";
import hagelsteinLogo from "@/assets/logos/hagelstein.png";

/**
 * Referenzen Sektion - CTA Card und 3 Referenz-Cards
 */
export default function ReferencesSection() {
  const references = [
    {
      id: "casino",
      quote:
        "Für uns als kleiner Betrieb ist individuelle Betreuung wichtig. Aus diesem Grund schätzen wir die Beratung durch LohnLab.",
      keywords: ["individuelle Betreuung"],
      name: "C. Bausch",
      position: "Geschäftsführer*in",
      logo: casinoLogo,
      website: "https://www.arthouse-kinos.de",
    },
    {
      id: "stebah",
      quote:
        "Die Firmenkreditkarte ist ein echter Gamechanger für uns. Die vielfältigen Einsatzmöglichkeiten und die einfache Verwaltung über LohnLab machen die Lohnoptimierung zum Kinderspiel.",
      keywords: ["echter Gamechanger", "einfache Verwaltung"],
      name: "Julius Henne",
      position: "Geschäftsführer*in",
      logo: stebahLogo,
      website: "https://www.stebah.de",
    },
    {
      id: "weppler",
      quote:
        "Durch LohnLab haben wir die Möglichkeit das Optimierungspotential jeder einzelnen Mitarbeiter*in zu verstehen und zu nutzen. Gehaltserhöhungen können mittels Massenberechnung für unsere komplette Belegschaft berechnet und einfach umgesetzt werden.",
      keywords: ["Gehaltserhöhungen", "einfach umgesetzt"],
      name: "Stephan Weppler",
      position: "Geschäftsführer*in",
      logo: wepplerLogo,
      website: "https://weppler-filter.com",
    },
  ];

  // Helper function to highlight keywords in text
  const highlightKeywords = (text: string, keywords: string[]) => {
    let result = text;
    keywords.forEach((keyword) => {
      const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
      result = result.replace(regex, "<strong>$1</strong>");
    });
    return result;
  };

  // Customer Logos für Carousel
  const customerLogos = [
    { name: "AKP PLUS", src: akpLogo, website: "https://www.akp-plus.de" },
    { name: "Atlas Projects", src: atlasLogo, website: "https://atlas-projects.de" },
    { name: "Bäckerei Huck", src: huckLogo, website: "https://www.baeckerei-huck.de" },
    { name: "boltzplatz", src: boltzplatzLogo, website: "https://boltzplatz.eu/de/home-de/" },
    { name: "Computerklinik", src: computerklinikLogo, website: "https://computerklinik.de", needsInvert: true },
    { name: "CreaCheck", src: creacheckLogo, website: "https://creacheck.com" },
    { name: "DesignGenie", src: designgenieLogo, website: "https://design-genie.de", needsInvert: true },
    { name: "Digital Brand Academy", src: dbaLogo, website: "https://digitalbrand-academy.com" },
    { name: "DiGiTAXperts", src: digitaxpertsLogo, website: "https://digitaxperts.de" },
    { name: "Eichwald Apotheke", src: eichwaldLogo, website: "https://www.eichwald-apotheke.com" },
    { name: "ERGO Ripberger", src: ergoLogo, website: "https://guenter-ripberger.ergo.de" },
    { name: "Fliesen Frei", src: fliesenfreiLogo, website: "https://www.fliesen-frei.de" },
    { name: "HaackSchubert", src: haackschubertLogo, website: "https://www.haackschubert.de" },
    { name: "Hagelstein", src: hagelsteinLogo, website: "https://www.hss-solarsysteme.de" },
  ];

  return (
    <section
      className="relative"
      style={{ backgroundColor: "#ebedf6" }}
    >
      {/* CTA Card auf dem Übergang - perfekt zentriert auf der Abschnittsgrenze */}
      <div className="absolute top-0 left-0 right-0 -translate-y-1/2 z-10">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-l from-[var(--lohn-primary)] to-[var(--lohn-secondary)] rounded-3xl shadow-2xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white flex-1 text-center md:text-left">
                  Bereit, deinen Lohn zu optimieren?
                </h3>
                <Link href="/kontakt" className="flex-shrink-0">
                  <Button
                    className="bg-white text-[var(--lohn-primary)] hover:bg-gray-100 transition-all rounded-full px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform duration-300"
                  >
                    Beratungsgespräch vereinbaren
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container mit Padding oben für die CTA Card */}
      <div className="pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 3 Referenz-Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {references.map((ref) => (
              <div
                key={ref.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {/* Zitat mit Quote Icon - kompakt */}
                <div className="mb-6 relative">
                  <Quote className="text-gray-600 w-8 h-8 absolute -top-1 -left-1 opacity-20" />
                  <p
                    className="text-gray-600 text-sm leading-snug pl-8"
                    dangerouslySetInnerHTML={{
                      __html: highlightKeywords(ref.quote, ref.keywords),
                    }}
                  />
                </div>

                {/* Name, Position und Logo nebeneinander */}
                <div className="flex items-center justify-between gap-4 mt-auto">
                  <div className="flex-1 min-w-0">
                    <p className="text-black font-bold text-base mb-0.5 truncate">
                      {ref.name}
                    </p>
                    <p className="text-gray-600 text-xs">{ref.position}</p>
                  </div>

                  {/* Logo - schwarz-weiß und anklickbar */}
                  <a
                    href={ref.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={ref.logo}
                      alt={`${ref.name} Logo`}
                      className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Customer Logo Carousel */}
          <div className="mt-16 relative overflow-hidden">
            <p className="text-center text-gray-700 font-semibold mb-6">
              Über 220 Unternehmen vertrauen bereits auf LohnLab
            </p>
            <div className="flex items-center justify-center gap-16 md:gap-20 animate-scroll-infinite">
              {/* Duplicate logos for seamless loop - genau 2 Sets für nahtloses Scrollen */}
              {[...customerLogos, ...customerLogos].map((logo, index) => (
                <a
                  key={`${logo.name}-${index}`}
                  href={logo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-32 h-16 relative group flex items-center justify-center"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Schwarzes Logo - Standard */}
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain absolute opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                      style={{
                        filter: logo.needsInvert 
                          ? "invert(1) brightness(0) contrast(1.2)" 
                          : logo.needsBgRemove 
                          ? "brightness(0) contrast(1.5)" 
                          : "brightness(0) contrast(1.2)",
                      }}
                    />
                    {/* Farbiges Logo - Hover */}
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
