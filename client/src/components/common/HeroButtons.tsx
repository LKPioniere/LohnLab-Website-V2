import { Button } from "@/components/ui/button";
import { Link } from "wouter";

/**
 * Hero-Bereich Buttons
 */
export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Link href="/kontakt">
        <Button 
          className="bg-[var(--lohn-teal)] text-[var(--lohn-primary)] hover:bg-white transition-colors rounded-full px-8 py-4 font-semibold"
        >
          Jetzt Cockpit testen
        </Button>
      </Link>
    </div>
  );
}