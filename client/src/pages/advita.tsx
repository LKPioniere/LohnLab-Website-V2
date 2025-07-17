import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Download, Phone, Mail, Calendar, Play } from "lucide-react";

// Calendly widget types
declare global {
  interface Window {
    Calendly: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
    };
  }
}
import advitaLogo from "@/assets/advita/advita.0c1377e9.png";
import rolloutPlan from "@/assets/advita/Rollout-Plan.png";
import advitaVideo from "@/assets/advita/Advita_Video_Magdeburg.mp4";
import handout from "@/assets/advita/Handout_Advita.pdf";
import verfahrensanweisung from "@/assets/advita/Verfahrensanweisung_advita-Card.pdf";
import prozessBeschreibung from "@/assets/advita/2_Prozess_und_Leistungsbeschreibung_advita_Card.pdf";
import praemienUebersicht from "@/assets/advita/Neue-Praemien-Uebersicht.pdf";
import musterNachtrag from "@/assets/advita/Ready_to_print_Muster_Nachtrag.pdf";
import robertLinkedIn from "@/assets/advita/RB_LinkedIn.jpeg";

const CORRECT_PASSWORD = "advita-rollout-2025";

export default function Advita() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      // Load Calendly CSS
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);

      // Load Calendly JS and initialize badge widget
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.type = 'text/javascript';
      script.async = true;
      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initBadgeWidget({
            url: 'https://calendly.com/lohnkonzepte_behrend/advita-card-dienstberatung-vor-ort',
            text: 'zur Terminvereinbarung',
            color: '#ea580c',
            textColor: '#ffffff',
            branding: true
          });
        }
      };
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(link);
        document.head.removeChild(script);
      };
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const downloadFile = (fileUrl: string, filename: string) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center px-4">
        <Card className="w-full max-w-md border-orange-200">
          <CardHeader className="text-center">
            <img src={advitaLogo} alt="Advita Logo" className="h-16 mx-auto mb-4" />
            <CardTitle className="text-2xl font-bold text-orange-800">advita Card Portal</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-orange-700 mb-2">
                  Passwort
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Passwort eingeben"
                  className="border-orange-300 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              {showError && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertDescription className="text-red-700">
                    Falsches Passwort. Bitte versuchen Sie es erneut.
                  </AlertDescription>
                </Alert>
              )}
              <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                Anmelden
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={advitaLogo} alt="Advita Logo" className="h-12" />
              <h1 className="text-2xl font-bold text-orange-800">advita Card - Rollout Portal</h1>
            </div>
            <p className="text-orange-600 font-medium">Für PDLs & PDs</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Video Introduction */}
        <section className="mb-12">
          <Card className="border-orange-200 bg-white shadow-lg">
            <CardHeader className="bg-orange-600 text-white">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Play className="h-6 w-6" />
                Das ist die advita Card
              </CardTitle>
              <CardDescription className="text-orange-100">
                Informationsvideo aus der Pilotphase - Alles Wissenswerte für Mitarbeiter
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster=""
                >
                  <source src={advitaVideo} type="video/mp4" />
                  Ihr Browser unterstützt das Video-Element nicht.
                </video>
              </div>
              <Alert className="border-orange-200 bg-orange-50">
                <AlertDescription className="text-orange-800">
                  <strong>Hinweis:</strong> Als Beispiel-Niederlassung für den Einsatz der advita Card wird in diesem Video Magdeburg gezeigt. 
                  Auf den Handouts passen wir die Region immer an Ihr Haus an.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* Premium Benefits */}
        <section className="mb-12">
          <Card className="border-orange-200 bg-white shadow-lg">
            <CardHeader className="bg-orange-600 text-white">
              <CardTitle className="text-2xl">Die neue Prämien-Vergütung</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-300">
                  <thead>
                    <tr className="bg-orange-100">
                      <th className="border border-orange-300 p-3 text-left text-orange-800">Prämie</th>
                      <th className="border border-orange-300 p-3 text-center text-orange-800">alte Werte (Ø)</th>
                      <th className="border border-orange-300 p-3 text-center text-orange-800">neue Werte</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-orange-300 p-3">Rufbereitschaft (RB)</td>
                      <td className="border border-orange-300 p-3 text-center">8 € netto</td>
                      <td className="border border-orange-300 p-3 text-center font-semibold text-orange-700">10 € netto</td>
                    </tr>
                    <tr className="bg-orange-50">
                      <td className="border border-orange-300 p-3">Kurzfristiges Einspringen (KE)</td>
                      <td className="border border-orange-300 p-3 text-center">13 € netto</td>
                      <td className="border border-orange-300 p-3 text-center font-semibold text-orange-700">17 € netto</td>
                    </tr>
                    <tr>
                      <td className="border border-orange-300 p-3">Flexibles Einspringen (FE)</td>
                      <td className="border border-orange-300 p-3 text-center">19 € netto</td>
                      <td className="border border-orange-300 p-3 text-center font-semibold text-orange-700">26 € netto</td>
                    </tr>
                    <tr className="bg-orange-50">
                      <td className="border border-orange-300 p-3">Überregionales Einspringen (ÜE)</td>
                      <td className="border border-orange-300 p-3 text-center">24 € netto</td>
                      <td className="border border-orange-300 p-3 text-center font-semibold text-orange-700">35 € netto</td>
                    </tr>
                    <tr>
                      <td className="border border-orange-300 p-3">Wechselschichtzulage (WSZ)</td>
                      <td className="border border-orange-300 p-3 text-center">106 € netto</td>
                      <td className="border border-orange-300 p-3 text-center font-semibold text-orange-700">140 € netto</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Alert className="border-orange-200 bg-orange-50 mt-4">
                <AlertDescription className="text-orange-800">
                  <strong>Hinweis:</strong> Die "alten Werte (Ø)" berufen sich auf eine durchschnittliche Pflegefachkraft 
                  mit einem Bruttogehalt von 3.300 € und Steuerklasse 1. Es kann bei weiteren Einzelbetrachtungen 
                  zu unterschiedlichen Ergebnissen kommen.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* How it works */}
        <section className="mb-12">
          <Card className="border-orange-200 bg-white shadow-lg">
            <CardHeader className="bg-orange-600 text-white">
              <CardTitle className="text-2xl">Wie kommen meine Mitarbeiter zu ihrer advita Card?</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-orange-800 mb-2">Prämienanspruch entsteht</h3>
                    <p className="text-gray-700">Ein Mitarbeiter springt im betreffenden Monat beispielsweise einmal kurzfristig ein. Damit entsteht ein Anspruch auf eine steuerfreie Prämie in Höhe von z. B. 17 €.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-orange-800 mb-2">Datenübermittlung an Lohnkonzepte</h3>
                    <p className="text-gray-700">Bis spätestens zum 8. des Folgemonats werden die Exportdateien (.txt) sowie die zugehörige Begleit-PDFs aus MEDIFOX DAN in der Datei-Cloud bereitgestellt.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-orange-800 mb-2">Vorgang bei erstmaligem Anspruch eines Mitarbeiters</h3>
                    <p className="text-gray-700">Lohnkonzepte erkennt neue Anspruchsberechtigte und stellt der Pflegedienstleitung in der Cloud eine vorbefüllte Zusatzvereinbarung (inkl. Name und Personalnummer) für den Mitarbeiter bereit. Parallel wird seine neue advita Card an den Standort gesendet.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-orange-800 mb-2">Pufferung der Prämie bei Erstausgabe</h3>
                    <p className="text-gray-700">Da die unterschriebene Zusatzvereinbarung und die Karte nicht rechtzeitig vor dem Lohnlauf vorliegen, wird der erste Prämien-Anspruch nicht in diesem Monat ausgezahlt, aber von Lohnkonzepte gepuffert. Die Auszahlung erfolgt dann im Folgemonat zusammen mit weiteren Prämienansprüchen.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-orange-800 mb-2">Unterschrift der Zusatzvereinbarung & Übergabe der Karte</h3>
                    <p className="text-gray-700">Die Pflegedienstleitung holt die Unterschrift des Mitarbeiters auf der Zusatzvereinbarung ein. Erst nach Unterzeichnung darf die advita Card ausgehändigt werden.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">6</div>
                  <div>
                    <h3 className="font-semibold text-orange-800 mb-2">Zentrale Ablage der Zusatzvereinbarung</h3>
                    <p className="text-gray-700">Die Pflegedienstleitung lädt die unterschriebene Zusatzvereinbarung in den vorgesehenen Zusatzvereinbarungs-Ordner in der Datei-Cloud hoch.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Rollout Process */}
        <section className="mb-12">
          <Card className="border-orange-200 bg-white shadow-lg">
            <CardHeader className="bg-orange-600 text-white">
              <CardTitle className="text-2xl">So funktioniert der Rollout in Ihrer Einrichtung</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-6">
                <img src={rolloutPlan} alt="Rollout Plan" className="w-full h-auto rounded-lg shadow-md" />
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <p className="text-gray-700">In der Grafik oben finden Sie den aktuellen Plan zum Rollout nach Regionen gestaffelt.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <p className="text-gray-700">Die Mitarbeiter-Kommunikation soll in Persona zum Zeitpunkt einer Dienstberatung erfolgen.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <p className="text-gray-700">Verantwortlich für den Rollout ist seitens Lohnkonzepte Herr Robert Behrend, bitte setzen Sie sich mit ihm für einen konkreten Termin in Ihrem Zeitraum rechtzeitig in Verbindung. Kontaktdaten finden Sie weiter unten.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Documents */}
        <section className="mb-12">
          <Card className="border-orange-200 bg-white shadow-lg">
            <CardHeader className="bg-orange-600 text-white">
              <CardTitle className="text-2xl">Anlagen - Dokumente zum Download</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-orange-800 mb-4">Mitarbeiter-Infos:</h3>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-between border-orange-300 text-orange-700 hover:bg-orange-50"
                      onClick={() => downloadFile(handout, 'advita-Card_MA-Handout.pdf')}
                    >
                      <span>advita-Card MA-Handout</span>
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-between border-orange-300 text-orange-700 hover:bg-orange-50"
                      onClick={() => downloadFile(musterNachtrag, 'Muster_Zusatzvereinbarung_Praemien&advita-Card.pdf')}
                    >
                      <span>Muster Zusatzvereinbarung</span>
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-between border-orange-300 text-orange-700 hover:bg-orange-50"
                      onClick={() => downloadFile(praemienUebersicht, 'Neue-Praemien-Uebersicht.pdf')}
                    >
                      <span>Neue Prämien-Übersicht</span>
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-orange-800 mb-4">Arbeitgeber-Infos:</h3>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-between border-orange-300 text-orange-700 hover:bg-orange-50"
                      onClick={() => downloadFile(verfahrensanweisung, 'Verfahrensanweisung_advita-Card.pdf')}
                    >
                      <span>Verfahrensanweisung</span>
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-between border-orange-300 text-orange-700 hover:bg-orange-50"
                      onClick={() => downloadFile(prozessBeschreibung, 'Prozess_und_Leistungsbeschreibung.pdf')}
                    >
                      <span>Prozess & Leistungsbeschreibung</span>
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-between border-orange-300 text-orange-700 hover:bg-orange-50"
                      onClick={() => downloadFile(rolloutPlan, 'Rollout-Plan.png')}
                    >
                      <span>Rollout-Plan</span>
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <Card className="border-orange-200 bg-white shadow-lg">
            <CardHeader className="bg-orange-600 text-white">
              <CardTitle className="text-2xl">Kontakt & Terminvereinbarung</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-6 mb-6">
                    <img src={robertLinkedIn} alt="Robert Behrend" className="w-32 h-32 rounded-full object-cover" />
                    <div>
                      <h3 className="text-xl font-bold text-orange-800">Robert Behrend</h3>
                      <p className="text-orange-600">Projektleiter "advita Card"</p>
                      <p className="text-gray-600">Lohnkonzepte GmbH</p>
                      <a href="https://www.lohnkonzepte.de" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 underline">www.lohnkonzepte.de</a>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-orange-600" />
                      <a href="tel:+4916211665562" className="text-gray-700 hover:text-orange-600 underline">01621 166 556 2</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-orange-600" />
                      <a href="mailto:robert.behrend@lohnkonzepte.de" className="text-gray-700 hover:text-orange-600 underline">robert.behrend@lohnkonzepte.de</a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-5 w-5 text-orange-600" />
                    <h3 className="text-lg font-semibold text-orange-800">Online Terminvereinbarung</h3>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div 
                      className="calendly-inline-widget" 
                      data-url="https://calendly.com/lohnkonzepte_behrend/advita-card-dienstberatung-vor-ort" 
                      style={{minWidth: '320px', height: '700px'}}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-orange-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Lohnkonzepte GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}