import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import lohnlabLogo from "@assets/LohnLab_Logo_Blue300px (1)_1751742744672.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [location] = useLocation();
  
  // Determine audience type based on current page
  const audienceType = location === '/unternehmen' ? 'unternehmen' : 'steuerberater';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleAudience = () => {
    // Navigate to the appropriate page based on current audience type
    if (audienceType === 'steuerberater') {
      window.location.href = '/unternehmen';
    } else {
      window.location.href = '/';
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <img 
                src={lohnlabLogo} 
                alt="LohnLab Logo" 
                className="h-8 w-auto"
              />
            </Link>
          </div>
          
          {/* Audience Toggle Slider */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={toggleAudience}
              className={`px-4 py-2 rounded-full transition-all text-sm font-medium ${
                audienceType === 'steuerberater' 
                  ? 'bg-[var(--lohn-primary)] text-white' 
                  : 'text-gray-600 hover:text-[var(--lohn-primary)]'
              }`}
            >
              Steuerberater
            </button>
            <button
              onClick={toggleAudience}
              className={`px-4 py-2 rounded-full transition-all text-sm font-medium ${
                audienceType === 'unternehmen' 
                  ? 'bg-[var(--lohn-primary)] text-white' 
                  : 'text-gray-600 hover:text-[var(--lohn-primary)]'
              }`}
            >
              Unternehmen
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-gray-700 hover:text-[var(--lohn-primary)] transition-colors font-medium ${location === '/' ? 'text-[var(--lohn-primary)] border-b-2 border-[var(--lohn-primary)]' : ''}`}
            >
              Startseite
            </Link>
            
            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className={`flex items-center space-x-1 text-gray-700 hover:text-[var(--lohn-primary)] transition-colors font-medium ${location.includes('/loesungen') ? 'text-[var(--lohn-primary)] border-b-2 border-[var(--lohn-primary)]' : ''}`}
              >
                <span>Lösungen</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link 
                    href="/loesungen/lohnerhoehung"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[var(--lohn-primary)] transition-colors"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    <div className="font-medium">Lohnerhöhung</div>
                    <div className="text-sm text-gray-500">Exakte Berechnungen für alle Mitarbeiter</div>
                  </Link>
                  <Link 
                    href="/loesungen/lohnoptimierung"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[var(--lohn-primary)] transition-colors"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    <div className="font-medium">Lohnoptimierung</div>
                    <div className="text-sm text-gray-500">Bis zu 50% Kosteneinsparung bei Lohnerhöhungen</div>
                  </Link>
                  <Link 
                    href="/loesungen/neueinstellungen"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[var(--lohn-primary)] transition-colors"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    <div className="font-medium">Neueinstellungen</div>
                    <div className="text-sm text-gray-500">Optimale Gehaltspakete und DATEV-Integration</div>
                  </Link>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => scrollToSection('roadmap')}
              className="text-gray-700 hover:text-[var(--lohn-primary)] transition-colors font-medium"
            >
              Entwicklung
            </button>
            <Button 
              onClick={() => scrollToSection('kontakt')}
              className="bg-[var(--lohn-primary)] text-white hover:bg-[var(--lohn-secondary)] transition-colors rounded-full"
            >
              Kontakt
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-[var(--lohn-primary)] transition-colors font-medium text-left"
              >
                Für Steuerberater
              </Link>
              <Link 
                href="/unternehmen"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-[var(--lohn-primary)] transition-colors font-medium text-left"
              >
                Für Unternehmen
              </Link>
              <button 
                onClick={() => scrollToSection('roadmap')}
                className="text-gray-700 hover:text-[var(--lohn-primary)] transition-colors font-medium text-left"
              >
                Entwicklung
              </button>
              <Button 
                onClick={() => scrollToSection('kontakt')}
                className="bg-[var(--lohn-primary)] text-white hover:bg-[var(--lohn-secondary)] transition-colors rounded-full w-fit"
              >
                Kontakt
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
