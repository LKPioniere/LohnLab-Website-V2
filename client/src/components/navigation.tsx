import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ExternalLink, BookOpen, TrendingUp, DollarSign, UserPlus, Crown, Code, Calculator, BarChart3 } from "lucide-react";
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
  
  // Function to detect hero section background and extract primary color
  const detectHeroBackground = () => {
    const heroSection = document.querySelector('section');
    if (heroSection) {
      const styles = window.getComputedStyle(heroSection);
      const bgColor = styles.backgroundColor;
      const bgImage = styles.backgroundImage;
      const classNames = heroSection.className;
      
      // Check for gradients or dark backgrounds
      const hasGradient = classNames.includes('bg-gradient') || 
                         classNames.includes('from-[var(--lohn-primary)]') ||
                         classNames.includes('to-[var(--lohn-secondary)]') ||
                         bgImage.includes('gradient');
      
      // For gradients, use specific RGB colors based on the page
      if (hasGradient || bgImage.includes('gradient')) {
        // Determine page-specific colors based on current path
        const currentPath = window.location.pathname;
        
        if (currentPath === '/' || currentPath === '/faq' || currentPath === '/loesungen/lohnerhoehung') {
          // Homepage, FAQ, Lohnerhöhung: RGB 15,34,137
          setHeroBgColor('rgb(15, 34, 137)');
        } else if (currentPath === '/loesungen/neueinstellungen') {
          // Neueinstellungen: RGB 39,72,133
          setHeroBgColor('rgb(39, 72, 133)');
        } else if (currentPath === '/steuerberater') {
          // Steuerberater: RGB 5,150,105 (emerald-600)
          setHeroBgColor('rgb(5, 150, 105)');
        } else {
          // Default fallback to homepage color
          setHeroBgColor('rgb(15, 34, 137)');
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
          
          <div className="hidden md:flex items-center space-x-1">
            
            {/* Solutions Dropdown */}
            {/* Steuerberater Link */}
            <Link href="/steuerberater">
              <button
                className={`group relative px-3 py-2 ${textColorClass} font-medium transition-all duration-300 ${
                  location === '/steuerberater' 
                    ? (isHeroVisible && isDarkHero 
                        ? 'text-white' 
                        : 'text-[var(--lohn-primary)]') 
                    : ''
                }`}
              >
                <span className="relative">
                  Steuerberater
                  <span className={`absolute -bottom-0.5 left-0 right-0 h-0.5 transform origin-left transition-all duration-300 ${
                    location === '/steuerberater'
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  } ${
                    isHeroVisible && isDarkHero 
                      ? 'bg-white' 
                      : 'bg-[var(--lohn-primary)]'
                  }`}></span>
                </span>
              </button>
            </Link>

            {/* Lösungen Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button
                className={`group relative flex items-center space-x-1 px-3 py-2 ${textColorClass} font-medium transition-all duration-300 ${
                  location.includes('/loesungen') 
                    ? (isHeroVisible && isDarkHero 
                        ? 'text-white' 
                        : 'text-[var(--lohn-primary)]') 
                    : ''
                }`}
              >
                <span className="relative">
                  Lösungen
                  <span className={`absolute -bottom-0.5 left-0 right-0 h-0.5 transform origin-left transition-all duration-300 ${
                    location.includes('/loesungen')
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  } ${
                    isHeroVisible && isDarkHero 
                      ? 'bg-white' 
                      : 'bg-[var(--lohn-primary)]'
                  }`}></span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSolutionsOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 z-50">
                  <div className="w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fadeIn">
                    <div className="px-6 py-3 border-b border-gray-100">
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Unsere Lösungen</h3>
                    </div>
                    <Link 
                      href="/loesungen/lohnerhoehung"
                      className="group block px-6 py-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-300"
                      onClick={() => setIsSolutionsOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-[var(--lohn-primary)] to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-sm group-hover:shadow-md transition-shadow">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800 group-hover:text-[var(--lohn-primary)] transition-colors">Lohnerhöhung</div>
                          <div className="text-sm text-gray-500">Exakte Berechnungen für alle Mitarbeiter</div>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      href="/loesungen/neueinstellungen"
                      className="group block px-6 py-4 hover:bg-gradient-to-r hover:from-teal-50 hover:to-transparent transition-all duration-300"
                      onClick={() => setIsSolutionsOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-[var(--lohn-teal)] to-teal-600 rounded-xl flex items-center justify-center mr-4 shadow-sm group-hover:shadow-md transition-shadow">
                          <UserPlus className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800 group-hover:text-[var(--lohn-teal)] transition-colors">Neueinstellungen</div>
                          <div className="text-sm text-gray-500">Optimale Gehaltspakete und DATEV-Integration</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            

            
            {/* Login Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsLoginOpen(true)}
              onMouseLeave={() => setIsLoginOpen(false)}
            >
              <button
                className={`group relative flex items-center space-x-1 px-3 py-2 ${textColorClass} font-medium transition-all duration-300`}
              >
                <span className="relative">
                  Login
                  <span className={`absolute -bottom-0.5 left-0 right-0 h-0.5 transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100 ${
                    isHeroVisible && isDarkHero 
                      ? 'bg-white' 
                      : 'bg-[var(--lohn-primary)]'
                  }`}></span>
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isLoginOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLoginOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 z-50">
                  <div className="w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-fadeIn">
                    <div className="px-6 py-3 border-b border-gray-100">
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Login & Ressourcen</h3>
                    </div>
                    <a 
                      href="https://cockpit.lohnlab.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block px-6 py-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-300"
                      onClick={() => setIsLoginOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-[var(--lohn-teal)] to-teal-600 rounded-xl flex items-center justify-center mr-4 shadow-sm group-hover:shadow-md transition-shadow">
                          <ExternalLink className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800 group-hover:text-[var(--lohn-teal)] transition-colors">LohnLab Cockpit</div>
                          <div className="text-sm text-gray-500">Zur Anwendung</div>
                        </div>
                      </div>
                    </a>
                    <a 
                      href="https://memberspot.lohnlab.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block px-6 py-4 hover:bg-gradient-to-r hover:from-orange-50 hover:to-transparent transition-all duration-300"
                      onClick={() => setIsLoginOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 shadow-sm group-hover:shadow-md transition-shadow">
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">Handbücher & Anleitungen</div>
                          <div className="text-sm text-gray-500">Für Kunden und Partner</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <div className="ml-6">
              <Link href="/kontakt">
                <Button className={`${isHeroVisible && isDarkHero 
                  ? 'bg-white text-[var(--lohn-primary)] hover:bg-gray-100 shadow-lg' 
                  : 'bg-[var(--lohn-primary)] text-white hover:bg-[var(--lohn-secondary)] shadow-md'
                } transition-all duration-300 rounded-full px-6 py-2.5 font-semibold`}>
                  Kontakt
                </Button>
              </Link>
            </div>
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
          <div 
            className="md:hidden py-4 border-t border-gray-100"
            style={isHeroVisible && isDarkHero && heroBgColor ? { background: heroBgColor } : {}}
          >
            <div className="flex flex-col space-y-2">
              
              {/* Mobile Steuerberater Link */}
              <Link href="/steuerberater">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full px-4 py-3 text-left ${isHeroVisible && isDarkHero ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-[var(--lohn-primary)]'} transition-colors font-medium ${
                    location === '/steuerberater' ? (isHeroVisible && isDarkHero ? 'text-white bg-white/10' : 'text-[var(--lohn-primary)] bg-blue-50') : ''
                  }`}
                >
                  Steuerberater
                </button>
              </Link>
              
              {/* Mobile Solutions Dropdown */}
              <div className="border-y border-gray-100">
                <button
                  onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                  className={`w-full px-4 py-3 flex items-center justify-between ${isHeroVisible && isDarkHero ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-[var(--lohn-primary)]'} transition-colors font-medium`}
                >
                  <span>Lösungen</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileSolutionsOpen && (
                  <div 
                    className="py-2"
                    style={isHeroVisible && isDarkHero && heroBgColor ? { background: heroBgColor } : { background: '#f9fafb' }}
                  >
                    <Link 
                      href="/loesungen/lohnerhoehung"
                      onClick={() => {setIsMobileMenuOpen(false); setIsMobileSolutionsOpen(false);}}
                      className={`flex items-center px-6 py-3 ${isHeroVisible && isDarkHero ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-[var(--lohn-primary)]'} transition-colors`}
                    >
                      <div className="w-10 h-10 bg-[var(--lohn-primary)] rounded-lg flex items-center justify-center mr-3">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">Lohnerhöhung</div>
                        <div className={`text-sm ${isHeroVisible && isDarkHero ? 'text-gray-200' : 'text-gray-500'}`}>Exakte Berechnungen</div>
                      </div>
                    </Link>
                    <Link 
                      href="/loesungen/neueinstellungen"
                      onClick={() => {setIsMobileMenuOpen(false); setIsMobileSolutionsOpen(false);}}
                      className={`flex items-center px-6 py-3 ${isHeroVisible && isDarkHero ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-[var(--lohn-primary)]'} transition-colors`}
                    >
                      <div className="w-10 h-10 bg-[var(--lohn-teal)] rounded-lg flex items-center justify-center mr-3">
                        <UserPlus className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">Neueinstellungen</div>
                        <div className={`text-sm ${isHeroVisible && isDarkHero ? 'text-gray-200' : 'text-gray-500'}`}>Optimale Gehaltspakete</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
              

              
              {/* Mobile Login Dropdown */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => setIsMobileLoginOpen(!isMobileLoginOpen)}
                  className={`w-full px-4 py-3 flex items-center justify-between ${isHeroVisible && isDarkHero ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-[var(--lohn-primary)]'} transition-colors font-medium`}
                >
                  <span>Login</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileLoginOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileLoginOpen && (
                  <div 
                    className="py-2"
                    style={isHeroVisible && isDarkHero && heroBgColor ? { background: heroBgColor } : { background: '#f9fafb' }}
                  >
                    <a 
                      href="https://cockpit.lohnlab.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {setIsMobileMenuOpen(false); setIsMobileLoginOpen(false);}}
                      className={`flex items-center px-6 py-3 ${isHeroVisible && isDarkHero ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-[var(--lohn-primary)]'} transition-colors`}
                    >
                      <ExternalLink className="w-5 h-5 mr-3 text-[var(--lohn-teal)]" />
                      <div>
                        <div className="font-medium">LohnLab Cockpit</div>
                        <div className={`text-sm ${isHeroVisible && isDarkHero ? 'text-gray-200' : 'text-gray-500'}`}>Zur Anwendung</div>
                      </div>
                    </a>
                    <a 
                      href="https://memberspot.lohnlab.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {setIsMobileMenuOpen(false); setIsMobileLoginOpen(false);}}
                      className={`flex items-center px-6 py-3 ${isHeroVisible && isDarkHero ? 'text-white hover:text-gray-200' : 'text-gray-700 hover:text-[var(--lohn-primary)]'} transition-colors`}
                    >
                      <BookOpen className="w-5 h-5 mr-3 text-[var(--lohn-teal)]" />
                      <div>
                        <div className="font-medium">Handbücher & Anleitungen</div>
                        <div className={`text-sm ${isHeroVisible && isDarkHero ? 'text-gray-200' : 'text-gray-500'}`}>Für Kunden und Partner</div>
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
