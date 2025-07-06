import { Check, LucideIcon } from "lucide-react";

interface AudienceCardProps {
  title: string;
  description: string;
  benefits: readonly string[];
  icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
}

/**
 * Zielgruppen-Karte Komponente
 */
export default function AudienceCard({ 
  title, 
  description, 
  benefits, 
  icon: Icon,
  iconBgColor,
  iconColor
}: AudienceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="flex items-center mb-6">
        <div className={`w-16 h-16 ${iconBgColor} rounded-2xl flex items-center justify-center mr-4`}>
          <Icon className={`${iconColor} text-2xl`} />
        </div>
        <h3 className="text-2xl font-bold text-[var(--lohn-primary)]">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Check className="text-[var(--lohn-teal)] w-5 h-5" />
            <span className="text-gray-700">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}