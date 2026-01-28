import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";
import teamMeetingImage from "@/assets/team-meeting.jpg";

const competencies = [
  "Steuer- & Arbeitsrecht",
  "Payroll & Lohnabrechnung",
  "Software & Datenarchitektur",
  "Unternehmensberatung & CFO-Perspektive",
];

export default function FinalCTASection() {
  return (
    <section className="relative" style={{ backgroundColor: "#2c2c2c" }}>
      {/* CTA Card auf dem Übergang - perfekt zentriert auf der Abschnittsgrenze */}
      <div className="absolute top-0 left-0 right-0 -translate-y-1/2 z-10">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Linke Hälfte: Text mit Farbverlauf */}
                <div className="bg-gradient-to-l from-[var(--lohn-primary)] to-[var(--lohn-secondary)] p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                    Bereit, Ihren Lohn zu optimieren?
                  </h3>
                  <p className="text-white/90 text-base md:text-lg mb-6 leading-relaxed">
                    LohnLab wurde nicht als klassische Software entwickelt, sondern
                    aus der Praxis heraus. Wir haben folgende Kompetenzen:
                  </p>
                  <ul className="space-y-3 mb-8">
                    {competencies.map((competency, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-white flex-shrink-0" />
                        <span className="text-white text-base md:text-lg">
                          {competency}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/kontakt">
                    <Button
                      className="bg-white text-[var(--lohn-primary)] hover:bg-gray-100 transition-all rounded-full px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform duration-300 w-full md:w-auto"
                    >
                      Beratungsgespräch vereinbaren
                    </Button>
                  </Link>
                </div>

                {/* Rechte Hälfte: Bild */}
                <div className="relative h-full min-h-[400px] lg:min-h-[500px] overflow-hidden">
                  <img
                    src={teamMeetingImage}
                    alt="LohnLab Team Meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container mit Padding oben für die CTA Card */}
      <div className="pt-20 md:pt-28 pb-20 md:pb-28"></div>
    </section>
  );
}
