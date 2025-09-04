import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import lohnlabLogoWhite from "@/assets/lohnlab-logo-white.png";

/**
 * Login3 - IKEA-Style mit blauem LohnLab-Hintergrund
 */
export default function Login3() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex">
      
      {/* Left Side - LohnLab Branding */}
      <div className="flex-1 bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-secondary)] p-12 flex flex-col justify-between relative overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[var(--lohn-teal)]/20 rounded-full blur-2xl"></div>
        </div>

        {/* Back Button */}
        <button className="self-start text-white/80 hover:text-white transition-colors relative z-10">
          <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Main Content */}
        <div className="relative z-10">
          <img 
            src={lohnlabLogoWhite} 
            alt="LohnLab Logo" 
            className="h-12 w-auto mb-12"
          />
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Melden Sie sich mit Ihrer E-Mail-Adresse an.
          </h1>
          
          <p className="text-blue-100 text-lg leading-relaxed max-w-md">
            Nutzen Sie das LohnLab Cockpit für intelligente Lohnoptimierung 
            und sparen Sie bis zu 50% Ihrer Lohnkosten.
          </p>
        </div>

        {/* Footer */}
        <div className="text-white/60 text-sm relative z-10">
          <p>LohnLab © 2025 - Cookies-Bestimmung und Datenschutzerklärung</p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-6">
              Bitte gib deine E-Mail-Adresse ein, um einen einmaligen Code zu erhalten.
            </p>
          </div>

          <form className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                E-Mail-Adresse
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 border-gray-300 focus:border-[var(--lohn-primary)] focus:ring-[var(--lohn-primary)] rounded-sm"
                placeholder="name@unternehmen.de"
              />
            </div>

            {/* Continue Button */}
            <Button 
              type="submit" 
              className="w-full h-12 bg-black hover:bg-gray-800 text-white font-medium rounded-sm transition-all"
            >
              Weiter
            </Button>

            {/* Forgot Password */}
            <div className="text-center">
              <button className="text-sm text-gray-600 hover:text-[var(--lohn-primary)] transition-colors underline">
                Melde dich mit deinem Passwort an
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 text-gray-500 bg-white">– Oder –</span>
              </div>
            </div>

            {/* Alternative Login Methods */}
            <div className="space-y-4">
              <p className="text-center text-gray-600 text-sm font-medium">
                Du hast noch kein LohnLab Profil?
              </p>
              
              <Button 
                variant="outline"
                className="w-full h-12 border-gray-300 hover:bg-gray-50 rounded-sm font-medium transition-all"
              >
                Privatkundenprofil erstellen
              </Button>
              
              <Button 
                variant="outline"
                className="w-full h-12 border-gray-300 hover:bg-gray-50 rounded-sm font-medium transition-all"
              >
                Unternehmenprofil erstellen
              </Button>

              {/* Social Login */}
              <Button 
                variant="outline"
                className="w-full h-12 border-gray-300 hover:bg-gray-50 rounded-sm transition-all"
              >
                <FcGoogle className="w-5 h-5 mr-3" />
                Mit Google anmelden
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}