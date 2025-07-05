import { Button } from "@/components/ui/button";
import datevLogo from "@assets/images-removebg-preview_1751751686149.png";

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
              <span className="text-[var(--lohn-teal)]">LohnLab Cockpit.</span> Lohnoptimierung 
              <br />so einfach wie nie zuvor.
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Steigern Sie die Mitarbeiterzufriedenheit um bis zu 50% - bei gleichzeitiger Kosteneinsparung. 
              Mit präzisen Berechnungen auf Profi-Niveau verwandeln Sie Lohnerhöhungen in Win-Win-Situationen 
              für Unternehmen und Mitarbeiter.
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
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Successful team celebrating financial growth and optimization results" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-3">
                  <img src={datevLogo} alt="DATEV Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-[var(--lohn-primary)] font-semibold">DATEV Integration</p>
                  <p className="text-gray-600 text-sm">Stamm- und Bewegungsdaten</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
