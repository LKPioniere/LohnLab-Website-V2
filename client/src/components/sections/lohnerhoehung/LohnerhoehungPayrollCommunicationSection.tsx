import { Target, DollarSign, Heart, CheckCircle } from "lucide-react";
import payrollComparison from "@/assets/images/screenshots/lohnabrechnung-vergleich.png";
import { useGender } from "@/lib/gender";

export default function LohnerhoehungPayrollCommunicationSection() {
  const gendered = useGender();
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-lohn-primary mb-6">
            Professionelle {gendered ? "Mitarbeiter*innen\u00ADkommunikation" : "Mitarbeiterkommunikation"}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Dokumentiere transparent und verständlich, wie du durch
            smarte Lohngestaltung Kosten sparst
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-linear-to-br from-teal-50 to-blue-50 rounded-3xl p-8 border border-teal-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Einzigartige Vorher-Nachher-Darstellung
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Zwei-Spalten-Abrechnung für {gendered ? "Mitarbeiter*innen" : "Mitarbeiter"}
                    </h4>
                    <p className="text-gray-600">
                      In der Probelohnabrechnung (siehe Bild) sehen deine
                      {gendered ? "Mitarbeiter*innen" : "Mitarbeiter"} links das aktuelle Gehalt, rechts die neue
                      Struktur mit Lohnerhöhung - so verstehen sie sofort den
                      Unterschied.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <DollarSign className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Arbeitgeber-Ansicht im Cockpit
                    </h4>
                    <p className="text-gray-600">
                      In deiner Cockpit-Ansicht siehst du auf einen Blick, wie
                      viel Lohnkosten du durch die intelligente Optimierung
                      einsparst.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Wertschätzung kommunizieren
                    </h4>
                    <p className="text-gray-600">
                      Zeige deinen {gendered ? "Mitarbeiter*innen" : "Mitarbeitern"}, dass du innovative Wege
                      gehen, um ihr Einkommen zu optimieren.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={payrollComparison}
              alt="Professionelle Gehaltsabrechnung mit Vorher-Nachher-Vergleich für transparente Mitarbeiterkommunikation bei Lohnerhöhungen"
              className="w-full rounded-2xl shadow-2xl border border-gray-200"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute -top-4 -right-4 bg-linear-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Kosten sparen bei allen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
