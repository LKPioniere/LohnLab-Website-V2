import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import lohnlabLogo from "@assets/LohnLab_Logo_Blue300px (1)_1751742744672.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isUnternehmenPage = location === '/unternehmen';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
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
            <div className="ml-3 px-3 py-1 bg-[var(--lohn-teal)]/10 text-[var(--lohn-primary)] text-xs font-medium rounded-full border border-[var(--lohn-teal)]/20">
              {isUnternehmenPage ? 'Für Unternehmen' : 'Für Steuerberater'}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[var(--lohn-primary)] transition-colors font-medium">
              Für Steuerberater
            </Link>
            <Link href="/unternehmen" className="text-gray-700 hover:text-[var(--lohn-primary)] transition-colors font-medium">
              Für Unternehmen
            </Link>
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
