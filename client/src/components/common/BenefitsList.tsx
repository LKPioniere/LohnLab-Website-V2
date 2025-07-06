import { Check, Crown } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsListProps {
  benefits: Benefit[];
  isHiringBenefits?: boolean;
}

/**
 * Vorteils-Liste Komponente
 */
export default function BenefitsList({ benefits, isHiringBenefits = false }: BenefitsListProps) {
  return (
    <div className="space-y-4">
      {benefits.map((benefit, index) => {
        const isLastHiringBenefit = isHiringBenefits && index === benefits.length - 1;
        const Icon = isLastHiringBenefit ? Crown : Check;
        const iconBgColor = isLastHiringBenefit ? 'bg-[var(--lohn-purple)]' : 'bg-[var(--lohn-teal)]';
        const iconColor = isLastHiringBenefit ? 'text-yellow-400' : 'text-white';
        
        return (
          <div key={index} className="flex items-start space-x-3">
            <div className={`w-6 h-6 ${iconBgColor} rounded-full flex items-center justify-center mt-1`}>
              <Icon className={`${iconColor} text-sm`} />
            </div>
            <div>
              <h4 className="font-semibold text-[var(--lohn-primary)]">{benefit.title}</h4>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}