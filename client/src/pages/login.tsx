import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Shield } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--lohn-primary)] via-[var(--lohn-secondary)] to-[var(--lohn-purple)] flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--lohn-teal)]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--lohn-purple)]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Login Card */}
      <Card className="w-full max-w-md relative z-10 bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
        <CardHeader className="space-y-6 text-center pb-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-teal)] rounded-2xl flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-[var(--lohn-primary)] mb-2">
                LohnLab Cockpit
              </CardTitle>
              <CardDescription className="text-gray-600 text-base">
                Willkommen zurück! Melden Sie sich in Ihrem Account an.
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Social Login Buttons */}
          <div className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full h-12 text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all"
            >
              <FcGoogle className="w-5 h-5 mr-3" />
              Mit Google anmelden
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full h-12 text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all"
            >
              <div className="w-5 h-5 mr-3 bg-blue-600 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">M</span>
              </div>
              Mit Microsoft anmelden
            </Button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-gray-500 font-medium">
                Oder mit E-Mail
              </span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                E-Mail Adresse
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@unternehmen.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 border-gray-200 focus:border-[var(--lohn-primary)] focus:ring-[var(--lohn-primary)]/20 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-semibold text-gray-700">
                Passwort
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Ihr Passwort eingeben"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-12 border-gray-200 focus:border-[var(--lohn-primary)] focus:ring-[var(--lohn-primary)]/20 transition-all"
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

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-[var(--lohn-primary)] hover:text-[var(--lohn-secondary)] transition-colors font-medium"
              >
                Passwort vergessen?
              </button>
            </div>

            {/* Login Button */}
            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-[var(--lohn-primary)] to-[var(--lohn-secondary)] hover:from-[var(--lohn-secondary)] hover:to-[var(--lohn-purple)] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Anmelden
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          {/* Footer */}
          <div className="pt-6 border-t border-gray-100">
            <p className="text-center text-sm text-gray-600">
              Noch kein Account?{" "}
              <button className="text-[var(--lohn-primary)] hover:text-[var(--lohn-secondary)] font-semibold transition-colors">
                Jetzt registrieren
              </button>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Security Badge */}
      <div className="absolute bottom-6 left-6 flex items-center space-x-2 text-white/80 text-sm">
        <Shield className="w-4 h-4" />
        <span>SSL-verschlüsselt & DSGVO-konform</span>
      </div>
    </div>
  );
}