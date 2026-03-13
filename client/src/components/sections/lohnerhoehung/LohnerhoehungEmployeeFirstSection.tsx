import { Badge } from "@/components/ui/badge";
import {
  Calculator,
  CheckCircle,
  Crown,
  Gift,
  Award,
  HandHeart,
  Zap,
  PiggyBank,
  Banknote,
  Sparkles,
  Building2,
} from "lucide-react";
import lohnlabCalculatorPrecise from "@/assets/images/screenshots/lohnlab-rechner.png";
import employeeSelection from "@/assets/images/screenshots/mitarbeiter-auswahl.png";
import ciCardImage from "@/assets/images/general/lohnlab-card-benefits.webp";
import { useGender } from "@/lib/gender";

export default function LohnerhoehungEmployeeFirstSection() {
  const gendered = useGender();
  return (
    <section id="mitarbeiter-first" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 border-green-200 mb-6 px-4 py-2 text-base font-semibold">
            Systematische Kostenersparnis
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-lohn-primary mb-6">
            Lohnerhöhungen, die{" "}
            <span className="text-green-600">Kosten sparen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nutze LohnLab, um bei Lohnerhöhungen systematisch Kosten zu
            sparen – weil Wirtschaftlichkeit heute kein Luxus, sondern
            Voraussetzung ist.
          </p>
        </div>

        {/* Core Message with Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200">
              <PiggyBank className="w-12 h-12 text-green-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Sparen. Investieren. Binden.
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 shrink-0" />
                  <div className="text-gray-700">
                    <strong>Kosten senken:</strong> Optimierte
                    Vergütungsmodelle sparen bis zur Hälfte der üblichen
                    Lohnkosten – auch bei Lohnerhöhungen.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 shrink-0" />
                  <div className="text-gray-700">
                    <strong>Gezielt investieren:</strong> Nutze die frei
                    werdenden Mittel, um Benefits zu schaffen, die über das
                    Übliche hinausgehen.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 shrink-0" />
                  <div className="text-gray-700">
                    <strong>Realer Nutzen:</strong> Deine {gendered ? "Mitarbeiter*innen" : "Mitarbeiter"}
                    profitieren direkt – nicht in Form von Versprechen,
                    sondern als echtes Plus im Alltag.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 shrink-0" />
                  <div className="text-gray-700">
                    <strong>{gendered ? "Mitarbeiter*innen" : "Mitarbeiter"} binden:</strong> Aus Wertschätzung
                    wird Verlässlichkeit – weil gute Bedingungen verbinden.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={lohnlabCalculatorPrecise}
              alt="LohnLab Cockpit Screenshot: Automatische Lohnberechnung mit DATEV-Integration für Lohnerhöhungen"
              className="w-full rounded-2xl shadow-2xl border border-gray-200"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-6 py-3 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-2">
                <Banknote className="w-5 h-5" />
                <span className="font-semibold">
                  Kosten sparen bei jeder Erhöhung
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* LohnLab Card - Branded Employee Benefits */}
        <div className="bg-linear-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 lg:p-12 border border-purple-200 mb-20">
          <div className="text-center mb-12">
            <Crown className="w-16 h-16 mx-auto text-purple-600 mb-6" />
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              LohnLab Card - Lohnerhöhungen sichtbar machen
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Die wiederaufladbare Mastercard mit deinem Firmenlogo macht jeden
              Cent deiner Wertschätzung sichtbar
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Left Column - Card Image & Logo Highlight */}
              <div className="lg:col-span-1">
                <div className="relative">
                  <img
                    src={ciCardImage}
                    alt="LohnLab Card mit individuellem Firmen-Branding und Logo - Wiederaufladbare Mastercard für Mitarbeiterbenefits"
                    className="w-full rounded-2xl shadow-2xl border border-gray-200"
                    loading="lazy"
                    width={600}
                    height={400}
                  />
                  <div className="absolute -top-3 -right-3 bg-linear-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Crown className="w-4 h-4" />
                      <span className="font-semibold text-sm">Dein Logo</span>
                    </div>
                  </div>
                </div>

                {/* Stats Box */}
                <div className="bg-linear-to-r from-purple-100 to-indigo-100 rounded-2xl p-6 mt-6 border border-purple-200">
                  <h4 className="font-bold text-gray-800 mb-3">
                    Bewährte Lösung:
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 shrink-0" />
                      <span className="font-semibold text-gray-800">
                        550.000+ Kartennutzer
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 shrink-0" />
                      <span className="font-semibold text-gray-800">
                        23.000+ Firmenkunden
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 shrink-0" />
                      <span className="font-semibold text-gray-800">
                        Steuerkonform
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Features */}
              <div className="lg:col-span-2 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Gift className="w-5 h-5 text-purple-600" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800">
                        Universell einsetzbar
                      </h4>
                    </div>
                    <p className="text-gray-600">
                      Bei <strong>allen Mastercard-Akzeptanzstellen</strong>{" "}
                      nutzbar - für Tanken, Einkaufen oder jeden anderen
                      Bedarf.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Award className="w-5 h-5 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800">
                        Firmen-Branding
                      </h4>
                    </div>
                    <p className="text-gray-600">
                      Karte mit <strong>deinem Logo und Design</strong> - bei
                      jeder Zahlung sichtbare Wertschätzung.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <HandHeart className="w-5 h-5 text-green-600" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800">
                        Bewusste Wahrnehmung
                      </h4>
                    </div>
                    <p className="text-gray-600">
                      <strong>Anders als Gehaltsüberweisung</strong> - jede
                      Zahlung wird bewusst als dein Benefit wahrgenommen.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                        <Zap className="w-5 h-5 text-indigo-600" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800">
                        Sofortige Verfügbarkeit
                      </h4>
                    </div>
                    <p className="text-gray-600">
                      <strong>Wiederaufladbar in Echtzeit</strong> -                     Deine
                      {gendered ? " Mitarbeiter*innen" : " Mitarbeiter"} können Benefits sofort nutzen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lohnerhöhungsmodul im LohnLab Cockpit */}
        <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 lg:p-12 border border-blue-200">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Lohnerhöhungen im LohnLab Cockpit
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Die spezialisierte Funktion für präzise
              Lohnerhöhungsberechnungen - entwickelt für maximale Effizienz
              und echte Kosteneinsparungen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 shrink-0 bg-blue-100 rounded-full flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">
                    Präzise Lohnberechnung
                  </h4>
                </div>
                <p className="text-gray-600">
                  Alle {gendered ? "Mitarbeiter*innen" : "Mitarbeiter"} werden gleichzeitig mit höchster
                  Genauigkeit berechnet. Keine manuellen Fehler, keine
                  Excel-Schätzungen mehr.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 shrink-0 bg-green-100 rounded-full flex items-center justify-center">
                    <PiggyBank className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">
                    Automatische Optimierung
                  </h4>
                </div>
                <p className="text-gray-600">
                  Jeder Lohnerhöhungsfall wird automatisch optimiert für bis
                  zu 50% reduzierte Arbeitgeberkosten bei gleichbleibender
                  Attraktivität.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 shrink-0 bg-purple-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">
                    Professionelle Dokumentation
                  </h4>
                </div>
                <p className="text-gray-600">
                  Automatische Erstellung von Gehaltsvergleichen und
                  Probeabrechnungen für transparente {gendered ? "Mitarbeiter*innen\u00ADkommunikation" : "Mitarbeiterkommunikation"}
                  auf Knopfdruck.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={employeeSelection}
                alt="LohnLab Cockpit Lohnerhöhungsmodul: Einfache Mitarbeiterauswahl für Gehaltsoptimierung und Kostenersparnis"
                className="w-full rounded-2xl shadow-2xl border border-gray-200"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-6 py-3 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Building2 className="w-5 h-5" />
                  <span className="font-semibold">
                    Speziell für Lohnerhöhungen
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
