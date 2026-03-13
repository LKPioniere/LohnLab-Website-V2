import { Star } from "lucide-react";
import { getEarlyBirdBenefits } from "@/constants/early-bird";
import { useGender } from "@/lib/gender";

/**
 * Komponente für Early Bird Vorteile
 */
export default function EarlyBirdBenefits() {
  const gendered = useGender();
  const EARLY_BIRD_BENEFITS = getEarlyBirdBenefits(gendered);
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
      <h4 className="text-lg font-semibold mb-4">Early Bird Vorteile</h4>
      <ul className="space-y-2 text-blue-100">
        {EARLY_BIRD_BENEFITS.map((benefit) => (
          <li key={benefit.id} className="flex items-center space-x-2">
            <Star className="text-lohn-teal text-sm" />
            <span>{benefit.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}