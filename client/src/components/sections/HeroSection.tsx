import HeroButtons from "@/components/common/HeroButtons";
import datevLogo from "@/assets/datev-logo.png";

/**
 * Hero-Sektion Komponente
 */
export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[var(--lohn-primary)] via-[var(--lohn-secondary)] to-[var(--lohn-purple)] text-white py-24 pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-[var(--lohn-teal)]">LohnLab Cockpit</span>  
              <br />Jetzt Kosten sparen.
            </h1>
            <p className="text-xl mb-6 text-blue-100">
              Als Unternehmer stehen Sie unter Kostendruck. Unser Cockpit hilft Ihnen, 
              bei Lohnerhöhungen, Neueinstellungen und Mitarbeiterbindung systematisch Kosten zu sparen – 
              rechtssicher und transparent.
            </p>
            <p className="text-lg mb-8 text-[var(--lohn-teal)] font-semibold">
              Bis zu 50% Lohnkosten sparen. Effizient. Rechtssicher.
            </p>
            <HeroButtons />
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