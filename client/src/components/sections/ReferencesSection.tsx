import { Star, ChevronLeft, ChevronRight, Quote, Film, Camera, CreditCard, Building, Zap, Wifi } from "lucide-react";
import christopherImage from "@assets/CHristopher-Bausch-e1666084356146_1751895906988.jpg";
// import juliusImage from "@assets/julius-henne.jpg";
// import stebahCard from "@assets/stebah-card.png";
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
    quote: "Die Firmenkreditkarte ist ein echter Gamechanger für uns. Die vielfältigen Einsatzmöglichkeiten und die einfache Verwaltung über LohnLab machen die Lohnoptimierung zum Kinderspiel.",
    image: "src/assets/julius-henne.jpg",
    industry: "Baugewerbe",
    highlight: "Firmenkreditkarte",
    backgroundColor: "bg-gradient-to-br from-blue-600 to-blue-800",
    textColor: "text-white",
    accentColor: "text-yellow-400"
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
          {/* Conditional rendering based on reference type */}
          {currentRef.id === 'julius-henne' ? (
            // Stebah GmbH Clean Design
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 border-b border-blue-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Building className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">STEBAH GmbH & Co. KG</h3>
                      <p className="text-sm text-blue-600">Moderne Lohnoptimierung</p>
                    </div>
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                    <CreditCard className="w-4 h-4 mr-1" />
                    {currentRef.highlight}
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                  
                  {/* Profile */}
                  <div className="text-center lg:text-left">
                    <div className="w-28 h-28 mx-auto lg:mx-0 mb-4">
                      <img 
                        src={currentRef.image} 
                        alt={currentRef.name}
                        className="w-full h-full rounded-full object-cover shadow-md border-3 border-blue-200"
                      />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">{currentRef.name}</h4>
                    <p className="text-blue-600 font-semibold text-base mb-1">{currentRef.title}</p>
                    <p className="text-gray-600 text-sm">{currentRef.company}</p>
                  </div>
                  
                  {/* Credit Card - Clean Integration */}
                  <div className="flex justify-center">
                    <div className="max-w-xs">
                      <img 
                        src="src/assets/stebah-card.png" 
                        alt="Stebah Firmenkreditkarte" 
                        className="w-full h-auto rounded-xl shadow-lg"
                      />
                    </div>
                  </div>
                  
                  {/* Quote */}
                  <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-blue-600">
                    <div className="flex items-start space-x-3">
                      <Quote className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <blockquote className="text-gray-700 text-sm leading-relaxed font-medium">
                        „{currentRef.quote}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Compact Cinema Design for other references
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              {/* Golden Header */}
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-4 rounded-t-2xl"></div>
              
              {/* Left Curtain */}
              <div className="absolute left-0 top-4 bottom-0 w-8 z-10">
                <div className="relative h-full bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-bl-2xl"
                     style={{clipPath: 'polygon(0 0, 80% 0, 70% 20%, 75% 40%, 65% 60%, 70% 80%, 60% 100%, 0 100%)'}}>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-800 via-red-600 to-red-800 opacity-40"></div>
                  <div className="absolute top-0 left-1/3 w-px h-full bg-red-900 opacity-60"></div>
                  <div className="absolute top-0 left-2/3 w-px h-full bg-red-500 opacity-40"></div>
                </div>
              </div>
              
              {/* Right Curtain */}
              <div className="absolute right-0 top-4 bottom-0 w-8 z-10">
                <div className="relative h-full bg-gradient-to-bl from-red-600 via-red-700 to-red-800 rounded-br-2xl"
                     style={{clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 40% 100%, 35% 80%, 30% 60%, 35% 40%, 25% 20%, 20% 0)'}}>
                  <div className="absolute inset-0 bg-gradient-to-l from-red-800 via-red-600 to-red-800 opacity-40"></div>
                  <div className="absolute top-0 right-1/3 w-px h-full bg-red-900 opacity-60"></div>
                  <div className="absolute top-0 right-2/3 w-px h-full bg-red-500 opacity-40"></div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="relative z-20 p-6 mx-8">
                {/* Film Title Header */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-wide font-serif uppercase"
                      style={{
                        background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #1f2937 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}>
                    From the creators of more Netto
                  </h2>
                  <div className="mt-2 w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
                </div>
                
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                  
                  {/* Actor Photo */}
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="relative w-24 h-24 lg:w-32 lg:h-32 mx-auto">
                        <img 
                          src={currentRef.image} 
                          alt={currentRef.name}
                          className="w-full h-full rounded-full object-cover shadow-lg border-4 border-white"
                        />
                        {/* Star Badge */}
                        <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-500 w-6 h-6 rounded-full flex items-center justify-center shadow-lg">
                          <Star className="w-3 h-3 text-white fill-current" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Character Info */}
                    <div className="mt-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {currentRef.name}
                      </h3>
                      <p className="text-lg text-[var(--lohn-primary)] font-semibold mb-2">
                        {currentRef.title}
                      </p>
                      
                      {/* Cinema Credits */}
                      <div className="space-y-1 text-gray-600">
                        <p className="text-xs uppercase tracking-wider font-medium text-gray-500 mb-2">Starring in:</p>
                        {currentRef.companies?.map((company, index) => (
                          <div key={index} className="flex items-center justify-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                            <span className="text-sm font-medium">{company}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Featured Quote */}
                  <div className="lg:col-span-2 bg-gray-50 p-4 rounded-xl border-l-4 border-[var(--lohn-primary)]">
                    <div className="flex items-start space-x-3">
                      <Quote className="w-5 h-5 text-[var(--lohn-primary)] mt-1 flex-shrink-0" />
                      <blockquote className="text-lg text-gray-800 leading-relaxed font-medium">
                        „{currentRef.quote}"
                      </blockquote>
                    </div>
                    
                    {/* Award Badge */}
                    <div className="flex justify-center mt-4">
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[var(--lohn-primary)] to-blue-600 text-white rounded-full shadow-lg text-sm">
                        <Star className="w-4 h-4 mr-2 fill-current" />
                        <span className="font-semibold">{currentRef.highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

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