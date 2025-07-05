import Navigation from "@/components/navigation";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Calculator, FileDown, CheckCircle, AlertCircle, Zap, BarChart3, FileCheck, Target } from "lucide-react";

export default function Lohnerhoehung() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--lohn-primary)] via-[var(--lohn-secondary)] to-[var(--lohn-purple)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Lohnerhöhung leicht gemacht
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Präzise Lohnberechnungen auf DATEV-Niveau – für Steuerberater und Unternehmen. 
              Schluss mit Excel-Schätzungen und ungenauen Online-Rechnern.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={() => scrollToSection('kontakt')}
                className="bg-white text-[var(--lohn-primary)] hover:bg-gray-100 transition-colors rounded-full px-8 py-4 font-semibold"
              >
                Kostenlose Demo
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('vorteile')}
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[var(--lohn-primary)] transition-colors rounded-full px-8 py-4 font-semibold"
              >
                Vorteile entdecken
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="problem" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
              Das Problem mit herkömmlichen Lohnberechnungen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Viele Unternehmen und Steuerberater kämpfen mit ungenauen Berechnungen und zeitaufwändigen Prozessen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <AlertCircle className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Excel-Schätzungen</h3>
              <p className="text-gray-600">
                Grobe "Pi mal Daumen" Berechnungen führen zu ungenauen Ergebnissen und falschen Erwartungen bei Mitarbeitern.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <Calculator className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ungenaue Online-Rechner</h3>
              <p className="text-gray-600">
                Tools wie brutto-netto-rechner.de berücksichtigen nicht alle Faktoren wie Umlagen, Berufsgenossenschaftsbeiträge oder Midi-/Minijobs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Einzelberechnung</h3>
              <p className="text-gray-600">
                Jeder Mitarbeiter muss einzeln berechnet werden – zeitaufwändig und fehleranfällig bei größeren Teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="vorteile" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
              Unsere Lösung: Exakte Lohnberechnungen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Das LohnLab Cockpit bietet präzise Berechnungen auf DATEV-Niveau mit allen relevanten Faktoren
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">1. Exakte Ergebnisse</h3>
              <p className="text-gray-600 mb-4">
                Genaue Netto-, Brutto- und Lohnkostenberechnungen durch Berücksichtigung aller relevanten Faktoren.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Mitarbeiter- und Unternehmensstammdaten</li>
                <li>• Alle Lohnfaktoren und Umlagen</li>
                <li>• Berufsgenossenschaftsbeiträge</li>
                <li>• Korrekte Arbeitgeberkostenfaktoren</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">2. Mehrere Mitarbeiter</h3>
              <p className="text-gray-600 mb-4">
                Berechnung für beliebig viele Mitarbeiter gleichzeitig – keine Einzelberechnungen mehr nötig.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Gemeinsamer Faktor (z.B. 5% für alle)</li>
                <li>• Fester Betrag (z.B. 300€ für alle)</li>
                <li>• Individuelle Anpassungen möglich</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <FileCheck className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">3. Draft-Speicherung</h3>
              <p className="text-gray-600 mb-4">
                Speichern Sie Berechnungen als Entwürfe und rufen Sie sie jederzeit wieder auf.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Verschiedene Szenarien vergleichen</li>
                <li>• Iterative Anpassungen möglich</li>
                <li>• Keine Datenverluste</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <FileDown className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">4. Probeabrechnungen</h3>
              <p className="text-gray-600 mb-4">
                Generieren Sie transparente Probeabrechnungen für die Kommunikation mit Mandanten oder Mitarbeitern.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• DATEV-konforme Darstellung</li>
                <li>• Detaillierte Aufschlüsselung</li>
                <li>• Professionelle Präsentation</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Calculator className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">5. DATEV-Niveau</h3>
              <p className="text-gray-600 mb-4">
                Exakter Rechner auf DATEV-Niveau mit allen speziellen Berechnungsarten.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Midi-Job Berechnungen</li>
                <li>• Minijob-Berechnungen</li>
                <li>• Alle Steuerklassen</li>
                <li>• Aktuelle Beitragssätze</li>
              </ul>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-8 text-center">
              LohnLab vs. Herkömmliche Methoden
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="pb-4 text-gray-600 font-medium">Kriterium</th>
                    <th className="pb-4 text-center">Excel-Schätzung</th>
                    <th className="pb-4 text-center">Online-Rechner</th>
                    <th className="pb-4 text-center bg-[var(--lohn-teal)]/10 rounded-t-lg">
                      <span className="text-[var(--lohn-primary)] font-bold">LohnLab Cockpit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="space-y-4">
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-medium">Genauigkeit</td>
                    <td className="py-4 text-center">❌ Ungenau</td>
                    <td className="py-4 text-center">⚠️ Eingeschränkt</td>
                    <td className="py-4 text-center bg-[var(--lohn-teal)]/10">
                      <span className="text-green-600 font-medium">✅ DATEV-Niveau</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-medium">Mehrere Mitarbeiter</td>
                    <td className="py-4 text-center">❌ Einzeln</td>
                    <td className="py-4 text-center">❌ Einzeln</td>
                    <td className="py-4 text-center bg-[var(--lohn-teal)]/10">
                      <span className="text-green-600 font-medium">✅ Gleichzeitig</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-medium">Speichern & Wiederholen</td>
                    <td className="py-4 text-center">⚠️ Manuell</td>
                    <td className="py-4 text-center">❌ Nicht möglich</td>
                    <td className="py-4 text-center bg-[var(--lohn-teal)]/10">
                      <span className="text-green-600 font-medium">✅ Automatisch</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-medium">Midi-/Minijobs</td>
                    <td className="py-4 text-center">❌ Nicht unterstützt</td>
                    <td className="py-4 text-center">❌ Meist nicht</td>
                    <td className="py-4 text-center bg-[var(--lohn-teal)]/10">
                      <span className="text-green-600 font-medium">✅ Vollständig</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Probeabrechnungen</td>
                    <td className="py-4 text-center">❌ Nicht möglich</td>
                    <td className="py-4 text-center">❌ Nicht möglich</td>
                    <td className="py-4 text-center bg-[var(--lohn-teal)]/10">
                      <span className="text-green-600 font-medium">✅ DATEV-Format</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Different Audiences */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
              Vorteile für Steuerberater und Unternehmen
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Für Steuerberater */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[var(--lohn-primary)] rounded-xl flex items-center justify-center mr-4">
                  <BarChart3 className="text-white text-lg" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--lohn-primary)]">Für Steuerberater</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Mandantenberatung auf höchstem Niveau</h4>
                    <p className="text-gray-600">Präzise Berechnungen schaffen Vertrauen und Kompetenz.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Zeitersparnis bei Lohnerhöhungen</h4>
                    <p className="text-gray-600">Alle Mitarbeiter gleichzeitig berechnen statt Einzelrechnungen.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Transparente Kommunikation</h4>
                    <p className="text-gray-600">Probeabrechnungen für klare Mandantenkommunikation.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Direkte DATEV-Integration</h4>
                    <p className="text-gray-600">Nahtlose Übertragung ins DATEV-System.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Für Unternehmen */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[var(--lohn-teal)] rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="text-[var(--lohn-primary)] text-lg" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--lohn-primary)]">Für Unternehmen</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Exakte Kostenplanung</h4>
                    <p className="text-gray-600">Wissen Sie genau, was Lohnerhöhungen kosten werden.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Mitarbeiterzufriedenheit</h4>
                    <p className="text-gray-600">Klare Kommunikation über reale Netto-Erhöhungen.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Verschiedene Szenarien</h4>
                    <p className="text-gray-600">Vergleichen Sie unterschiedliche Erhöhungsmodelle.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1 w-5 h-5" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Rechtssicherheit</h4>
                    <p className="text-gray-600">DATEV-konforme Berechnungen für alle Mitarbeitertypen.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[var(--lohn-primary)] to-[var(--lohn-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit für exakte Lohnberechnungen?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Testen Sie das LohnLab Cockpit kostenlos und erleben Sie den Unterschied zu herkömmlichen Methoden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('kontakt')}
              className="bg-white text-[var(--lohn-primary)] hover:bg-gray-100 transition-colors rounded-full px-8 py-4 font-semibold"
            >
              Kostenlose Demo anfordern
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('kontakt')}
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[var(--lohn-primary)] transition-colors rounded-full px-8 py-4 font-semibold"
            >
              Beratungstermin buchen
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}