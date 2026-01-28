import { useState } from "react";
import { Play, TrendingUp, TrendingDown, CheckCircle } from "lucide-react";

/**
 * Customer Success Sektion - 2 Case Studies mit Video
 */
export default function CustomerSuccessSection() {
  const [videoStates, setVideoStates] = useState<{ [key: string]: boolean }>({
    lohnnebenkosten: false,
    mitarbeiterbindung: false,
  });

  const handlePlayVideo = (caseId: string) => {
    setVideoStates((prev) => ({ ...prev, [caseId]: true }));
  };

  const cases = [
    {
      id: "lohnnebenkosten",
      title: "Senkung der Lohnnebenkosten",
      videoId: "FZ2tLYBSlrU", // Platzhalter - später Video vom Geschäftsführer
      challenge: {
        title: "Herausforderung",
        text: "Der Kunde stand vor stark steigenden Personalkosten, sinkenden Margen und fehlender Transparenz über seine tatsächliche Abgabenstruktur. Gehaltserhöhungen waren wirtschaftlich kaum noch darstellbar, gleichzeitig wuchs der Druck durch Fachkräftemangel und Inflation.",
      },
      solution: {
        title: "Lösung",
        text: "Mit dem LohnLab Cockpit wurde die komplette Lohnstruktur erstmals transparent analysiert, simuliert und neu strukturiert. Steueroptimierte Gehaltsmodelle wurden automatisiert umgesetzt und laufend überwacht.",
      },
      result: {
        title: "Ergebnis",
        items: [
          { text: "–34 % Lohnnebenkosten", icon: TrendingDown, positive: true },
          { text: "+86.000 € jährliche Einsparung", icon: TrendingUp, positive: true },
          { text: "ROI in unter 3 Monaten.", icon: CheckCircle, positive: true },
        ],
      },
    },
    {
      id: "mitarbeiterbindung",
      title: "Stärkung der Mitarbeiterbindung",
      videoId: "FZ2tLYBSlrU", // Platzhalter - später Video vom Geschäftsführer
      challenge: {
        title: "Herausforderung",
        text: "Der Kunde kämpfte mit hoher Fluktuation, steigenden Gehaltsforderungen und geringer Arbeitgeberattraktivität. Klassische Gehaltserhöhungen führten zu hohen Mehrkosten, ohne spürbaren Motivationseffekt bei den Mitarbeitern.",
      },
      solution: {
        title: "Lösung",
        text: "Mit dem LohnLab Cockpit wurden individuelle Netto-Optimierungen und moderne Benefit-Strukturen eingeführt. Jeder Mitarbeiter erhielt ein messbar besseres Gesamtpaket – ohne Erhöhung der Bruttolohnkosten.",
      },
      result: {
        title: "Ergebnis",
        items: [
          { text: "+520 € Netto pro Mitarbeiter / Jahr", icon: TrendingUp, positive: true },
          { text: "–29 % Mitarbeiterfluktuation", icon: TrendingDown, positive: true },
          { text: "Spürbar höhere Zufriedenheit im Team", icon: CheckCircle, positive: true },
        ],
      },
    },
  ];

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#404040" }}>
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

                {/* Right: Video - exaktes 16:9 Format, nicht verzerrt */}
                <div className="flex flex-col items-start w-full">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                      {!videoStates[caseStudy.id] ? (
                        <>
                          {/* Video Thumbnail */}
                          <img
                            src={`https://img.youtube.com/vi/${caseStudy.videoId}/maxresdefault.jpg`}
                            alt={`${caseStudy.title} Video`}
                            className="w-full h-full object-cover"
                          />
                          {/* Play Button Overlay - Center */}
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
                    </div>
                  </div>
                  {/* Name und Position unter dem Video */}
                  <div className="mt-4 text-center w-full">
                    <p className="text-white font-semibold text-lg">Max Mustermann</p>
                    <p className="text-gray-300 text-base">CEO</p>
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
                        <IconComponent className="w-10 h-10 text-white flex-shrink-0" />
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
