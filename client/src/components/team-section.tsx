import { Mail } from "lucide-react";

export default function TeamSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">Über uns</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fachkräftemangel und Mitarbeiterbindung beschäftigt aktuell sehr viele Firmen.
            Die LohnLab unterstützt Unternehmen in Zusammenarbeit mit ihren Steuerberatern dabei 
            hohe Mehrwerte für Mitarbeiter zu generieren und zu nutzen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Michael Schmitt */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-[var(--lohn-primary)] rounded-full flex items-center justify-center mr-6">
                <span className="text-white text-2xl font-bold">MS</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--lohn-primary)]">Michael Schmitt</h3>
                <p className="text-gray-600 font-medium">Geschäftsführer</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Michael Schmitt übernahm nach seinem zweiten Jura-Examen die Versicherungsagentur seines Vaters 
              und entwickelte daraus die heutige Schmitt & Hartmann OHG. Das Unternehmen spezialisiert sich auf 
              Mitarbeiterbindung/-gewinnung und die Zusammenarbeit mit Steuerberatern. 2015 entdeckte Michael die 
              Lohnoptimierung und gründete 2019 die LohnLab GmbH. Privat lebt Michael mit seiner Familie in 
              Frankfurt und bezeichnet sich selbst gerne als „Gewaltoptimist".
            </p>
          </div>

          {/* Holger Plümer */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-[var(--lohn-secondary)] rounded-full flex items-center justify-center mr-6">
                <span className="text-white text-2xl font-bold">HP</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--lohn-primary)]">Holger Plümer</h3>
                <p className="text-gray-600 font-medium">Geschäftsführer</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Holger Plümer ist gelernter Bankkaufmann und studierter Betriebswirt. Nach Stationen in der 
              Finanzdienstleistungsbranche sowie eigenen Unternehmungen ist er seit 2022 Geschäftsführer bei 
              der LohnLab GmbH, wo er den strategisch-technischen Part verantwortet. Holger ist verheiratet, 
              hat drei Kinder und betreibt leidenschaftlich gern den Ninja Sport.
            </p>
          </div>
        </div>

        {/* Service Teams */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[var(--lohn-teal)] to-[var(--lohn-secondary)] rounded-2xl p-8 text-white">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <Mail className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold">Team Vertrieb</h3>
            </div>
            <p className="text-blue-100 mb-6">
              Sie haben eine Anfrage an unseren Vertrieb? Nehmen Sie gerne Kontakt auf oder buchen Sie 
              direkt einen Termin über unser Kontaktformular!
            </p>
            <a 
              href="#kontakt" 
              className="inline-block bg-white text-[var(--lohn-primary)] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('kontakt');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Kontakt aufnehmen
            </a>
          </div>

          <div className="bg-gradient-to-br from-[var(--lohn-purple)] to-[var(--lohn-primary)] rounded-2xl p-8 text-white">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <Mail className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold">Team Kundenservice</h3>
            </div>
            <p className="text-blue-100 mb-6">
              Sie sind bereits Kunde und haben eine Anfrage an unseren Kundenservice? Melden Sie sich hier, 
              wir helfen Ihnen gerne weiter!
            </p>
            <a 
              href="mailto:service@lohnlab.de" 
              className="inline-block bg-white text-[var(--lohn-primary)] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Service kontaktieren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}