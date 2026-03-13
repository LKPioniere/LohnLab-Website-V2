import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Building2, Briefcase, Calculator, ArrowRight } from "lucide-react";

/**
 * LohnLab Cockpit Sektion - 3 Zielgruppen-Kacheln
 */
export default function CockpitSection() {
  const cards = [
    {
      id: "unternehmen",
      title: "Für Unternehmen",
      description:
        "Das LohnLab Cockpit wird täglich von Unternehmen genutzt, um ihre Personalkosten strategisch zu steuern. Die Ergebnisse sind klar, reproduzierbar und messbar. Geschäftsführer*innen senken damit nachhaltig ihre Lohnnebenkosten.",
      keywords: ["Personalkosten strategisch zu steuern.", "klar, reproduzierbar und messbar."],
      icon: Building2,
      link: "/unternehmer",
    },
    {
      id: "steuerberater",
      title: "Für Steuerberater*innen",
      description:
        "Das LohnLab Cockpit erweitert die klassische Lohnabrechnung um ein strategisches Beratungs- und Steuerungsinstrument. Steuerberater*innen liefern ihren Mandant*innen messbaren wirtschaftlichen Mehrwert, ohne ihre Prozesse zu verkomplizieren.",
      keywords: ["strategisches Beratungs- und Steuerungsinstrument.", "messbaren wirtschaftlichen Mehrwert,"],
      icon: Briefcase,
      link: "/steuerberater",
    },
    {
      id: "lohnabrechner",
      title: "Für Lohnabrechner*innen",
      description:
        "Das LohnLab Cockpit vereinfacht die operative Lohnabrechnung durch automatisierte Prozesse, klare Strukturen und intelligente Steuerungslogik. Lohnabrechner*innen nutzen das Cockpit als Whitelabel-Software und erschließen weitere Märkte.",
      keywords: ["vereinfacht die operative Lohnabrechnung", "erschließen weitere Märkte."],
      icon: Calculator,
      link: "/lohnabrechner",
    },
  ];

  // Helper function to highlight keywords in text
  const highlightKeywords = (text: string, keywords: string[]) => {
    let result = text;
    keywords.forEach((keyword) => {
      const regex = new RegExp(`(${keyword})`, "gi");
      result = result.replace(regex, "<strong>$1</strong>");
    });
    return result;
  };

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#ebedf3" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Überschrift */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            Unser LohnLab-Cockpit.
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
            Was früher ein reiner Kostenblock war, wird mit dem LohnLab Cockpit
            zu einem aktiven Steuerungsinstrument.
          </p>
        </div>

        {/* 3 Kacheln */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col border border-gray-300/30"
            >
              {/* Logo oben links - klein und unauffällig */}
              <div className="mb-6">
                <div className="w-10 h-10 bg-gray-400/40 rounded-lg flex items-center justify-center">
                  <card.icon className="w-5 h-5 text-gray-600" />
                </div>
              </div>

              {/* Titel - groß */}
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                {card.title}
              </h3>

              {/* Beschreibung - sehr klein mit fett hervorgehobenen Keywords */}
              <p
                className="text-xs text-gray-600 leading-relaxed mb-8 flex-grow"
                dangerouslySetInnerHTML={{
                  __html: highlightKeywords(card.description, card.keywords),
                }}
              />

              {/* Buttons - nebeneinander */}
              <div className="flex gap-3">
                <Link href={card.id === "unternehmen" ? "/kontakt" : "/kontakt?type=partner"} className="flex-1">
                  <Button
                    className="w-full bg-[var(--lohn-primary)] text-white hover:bg-[var(--lohn-secondary)] transition-colors rounded-full py-3 text-sm font-semibold shadow-md"
                  >
                    Beratungsgespräch vereinbaren
                  </Button>
                </Link>
                {/* Pfeil-Button - TEMPORÄR DEAKTIVIERT */}
                {/* <Link href={card.link}>
                  <Button
                    variant="outline"
                    className="w-12 h-12 border-2 border-gray-400 text-gray-600 hover:bg-gray-100 transition-colors rounded-full p-0 flex items-center justify-center bg-transparent"
                    aria-label="Zur Seite"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
