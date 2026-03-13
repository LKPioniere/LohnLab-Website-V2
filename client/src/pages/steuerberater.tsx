import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Quote, Play, Construction, X } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import FinalCTASection from "@/components/sections/FinalCTASection";
import { LOHN_SYSTEM_LOGOS } from "@/constants/logos";
import {
  STEURBERATER_STATS,
  getSteurberaterPartnerBenefits,
  getSteurberaterBenefits,
  getSteurberaterFeatures,
  getSteurberaterReferences,
} from "@/constants/steuerberater-data";
import { useGender } from "@/lib/gender";

function highlightKeywords(text: string, keywords: string[]): string {
  let result = text;
  keywords.forEach((keyword) => {
    const regex = new RegExp(`(${keyword})`, "gi");
    result = result.replace(regex, "<strong>$1</strong>");
  });
  return result;
}

export default function Steuerberater() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showConstructionNotice, setShowConstructionNotice] = useState(true);
  const videoId = "FZ2tLYBSlrU";
  const gendered = useGender();
  const STEURBERATER_PARTNER_BENEFITS = getSteurberaterPartnerBenefits(gendered);
  const STEURBERATER_BENEFITS = getSteurberaterBenefits(gendered);
  const STEURBERATER_FEATURES = getSteurberaterFeatures(gendered);
  const STEURBERATER_REFERENCES = getSteurberaterReferences(gendered);

  useSEO({
    title: "Lohnoptimierung für Steuerberater | LohnLab Cockpit",
    description:
      "DATEV-integrierte Lohnoptimierung für Steuerberater. Mehr Service für Mandanten ohne Zusatzaufwand. Jetzt Partner werden und Mehrwert schaffen!",
    keywords:
      "Steuerberater Software, DATEV Integration, Mandantenservice, Lohnoptimierung, Lohnberatung, digitale Steuerberatung",
    canonical: "https://www.lohnlab.de/steuerberater",
    ogTitle: "LohnLab für Steuerberater - DATEV-integriert",
    ogDescription:
      "Biete deinen Mandanten echten Mehrwert mit moderner Lohnoptimierung. DATEV-integriert und ohne Zusatzaufwand.",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ebedf3" }}>
      <Navigation />

      {showConstructionNotice && (
        <div className="fixed top-20 right-0 z-50 animate-slide-in-right">
          <div className="bg-white rounded-l-2xl shadow-2xl border-2 border-red-500 p-4 pr-6 flex items-center gap-4 max-w-md">
            <div className="relative shrink-0">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <Construction className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-black">
                Diese Seite wird noch gebaut
              </p>
              <p className="text-xs text-gray-600">
                Wir arbeiten kontinuierlich an Verbesserungen
              </p>
            </div>
            <button
              onClick={() => setShowConstructionNotice(false)}
              className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Hinweis schließen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20" style={{ backgroundColor: "#ebedf3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-between space-y-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                LohnLab für {gendered ? "Steuerberater*innen" : "Steuerberater"}.
                <br />
                Mehr Service für Mandanten ohne Zusatzaufwand.
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Das LohnLab Cockpit erweitert die klassische Lohnabrechnung um ein{" "}
                <strong>strategisches Beratungs- und Steuerungsinstrument</strong>                . {gendered ? "Steuerberater*innen" : "Steuerberater"}
                {" "}liefern ihren Mandanten <strong>messbaren wirtschaftlichen Mehrwert</strong>, ohne
                ihre Prozesse zu verkomplizieren.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2 mt-auto">
                <Link href="/kontakt">
                  <Button className="bg-lohn-primary text-white hover:bg-lohn-secondary transition-colors rounded-full px-6 py-5 text-base font-semibold shadow-md">
                    Partnerschaft anfragen
                  </Button>
                </Link>
                <Link href="/kontakt">
                  <Button
                    variant="outline"
                    className="border-2 border-gray-400 text-gray-700 hover:bg-gray-50 transition-colors rounded-full px-6 py-5 text-base font-semibold bg-transparent"
                  >
                    Beratungsgespräch vereinbaren
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-end">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                {!isVideoPlaying ? (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt="LohnLab Cockpit Video"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0">
                      <div className="absolute bottom-4 left-4">
                        <button
                          onClick={() => setIsVideoPlaying(true)}
                          className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl border border-white/30 group"
                          aria-label="Video abspielen"
                        >
                          <Play
                            className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                            fill="white"
                          />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title="LohnLab Cockpit Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>

              <div className="mt-8 relative overflow-hidden">
                <p className="text-xs text-gray-600 mb-2 text-center">
                  20+ unterstützte Lohnabrechnungssysteme
                </p>
                <div className="flex items-center justify-center gap-6 animate-scroll">
                  {[...LOHN_SYSTEM_LOGOS, ...LOHN_SYSTEM_LOGOS, ...LOHN_SYSTEM_LOGOS].map(
                    (logo, index) => (
                      <div
                        key={`${logo.name}-${index}`}
                        className="shrink-0 h-10 flex items-center justify-center px-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                      >
                        <img
                          src={logo.src}
                          alt={logo.name}
                          className="h-full w-auto object-contain object-center"
                          style={{
                            maxHeight: "40px",
                            height: "40px",
                            width: "auto",
                            objectFit: "contain",
                            objectPosition: "center",
                          }}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#ebedf3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STEURBERATER_STATS.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-200"
              >
                <div className="text-3xl md:text-4xl font-bold text-lohn-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-black font-semibold text-sm md:text-base mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-500 text-xs">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#ebedf3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
              Deine Vorteile als {gendered ? "Partner*in" : "Partner"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEURBERATER_PARTNER_BENEFITS.map((benefit, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col border border-gray-300/30"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gray-400/40 rounded-2xl flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-gray-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm grow">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Warum {gendered ? "Steuerberater*innen" : "Steuerberater"} LohnLab lieben
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Moderne Lohnoptimierung, die deinen Kanzleialltag revolutioniert und deine Mandanten
              begeistert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STEURBERATER_BENEFITS.map((benefit, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-300/30"
              >
                <div className="w-16 h-16 bg-gray-400/40 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: "#ebedf3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Tools, die deinen Alltag erleichtern
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Speziell entwickelte Funktionen für die Zusammenarbeit zwischen {gendered ? "Steuerberater*innen" : "Steuerberatern"} und
              Mandanten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEURBERATER_FEATURES.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-linear-to-br from-lohn-primary to-lohn-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="py-20" style={{ backgroundColor: "#ebedf6" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {gendered ? "Steuerberater*innen" : "Steuerberater"} vertrauen uns
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Erfolgreiche Partnerschaften mit innovativen Kanzleien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {STEURBERATER_REFERENCES.map((ref, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Quote className="w-8 h-8 text-gray-600 shrink-0" />
                  <p
                    className="text-gray-600 text-sm leading-snug flex-1"
                    dangerouslySetInnerHTML={{
                      __html: highlightKeywords(ref.quote, ref.keywords),
                    }}
                  />
                </div>
                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-200">
                  <img
                    src={ref.image}
                    alt={ref.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-black">{ref.name}</p>
                    <p className="text-sm text-gray-600">{ref.position}</p>
                    <p className="text-xs text-gray-500">{ref.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection />
      <Footer />
    </div>
  );
}
