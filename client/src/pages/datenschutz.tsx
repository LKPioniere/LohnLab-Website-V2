import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[var(--lohn-primary)] mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-[var(--lohn-primary)] mb-4">1. Einleitung</h2>
            <p className="mb-4">
              Im Folgenden informieren wir über die Verarbeitung personenbezogener Daten bei der Nutzung
            </p>
            <ul className="mb-6 list-disc list-inside">
              <li>unserer Website www.lohnlab.de</li>
              <li>unserer Profile in Sozialen Medien.</li>
            </ul>
            <p className="mb-8">
              Personenbezogene Daten sind alle Daten, die auf eine konkrete natürliche Person beziehbar sind, 
              z. B. ihr Name oder ihre IP-Adresse.
            </p>

            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-3">1.1. Kontaktdaten</h3>
            <p className="mb-4">
              Verantwortlicher gem. Art. 4 Abs. 7 EU-Datenschutz-Grundverordnung (DSGVO) ist 
              LohnLab GmbH, Hauptstraße 20, 63755 Alzenau, Deutschland, E-Mail: service@lohnlab.de. 
              Gesetzlich vertreten werden wir durch Michael Schmitt, Holger Plümer.
            </p>
            <p className="mb-8">
              Unser Datenschutzbeauftragter ist über die heyData GmbH, Schützenstraße 5, 10117 Berlin, 
              www.heydata.eu, E-Mail: datenschutz@heydata.eu erreichbar.
            </p>

            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-3">1.2. Umfang der Datenverarbeitung, Verarbeitungszwecke und Rechtsgrundlagen</h3>
            <p className="mb-4">
              Den Umfang der Verarbeitung der Daten, Verarbeitungszwecke und Rechtsgrundlagen führen wir 
              im Detail weiter unten aus. Als Rechtsgrundlage für eine Datenverarbeitung kommen grundsätzlich 
              die folgenden in Betracht:
            </p>
            <ul className="mb-8 list-disc list-inside space-y-2">
              <li>Art. 6 Abs. 1 S. 1 lit. a DSGVO dient uns als Rechtsgrundlage für Verarbeitungsvorgänge, 
                  für die wir eine Einwilligung einholen.</li>
              <li>Art. 6 Abs. 1 S. 1 lit. b DSGVO ist Rechtsgrundlage, soweit die Verarbeitung 
                  personenbezogener Daten zur Erfüllung eines Vertrages erforderlich ist.</li>
              <li>Art. 6 Abs. 1 S. 1 lit. c DSGVO findet Anwendung, wenn wir mit der Verarbeitung 
                  personenbezogener Daten eine rechtliche Verpflichtung erfüllen.</li>
              <li>Art. 6 Abs. 1 S. 1 lit. f DSGVO dient als Rechtsgrundlage, wenn wir uns zur Verarbeitung 
                  personenbezogener Daten auf berechtigte Interessen berufen können.</li>
            </ul>

            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-3">1.3. Datenverarbeitung außerhalb des EWR</h3>
            <p className="mb-8">
              Soweit wir Daten an Dienstleister oder sonstige Dritte außerhalb des EWR übermitteln, 
              garantieren Angemessenheitsbeschlüsse der EU-Kommission nach Art. 45 Ab. 3 DSGVO die 
              Sicherheit der Daten bei der Weitergabe, soweit diese vorhanden sind.
            </p>

            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-3">1.4. Speicherdauer</h3>
            <p className="mb-8">
              Sofern nicht im Rahmen dieser Datenschutzerklärung ausdrücklich angegeben, werden die bei 
              uns gespeicherten Daten gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich 
              sind und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>

            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-3">1.5. Rechte der Betroffenen</h3>
            <p className="mb-4">
              Betroffene haben gegenüber uns folgende Rechte hinsichtlich der sie betreffenden 
              personenbezogenen Daten:
            </p>
            <ul className="mb-6 list-disc list-inside space-y-1">
              <li>Recht auf Auskunft</li>
              <li>Recht auf Berichtigung oder Löschung</li>
              <li>Recht auf Einschränkung der Verarbeitung</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
              <li>Recht, eine erteilte Einwilligung jederzeit zu widerrufen</li>
            </ul>
            <p className="mb-8">
              Betroffene haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die 
              Verarbeitung ihrer personenbezogenen Daten zu beschweren. Kontaktdaten der 
              Datenschutz-Aufsichtsbehörden sind unter 
              <a href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html" 
                 className="text-[var(--lohn-primary)] hover:underline"> 
                https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html
              </a> abrufbar.
            </p>

            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-3">1.6. Pflicht zur Bereitstellung von Daten</h3>
            <p className="mb-8">
              Kunden, Interessenten oder Dritte müssen uns im Rahmen einer Geschäftsbeziehung oder 
              sonstigen Beziehung nur diejenigen personenbezogenen Daten bereitstellen, die für die 
              Begründung, Durchführung und Beendigung der Geschäftsbeziehung erforderlich sind.
            </p>

            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-3">1.7. Keine automatische Entscheidungsfindung im Einzelfall</h3>
            <p className="mb-8">
              Zur Begründung und Durchführung einer Geschäftsbeziehung nutzen wir grundsätzlich keine 
              vollautomatisierte Entscheidungsfindung gemäß Artikel 22 DSGVO.
            </p>

            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-3">1.8. Kontaktaufnahme</h3>
            <p className="mb-8">
              Bei der Kontaktaufnahme mit uns, z.B. per E-Mail oder Telefon, werden die uns mitgeteilten 
              Daten (z.B. Namen und E-Mail-Adressen) von uns gespeichert, um Fragen zu beantworten. 
              Rechtsgrundlage für die Verarbeitung ist unser berechtigtes Interesse (Art. 6 Abs. 1 S. 1 lit. f DSGVO).
            </p>

            <h2 className="text-2xl font-bold text-[var(--lohn-primary)] mb-4">2. Newsletter</h2>
            <p className="mb-8">
              Wir behalten uns vor, Kunden, die bereits Dienstleistungen von uns in Anspruch genommen haben 
              oder Waren gekauft haben, von Zeit zu Zeit per E-Mail über unsere Angebote zu informieren, 
              falls sie dem nicht widersprochen haben. Rechtsgrundlage für diese Datenverarbeitung ist 
              Art. 6 Abs. 1 S. 1 lit. f DSGVO.
            </p>

            <h2 className="text-2xl font-bold text-[var(--lohn-primary)] mb-4">3. Datenverarbeitung auf unserer Website</h2>
            
            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-3">3.1. Hinweis für Websitebesucher aus Deutschland</h3>
            <p className="mb-8">
              Unsere Website speichert Informationen in der Endeinrichtung von Websitebesuchern (z.B. Cookies) 
              oder greift auf Informationen zu, die bereits in der Endeinrichtung gespeichert sind. Diese 
              Speicherung erfolgt auf Grundlage der Einwilligung der Websitebesucher (§ 25 Abs. 1 TDDDG).
            </p>

            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-3">3.2. Informatorische Nutzung der Website</h3>
            <p className="mb-4">
              Bei der informatorischen Nutzung der Website erheben wir folgende personenbezogene Daten:
            </p>
            <ul className="mb-6 list-disc list-inside space-y-1">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
              <li>Inhalt der Anfrage (konkrete Seite)</li>
              <li>Zugriffsstatus/HTTP-Statuscode</li>
              <li>jeweils übertragene Datenmenge</li>
              <li>Website, von der die Anfrage kommt</li>
              <li>Browser</li>
              <li>Betriebssystem und dessen Oberfläche</li>
              <li>Sprache und Version der Browsersoftware</li>
            </ul>
            <p className="mb-8">
              Diese Daten werden außerdem in Logfiles gespeichert. Sie werden gelöscht, wenn ihre 
              Speicherung nicht mehr erforderlich ist, spätestens nach 14 Tagen.
            </p>

            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-3">3.3. Webhosting und Bereitstellung der Website</h3>
            <p className="mb-8">
              Unsere Website hostet Goneo. Anbieter ist goneo Internet GmbH, Dresdener Straße 18, 32423 Minden. 
              Der Anbieter verarbeitet dabei die über die Website übermittelten personenbezogenen Daten in der EU. 
              Weitere Informationen finden sich in der Datenschutzerklärung des Anbieters unter 
              <a href="https://www.goneo.de/hilfe_kontakt/datenschutz.html" 
                 className="text-[var(--lohn-primary)] hover:underline">
                https://www.goneo.de/hilfe_kontakt/datenschutz.html
              </a>.
            </p>

            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-3">3.4. Kontaktformular</h3>
            <p className="mb-8">
              Bei Kontaktaufnahme über das Kontaktformular auf unserer Website speichern wir die dort 
              abgefragten Daten und den Inhalt der Nachricht. Rechtsgrundlage für die Verarbeitung ist 
              unser berechtigtes Interesse, an uns gerichtete Anfragen zu beantworten (Art. 6 Abs. 1 S. 1 lit. f DSGVO).
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}