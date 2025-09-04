import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import lohnlabLogoWhite from "@/assets/lohnlab-logo-white.png";

/**
 * Login1 - Spotify-Style (Dunkel, minimalistisch)
 */
export default function Login1() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      
      {/* Logo */}
      <div className="mb-12">
        <img 
          src={lohnlabLogoWhite} 
          alt="LohnLab Logo" 
          className="h-12 w-auto"
        />
      </div>

      {/* Login Form */}
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center mb-10">
          <h1 className="text-white text-2xl font-bold mb-2">
            Bei LohnLab anmelden
          </h1>
          <p className="text-gray-400 text-sm">
            Bitte melde dich mit deinem Account an
          </p>
        </div>

        {/* Social Login */}
        <Button 
          className="w-full h-12 bg-white text-black hover:bg-gray-100 font-medium border-0 rounded-full"
        >
          <FcGoogle className="w-5 h-5 mr-3" />
          Weiter mit Google
        </Button>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 text-gray-400 bg-black">oder</span>
          </div>
        </div>

        {/* Email Input */}
        <div className="space-y-2">
          <label className="text-white text-sm font-medium">
            E-Mail-Adresse oder Benutzername
          </label>
          <div className="relative">
            <Input
              type="email"
              placeholder="E-Mail-Adresse oder Benutzername"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 h-12 focus:border-white focus:ring-white rounded-md"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="space-y-2">
          <label className="text-white text-sm font-medium">
            Passwort
          </label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Passwort"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 h-12 pr-10 focus:border-white focus:ring-white rounded-md"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            id="remember" 
            className="rounded border-gray-600 text-green-500 focus:ring-green-500 bg-gray-900"
          />
          <label htmlFor="remember" className="text-white text-sm">
            Angemeldet bleiben
          </label>
        </div>

        {/* Login Button */}
        <Button 
          type="submit" 
          className="w-full h-12 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full border-0 transition-all transform hover:scale-105"
        >
          Anmelden
        </Button>

        {/* Forgot Password */}
        <div className="text-center">
          <button className="text-white text-sm underline hover:no-underline transition-all">
            Passwort vergessen?
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 pt-8"></div>

        {/* Sign Up */}
        <div className="text-center text-gray-400 text-sm">
          Du hast noch kein LohnLab-Konto?
          <br />
          <button className="text-white underline hover:no-underline mt-2 font-medium">
            Für LohnLab registrieren
          </button>
        </div>
      </div>
    </div>
  );
}