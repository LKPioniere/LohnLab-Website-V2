import { Star } from "lucide-react";
import { EARLY_BIRD_BENEFITS } from "@/constants/early-bird";

/**
 * Komponente für Early Bird Vorteile
 */
export default function EarlyBirdBenefits() {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
      <h4 className="text-lg font-semibold mb-4">Early Bird Vorteile</h4>
      <ul className="space-y-2 text-blue-100">
        {EARLY_BIRD_BENEFITS.map((benefit) => (
          <li key={benefit.id} className="flex items-center space-x-2">
            <Star className="text-[var(--lohn-teal)] text-sm" />
            <span>{benefit.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}