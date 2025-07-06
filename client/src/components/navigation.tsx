import { useState } from "react";
import { Menu, X, ChevronDown, ExternalLink, BookOpen, TrendingUp, DollarSign, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import lohnlabLogo from "@/assets/lohnlab-logo-blue.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [location] = useLocation();
  
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
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-4">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Unsere Lösungen</h3>
                  </div>
                  <Link 
                    href="/loesungen/lohnerhoehung"
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[var(--lohn-primary)] transition-colors"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    <div className="w-8 h-8 bg-[var(--lohn-teal)] rounded-lg flex items-center justify-center mr-3">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Lohnerhöhung</div>
                      <div className="text-sm text-gray-500">Exakte Berechnungen für alle Mitarbeiter</div>
                    </div>
                  </Link>
                  <Link 
                    href="/loesungen/lohnoptimierung"
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[var(--lohn-primary)] transition-colors"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    <div className="w-8 h-8 bg-[var(--lohn-secondary)] rounded-lg flex items-center justify-center mr-3">
                      <DollarSign className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Lohnoptimierung</div>
                      <div className="text-sm text-gray-500">Bis zu 50% Kosteneinsparung bei Lohnerhöhungen</div>
                    </div>
                  </Link>
                  <Link 
                    href="/loesungen/neueinstellungen"
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[var(--lohn-primary)] transition-colors"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    <div className="w-8 h-8 bg-[var(--lohn-purple)] rounded-lg flex items-center justify-center mr-3">
                      <UserPlus className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Neueinstellungen</div>
                      <div className="text-sm text-gray-500">Optimale Gehaltspakete und DATEV-Integration</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            
            {/* Login Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLoginOpen(!isLoginOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-[var(--lohn-primary)] transition-colors font-medium"
              >
                <span>Login</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLoginOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLoginOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <a 
                    href="https://cockpit.lohnlab.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[var(--lohn-primary)] transition-colors"
                    onClick={() => setIsLoginOpen(false)}
                  >
                    <ExternalLink className="w-5 h-5 mr-3 text-[var(--lohn-teal)]" />
                    <div>
                      <div className="font-medium">LohnLab Cockpit</div>
                      <div className="text-sm text-gray-500">Zur Anwendung</div>
                    </div>
                  </a>
                  <a 
                    href="https://lohnlab-cockpit-kanzleipaket-udfcfcdagr.mymemberspot.de/auth/login?redirectTo=%2Flibrary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[var(--lohn-primary)] transition-colors"
                    onClick={() => setIsLoginOpen(false)}
                  >
                    <BookOpen className="w-5 h-5 mr-3 text-[var(--lohn-teal)]" />
                    <div>
                      <div className="font-medium">Handbücher & Anleitungen</div>
                      <div className="text-sm text-gray-500">Für Kunden und Partner</div>
                    </div>
                  </a>
                </div>
              )}
            </div>
            
            <Link href="/kontakt">
              <Button className="bg-[var(--lohn-primary)] text-white hover:bg-[var(--lohn-secondary)] transition-colors rounded-full">
                Kontakt
              </Button>
            </Link>
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
                Startseite
              </Link>
              
              {/* Mobile Login Links */}
              <div className="space-y-2 pt-2 border-t border-gray-100">
                <div className="text-sm text-gray-500 font-medium">Login:</div>
                <a 
                  href="https://cockpit.lohnlab.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-[var(--lohn-primary)] transition-colors font-medium text-left"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ExternalLink className="w-4 h-4 mr-2 text-[var(--lohn-teal)]" />
                  LohnLab Cockpit
                </a>
                <a 
                  href="https://lohnlab-cockpit-kanzleipaket-udfcfcdagr.mymemberspot.de/auth/login?redirectTo=%2Flibrary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-[var(--lohn-primary)] transition-colors font-medium text-left"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <BookOpen className="w-4 h-4 mr-2 text-[var(--lohn-teal)]" />
                  Handbücher
                </a>
              </div>
              
              <Link href="/kontakt">
                <Button className="bg-[var(--lohn-primary)] text-white hover:bg-[var(--lohn-secondary)] transition-colors rounded-full w-fit">
                  Kontakt
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
