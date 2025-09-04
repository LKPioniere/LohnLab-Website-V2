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
      <div className="flex-1 bg-white flex items-center justify-center p-8 relative">
        
        {/* Logo oben links */}
        <div className="absolute top-6 left-6">
          <img 
            src={lohnlabLogo} 
            alt="LohnLab Logo" 
            className="h-8 w-auto"
          />
        </div>

        <div className="w-full max-w-md space-y-6">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[var(--lohn-primary)] mb-2">
              Willkommen zurück
            </h1>
            <p className="text-gray-600">
              Melden Sie sich in Ihrem LohnLab Cockpit an
            </p>
          </div>

          <form className="space-y-5">
            {/* Social Logins */}
            <div className="space-y-3">
              <Button 
                variant="outline"
                className="w-full h-12 text-gray-700 border-gray-200 hover:bg-gray-50 transition-all"
              >
                <FcGoogle className="w-5 h-5 mr-3" />
                Mit Google anmelden
              </Button>
              
              <Button 
                variant="outline"
                className="w-full h-12 text-gray-700 border-gray-200 hover:bg-gray-50 transition-all"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 23 23" fill="none">
                  <path d="M21.5 11.5c0-6.351-5.149-11.5-11.5-11.5S-1.5 5.149-1.5 11.5 3.649 23 10 23c6.351 0 11.5-5.149 11.5-11.5z" fill="#f25022"/>
                  <path d="M21.5 11.5c0-6.351-5.149-11.5-11.5-11.5S-1.5 5.149-1.5 11.5 3.649 23 10 23c6.351 0 11.5-5.149 11.5-11.5z" fill="#00a4ef"/>
                  <path d="M21.5 11.5c0-6.351-5.149-11.5-11.5-11.5S-1.5 5.149-1.5 11.5 3.649 23 10 23c6.351 0 11.5-5.149 11.5-11.5z" fill="#7fba00"/>
                  <path d="M21.5 11.5c0-6.351-5.149-11.5-11.5-11.5S-1.5 5.149-1.5 11.5 3.649 23 10 23c6.351 0 11.5-5.149 11.5-11.5z" fill="#ffb900"/>
                  <rect x="1" y="1" width="10" height="10" fill="#f25022"/>
                  <rect x="12" y="1" width="10" height="10" fill="#00a4ef"/>
                  <rect x="1" y="12" width="10" height="10" fill="#7fba00"/>
                  <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
                </svg>
                Mit Microsoft anmelden
              </Button>
              
              <Button 
                variant="outline"
                className="w-full h-12 text-gray-700 border-gray-200 hover:bg-gray-50 transition-all"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="#000000">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                </svg>
                Mit Apple anmelden
              </Button>
            </div>

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
            <h2 className="text-2xl font-bold mb-8">
              Mehr erfahren
            </h2>
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
                        <h3 className="font-semibold text-lg mb-2 text-[var(--lohn-teal)] group-hover:text-white transition-colors">
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