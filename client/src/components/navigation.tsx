import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ExternalLink, BookOpen, TrendingUp, DollarSign, UserPlus, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import lohnlabLogo from "@/assets/lohnlab-logo-blue.png";
import lohnlabLogoWhite from "@/assets/lohnlab-logo-white.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isMobileLoginOpen, setIsMobileLoginOpen] = useState(false);
  const [location] = useLocation();
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isDarkHero, setIsDarkHero] = useState(false);
  const [heroBgColor, setHeroBgColor] = useState('');
  
  // Function to detect hero section background and extract colors
  const detectHeroBackground = () => {
    const heroSection = document.querySelector('section');
    if (heroSection) {
      const styles = window.getComputedStyle(heroSection);
      const bgColor = styles.backgroundColor;
      const bgImage = styles.backgroundImage;
      const classNames = heroSection.className;
      
      // Check for gradients
      const hasGradient = classNames.includes('bg-gradient') || 
                         classNames.includes('from-[var(--lohn-primary)]') ||
                         classNames.includes('to-[var(--lohn-secondary)]') ||
                         bgImage.includes('gradient');
      
      // If it's a gradient, extract the actual gradient
      if (hasGradient || bgImage.includes('gradient')) {
        // Try to get the actual background image first
        if (bgImage && bgImage.includes('gradient')) {
          setHeroBgColor(bgImage);
          return true;
        }
        
        // Recreate gradient based on CSS classes found
        if (classNames.includes('from-[var(--lohn-primary)]')) {
          let gradient = '';
          
          // Determine gradient direction
          if (classNames.includes('bg-gradient-to-br')) {
            gradient = 'linear-gradient(to bottom right, ';
          } else if (classNames.includes('bg-gradient-to-r')) {
            gradient = 'linear-gradient(to right, ';
          } else {
            gradient = 'linear-gradient(135deg, ';
          }
          
          // Add gradient colors based on what's found in classes
          gradient += 'var(--lohn-primary)';
          
          if (classNames.includes('via-[var(--lohn-secondary)]')) {
            gradient += ', var(--lohn-secondary)';
          }
          
          if (classNames.includes('to-[var(--lohn-secondary)]')) {
            gradient += ', var(--lohn-secondary)';
          } else if (classNames.includes('to-[var(--lohn-purple)]')) {
            gradient += ', var(--lohn-purple)';
          }
          
          gradient += ')';
          setHeroBgColor(gradient);
        } else {
          // Try to extract computed background color as fallback
          setHeroBgColor(bgColor || 'var(--lohn-primary)');
        }
        return true;
      }
      
      // For solid colors
      if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
        setHeroBgColor(bgColor);
        
        // Parse RGB values to determine darkness
        if (bgColor.includes('rgb')) {
          const rgbMatch = bgColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
          if (rgbMatch) {
            const [_, r, g, b] = rgbMatch.map(Number);
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            return luminance < 0.5;
          }
        }
      }
      
      // Check for dark CSS classes
      const hasDarkBg = classNames.includes('bg-[var(--lohn-primary)]') ||
                       classNames.includes('bg-gray-900') ||
                       classNames.includes('bg-black') ||
                       classNames.includes('bg-slate-900');
      
      if (hasDarkBg) {
        setHeroBgColor('var(--lohn-primary)'); // fallback to primary color
        return true;
      }
    }
    
    setHeroBgColor('');
    return false;
  };

  // Scroll detection effect
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section'); // First section is typically hero
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const isVisible = rect.bottom > 0;
        setIsHeroVisible(isVisible);
        
        // Detect if hero has dark background
        if (isVisible) {
          setIsDarkHero(detectHeroBackground());
        }
      }
    };

    // Initial check
    setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // Dynamic styles based on hero visibility and background
  const navBgClass = isHeroVisible && isDarkHero 
    ? "" 
    : "bg-white shadow-sm border-b border-gray-100";
  
  const navStyle = isHeroVisible && isDarkHero && heroBgColor
    ? { background: heroBgColor }
    : {};
  
  const textColorClass = isHeroVisible && isDarkHero 
    ? "text-white" 
    : "text-gray-700";
  
  const logoSrc = isHeroVisible && isDarkHero ? lohnlabLogoWhite : lohnlabLogo;

  return (
    <nav 
      className={`${navBgClass} sticky top-0 z-50 transition-all duration-300`}
      style={navStyle}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <img 
                src={logoSrc} 
                alt="LohnLab Logo" 
                className="h-8 w-auto transition-all duration-300"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`${textColorClass} ${isHeroVisible && isDarkHero ? 'hover:text-gray-200' : 'hover:text-[var(--lohn-primary)]'} transition-colors font-medium ${location === '/' ? (isHeroVisible && isDarkHero ? 'text-white border-b-2 border-white' : 'text-[var(--lohn-primary)] border-b-2 border-[var(--lohn-primary)]') : ''}`}
            >
              Startseite
            </Link>
            
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button
                className={`flex items-center space-x-1 ${textColorClass} ${isHeroVisible && isDarkHero ? 'hover:text-gray-200' : 'hover:text-[var(--lohn-primary)]'} transition-colors font-medium ${location.includes('/loesungen') ? (isHeroVisible && isDarkHero ? 'text-white border-b-2 border-white' : 'text-[var(--lohn-primary)] border-b-2 border-[var(--lohn-primary)]') : ''}`}
              >
                <span>Lösungen</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-4">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Unsere Lösungen</h3>
                  </div>
                  <Link 
                    href="/loesungen/lohnerhoehung"
                    className="block px-4 py-4 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[var(--lohn-primary)] rounded-lg flex items-center justify-center mr-3">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">Lohnerhöhung</div>
                        <div className="text-sm text-gray-500">Exakte Berechnungen für alle Mitarbeiter</div>
                      </div>
                    </div>
                  </Link>
                  <Link 
                    href="/loesungen/lohnoptimierung"
                    className="block px-4 py-4 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[var(--lohn-purple)] rounded-lg flex items-center justify-center mr-3">
                        <Crown className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div>
                        <div className="font-medium">Lohnoptimierung</div>
                        <div className="text-sm text-gray-500">Bis zu 50% Kosteneinsparung bei Lohnerhöhungen</div>
                      </div>
                    </div>
                  </Link>
                  <Link 
                    href="/loesungen/neueinstellungen"
                    className="block px-4 py-4 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[var(--lohn-teal)] rounded-lg flex items-center justify-center mr-3">
                        <UserPlus className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">Neueinstellungen</div>
                        <div className="text-sm text-gray-500">Optimale Gehaltspakete und DATEV-Integration</div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            
            {/* Login Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsLoginOpen(true)}
              onMouseLeave={() => setIsLoginOpen(false)}
            >
              <button
                className={`flex items-center space-x-1 ${textColorClass} ${isHeroVisible && isDarkHero ? 'hover:text-gray-200' : 'hover:text-[var(--lohn-primary)]'} transition-colors font-medium`}
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
              <Button className={`${isHeroVisible && isDarkHero 
                ? 'bg-white text-[var(--lohn-primary)] hover:bg-gray-100' 
                : 'bg-[var(--lohn-primary)] text-white hover:bg-[var(--lohn-secondary)]'
              } transition-colors rounded-full`}>
                Kontakt
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${textColorClass} ${isHeroVisible && isDarkHero ? 'hover:text-gray-200 hover:bg-white/10' : 'hover:text-[var(--lohn-primary)] hover:bg-gray-100'}`}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 text-gray-700 hover:text-[var(--lohn-primary)] transition-colors font-medium ${location === '/' ? 'text-[var(--lohn-primary)] bg-gray-50' : ''}`}
              >
                Startseite
              </Link>
              
              {/* Mobile Solutions Dropdown */}
              <div className="border-y border-gray-100">
                <button
                  onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                  className="w-full px-4 py-3 flex items-center justify-between text-gray-700 hover:text-[var(--lohn-primary)] transition-colors font-medium"
                >
                  <span>Lösungen</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileSolutionsOpen && (
                  <div className="bg-gray-50 py-2">
                    <Link 
                      href="/loesungen/lohnerhoehung"
                      onClick={() => {setIsMobileMenuOpen(false); setIsMobileSolutionsOpen(false);}}
                      className="flex items-center px-6 py-3 text-gray-700 hover:text-[var(--lohn-primary)] transition-colors"
                    >
                      <div className="w-10 h-10 bg-[var(--lohn-primary)] rounded-lg flex items-center justify-center mr-3">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">Lohnerhöhung</div>
                        <div className="text-sm text-gray-500">Exakte Berechnungen</div>
                      </div>
                    </Link>
                    <Link 
                      href="/loesungen/lohnoptimierung"
                      onClick={() => {setIsMobileMenuOpen(false); setIsMobileSolutionsOpen(false);}}
                      className="flex items-center px-6 py-3 text-gray-700 hover:text-[var(--lohn-primary)] transition-colors"
                    >
                      <div className="w-10 h-10 bg-[var(--lohn-purple)] rounded-lg flex items-center justify-center mr-3">
                        <Crown className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div>
                        <div className="font-medium">Lohnoptimierung</div>
                        <div className="text-sm text-gray-500">Bis zu 50% Einsparung</div>
                      </div>
                    </Link>
                    <Link 
                      href="/loesungen/neueinstellungen"
                      onClick={() => {setIsMobileMenuOpen(false); setIsMobileSolutionsOpen(false);}}
                      className="flex items-center px-6 py-3 text-gray-700 hover:text-[var(--lohn-primary)] transition-colors"
                    >
                      <div className="w-10 h-10 bg-[var(--lohn-teal)] rounded-lg flex items-center justify-center mr-3">
                        <UserPlus className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">Neueinstellungen</div>
                        <div className="text-sm text-gray-500">Optimale Gehaltspakete</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Mobile Login Dropdown */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => setIsMobileLoginOpen(!isMobileLoginOpen)}
                  className="w-full px-4 py-3 flex items-center justify-between text-gray-700 hover:text-[var(--lohn-primary)] transition-colors font-medium"
                >
                  <span>Login</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileLoginOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileLoginOpen && (
                  <div className="bg-gray-50 py-2">
                    <a 
                      href="https://cockpit.lohnlab.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {setIsMobileMenuOpen(false); setIsMobileLoginOpen(false);}}
                      className="flex items-center px-6 py-3 text-gray-700 hover:text-[var(--lohn-primary)] transition-colors"
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
                      onClick={() => {setIsMobileMenuOpen(false); setIsMobileLoginOpen(false);}}
                      className="flex items-center px-6 py-3 text-gray-700 hover:text-[var(--lohn-primary)] transition-colors"
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
              
              <div className="px-4 pt-4">
                <Link href="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="bg-[var(--lohn-primary)] text-white hover:bg-[var(--lohn-secondary)] transition-colors rounded-full w-full">
                    Kontakt
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
