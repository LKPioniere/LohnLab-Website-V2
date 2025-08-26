import { Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { type Reference, REFERENCE_THEMES } from "@/constants/references";

interface ReferenceCardProps {
  reference: Reference;
}

/**
 * Einheitliche Referenz-Karte Komponente
 * Modulares Design mit verschiedenen Farbthemen - Updated Styling
 */
export default function ReferenceCard({ reference }: ReferenceCardProps) {
  const theme = REFERENCE_THEMES[reference.themeColor as keyof typeof REFERENCE_THEMES];

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 h-full">
      {/* Header mit Theme-Farbe */}
      <div className={`h-2 bg-gradient-to-r ${theme.gradient}`}></div>
      
      {/* Main Content */}
      <div className="p-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Profile Section */}
          <div className="flex-shrink-0 text-center lg:text-left">
            <div className="relative inline-block mb-4">
              <img 
                src={reference.image} 
                alt={reference.name}
                className="w-24 h-24 lg:w-28 lg:h-28 rounded-full object-cover shadow-md border-4 border-white"
              />
              {/* Colored ring around image */}
              <div className={`absolute inset-0 rounded-full border-2 ${theme.accent.replace('text-', 'border-')} opacity-50`}></div>
            </div>
            
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
              {reference.name}
            </h3>
            <p className={`text-lg font-semibold mb-2 ${theme.accent}`}>
              {reference.title}
            </p>
            <p className="text-gray-600 text-sm lg:text-base font-medium">
              {reference.company}
            </p>
            
            {/* Industry Badge */}
            <div className="mt-3">
              <Badge variant="secondary" className={`${theme.secondary} ${theme.accent} border-0`}>
                {reference.industry}
              </Badge>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="flex-1 space-y-6">
            
            {/* Quote - Updated with consistent styling */}
            <div className={`${theme.secondary} p-6 rounded-xl border-l-4 ${theme.primary.replace('bg-', 'border-')}`}>
              <div className="flex items-start space-x-3">
                <Quote className={`w-6 h-6 ${theme.accent} mt-1 flex-shrink-0`} />
                <blockquote className="text-gray-800 leading-relaxed font-medium text-base lg:text-lg">
                  „{reference.quote}"
                </blockquote>
              </div>
            </div>
            
            {/* Tags */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Wichtige Aspekte
              </h4>
              <div className="flex flex-wrap gap-2">
                {reference.tags.map((tag, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className={`${theme.tag} text-xs px-3 py-1 font-medium border-0`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Accent */}
      <div className={`h-1 bg-gradient-to-r ${theme.gradient} opacity-60`}></div>
    </div>
  );
}
