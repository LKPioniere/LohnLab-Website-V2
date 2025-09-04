import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import lohnlabLogo from "@/assets/lohnlab-logo-blue.png";

/**
 * Login5 - Adobe-Style mit artistischem Hintergrund
 */
export default function Login5() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      {/* Artistic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-gray-50 to-blue-50">
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-[var(--lohn-primary)]/20 to-[var(--lohn-teal)]/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-br from-[var(--lohn-purple)]/20 to-[var(--lohn-secondary)]/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-[var(--lohn-teal)]/30 to-[var(--lohn-primary)]/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Abstract Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1200 800">
            <path 
              d="M0,200 Q300,50 600,200 T1200,200" 
              stroke="url(#gradient1)" 
              strokeWidth="2" 
              fill="none"
              className="animate-pulse"
            />
            <path 
              d="M0,400 Q400,250 800,400 T1200,400" 
              stroke="url(#gradient2)" 
              strokeWidth="3" 
              fill="none"
              className="animate-pulse"
              style={{animationDelay: '0.5s'}}
            />
            <path 
              d="M0,600 Q200,450 400,600 T800,600 Q1000,450 1200,600" 
              stroke="url(#gradient3)" 
              strokeWidth="2" 
              fill="none"
              className="animate-pulse"
              style={{animationDelay: '1.5s'}}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(237, 97%, 20%)" />
                <stop offset="100%" stopColor="hsl(175, 51%, 64%)" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(256, 39%, 53%)" />
                <stop offset="100%" stopColor="hsl(225, 69%, 44%)" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(175, 51%, 64%)" />
                <stop offset="100%" stopColor="hsl(237, 97%, 20%)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(237, 97%, 20%) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Login Card - Center */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-lg bg-white/90 backdrop-blur-lg border-0 shadow-2xl rounded-3xl p-8">
          
          {/* Logo */}
          <div className="text-center mb-8">
            <img 
              src={lohnlabLogo} 
              alt="LohnLab Logo" 
              className="h-12 w-auto mx-auto mb-6"
            />
            <h1 className="text-2xl font-bold text-[var(--lohn-primary)] mb-2">
              Anmelden
            </h1>
            <p className="text-gray-600">
              Neuer Benutzer? <button className="text-[var(--lohn-primary)] hover:text-[var(--lohn-secondary)] font-semibold transition-colors">Konto anlegen</button>
            </p>
          </div>

          <form className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                E-Mail-Adresse
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border-gray-200 focus:border-[var(--lohn-primary)] focus:ring-[var(--lohn-primary)]/20 rounded-xl transition-all"
                placeholder="name@unternehmen.de"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Passwort
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 border-gray-200 focus:border-[var(--lohn-primary)] focus:ring-[var(--lohn-primary)]/20 rounded-xl pr-10 transition-all"
                  placeholder="Passwort eingeben"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-[var(--lohn-primary)] to-[var(--lohn-secondary)] hover:from-[var(--lohn-secondary)] hover:to-[var(--lohn-purple)] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              Weiter
            </Button>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 text-gray-500 bg-white font-medium">
                  Oder
                </span>
              </div>
            </div>

            {/* Social Logins */}
            <div className="space-y-3">
              <Button 
                variant="outline"
                className="w-full h-12 border-gray-200 hover:bg-gray-50 rounded-xl transition-all"
              >
                <FcGoogle className="w-5 h-5 mr-3" />
                Weiter mit Google
              </Button>
              
              <Button 
                variant="outline"
                className="w-full h-12 border-gray-200 hover:bg-gray-50 rounded-xl transition-all"
              >
                <div className="w-5 h-5 mr-3 bg-blue-600 rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">f</span>
                </div>
                Weiter mit Facebook
              </Button>
              
              <Button 
                variant="outline"
                className="w-full h-12 border-gray-200 hover:bg-gray-50 rounded-xl transition-all"
              >
                <div className="w-5 h-5 mr-3 bg-black rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">🍎</span>
                </div>
                Weiter mit Apple
              </Button>
            </div>
          </form>

          {/* Additional Links */}
          <div className="mt-8 space-y-3 text-center">
            <button className="text-[var(--lohn-primary)] hover:text-[var(--lohn-secondary)] text-sm transition-colors">
              Weitere Anmeldeoptionen
            </button>
            <div className="border-t border-gray-100 pt-4">
              <button className="text-[var(--lohn-primary)] hover:text-[var(--lohn-secondary)] text-sm font-medium transition-colors">
                Hilfe bei der Anmeldung
              </button>
            </div>
          </div>
        </Card>
      </div>

      {/* Chat Support */}
      <div className="fixed bottom-6 right-6 z-20">
        <div className="bg-[var(--lohn-primary)] text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:scale-105">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438C8.34 21.475 10.11 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}