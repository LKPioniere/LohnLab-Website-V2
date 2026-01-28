import { Star } from "lucide-react";
import michaelSchmittImage from "@/assets/michi-new.jpg";
import martinGrauImage from "@/assets/martin-grau.jpg";
import holgerPluemerImage from "@/assets/holger-new.jpg";
import lrImage from "@/assets/lr-neu.jpg";
import kkImage from "@/assets/kk-neu.jpg";
import rbImage from "@/assets/rb-neu.jpg";

const experts = [
  {
    name: "Lennart Reichert",
    role: "Produktentwicklung",
    email: "lr@lohnlab.de",
    phone: "01727738271",
    image: lrImage,
  },
  {
    name: "Kilian Kaupp",
    role: "Bestandskundenmanagement",
    email: "kk@lohnlab.de",
    phone: "017666810923",
    image: kkImage,
  },
  {
    name: "Robert Behrend",
    role: "Vertrieb & Partnerschaften",
    email: "rb@lohnlab.de",
    phone: "01621665562",
    image: rbImage,
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Erste Zeile: Überschrift und Text - oben/unten bündig */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black break-words">
            Treffen Sie die Experten, die Ihren Lohn optimieren.
          </h2>
          <div className="text-gray-700 leading-relaxed flex flex-col justify-start">
            <p>
              Hinter LohnLab steht ein interdisziplinäres Team aus
              Steuerexperten, Payroll-Spezialisten, HR-Strategen,
              Software-Architekten und Unternehmensberatern – mit einem
              gemeinsamen Ziel:{" "}
              <strong>
                Personalkosten steuerbar machen. Nettoeffekte maximieren.
                Arbeitgeberattraktivität nachhaltig stärken.
              </strong>
            </p>
            <p className="mt-4 text-sm italic">
              Jedes Detail spiegelt unser Engagement für Exzellenz und
              langfristige Kundenzufriedenheit wider.
            </p>
          </div>
        </div>

        {/* Zweite Zeile: Team-Mitglieder - komplett oben/unten bündig, alle gleich breit */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch" style={{ minHeight: "600px" }}>
          {/* Links: Michael Schmitt oben + Experten-Kachel mit Bildern unten */}
          <div className="flex flex-col gap-6">
            {/* Michael Schmitt - größer gemacht */}
            <div className="relative rounded-2xl overflow-hidden flex-grow group" style={{ flex: "3" }}>
              <img
                src={michaelSchmittImage}
                alt="Michael Schmitt"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-bold text-xl">Michael Schmitt</p>
                <p className="text-white text-base">Vertrieb</p>
              </div>
              {/* Tooltip beim Hover */}
              <div className="absolute bottom-20 left-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
                <div className="bg-gray-700 text-white rounded-lg p-4 shadow-2xl min-w-[220px] text-sm whitespace-nowrap">
                  <p className="font-bold text-base mb-1">Michael Schmitt</p>
                  <p className="text-gray-300 mb-2 text-xs">Vertrieb</p>
                  <a
                    href="mailto:ms@lohnlab.de"
                    className="text-white hover:text-blue-300 block mb-1 text-xs"
                    onClick={(e) => e.stopPropagation()}
                  >
                    ms@lohnlab.de
                  </a>
                  <a
                    href="tel:01777970970"
                    className="text-white hover:text-blue-300 block text-xs"
                    onClick={(e) => e.stopPropagation()}
                  >
                    01777970970
                  </a>
                  {/* Tooltip Pfeil */}
                  <div className="absolute top-full left-6 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-gray-700"></div>
                </div>
              </div>
            </div>

            {/* Experten-Kachel mit Bildern - kleiner gemacht */}
            <div className="bg-gray-100 rounded-2xl p-6" style={{ flex: "0.5" }}>
              <p className="text-black font-bold text-lg mb-2">
                ... und viele weitere Experten
              </p>
              <p className="text-gray-700 text-sm mb-4">
                Engagierte Fachleute unterstützen Ihre Lohnoptimierung.
              </p>
              {/* 3 runde Mitarbeiterbilder als Stapel - rechts über links */}
              <div className="flex items-center -space-x-3 relative">
                {experts.map((expert, index) => (
                  <div
                    key={expert.name}
                    className="relative group"
                    style={{ zIndex: 30 + index }}
                  >
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-16 h-16 rounded-full border-4 border-white flex-shrink-0 object-cover cursor-pointer hover:scale-110 transition-transform duration-300"
                    />
                    {/* Tooltip beim Hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
                      <div className="bg-gray-700 text-white rounded-lg p-4 shadow-2xl min-w-[220px] text-sm whitespace-nowrap">
                        <p className="font-bold text-base mb-1">{expert.name}</p>
                        <p className="text-gray-300 mb-2 text-xs">{expert.role}</p>
                        <a
                          href={`mailto:${expert.email}`}
                          className="text-white hover:text-blue-300 block mb-1 text-xs"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {expert.email}
                        </a>
                        <a
                          href={`tel:${expert.phone}`}
                          className="text-white hover:text-blue-300 block text-xs"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {expert.phone}
                        </a>
                        {/* Tooltip Pfeil */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-gray-700"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mitte: Martin Grau (komplett von oben bis unten) */}
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              src={martinGrauImage}
              alt="Martin Grau"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white font-bold text-xl">Martin Grau</p>
              <p className="text-white text-base">Steuern & Recht</p>
            </div>
            {/* Tooltip beim Hover */}
            <div className="absolute bottom-20 left-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
              <div className="bg-gray-700 text-white rounded-lg p-4 shadow-2xl min-w-[220px] text-sm whitespace-nowrap">
                <p className="font-bold text-base mb-1">Martin Grau</p>
                <p className="text-gray-300 mb-2 text-xs">Steuern & Recht</p>
                <a
                  href="mailto:martin.grau@neuplaner.de"
                  className="text-white hover:text-blue-300 block text-xs"
                  onClick={(e) => e.stopPropagation()}
                >
                  martin.grau@neuplaner.de
                </a>
                {/* Tooltip Pfeil - zeigt auf den Namen */}
                <div className="absolute top-full left-6 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-gray-700"></div>
              </div>
            </div>
          </div>

          {/* Rechts: Einsparungen-Kachel mit Bewertungen oben + Holger unten */}
          <div className="flex flex-col gap-6">
            {/* Einsparungen-Kachel mit Bewertungen - kleiner gemacht */}
            <div className="bg-gray-100 rounded-2xl p-6 flex flex-col justify-between" style={{ flex: "0.5" }}>
              <div>
                <p className="text-black font-bold text-4xl mb-2">
                  +38,4 Mio. €
                </p>
                <p className="text-gray-700 text-sm mb-4">Realisierte Einsparungen</p>
              </div>
              
              {/* 5 Sterne + Text */}
              <div className="flex flex-col items-start">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm">
                  Vertrauen von über 220 Unternehmenskunden
                </p>
              </div>
            </div>

            {/* Holger Plümer - größer gemacht */}
            <div className="relative rounded-2xl overflow-hidden flex-grow group" style={{ flex: "3" }}>
              <img
                src={holgerPluemerImage}
                alt="Holger Plümer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-bold text-xl">Holger Plümer</p>
                <p className="text-white text-base">Finanzen</p>
              </div>
              {/* Tooltip beim Hover */}
              <div className="absolute bottom-20 left-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
                <div className="bg-gray-700 text-white rounded-lg p-4 shadow-2xl min-w-[220px] text-sm whitespace-nowrap">
                  <p className="font-bold text-base mb-1">Holger Plümer</p>
                  <p className="text-gray-300 mb-2 text-xs">Finanzen</p>
                  <a
                    href="mailto:hp@lohnlab.de"
                    className="text-white hover:text-blue-300 block text-xs"
                    onClick={(e) => e.stopPropagation()}
                  >
                    hp@lohnlab.de
                  </a>
                  {/* Tooltip Pfeil - zeigt auf den Namen */}
                  <div className="absolute top-full left-6 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-gray-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
