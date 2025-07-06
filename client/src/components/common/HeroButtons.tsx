import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/utils/scroll";

/**
 * Hero-Bereich Buttons
 */
export default function HeroButtons() {
  return (
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
  );
}