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
      
      {/* Gradient Background like Login2 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--lohn-primary)] via-[var(--lohn-secondary)] to-[var(--lohn-purple)] relative overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-[var(--lohn-teal)]/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Login Card - Center */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-lg bg-white/95 backdrop-blur-lg border-white/20 shadow-2xl rounded-3xl p-8">
          
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
              Neuer Benutzer? <button className="text-[var(--lohn-primary)] hover:text-[var(--lohn-teal)] font-semibold transition-colors underline">Konto anlegen</button>
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
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
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
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="#1877f2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Weiter mit Facebook
              </Button>
              
              <Button 
                variant="outline"
                className="w-full h-12 border-gray-200 hover:bg-gray-50 rounded-xl transition-all"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="#000000">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                </svg>
                Weiter mit Apple
              </Button>
            </div>
          </form>

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