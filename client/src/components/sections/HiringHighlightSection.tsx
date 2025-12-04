import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, Zap, Target, Award } from "lucide-react";
import BenefitsList from "@/components/common/BenefitsList";
import { HIRING_BENEFITS } from "@/constants/benefits";

/**
 * Neueinstellungen Highlight Sektion
 */
export default function HiringHighlightSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-teal)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Linke Spalte - Content */}
          <div>
            <div className="flex items-center mb-6">
              <Users className="w-12 h-12 text-[var(--lohn-accent)] mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Mühelos Fachkräfte gewinnen
              </h2>
            </div>
            
            <p className="text-xl text-blue-100 mb-8">
              Steigere deine Attraktivität als Arbeitgeber und optimiere 
              Neueinstellungen von Anfang an - mit intelligenter Gehaltsgestaltung.
            </p>

            <div className="space-y-6 mb-8">
              {HIRING_BENEFITS.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-[var(--lohn-accent)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{benefit.title}</h4>
                    <p className="text-blue-100">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/neueinstellungen">
              <Button 
                size="lg" 
                className="bg-white text-[var(--lohn-primary)] hover:bg-gray-100 shadow-lg"
              >
                Mehr zu Neueinstellungen erfahren
              </Button>
            </Link>
          </div>

          {/* Rechte Spalte - Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <Award className="w-16 h-16 text-[var(--lohn-accent)] mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Top-Arbeitgeber werden</h3>
                <p className="text-blue-100">Mit optimierten Gehaltsangeboten</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Benefits</span>
                    <span className="text-2xl font-bold text-[var(--lohn-accent)]">kostenneutral</span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Chance auf Talente</span>
                    <span className="text-2xl font-bold text-[var(--lohn-accent)]">sehr hoch</span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Umsetzung</span>
                    <span className="text-2xl font-bold text-[var(--lohn-accent)]">spielend leicht</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}