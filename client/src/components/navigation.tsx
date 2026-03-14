import { useState } from "react";
import { ChevronDown, ExternalLink, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import lohnlabLogo from "@/assets/logos/branding/lohnlab-logo-white.png";

function AnimatedBurger({ isOpen }: { isOpen: boolean }) {
  const lineProps = {
    className: "block h-0.5 w-6 bg-white rounded-full",
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

  const navBgColor = "#021065";
  const textColorClass = "text-white";
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
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100 bg-white"
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
                  <div className="w-72 rounded-xl shadow-2xl border border-white/15 py-1 animate-fadeIn backdrop-blur-xl" style={{ backgroundColor: "rgba(2, 16, 101, 0.95)" }}>
                    <a
                      href="https://cockpit.lohnlab.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 px-5 py-3.5 hover:bg-white/10 transition-all duration-200"
                      onClick={() => setIsLoginOpen(false)}
                    >
                      <div className="w-9 h-9 shrink-0 bg-white/15 rounded-lg flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">LohnLab Cockpit</div>
                        <div className="text-xs text-white/50">Zur Anwendung</div>
                      </div>
                    </a>
                    <div className="mx-4 border-t border-white/10" />
                    <a
                      href="https://memberspot.lohnlab.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 px-5 py-3.5 hover:bg-white/10 transition-all duration-200"
                      onClick={() => setIsLoginOpen(false)}
                    >
                      <div className="w-9 h-9 shrink-0 bg-white/15 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Handbücher</div>
                        <div className="text-xs text-white/50">Für Kunden und Partner</div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="ml-6">
              <Link href="/kontakt">
                <Button
                  className="bg-white text-lohn-primary hover:bg-gray-100 shadow-md transition-all duration-300 rounded-full px-6 py-2.5 font-semibold"
                >
                  Beratungsgespräch vereinbaren
                </Button>
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center h-10">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-white hover:text-white/80 hover:bg-white/10 transition-colors"
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
                <div className="border-b border-white/20">
                  <button
                    onClick={() => setIsMobileLoginOpen(!isMobileLoginOpen)}
                    className="w-full px-4 py-3 flex items-center justify-between text-white hover:text-white/80 transition-colors font-medium"
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
                            className="flex items-center px-6 py-3 text-white hover:text-white/80 transition-colors"
                          >
                            <div className="w-10 h-10 shrink-0 bg-white/15 rounded-lg flex items-center justify-center mr-3">
                              <ExternalLink className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium">LohnLab Cockpit</div>
                              <div className="text-sm text-white/60">
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
                            className="flex items-center px-6 py-3 text-white hover:text-white/80 transition-colors"
                          >
                            <div className="w-10 h-10 shrink-0 bg-white/15 rounded-lg flex items-center justify-center mr-3">
                              <BookOpen className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium">
                                Handbücher & Anleitungen
                              </div>
                              <div className="text-sm text-white/60">
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
                    <Button className="bg-white text-lohn-primary hover:bg-gray-100 transition-colors rounded-full w-full">
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
