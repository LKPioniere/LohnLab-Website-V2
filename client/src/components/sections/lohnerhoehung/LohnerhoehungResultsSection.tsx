import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TrendingUp, Heart, Shield, Gift, CheckCircle } from "lucide-react";
import { useGender } from "@/lib/gender";

export default function LohnerhoehungResultsSection() {
  const gendered = useGender();
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-linear-to-r from-green-100 to-emerald-100 text-green-800 border-green-200 mb-6 px-4 py-2 text-base font-semibold">
            Messbare Ergebnisse
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-lohn-primary mb-6">
            Das Ergebnis: Glückliche {gendered ? "Mitarbeiter*innen" : "Mitarbeiter"}, geringere Kosten
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Unsere systematische Kostenersparnis schafft eine
            Win-Win-Situation für alle Beteiligten
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-8 border-green-200 bg-linear-to-br from-green-50 to-emerald-50">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Bis zu 50% Kosteneinsparung
            </h3>
            <p className="text-gray-600">
              Durch smartes Gehaltsmanagement reduzierst du deine echten
              Lohnkosten erheblich
            </p>
          </Card>

          <Card className="text-center p-8 border-blue-200 bg-linear-to-br from-blue-50 to-indigo-50">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Höhere {gendered ? "Mitarbeiter*innen\u00ADzufriedenheit" : "Mitarbeiterzufriedenheit"}
            </h3>
            <p className="text-gray-600">
              {gendered ? "Mitarbeiter*innen" : "Mitarbeiter"} verstehen auf einen Blick, was sie bekommen: klar,
              greifbar und wertvoll im Alltag.
            </p>
          </Card>

          <Card className="text-center p-8 border-purple-200 bg-linear-to-br from-purple-50 to-pink-50">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Stärkere {gendered ? "Mitarbeiter*innen\u00ADbindung" : "Mitarbeiterbindung"}
            </h3>
            <p className="text-gray-600">
              Innovatives Employer Branding positioniert dich als attraktiven,
              {gendered ? "zukunftsorientierte*n Arbeitgeber*in" : "zukunftsorientierten Arbeitgeber"}
            </p>
          </Card>
        </div>

        {/* Zusätzliche Benefits Card */}
        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-lohn-teal bg-linear-to-br from-teal-50/50 to-blue-50/50 p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row items-start gap-6">
              <div className="shrink-0">
                <div className="w-20 h-20 bg-linear-to-br from-lohn-teal to-lohn-primary rounded-2xl flex items-center justify-center">
                  <Gift className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Smarte Benefits für dein Team: Die zusätzliche Option mit
                  LohnLab
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  Lohnoptimierung ist der erste Schritt. Doch erst wenn du
                  einen Teil deiner Ersparnis gezielt in echte Benefits
                  reinvestierst, entsteht wirkliche {gendered ? "Mitarbeiter*innen\u00ADbindung" : "Mitarbeiterbindung"}.
                </p>
                <div className="bg-white/70 rounded-xl p-6 mb-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-lohn-primary">
                      Du entscheidest:
                    </strong>{" "}
                    Welcher Anteil deiner Einsparung fließt in Benefits? Welche
                    Leistungen passen zu deinem Team?
                    <strong className="text-lohn-primary">
                      {" "}
                      Wir setzen um:
                    </strong>{" "}
                    Von der steuerlich geprüften Berechnung bis zur
                    professionellen Umsetzung, gemeinsam mit spezialisierten
                    Partnern unserer Gruppe.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-lohn-teal" />
                    <span>Steuerlich geprüft</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-lohn-teal" />
                    <span>Wertschätzende Kommunikation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-lohn-teal" />
                    <span>Im Alltag spürbar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-lohn-teal" />
                    <span>Ohne Zusatzaufwand für dich</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
