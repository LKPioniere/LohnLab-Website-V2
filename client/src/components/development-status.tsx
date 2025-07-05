import { Check, FlaskConical, Rocket } from "lucide-react";

export default function DevelopmentStatus() {
  return (
    <section id="roadmap" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--lohn-primary)] mb-4">Transparenter Fortschritt</h2>
          <p className="text-gray-600 text-lg">So entwickelt sich Ihr digitales Lohnoptimierungs-Werkzeug</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute top-8 left-0 w-full h-1 bg-gray-200 rounded-full">
              <div className="h-full bg-gradient-to-r from-[var(--lohn-teal)] to-[var(--lohn-secondary)] rounded-full" style={{width: '60%'}}></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Check className="text-white text-xl" />
                </div>
                <h3 className="font-semibold text-[var(--lohn-primary)] mb-2">Entwicklung</h3>
                <p className="text-gray-600 text-sm">Grundfunktionen implementiert</p>
                <p className="text-[var(--lohn-teal)] font-medium text-sm mt-1">✓ Abgeschlossen</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--lohn-secondary)] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <FlaskConical className="text-white text-xl" />
                </div>
                <h3 className="font-semibold text-[var(--lohn-primary)] mb-2">MVP Testing</h3>
                <p className="text-gray-600 text-sm">Externe Tests mit Partnerkanzlei</p>
                <p className="text-[var(--lohn-secondary)] font-medium text-sm mt-1">04. August 2024</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <Rocket className="text-gray-500 text-xl" />
                </div>
                <h3 className="font-semibold text-gray-500 mb-2">Offizieller Rollout</h3>
                <p className="text-gray-500 text-sm">Markteinführung für alle Kunden</p>
                <p className="text-gray-500 font-medium text-sm mt-1">November 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
