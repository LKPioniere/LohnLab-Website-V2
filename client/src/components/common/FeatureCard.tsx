import { Link } from "wouter";
import { ChevronRight, TrendingUp, PlusCircle, Calculator, Crown } from "lucide-react";

interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
  link: string;
}

const featureIcons = {
  'lohnoptimierung': Crown,
  'lohnerhoehung': TrendingUp,
  'neueinstellungen': PlusCircle
} as const;

/**
 * Feature-Karte Komponente
 */
export default function FeatureCard({ id, title, description, link }: FeatureCardProps) {
  const Icon = featureIcons[id as keyof typeof featureIcons] || Calculator;
  
  // Define unique colors and gradients for each feature (matching their hero sections)
  const getFeatureStyles = (featureId: string) => {
    switch(featureId) {
      case 'lohnoptimierung':
        return {
          background: 'bg-gradient-to-br from-[var(--lohn-purple)] via-purple-600 to-[var(--lohn-primary)]',
          iconBg: 'bg-yellow-400/20',
          iconColor: 'text-yellow-400',
          titleColor: 'text-white',
          textColor: 'text-purple-100',
          linkColor: 'text-white hover:text-yellow-200',
          border: 'border-[var(--lohn-purple)]/20'
        };
      case 'lohnerhoehung':
        return {
          background: 'bg-gradient-to-br from-[var(--lohn-primary)] via-[var(--lohn-secondary)] to-[var(--lohn-purple)]',
          iconBg: 'bg-white/20',
          iconColor: 'text-white',
          titleColor: 'text-white',
          textColor: 'text-blue-100',
          linkColor: 'text-white hover:text-blue-200',
          border: 'border-[var(--lohn-primary)]/20'
        };
      case 'neueinstellungen':
        return {
          background: 'bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-teal)]',
          iconBg: 'bg-white/20',
          iconColor: 'text-white',
          titleColor: 'text-white',
          textColor: 'text-blue-100',
          linkColor: 'text-white hover:text-blue-200',
          border: 'border-[var(--lohn-teal)]/20'
        };
      default:
        return {
          background: 'bg-white',
          iconBg: 'bg-[var(--lohn-teal)]/10',
          iconColor: 'text-[var(--lohn-teal)]',
          titleColor: 'text-[var(--lohn-primary)]',
          textColor: 'text-gray-600',
          linkColor: 'text-[var(--lohn-primary)] hover:text-[var(--lohn-teal)]',
          border: 'border-gray-100'
        };
    }
  };

  const styles = getFeatureStyles(id);
  
  return (
    <div className={`group ${styles.background} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border ${styles.border} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
      
      {/* Icon */}
      <div className={`w-16 h-16 ${styles.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`${styles.iconColor} text-2xl`} />
      </div>
      
      {/* Content */}
      <h3 className={`text-2xl font-bold ${styles.titleColor} mb-4 group-hover:scale-105 transition-transform duration-300`}>
        {title}
      </h3>
      <p className={`${styles.textColor} mb-6 leading-relaxed`}>
        {description}
      </p>
      
      {/* Link */}
      <Link 
        href={link}
        className={`inline-flex items-center ${styles.linkColor} transition-all duration-300 font-semibold group-hover:translate-x-2`}
      >
        Mehr erfahren <ChevronRight className="ml-1 text-base group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
      
      {/* Decorative accent */}
      <div className="absolute bottom-4 right-4 w-2 h-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}