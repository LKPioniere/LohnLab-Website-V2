import { Link } from "wouter";
import { ChevronRight, TrendingUp, PlusCircle, Calculator } from "lucide-react";

interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
  link: string;
}

const featureIcons = {
  'lohnoptimierung': Calculator,
  'lohnerhoehung': TrendingUp,
  'neueinstellungen': PlusCircle
} as const;

/**
 * Feature-Karte Komponente
 */
export default function FeatureCard({ id, title, description, link }: FeatureCardProps) {
  const Icon = featureIcons[id as keyof typeof featureIcons] || Calculator;
  
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
      <Icon className="text-[var(--lohn-teal)] mb-4 text-3xl" />
      <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link 
        href={link}
        className="inline-flex items-center text-[var(--lohn-primary)] hover:text-[var(--lohn-teal)] transition-colors font-semibold"
      >
        Mehr erfahren <ChevronRight className="ml-1 text-base" />
      </Link>
    </div>
  );
}