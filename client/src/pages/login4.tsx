import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import lohnlabLogoWhite from "@/assets/lohnlab-logo-white.png";

/**
 * Login4 - Netflix-Style mit dynamischem Hintergrund
 */
export default function Login4() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // LohnLab Cockpit Features als "Kacheln"
  const cockpitFeatures = [
    "Lohnerhöhung ohne Mehrkosten", "DATEV Integration", "Automatische Optimierung", 
    "Steuerberater Portal", "Live-Berechnungen", "Compliance Management",
    "Mitarbeiterbindung", "Fachkräfte gewinnen", "Kostenersparnis bis 50%",
    "Intelligente Templates", "Flexible Vorgaben", "Rechtssicherheit",
    "API Schnittstellen", "Custom Workflows", "Analytics Dashboard",
    "Multi-Mandanten", "Cloud-basiert", "24/7 Support"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      {/* Dynamic Background - LohnLab Features Grid */}
      <div className="absolute inset-0 bg-black">
        <div className="grid grid-cols-6 gap-2 p-4 h-full opacity-40">
          {cockpitFeatures.map((feature, index) => (
            <div 
              key={index}
              className="relative bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-secondary)] rounded-lg p-4 flex items-center justify-center transform transition-transform hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: `fadeInScale 2s ease-out forwards`
              }}
            >
              <div className="text-white text-xs font-medium text-center leading-tight">
                {feature}
              </div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          ))}
        </div>
        
        {/* Main Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Login Form - Center */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-black/80 backdrop-blur-sm rounded-lg p-8 border border-gray-800">
          
          {/* Logo */}
          <div className="text-center mb-8">
            <img 
              src={lohnlabLogoWhite} 
              alt="LohnLab Logo" 
              className="h-10 w-auto mx-auto mb-6"
            />
            <h1 className="text-white text-2xl font-semibold">
              Einloggen
            </h1>
          </div>

          <form className="space-y-4">
            {/* Email Input */}
            <Input
              type="email"
              placeholder="E-Mail-Adresse oder Handynummer"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-red-600 focus:ring-red-600/20 rounded-sm"
            />

            {/* Password Input */}
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Passwort"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 bg-gray-800 border-gray-600 text-white placeholder-gray-400 pr-10 focus:border-red-600 focus:ring-red-600/20 rounded-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Login Button */}
            <Button 
              type="submit" 
              className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-medium rounded-sm border-0 transition-all"
            >
              Einloggen
            </Button>

            {/* OR Divider */}
            <div className="text-center text-gray-400 my-6">
              ODER
            </div>

            {/* Login Code */}
            <Button 
              variant="outline"
              className="w-full h-12 bg-gray-700 border-gray-600 text-white hover:bg-gray-600 rounded-sm transition-all"
            >
              Login-Code verwenden
            </Button>

            {/* Forgot Password */}
            <div className="text-center">
              <button className="text-white text-sm hover:underline transition-all">
                Passwort vergessen?
              </button>
            </div>
          </form>

          {/* Remember Me */}
          <div className="flex items-center space-x-2 mt-6">
            <input 
              type="checkbox" 
              id="remember-netflix" 
              className="rounded border-gray-600 text-red-600 focus:ring-red-600 bg-gray-800"
            />
            <label htmlFor="remember-netflix" className="text-white text-sm">
              Benutzerdaten merken
            </label>
          </div>

          {/* Sign Up */}
          <div className="mt-6 text-gray-400 text-sm">
            Neu bei LohnLab?{" "}
            <button className="text-white hover:underline font-medium">
              Jetzt registrieren
            </button>
            .
          </div>

          {/* reCAPTCHA Info */}
          <div className="mt-6 text-xs text-gray-500 leading-relaxed">
            Diese Seite ist mit reCAPTCHA geschützt, um sicherzustellen, dass Sie kein Bot sind.{" "}
            <button className="text-blue-400 hover:underline">
              Weitere Infos
            </button>
            .
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}