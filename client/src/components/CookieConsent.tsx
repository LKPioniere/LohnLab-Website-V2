import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Settings, Shield, Asterisk } from "lucide-react";
import {
  hasConsent,
  saveConsent,
  acceptAll,
  acceptNecessaryOnly,
  type ConsentState,
} from "@/lib/cookie-consent";
import { getGenderEnabled, setGenderEnabled } from "@/lib/gender";

const SHOW_BANNER_EVENT = "show-cookie-banner";

export function showCookieBanner() {
  window.dispatchEvent(new CustomEvent(SHOW_BANNER_EVENT));
}

function GenderStarInline({ active }: { active: boolean }) {
  return (
    <span className="relative inline-flex w-4 h-4 align-text-bottom">
      <Asterisk className="w-4 h-4" />
      {!active && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="block w-[20px] h-[2px] bg-current rotate-45 rounded-full" />
        </span>
      )}
    </span>
  );
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [genderEnabled, setGenderLocal] = useState(getGenderEnabled);

  useEffect(() => {
    if (!hasConsent()) {
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handler = () => {
      setShowDetails(false);
      setStatistics(false);
      setMarketing(false);
      setGenderLocal(getGenderEnabled());
      setVisible(true);
    };
    window.addEventListener(SHOW_BANNER_EVENT, handler);
    return () => window.removeEventListener(SHOW_BANNER_EVENT, handler);
  }, []);

  const handleAcceptAll = () => {
    acceptAll();
    setVisible(false);
  };

  const handleAcceptNecessary = () => {
    acceptNecessaryOnly();
    setVisible(false);
  };

  const handleSaveCustom = () => {
    const consent: ConsentState = {
      necessary: true,
      statistics,
      marketing,
    };
    saveConsent(consent);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[9999]"
        >
          <div className="bg-white border-t border-gray-200 shadow-[0_-4px_30px_rgba(0,0,0,0.1)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
              <div className="flex items-start gap-3 mb-4">
                <Shield className="w-5 h-5 text-lohn-purple shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-sm">
                    Datenschutz & Einstellungen
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Wir nutzen Cookies und externe Dienste, um dir die beste Erfahrung zu bieten.
                  </p>
                </div>
              </div>

              {/* Gender toggle - always visible in default view */}
              <div className="flex items-center justify-between py-2.5 px-3 mb-3 rounded-lg bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-2">
                  <GenderStarInline active={genderEnabled} />
                  <span className="text-sm text-gray-700 font-medium">
                    Gendergerechte Sprache
                  </span>
                </div>
                <Switch
                  checked={genderEnabled}
                  onCheckedChange={(val) => {
                    setGenderLocal(val);
                    setGenderEnabled(val);
                  }}
                />
              </div>

              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3 mb-4 pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex-1 pr-4">
                          <p className="font-semibold text-sm text-gray-900">Notwendig</p>
                          <p className="text-xs text-gray-500">Grundlegende Funktionen. Immer aktiv.</p>
                        </div>
                        <Switch checked disabled className="opacity-60" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex-1 pr-4">
                          <p className="font-semibold text-sm text-gray-900">Statistik</p>
                          <p className="text-xs text-gray-500">Anonyme Nutzungsstatistiken (Vercel Analytics).</p>
                        </div>
                        <Switch checked={statistics} onCheckedChange={setStatistics} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex-1 pr-4">
                          <p className="font-semibold text-sm text-gray-900">Marketing & Externe Medien</p>
                          <p className="text-xs text-gray-500">Videos (Wistia), Kalender (HubSpot) und externe Inhalte.</p>
                        </div>
                        <Switch checked={marketing} onCheckedChange={setMarketing} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row gap-2">
                {showDetails ? (
                  <Button
                    onClick={handleSaveCustom}
                    className="flex-1 bg-lohn-primary text-white hover:bg-lohn-secondary rounded-full font-semibold h-9 text-sm"
                  >
                    Auswahl speichern
                  </Button>
                ) : (
                  <>
                    <Button
                      onClick={handleAcceptNecessary}
                      variant="outline"
                      className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full font-semibold h-9 text-sm"
                    >
                      Nur Notwendige
                    </Button>
                    <Button
                      onClick={handleAcceptAll}
                      className="flex-1 bg-lohn-primary text-white hover:bg-lohn-secondary rounded-full font-semibold h-9 text-sm"
                    >
                      Alle zulassen
                    </Button>
                  </>
                )}
              </div>

              <div className="flex items-center justify-center gap-4 mt-2.5 text-xs text-gray-400">
                {!showDetails && (
                  <button
                    onClick={() => setShowDetails(true)}
                    className="flex items-center gap-1 hover:text-gray-700 transition-colors"
                  >
                    <Settings className="w-3 h-3" />
                    Einstellungen
                  </button>
                )}
                <Link
                  href="/datenschutz"
                  className="hover:text-gray-700 transition-colors"
                  onClick={() => setVisible(false)}
                >
                  Datenschutzerklärung
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
