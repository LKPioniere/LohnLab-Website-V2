import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Info, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import lohnlabLogo from "@/assets/lohnlab-logo-white.png";

export default function Internetzuschuss() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-[var(--lohn-primary)] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={lohnlabLogo} alt="LohnLab Logo" className="h-8" />
              <h1 className="text-xl font-bold">LohnLab Cockpit</h1>
            </div>
            <Link href="/advita">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Zurück
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Content */}
        <Card className="border-blue-200 bg-white shadow-lg mb-8">
          <CardHeader className="bg-[var(--lohn-primary)] text-white">
            <CardTitle className="text-2xl">Internetzuschuss</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="prose max-w-none">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Was ist der Internetzuschuss?</h3>
              <p className="text-gray-700 mb-6">
                Der Internetzuschuss ist ein freiwilliger steuerbegünstigter Zuschuss des Arbeitgebers, 
                der Mitarbeitenden für die Nutzung ihres privaten Internetanschlusses zur Verfügung gestellt 
                werden kann. Ziel ist es, private Ausgaben für Internet und internetfähige Geräte teilweise 
                zu erstatten – pauschal, unkompliziert und ohne Abzüge.
              </p>

              <h3 className="text-lg font-semibold text-blue-900 mb-4">Wie funktioniert das genau?</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Der Zuschuss beträgt <strong>pauschal 50 € monatlich</strong>.</li>
                <li>• Er wird <strong>pauschalversteuert vom Arbeitgeber</strong>, ist also <strong>für Mitarbeitende vollständig sozialabgaben- und steuerfrei</strong>.</li>
                <li>• Die Auszahlung erfolgt als <strong>Nettozuwendung zusätzlich zum Gehalt</strong>.</li>
                <li>• <strong>Es gibt keinerlei Nachweispflicht</strong> über Rechnungen oder Einzelbelege – auch nicht bei einer Lohnsteuerprüfung.</li>
              </ul>

              <h3 className="text-lg font-semibold text-blue-900 mb-4">Warum muss trotzdem etwas unterschrieben werden?</h3>
              <p className="text-gray-700 mb-4">
                Damit der Arbeitgeber die Pauschale rechtssicher gewähren darf, verlangt das Finanzamt eine 
                <strong> schriftliche Bestätigung durch den Mitarbeitenden</strong>. Diese sogenannte „Internetbestätigung" enthält:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Die Erklärung, dass <strong>monatlich Kosten für Internet und damit verbundene Geräte</strong> entstehen (z. B. WLAN-Router, Modem, Laptop, Smartphone, Software).</li>
                <li>• Eine <strong>Unterschrift</strong>, mit der die Richtigkeit der Angaben bestätigt wird.</li>
              </ul>

              <Alert className="border-blue-200 bg-blue-50 mb-6">
                <Info className="h-4 w-4" />
                <AlertDescription className="text-blue-800">
                  <strong>Wichtig:</strong> Es reicht eine einfache Unterschrift – keine konkreten Belege oder Rechnungen sind nötig. 
                  Die Finanzverwaltung akzeptiert diese Praxis im Rahmen der gesetzlichen Regelung nach § 40 Abs. 2 Nr. 5 EStG.
                </AlertDescription>
              </Alert>

              <h3 className="text-lg font-semibold text-blue-900 mb-4">Für welche Kosten gilt der Zuschuss?</h3>
              <p className="text-gray-700 mb-3">Der Zuschuss deckt zum Beispiel folgende private Kosten ab:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Monatliche Grundgebühren für Internetanbieter</li>
                <li>• Kosten für Flatrates oder volumenbasierte Datenverbindungen</li>
                <li>• Technische Ausstattung (z. B. Router, Laptop, Handy)</li>
                <li>• Wartung, Verschleiß und Softwareupdates</li>
              </ul>

              <h3 className="text-lg font-semibold text-blue-900 mb-4">Wer bekommt den Zuschuss?</h3>
              <p className="text-gray-700 mb-6">
                Grundsätzlich <strong>kann jeder Mitarbeitende den Zuschuss erhalten</strong>, sofern die Internetbestätigung 
                unterzeichnet wird. Der Arbeitgeber entscheidet, <strong>ob und wann er diesen Baustein im Rahmen der 
                Zusatzvereinbarung gewährt</strong>. In der Praxis wird der Zuschuss aber oft pauschal allen Mitarbeitenden 
                angeboten, um die Nutzung zu vereinfachen.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="border-blue-200 bg-white shadow-lg">
          <CardHeader className="bg-blue-100">
            <CardTitle className="text-xl text-blue-900 flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Häufige Fragen
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Muss ich Internet beruflich nutzen?</h4>
                <p className="text-gray-700">
                  Nein. Die Nutzung kann rein privat erfolgen. Entscheidend ist nur, dass <strong>Kosten entstehen</strong>.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Was passiert, wenn ich weniger als 50 € zahle?</h4>
                <p className="text-gray-700">
                  Kein Problem. Die Pauschale gilt bis zu 50 €, unabhängig vom tatsächlichen Betrag. 
                  Es genügt, dass überhaupt Aufwendungen entstehen.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Muss ich etwas nachreichen, wenn das Finanzamt nachfragt?</h4>
                <p className="text-gray-700">
                  Nein. Die unterschriebene Bestätigung reicht aus.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--lohn-primary)] text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 LohnLab GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}