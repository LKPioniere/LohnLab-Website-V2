import { Button } from "@/components/ui/button";
import datevLogo from "@assets/images-removebg-preview_1751751686149.png";
import cockpitScreenshot from "@assets/Lohnlab - Pitch Unternehmen_1751752770144.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-[var(--lohn-primary)] via-[var(--lohn-secondary)] to-[var(--lohn-purple)] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-[var(--lohn-teal)]">LohnLab Cockpit</span>  
              <br />Moderne Lohnoptimierung.
            </h1>
            <p className="text-xl mb-6 text-blue-100">
              Ob Lohnerhöhung, Neueinstellung oder Mitarbeiterbindung – das Cockpit vereinfacht die Umsetzung, 
              spart Lohnkosten und schafft Klarheit für Unternehmen und Steuerberater.
            </p>
            <p className="text-lg mb-8 text-[var(--lohn-teal)] font-semibold">
              Effizient. Verständlich. Rechtssicher.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('kontakt')}
                className="bg-[var(--lohn-teal)] text-[var(--lohn-primary)] hover:bg-white transition-colors rounded-full px-8 py-4 font-semibold"
              >
                Jetzt Cockpit testen
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('features')}
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[var(--lohn-primary)] transition-colors rounded-full px-8 py-4 font-semibold"
              >
                Funktionen entdecken
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Zufriedenes Team bei der Arbeit - moderne Lohnoptimierung mit LohnLab" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-xl">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1">
                  <img src={datevLogo} alt="DATEV Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-[var(--lohn-primary)] font-semibold text-sm">DATEV Integration</p>
                  <p className="text-gray-600 text-xs">Stamm- und Bewegungsdaten</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
