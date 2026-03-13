import { useState } from "react";
import { ChevronDown, ExternalLink, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import lohnlabLogo from "@/assets/logos/branding/lohnlab-logo-blue.png";

function AnimatedBurger({ isOpen }: { isOpen: boolean }) {
  const lineProps = {
    className: "block h-0.5 w-6 bg-gray-700 rounded-full",
  };
  return (
    <div className="w-6 h-5 flex flex-col justify-between items-center">
      <motion.span
        {...lineProps}
        animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        {...lineProps}
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
      <motion.span
        {...lineProps}
        animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </div>
  );
}

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileLoginOpen, setIsMobileLoginOpen] = useState(false);

  const navBgColor = "#ebedf3";
  const textColorClass = "text-gray-700";
  const logoSrc = lohnlabLogo;

  return (
    <nav
      className="z-50 transition-all duration-300"
      style={{ backgroundColor: navBgColor }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center h-10">
            <Link href="/">
              <img
                src={logoSrc}
                alt="LohnLab Logo"
                className="h-8 w-auto transition-all duration-300"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {/* Für Unternehmen Link - TEMPORÄR DEAKTIVIERT */}
            {/* Für Steuerberater Link - TEMPORÄR DEAKTIVIERT */}

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
                  <span
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100 bg-lohn-primary"
                  ></span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isLoginOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLoginOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 z-50">
                  <div className="w-80 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 animate-fadeIn">
                    <div className="px-6 py-3 border-b border-gray-200">
                      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Login & Ressourcen
                      </h3>
                    </div>
                    <a
                      href="https://cockpit.lohnlab.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block px-6 py-4 hover:bg-linear-to-r hover:from-blue-50 hover:to-transparent transition-all duration-300"
                      onClick={() => setIsLoginOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-12 h-12 shrink-0 bg-linear-to-br from-lohn-primary to-lohn-secondary rounded-xl flex items-center justify-center mr-4 shadow-sm group-hover:shadow-md transition-shadow">
                          <ExternalLink className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800 group-hover:text-lohn-primary transition-colors">
                            LohnLab Cockpit
                          </div>
                          <div className="text-sm text-gray-500">
                            Zur Anwendung
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://memberspot.lohnlab.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block px-6 py-4 hover:bg-linear-to-r hover:from-blue-50 hover:to-transparent transition-all duration-300"
                      onClick={() => setIsLoginOpen(false)}
                    >
                      <div className="flex items-center">
                        <div className="w-12 h-12 shrink-0 bg-linear-to-br from-lohn-primary to-lohn-secondary rounded-xl flex items-center justify-center mr-4 shadow-sm group-hover:shadow-md transition-shadow">
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800 group-hover:text-lohn-primary transition-colors">
                            Handbücher & Anleitungen
                          </div>
                          <div className="text-sm text-gray-500">
                            Für Kunden und Partner
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="ml-6">
              <Link href="/kontakt">
                <Button
                  className="bg-lohn-primary text-white hover:bg-lohn-secondary shadow-md transition-all duration-300 rounded-full px-6 py-2.5 font-semibold"
                >
                  Beratungsgespräch vereinbaren
                </Button>
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center h-10">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-700 hover:text-lohn-primary hover:bg-gray-100 transition-colors"
              aria-label="Menü öffnen"
            >
              <AnimatedBurger isOpen={isMobileMenuOpen} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              style={{ backgroundColor: navBgColor }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col space-y-2 py-4">
                {/* Mobile Unternehmen Link - TEMPORÄR DEAKTIVIERT */}
                {/* Mobile Für Steuerberater Link - TEMPORÄR DEAKTIVIERT */}

                {/* Mobile Login Dropdown */}
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => setIsMobileLoginOpen(!isMobileLoginOpen)}
                    className="w-full px-4 py-3 flex items-center justify-between text-gray-700 hover:text-lohn-primary transition-colors font-medium"
                  >
                    <span>Login</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isMobileLoginOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isMobileLoginOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                        style={{ backgroundColor: navBgColor }}
                      >
                        <div className="py-2">
                          <a
                            href="https://cockpit.lohnlab.de"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileLoginOpen(false);
                            }}
                            className="flex items-center px-6 py-3 text-gray-700 hover:text-lohn-primary transition-colors"
                          >
                            <div className="w-10 h-10 shrink-0 bg-linear-to-br from-lohn-primary to-lohn-secondary rounded-lg flex items-center justify-center mr-3">
                              <ExternalLink className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium">LohnLab Cockpit</div>
                              <div className="text-sm text-gray-500">
                                Zur Anwendung
                              </div>
                            </div>
                          </a>
                          <a
                            href="https://memberspot.lohnlab.de"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileLoginOpen(false);
                            }}
                            className="flex items-center px-6 py-3 text-gray-700 hover:text-lohn-primary transition-colors"
                          >
                            <div className="w-10 h-10 shrink-0 bg-linear-to-br from-lohn-primary to-lohn-secondary rounded-lg flex items-center justify-center mr-3">
                              <BookOpen className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium">
                                Handbücher & Anleitungen
                              </div>
                              <div className="text-sm text-gray-500">
                                Für Kunden und Partner
                              </div>
                            </div>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="px-4 pt-4">
                  <Link
                    href="/kontakt"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="bg-lohn-primary text-white hover:bg-lohn-secondary transition-colors rounded-full w-full">
                      Beratungsgespräch vereinbaren
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
