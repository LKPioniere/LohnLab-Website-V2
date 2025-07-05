import { Check } from "lucide-react";

export default function ProductFeatures() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">Was ist das LohnLab Cockpit?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Durch clevere Gehaltsbestandteile wie Sachbezug, Essenszuschuss oder Fahrtkostenzuschuss 
            <span className="text-[var(--lohn-secondary)] font-semibold"> sparen Ihre Mandanten Lohnnebenkosten</span>, 
            deren Mitarbeitenden freuen sich über mehr Netto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern payroll calculation dashboard" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-6">Lohnoptimierung als Zusatzleistung</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mt-1">
                  <Check className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Neue Einnahmequelle</h4>
                  <p className="text-gray-600">Zusätzliche Beratungserlöse ohne Mehraufwand.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mt-1">
                  <Check className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Wettbewerbsvorteil</h4>
                  <p className="text-gray-600">Bieten Sie Mandanten einen echten Mehrwert.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mt-1">
                  <Check className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Mandantenbindung</h4>
                  <p className="text-gray-600">Werden Sie zur Anlaufstelle für moderne Lohnberatung.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mt-1">
                  <Check className="text-white text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Digitalisierung</h4>
                  <p className="text-gray-600">Die Konkurrenz schläft nicht - bieten Sie digitale Lösungen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
