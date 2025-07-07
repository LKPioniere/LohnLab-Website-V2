import { Star, ChevronLeft, ChevronRight, Quote, Film, Camera, CreditCard, Zap } from "lucide-react";
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
    backgroundColor: "bg-white",
    textColor: "text-gray-800",
    accentColor: "text-[var(--lohn-primary)]"
  },
  {
    id: "julius-henne",
    name: "Julius Henne",
    title: "Geschäftsführer",
    company: "Stebah GmbH & Co. KG",
    quote: "Ich und meine Mitarbeiter sind von den vielfältigen Einsatzmöglichkeiten unserer Firmenkarte begeistert. Das Design passt perfekt zu unserem Unternehmen.",
    image: "", // Will be rendered as card design
    industry: "Corporate Services",
    highlight: "Vielfältige Einsatzmöglichkeiten",
    backgroundColor: "bg-gradient-to-br from-blue-600 to-blue-800",
    textColor: "text-white",
    accentColor: "text-orange-300"
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

        <div className="max-w-6xl mx-auto">
          <div className="relative transform perspective-1000">
            {/* Main Cinema Screen Container */}
            <div className="relative bg-gradient-to-b from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200" 
                 style={{transform: 'rotateX(2deg)', transformStyle: 'preserve-3d'}}>
              
              {/* Golden Ornamental Frame */}
              <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 z-40 rounded-t-3xl">
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-300 to-yellow-600 opacity-50"></div>
                <div className="absolute top-1 left-0 w-full h-2 bg-gradient-to-r from-yellow-200 via-white to-yellow-200 opacity-60"></div>
              </div>
              
              {/* Left Curtain - Elegant and Draped */}
              <div className="absolute left-0 top-6 bottom-0 w-20 z-30">
                <div className="relative h-full bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-bl-3xl"
                     style={{clipPath: 'polygon(0 0, 80% 0, 70% 15%, 75% 30%, 65% 50%, 70% 70%, 60% 85%, 65% 100%, 0 100%)'}}>
                  {/* Curtain texture and folds */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-40"></div>
                  <div className="absolute top-0 left-1/4 w-px h-full bg-red-900 opacity-60"></div>
                  <div className="absolute top-0 left-1/2 w-px h-full bg-red-500 opacity-40"></div>
                  <div className="absolute top-0 left-3/4 w-px h-full bg-red-900 opacity-60"></div>
                  {/* Curtain highlight */}
                  <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-red-500 to-transparent opacity-30"></div>
                </div>
              </div>
              
              {/* Right Curtain - Mirrored */}
              <div className="absolute right-0 top-6 bottom-0 w-20 z-30">
                <div className="relative h-full bg-gradient-to-bl from-red-600 via-red-700 to-red-800 rounded-br-3xl"
                     style={{clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 35% 100%, 40% 85%, 30% 70%, 35% 50%, 25% 30%, 30% 15%, 20% 0)'}}>
                  {/* Curtain texture and folds */}
                  <div className="absolute inset-0 bg-gradient-to-l from-red-800 via-red-600 to-red-800 opacity-40"></div>
                  <div className="absolute top-0 right-1/4 w-px h-full bg-red-900 opacity-60"></div>
                  <div className="absolute top-0 right-1/2 w-px h-full bg-red-500 opacity-40"></div>
                  <div className="absolute top-0 right-3/4 w-px h-full bg-red-900 opacity-60"></div>
                  {/* Curtain highlight */}
                  <div className="absolute top-0 right-0 w-4 h-full bg-gradient-to-l from-red-500 to-transparent opacity-30"></div>
                </div>
              </div>
              
              {/* Projection Screen Area */}
              <div className="relative mx-20 mt-6 p-12 bg-white rounded-lg shadow-inner z-20 min-h-[500px]">
                
                {/* Film Title Header */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-wider font-serif uppercase"
                      style={{
                        textShadow: '0 4px 8px rgba(0,0,0,0.3), 0 0 20px rgba(255,215,0,0.3)',
                        background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #1f2937 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                      }}>
                    From the creators of more Netto
                  </h2>
                  <div className="mt-4 w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
                </div>
                
                {/* Dynamic Content based on reference type */}
                {currentRef.id === "julius-henne" ? (
                  // Stebah Company Card Design
                  <div className="space-y-8">
                    {/* Corporate Card Design */}
                    <div className="relative mx-auto max-w-md">
                      <div className="relative w-full h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl overflow-hidden">
                        {/* Card Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-4 left-4 w-32 h-32 border-2 border-white rounded-lg"></div>
                          <div className="absolute bottom-4 right-4 w-24 h-24 border border-white rounded-full"></div>
                        </div>
                        
                        {/* Card Content */}
                        <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                          {/* Top Section */}
                          <div>
                            <h3 className="text-2xl font-bold mb-1 tracking-wide">ZUM VERPULVERN!</h3>
                            <div className="flex items-center space-x-4 mb-4">
                              <div className="w-8 h-6 bg-gray-200 rounded-md"></div>
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                            </div>
                            <div className="text-3xl font-bold tracking-wider mb-2">STEBAH</div>
                          </div>
                          
                          {/* Bottom Section */}
                          <div className="space-y-2">
                            <div className="text-xl font-mono tracking-wider">5219 6510 1234 5678</div>
                            <div className="flex justify-between items-end">
                              <div>
                                <div className="text-xs opacity-80">GOOD THRU</div>
                                <div className="text-sm font-bold">12/25</div>
                                <div className="text-xs mt-1">MAX MUSTERMANN</div>
                                <div className="text-xs">STEBAH</div>
                              </div>
                              <div className="flex space-x-1">
                                <div className="w-8 h-8 bg-red-500 rounded-full opacity-90"></div>
                                <div className="w-8 h-8 bg-orange-400 rounded-full opacity-90 -ml-2"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Card shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rotate-45 transform translate-x-full opacity-30"></div>
                      </div>
                    </div>
                    
                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Company Info */}
                      <div className="text-center lg:text-left space-y-4">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2 tracking-wide">
                          {currentRef.name}
                        </h3>
                        <p className="text-xl text-[var(--lohn-primary)] font-semibold mb-4">
                          {currentRef.title}
                        </p>
                        <div className="text-lg text-gray-600 font-medium">
                          {currentRef.company}
                        </div>
                        
                        {/* Corporate Features */}
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-6">
                          <div className="flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
                            <CreditCard className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">Firmenkarte</span>
                          </div>
                          <div className="flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full">
                            <Zap className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">Vielfältige Nutzung</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Quote Section */}
                      <div className="space-y-4">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-600">
                          <div className="flex items-start space-x-4">
                            <Quote className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                            <blockquote className="text-lg text-gray-800 leading-relaxed font-medium italic">
                              „{currentRef.quote}"
                            </blockquote>
                          </div>
                        </div>
                        
                        {/* Highlight Badge */}
                        <div className="flex justify-center lg:justify-start">
                          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full shadow-lg">
                            <Star className="w-5 h-5 mr-2 fill-current" />
                            <span className="font-semibold">{currentRef.highlight}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Cinema Design for Christopher Bausch
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Actor Headshot Style Photo */}
                    <div className="lg:col-span-4 text-center">
                      <div className="relative inline-block">
                        <div className="relative w-40 h-40 lg:w-48 lg:h-48 mx-auto">
                          <img 
                            src={currentRef.image} 
                            alt={currentRef.name}
                            className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-white"
                            style={{
                              filter: 'contrast(1.1) saturate(1.1) brightness(1.05)',
                              boxShadow: '0 20px 40px rgba(0,0,0,0.2), 0 0 0 8px rgba(255,255,255,0.1)'
                            }}
                          />
                          {/* Star Badge */}
                          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-500 w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                            <Star className="w-4 h-4 text-white fill-current" />
                          </div>
                          {/* Spotlight effect */}
                          <div className="absolute inset-0 rounded-full bg-gradient-radial from-transparent via-transparent to-black opacity-10"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Cast Information */}
                    <div className="lg:col-span-8 space-y-6">
                      {/* Character Info */}
                      <div className="text-center lg:text-left">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2 tracking-wide">
                          {currentRef.name}
                        </h3>
                        <p className="text-xl text-[var(--lohn-primary)] font-semibold mb-4">
                          {currentRef.title}
                        </p>
                        
                        {/* Cinema Credits */}
                        <div className="space-y-2 text-gray-600">
                          <p className="text-sm uppercase tracking-wider font-medium text-gray-500 mb-3">Starring in:</p>
                          {currentRef.companies?.map((company, index) => (
                            <div key={index} className="flex items-center justify-center lg:justify-start space-x-3">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                              <span className="text-lg font-medium">{company}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Featured Quote */}
                      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[var(--lohn-primary)]">
                        <div className="flex items-start space-x-4">
                          <Quote className="w-6 h-6 text-[var(--lohn-primary)] mt-1 flex-shrink-0" />
                          <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed font-medium italic">
                            „{currentRef.quote}"
                          </blockquote>
                        </div>
                      </div>
                      
                      {/* Award Badge */}
                      <div className="flex justify-center lg:justify-start">
                        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--lohn-primary)] to-blue-600 text-white rounded-full shadow-lg">
                          <Star className="w-5 h-5 mr-2 fill-current" />
                          <span className="font-semibold">{currentRef.highlight}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Subtle film grain overlay */}
              <div className="absolute inset-0 opacity-5 z-10 pointer-events-none"
                   style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cfilter id="noise"%3E%3CfeTurbulence baseFrequency="0.9" /%3E%3C/filter%3E%3C/defs%3E%3Crect width="100%" height="100%" filter="url(%23noise)" opacity="0.4" /%3E%3C/svg%3E")'}}>
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
                        ? `bg-[var(--lohn-primary)]` 
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
    </section>
  );
}