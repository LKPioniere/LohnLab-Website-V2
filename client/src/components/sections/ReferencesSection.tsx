import { Star, ChevronLeft, ChevronRight, Quote, Film, Camera } from "lucide-react";
import christopherImage from "@assets/CHristopher-Bausch-e1666084356146_1751895906988.jpg";
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
    image: christopherImage,
    industry: "Entertainment",
    highlight: "Individuelle Betreuung",
    backgroundColor: "bg-gradient-to-br from-red-900 via-red-800 to-red-700",
    textColor: "text-white",
    accentColor: "text-yellow-300"
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
          <div className={`${currentRef.backgroundColor} rounded-3xl p-8 lg:p-12 shadow-2xl border border-red-800 relative overflow-hidden`}>
            {/* Red cinema curtain effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-700 to-red-900 opacity-90"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Curtain pleats */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-30 transform skew-x-1"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-800 to-transparent opacity-20 transform -skew-x-1"></div>
              {/* Curtain folds */}
              <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-red-600 to-red-900 opacity-40"></div>
              <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-red-600 to-red-900 opacity-40"></div>
              <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-red-600 to-red-900 opacity-40"></div>
            </div>
            {/* Golden curtain rod */}
            <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-t-3xl"></div>
            <div className="absolute top-1 left-0 w-full h-2 bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500"></div>
            
            {/* Cinema-themed decorative elements */}
            <div className="absolute top-8 right-8 opacity-20 z-20">
              <Film className="w-16 h-16 text-yellow-300" />
            </div>
            <div className="absolute bottom-8 left-8 opacity-15 z-20">
              <Camera className="w-20 h-20 text-yellow-200" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-30">
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
                <div className="text-sm text-gray-300">
                  {currentRef.companies ? (
                    <div className="space-y-1">
                      {currentRef.companies.map((company, index) => (
                        <div key={index} className="flex items-center justify-center lg:justify-start">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
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
                  <div className={`inline-flex items-center px-4 py-2 bg-yellow-300/20 ${currentRef.accentColor} rounded-full text-sm font-medium mb-4 border border-yellow-300/40 backdrop-blur-sm`}>
                    <Film className="w-4 h-4 mr-2" />
                    {currentRef.highlight}
                  </div>
                  
                  <blockquote className={`text-lg lg:text-xl ${currentRef.textColor} leading-relaxed font-medium mb-4`}>
                    „{currentRef.quote}"
                  </blockquote>
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