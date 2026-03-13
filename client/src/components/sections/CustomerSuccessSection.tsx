import { useState } from "react";
import { Play, TrendingUp, TrendingDown, CheckCircle, Users, Calendar, PiggyBank } from "lucide-react";
import christianRaithImage from "@/assets/images/references/christian-raith.jpg";
import stephanWepplerImage from "@/assets/images/references/stephan-weppler.png";
import { useGender } from "@/lib/gender";

/**
 * Customer Success Sektion - 2 Case Studies mit Video/Bild
 */
export default function CustomerSuccessSection() {
  const gendered = useGender();
  const [videoStates, setVideoStates] = useState<{ [key: string]: boolean }>({
    imm_photonics: false,
    weppler_filter: false,
  });

  const handlePlayVideo = (caseId: string) => {
    setVideoStates((prev) => ({ ...prev, [caseId]: true }));
  };

  const cases = [
    {
      id: "imm_photonics",
      title: "IMM Photonics GmbH",
      type: "image" as const,
      image: christianRaithImage,
      name: "Dipl.-Ing. Christian Raith",
      position: gendered ? "Geschäftsführer*in" : "Geschäftsführer",
      challenge: {
        title: "Herausforderung",
        text: gendered
          ? "Das Unternehmen wollte für seine Mitarbeiter*innen das Maximum aus dem Budget für die Lohnerhöhung rausholen. Die Sorge: Bei einer klassischen Erhöhung verpufft ein Großteil durch Steuern und Abgaben. Gleichzeitig sollten die Mitarbeiter*innen bei der Lohnoptimierung keine Nachteile bei ihrer Altersvorsorge haben."
          : "Das Unternehmen wollte für seine Mitarbeiter das Maximum aus dem Budget für die Lohnerhöhung rausholen. Die Sorge: Bei einer klassischen Erhöhung verpufft ein Großteil durch Steuern und Abgaben. Gleichzeitig sollten die Mitarbeiter bei der Lohnoptimierung keine Nachteile bei ihrer Altersvorsorge haben.",
      },
      solution: {
        title: "Lösung",
        text: gendered
          ? "Für IMM Photonics wurde berechnet, was bei einer Bruttoerhöhung netto bei den Mitarbeiter*innen angekommen wäre. Anschließend wurde die Rentenlücke, die durch sv-freie Lohnbausteine entsteht mit einem maßgeschneiderten Rentenschutzpaket vollständig geschlossen. Die gesamte verbleibende Ersparnis wurde zu 100% als zusätzliches Netto an die Mitarbeiter*innen weitergegeben – on top zur ursprünglichen Erhöhung."
          : "Für IMM Photonics wurde berechnet, was bei einer Bruttoerhöhung netto bei den Mitarbeitern angekommen wäre. Anschließend wurde die Rentenlücke, die durch sv-freie Lohnbausteine entsteht mit einem maßgeschneiderten Rentenschutzpaket vollständig geschlossen. Die gesamte verbleibende Ersparnis wurde zu 100% als zusätzliches Netto an die Mitarbeiter weitergegeben – on top zur ursprünglichen Erhöhung.",
      },
      result: {
        title: "Ergebnis",
        items: [
          { text: gendered ? "56 Mitarbeiter*innen profitieren" : "56 Mitarbeiter profitieren", icon: Users, positive: true },
          { text: "Ø +140 € mtl. Netto durch Lohnbausteine", icon: TrendingUp, positive: true },
          { text: "Rentenlücke vollständig geschlossen", icon: CheckCircle, positive: true },
        ],
      },
    },
    {
      id: "weppler_filter",
      title: "Weppler Filter GmbH",
      type: "image" as const,
      image: stephanWepplerImage,
      name: "Stephan Weppler",
      position: gendered ? "Geschäftsführer*in" : "Geschäftsführer",
      challenge: {
        title: "Herausforderung",
        text: gendered
          ? "Das Unternehmen wollte 2018 angelehnt an damalige Abschlüsse die Mitarbeiter*innen mit Lohnoptimierung besser stellen, als es bei tarifgebundenen Unternehmen der Fall gewesen wäre. In anderen Unternehmen haben die Mitarbeiter*innen 1,8% Bruttolohnerhöhung sofort und nach einem Jahr weitere 1,8% erhalten. Die Frage war: Wie können wir mehr für unsere Mitarbeiter*innen herausholen und trotzdem Lohnkosten sparen?"
          : "Das Unternehmen wollte 2018 angelehnt an damalige Abschlüsse die Mitarbeiter mit Lohnoptimierung besser stellen, als es bei tarifgebundenen Unternehmen der Fall gewesen wäre. In anderen Unternehmen haben die Mitarbeiter 1,8% Bruttolohnerhöhung sofort und nach einem Jahr weitere 1,8% erhalten. Die Frage war: Wie können wir mehr für unsere Mitarbeiter herausholen und trotzdem Lohnkosten sparen?",
      },
      solution: {
        title: "Lösung",
        text: gendered
          ? "Durch ein maßgeschneidertes Lohnkonzept erhielt die Belegschaft die gesamten Erhöhungen der nächsten beiden Jahre sofort. Umgesetzt wurden diese durch steueroptimierte Lohnbausteine. Das Ergebnis: Die Mitarbeiter*innen bekamen nach individueller Berechnung durch LohnLab sogar 20% mehr Netto als bei der klassischen Tariferhöhung, während das Unternehmen gleichzeitig Lohnkosten einsparte."
          : "Durch ein maßgeschneidertes Lohnkonzept erhielt die Belegschaft die gesamten Erhöhungen der nächsten beiden Jahre sofort. Umgesetzt wurden diese durch steueroptimierte Lohnbausteine. Das Ergebnis: Die Mitarbeiter bekamen nach individueller Berechnung durch LohnLab sogar 20% mehr Netto als bei der klassischen Tariferhöhung, während das Unternehmen gleichzeitig Lohnkosten einsparte.",
      },
      result: {
        title: "Ergebnis",
        items: [
          { text: "+20% mehr Netto für die Belegschaft", icon: TrendingUp, positive: true },
          { text: "140.000 € Einsparung pro Jahr", icon: PiggyBank, positive: true },
          { text: "Seit 8 Jahren erfolgreich im Einsatz", icon: Calendar, positive: true },
        ],
      },
    },
  ];

  return (
    <section id="case-studies" className="py-20 md:py-28 pb-32 md:pb-28" style={{ backgroundColor: "#404040" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Überschrift */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Bewährte Ergebnisse, die für sich sprechen
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Das LohnLab Cockpit wird täglich von Unternehmen genutzt, um ihre
            Personalkosten strategisch zu steuern.{" "}
            <strong className="text-white font-semibold">
              Die Ergebnisse sind klar, reproduzierbar und messbar.
            </strong>
          </p>
        </div>

        {/* Layout: 2 Case Study Kacheln mit integrierten Videos */}
        <div className="space-y-8">
          {cases.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="rounded-2xl px-10 py-12 shadow-lg"
              style={{ backgroundColor: "#4b4b4b" }}
            >
              {/* Top: Text-Block und Video nebeneinander */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Left: Text Content */}
                <div className="flex flex-col justify-between">
                  {/* Titel */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    {caseStudy.title}
                  </h3>

                  {/* Herausforderung */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {caseStudy.challenge.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {caseStudy.challenge.text}
                    </p>
                  </div>

                  {/* Lösung */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {caseStudy.solution.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {caseStudy.solution.text}
                    </p>
                  </div>
                </div>

                {/* Right: Video oder Bild - exaktes 16:9 Format, nicht verzerrt */}
                <div className="flex flex-col items-start w-full">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <div className={`absolute inset-0 rounded-2xl overflow-hidden shadow-2xl ${
                      caseStudy.type === "image" ? "" : "bg-gray-900"
                    }`}>
                      {caseStudy.type === "image" ? (
                        // Statisches Bild - unterschiedliche Darstellung je nach Case Study
                        <img
                          src={caseStudy.image}
                          alt={caseStudy.name}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        // Video für andere Case Studies
                        <>
                          {!videoStates[caseStudy.id] ? (
                            <>
                              <img
                                src={`https://img.youtube.com/vi/${caseStudy.videoId}/maxresdefault.jpg`}
                                alt={`${caseStudy.title} Video`}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                  onClick={() => handlePlayVideo(caseStudy.id)}
                                  className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl border border-white/30 group"
                                  aria-label={`${caseStudy.title} Video abspielen`}
                                >
                                  <Play
                                    className="w-10 h-10 md:w-12 md:h-12 text-white ml-1"
                                    fill="white"
                                  />
                                </button>
                              </div>
                            </>
                          ) : (
                            <iframe
                              className="w-full h-full"
                              src={`https://www.youtube.com/embed/${caseStudy.videoId}?autoplay=1&rel=0`}
                              title={`${caseStudy.title} Video`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  {/* Name und Position unter dem Video/Bild */}
                  <div className="mt-4 text-center w-full">
                    <p className="text-white font-semibold text-lg">{caseStudy.name}</p>
                    <p className="text-gray-300 text-base">{caseStudy.position}</p>
                  </div>
                </div>
              </div>

              {/* Bottom: 3 Ergebnis-Kacheln nebeneinander */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 text-center">
                  {caseStudy.result.title}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {caseStudy.result.items.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center gap-3 bg-gray-600/50 rounded-xl p-6"
                      >
                        <IconComponent className="w-10 h-10 text-white shrink-0" />
                        <span className="text-white font-bold text-base text-center">
                          {item.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
