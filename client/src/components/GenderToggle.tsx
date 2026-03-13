import { Asterisk } from "lucide-react";
import { useGender, setGenderEnabled } from "@/lib/gender";
import { useToast } from "@/hooks/use-toast";

export default function GenderToggle() {
  const gendered = useGender();
  const { toast } = useToast();

  const handleToggle = () => {
    const next = !gendered;
    setGenderEnabled(next);
    toast({
      description: next
        ? "Gendergerechte Sprache aktiviert"
        : "Generisches Maskulinum aktiviert",
      duration: 2000,
    });
  };

  return (
    <button
      onClick={handleToggle}
      className="group relative w-9 h-9 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors text-blue-100 hover:text-white"
      aria-label={gendered ? "Gendergerechte Sprache deaktivieren" : "Gendergerechte Sprache aktivieren"}
    >
      <span className="relative">
        <Asterisk className="w-5 h-5" />
        {!gendered && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="block w-[26px] h-[2.5px] bg-current rotate-45 rounded-full" />
          </span>
        )}
      </span>
      <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md bg-gray-900 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
        {gendered ? "Gendergerechte Sprache an" : "Gendergerechte Sprache aus"}
      </span>
    </button>
  );
}
