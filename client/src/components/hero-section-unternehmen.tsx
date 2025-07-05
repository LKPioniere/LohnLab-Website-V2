import { Button } from "@/components/ui/button";

export default function HeroSectionUnternehmen() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-[var(--lohn-teal)] via-[var(--lohn-secondary)] to-[var(--lohn-purple)] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Mehr Netto für Ihre Mitarbeiter. 
              <span className="text-white"> Weniger Kosten für Sie.</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Das LohnLab Cockpit optimiert Ihre Lohnkosten und steigert die Zufriedenheit Ihrer Mitarbeiter - 
              durch clevere Gehaltsoptimierung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('kontakt')}
                className="bg-white text-[var(--lohn-primary)] hover:bg-gray-100 transition-colors rounded-full px-8 py-4 font-semibold"
              >
                Kostenlose Demo
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('features')}
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[var(--lohn-primary)] transition-colors rounded-full px-8 py-4 font-semibold"
              >
                Vorteile entdecken
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Happy employees in modern office" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center">
                  <span className="text-[var(--lohn-primary)] text-xl font-bold">€</span>
                </div>
                <div>
                  <p className="text-[var(--lohn-primary)] font-semibold">Kostenoptimierung</p>
                  <p className="text-gray-600 text-sm">Bis zu 15% Ersparnis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}