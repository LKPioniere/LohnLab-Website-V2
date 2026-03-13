import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/utils/scroll";
import { useGender } from "@/lib/gender";

export default function LohnerhoehungHeroSection() {
  const gendered = useGender();
  return (
    <section className="bg-linear-to-br from-lohn-primary via-lohn-secondary to-lohn-purple text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Lohnerhöhungen, die dir{" "}
            <span className="text-yellow-300">echte</span>
            <br />
            <span className="text-green-300">Kosten sparen</span>
          </h1>
          <p className="text-xl mb-12 max-w-4xl mx-auto text-blue-100 leading-relaxed">
            In der aktuellen Wirtschaftslage stehst du vor explodierenden
            Kosten und dem Kampf um Fachkräfte. Wir haben verstanden:{" "}
            <strong className="text-white">
              Der Fokus liegt auf der Bindung bestehender {gendered ? "Mitarbeiter*innen" : "Mitarbeiter"} bei
              minimierten Kosten.
            </strong>
            Unsere Lösung ermöglicht dir Lohnerhöhungen mit bis zu 50%
            Kostenersparnis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              onClick={() => scrollToSection("mitarbeiter-first")}
              className="bg-lohn-teal text-white hover:bg-lohn-teal/90 font-semibold px-12 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Systematische Kostenersparnis
            </Button>
            <Button
              onClick={() => scrollToSection("kontakt")}
              variant="outline"
              className="border-white text-lohn-primary bg-white hover:bg-gray-100 font-semibold px-12 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Kostenlose Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
