import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Briefcase, Heart, Lightbulb } from "lucide-react";
import { useGender } from "@/lib/gender";

export default function LohnerhoehungEconomicChallengesSection() {
  const gendered = useGender();
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-lohn-primary mb-6">
            Die aktuelle Wirtschaftslage verstehen
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Als Entscheider in deutschen Unternehmen kennst du diese
            Herausforderungen nur zu gut
          </p>
        </div>

        {/* Three Key Challenges */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-orange-200 bg-linear-to-br from-orange-50 to-red-50">
            <CardHeader>
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                <AlertTriangle className="text-orange-600" size={32} />
              </div>
              <CardTitle className="text-xl text-gray-800">
                Explodierende Kosten
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Steigende Energiekosten, Inflation und gestiegene
                Rohstoffpreise belasten das Budget. Jede Ausgabe muss
                sorgfältig abgewogen werden.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-linear-to-br from-blue-50 to-indigo-50">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                <Briefcase className="text-blue-600" size={32} />
              </div>
              <CardTitle className="text-xl text-gray-800">
                Kampf um Fachkräfte
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Der Fachkräftemangel verschärft sich.{" "}
                <a
                  href="/loesungen/neueinstellungen"
                  className="text-lohn-primary hover:underline"
                >
                  Neue Talente zu finden
                </a>{" "}
                wird immer schwieriger und teurer.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-linear-to-br from-green-50 to-emerald-50">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                <Heart className="text-green-600" size={32} />
              </div>
              <CardTitle className="text-xl text-gray-800">
                {gendered ? "Mitarbeiter*innen\u00ADbindung" : "Mitarbeiterbindung"} im Fokus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Bestehende {gendered ? "Mitarbeiter*innen" : "Mitarbeiter"} zu halten ist kostengünstiger als neue
                zu rekrutieren. Die Bindung wird zur strategischen Priorität.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Insight */}
        <div className="bg-linear-to-r from-lohn-primary to-lohn-secondary rounded-3xl p-8 lg:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <Lightbulb className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Unsere Erkenntnis: Es geht um smarte Lösungen, nicht um höhere
              Ausgaben
            </h3>
            <p className="text-xl text-blue-100 leading-relaxed">
              Statt einfach nur Gehälter zu erhöhen, brauchst du intelligente
              Employer Branding Lösungen, die deine {gendered ? "Mitarbeiter*innen" : "Mitarbeiter"} wertschätzen
              und gleichzeitig deine Kosten optimieren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
