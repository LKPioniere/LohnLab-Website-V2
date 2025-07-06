import { Check } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsListProps {
  benefits: Benefit[];
}

/**
 * Vorteils-Liste Komponente
 */
export default function BenefitsList({ benefits }: BenefitsListProps) {
  return (
    <div className="space-y-4">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex items-start space-x-3">
          <div className="w-6 h-6 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mt-1">
            <Check className="text-white text-sm" />
          </div>
          <div>
            <h4 className="font-semibold text-[var(--lohn-primary)]">{benefit.title}</h4>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}