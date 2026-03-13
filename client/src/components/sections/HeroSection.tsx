import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import sterneReferenzen from "@/assets/5SterneReferenzen.png";

// Logo-Imports
import agendaLogo from "@/assets/logos/agenda_logo_ver-300x158-removebg.png";
import csslohnLogo from "@/assets/logos/CSSLOHN-removebg-preview.png";
import datevLogo from "@/assets/logos/Datev-Logo--removebg-preview.png";
import lexwareLogo from "@/assets/logos/Lexware-removebg-preview.png";
import piLogo from "@/assets/logos/PI-removebg-preview.png";
import sageLogo from "@/assets/logos/Sage-Group-Logo-Vector-01-removebg-preview.png";
import sapLogo from "@/assets/logos/SAP-Logo.svg.png";
import vrgLogo from "@/assets/logos/VRG.png";
import wolterskluverLogo from "@/assets/logos/Wolterskluver-removebg-preview.png";

const logos = [
  { name: "DATEV", src: datevLogo },
  { name: "SAP", src: sapLogo },
  { name: "Lexware", src: lexwareLogo },
  { name: "Sage", src: sageLogo, scale: 1.8 },
  { name: "Wolters Kluwer", src: wolterskluverLogo },
  { name: "CSS LOHN", src: csslohnLogo },
  { name: "PI", src: piLogo, scale: 1.8 },
  { name: "VRG", src: vrgLogo },
  { name: "Agenda", src: agendaLogo },
];

/**
 * Hero-Sektion Komponente - Neue Landingpage
 */
export default function HeroSection() {

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
              Mehr Netto für Mitarbeiter*innen.
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
              <Link href="/kontakt">
                <Button
                  className="bg-[var(--lohn-primary)] text-white hover:bg-[var(--lohn-secondary)] transition-colors rounded-full px-6 py-5 text-base font-semibold shadow-md"
                >
                  Beratungsgespräch vereinbaren
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-2 border-gray-400 text-gray-700 hover:bg-gray-50 transition-colors rounded-full px-6 py-5 text-base font-semibold bg-transparent"
                onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
              >
                Alle Case Studies ansehen
              </Button>
            </div>
          </div>

          {/* Right Column - Platzhalter */}
          <div className="flex flex-col justify-end">
            <div
              className="rounded-2xl shadow-2xl overflow-hidden"
              dangerouslySetInnerHTML={{
                __html: '<wistia-player media-id="zrcdz7nm5p" aspect="1.7777777777777777"></wistia-player>',
              }}
            />

            {/* Logo Carousel */}
            <div className="mt-8 relative overflow-hidden">
              <p className="text-xs text-gray-600 mb-2 text-center">20+ unterstützte Lohnabrechnungssysteme</p>
              <div className="flex items-center justify-center gap-6 animate-scroll">
                {/* Duplicate logos for seamless loop */}
                {[...logos, ...logos, ...logos].map((logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    className="flex-shrink-0 h-10 flex items-center justify-center px-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-full w-auto object-contain object-center"
                      style={{
                        maxHeight: '40px',
                        height: '40px',
                        width: 'auto',
                        objectFit: 'contain',
                        objectPosition: 'center',
                        transform: logo.scale ? `scale(${logo.scale})` : undefined,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
