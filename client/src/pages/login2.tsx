import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock, ArrowRight, CheckCircle, TrendingUp, Users, Calculator } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "wouter";
import lohnlabLogo from "@/assets/lohnlab-logo-blue.png";

/**
 * Login2 - Split-Screen mit Cockpit-Mehrwerten rechts
 */
export default function Login2() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const cockpitFeatures = [
    {
      icon: TrendingUp,
      title: "Lohnoptimierung",
      description: "Bis zu 50% Lohnkosten sparen durch intelligente Gehaltsgestaltung",
      link: "/loesungen/lohnoptimierung"
    },
    {
      icon: Users,
      title: "Lohnerhöhungen",
      description: "Mitarbeiterzufriedenheit steigern ohne Mehrkosten für das Unternehmen",
      link: "/loesungen/lohnerhoehung"
    },
    {
      icon: Calculator,
      title: "Neueinstellungen",
      description: "Attraktive Gehaltsangebote für Fachkräfte kostenneutral gestalten",
      link: "/loesungen/neueinstellungen"
    }
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          
          {/* Logo */}
          <div className="text-center mb-8">
            <img 
              src={lohnlabLogo} 
              alt="LohnLab Logo" 
              className="h-10 w-auto mx-auto mb-6"
            />
            <h1 className="text-2xl font-bold text-[var(--lohn-primary)] mb-2">
              Willkommen zurück
            </h1>
            <p className="text-gray-600">
              Melden Sie sich in Ihrem LohnLab Cockpit an
            </p>
          </div>

          <form className="space-y-5">
            {/* Social Login */}
            <Button 
              variant="outline"
              className="w-full h-12 text-gray-700 border-gray-200 hover:bg-gray-50 transition-all"
            >
              <FcGoogle className="w-5 h-5 mr-3" />
              Mit Google anmelden
            </Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-4 text-gray-500 font-medium">
                  Oder mit E-Mail
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                E-Mail Adresse
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="email"
                  placeholder="name@unternehmen.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 border-gray-200 focus:border-[var(--lohn-primary)] focus:ring-[var(--lohn-primary)]/20"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Passwort
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Ihr Passwort"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-12 border-gray-200 focus:border-[var(--lohn-primary)] focus:ring-[var(--lohn-primary)]/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="h-4 w-4 text-[var(--lohn-primary)] focus:ring-[var(--lohn-primary)] border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                  Angemeldet bleiben
                </label>
              </div>
              <button className="text-sm text-[var(--lohn-primary)] hover:text-[var(--lohn-secondary)] transition-colors">
                Passwort vergessen?
              </button>
            </div>

            {/* Login Button */}
            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-[var(--lohn-primary)] to-[var(--lohn-secondary)] hover:from-[var(--lohn-secondary)] hover:to-[var(--lohn-purple)] text-white font-semibold transition-all duration-300"
            >
              Anmelden
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-600">
              Noch kein Account?{" "}
              <button className="text-[var(--lohn-primary)] hover:text-[var(--lohn-secondary)] font-semibold">
                Jetzt registrieren
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Cockpit Features */}
      <div className="flex-1 bg-gradient-to-br from-[var(--lohn-primary)] via-[var(--lohn-secondary)] to-[var(--lohn-purple)] p-8 flex items-center justify-center relative overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-[var(--lohn-teal)]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full max-w-lg text-white">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Entdecken Sie das LohnLab Cockpit
            </h2>
            <p className="text-blue-100 text-lg">
              Revolutionäre Lohnoptimierung für moderne Unternehmen
            </p>
          </div>

          <div className="space-y-6">
            {cockpitFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/20 transition-all cursor-pointer group">
                  <Link href={feature.link}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-[var(--lohn-teal)]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-[var(--lohn-teal)] transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-blue-100 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                        <div className="flex items-center mt-3 text-[var(--lohn-teal)] text-sm font-medium">
                          Mehr erfahren
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="flex items-center justify-center space-x-2 text-sm text-blue-100">
              <CheckCircle className="w-4 h-4" />
              <span>Über 1.000 Unternehmen vertrauen bereits auf LohnLab</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}