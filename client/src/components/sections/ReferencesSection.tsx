import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

interface Reference {
  id: string;
  name: string;
  title: string;
  company: string;
  companies?: string[];
  quote: string;
  image: string;
  industry: string;
  highlight: string;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
}

const references: Reference[] = [
  {
    id: "christopher-bausch",
    name: "Christopher Bausch",
    title: "Kinobetreiber",
    company: "Casino Aschaffenburg & Arthouse Kinos Frankfurt",
    companies: ["Casino Aschaffenburg", "Arthouse Kinos Frankfurt"],
    quote: "Für uns als kleiner Betrieb ist individuelle Betreuung wichtig. Aus diesem Grund schätzen wir die Beratung durch LohnLab.",
    image: "https://www.lohnlab.de/wp-content/uploads/2024/03/person-v5.s3.c519x0x2124x2124.w220.webp",
    industry: "Entertainment",
    highlight: "Individuelle Betreuung",
    backgroundColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
    textColor: "text-purple-900",
    accentColor: "text-purple-600"
  }
];

/**
 * Referenzen-Sektion Komponente
 */
export default function ReferencesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReference = () => {
    setCurrentIndex((prev) => (prev + 1) % references.length);
  };

  const prevReference = () => {
    setCurrentIndex((prev) => (prev - 1 + references.length) % references.length);
  };

  const currentRef = references[currentIndex];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Referenzen
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Unternehmen vertrauen bereits auf unsere Full-Service Lohnoptimierung
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`${currentRef.backgroundColor} rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-200 relative overflow-hidden`}>
            {/* Decorative Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-24 h-24 text-gray-400" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
              {/* Profile Image & Basic Info */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  <img 
                    src={currentRef.image} 
                    alt={currentRef.name}
                    className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover shadow-lg border-4 border-white"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-white fill-current" />
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold ${currentRef.textColor} mb-2`}>
                  {currentRef.name}
                </h3>
                <p className={`${currentRef.accentColor} font-medium mb-2`}>
                  {currentRef.title}
                </p>
                <div className="text-sm text-gray-600">
                  {currentRef.companies ? (
                    <div className="space-y-1">
                      {currentRef.companies.map((company, index) => (
                        <div key={index} className="flex items-center justify-center lg:justify-start">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                          <span>{company}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span>{currentRef.company}</span>
                  )}
                </div>
              </div>

              {/* Quote & Details */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <div className={`inline-flex items-center px-4 py-2 bg-white/50 ${currentRef.accentColor} rounded-full text-sm font-medium mb-4`}>
                    <span className="w-2 h-2 bg-current rounded-full mr-2"></span>
                    {currentRef.highlight}
                  </div>
                  
                  <blockquote className={`text-lg lg:text-xl ${currentRef.textColor} leading-relaxed font-medium mb-4`}>
                    „{currentRef.quote}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <span>Branche: {currentRef.industry}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span>Full-Service Lohnoptimierung</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation - Only show when there are multiple references */}
            {references.length > 1 && (
              <div className="flex justify-center mt-8 space-x-4">
                <button
                  onClick={prevReference}
                  className="p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all duration-200"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                
                <div className="flex space-x-2 items-center">
                  {references.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentIndex 
                          ? `${currentRef.accentColor.replace('text-', 'bg-')}` 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextReference}
                  className="p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all duration-200"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}