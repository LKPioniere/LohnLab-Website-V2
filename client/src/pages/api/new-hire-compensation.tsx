import { Code, Calculator, TrendingUp, Users, Shield, Zap, CheckCircle, ArrowRight, Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function NewHireCompensationAPI() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const apiRequestExample = `{
  "amount": 5000,
  "mode": "brutto",
  "goal": "maxErsparnis",
  "context": {
    "lohnbausteineToUse": [
      {
        "bausteinname": "Internet",
        "lohnbausteinId": "86361d71-0249-4915-badc-d678838b7cac",
        "maxAmount": 50,
        "paymentModes": ["givve"]
      },
      {
        "bausteinname": "Sachbezug P8",
        "lohnbausteinId": "d062b9c6-7c28-400d-b532-6fd26c1b2df9",
        "maxAmount": 50,
        "paymentModes": ["givve"]
      },
      {
        "bausteinname": "Handy",
        "lohnbausteinId": "2c709c20-bb67-43a0-b089-999f53043cf9",
        "maxAmount": 20,
        "paymentModes": ["givve"]
      },
      {
        "bausteinname": "Fahrtkosten P15",
        "lohnbausteinId": "cef7a7e2-f107-4a25-bde7-f6a4561dd65f",
        "maxAmount": 40,
        "paymentModes": ["givve"]
      }
    ]
  }
}`;

  const apiResponseExample = `{
  "calculationComplete": true,
  "normal": {
    "einstellungsgehalt": {
      "netto": 3054.75,
      "brutto": 5000,
      "lohnKosten": 6270.75
    }
  },
  "optimiert": {
    "einstellungsgehalt": {
      "netto": 3054.75,
      "brutto": 4663.21,
      "lohnKosten": 6038.10
    },
    "Lohnbausteine": [
      {
        "name": "Internet",
        "betrag": 50,
        "lohnNebenKosten": 13.81
      },
      {
        "name": "Sachbezug P8",
        "betrag": 50,
        "lohnNebenKosten": 0
      }
    ],
    "summeAllerLohnbausteine": 165
  }
}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-secondary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                <Calculator className="w-8 h-8" />
              </div>
              <div>
                <Badge className="bg-green-500 text-white mb-2">API Service</Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  New Hire Compensation API
                </h1>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Spezialisierte Lohnoptimierungs-Engine für neue Mitarbeiter mit drei strategischen Berechnungsmodi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[var(--lohn-primary)] hover:bg-gray-100 text-lg px-8 py-4 rounded-full"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                API Dokumentation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[var(--lohn-primary)] text-lg px-8 py-4 rounded-full"
              >
                Demo anfordern
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Markttrends 2025 - Warum jetzt?
            </h2>
            <p className="text-xl text-gray-600">Basierend auf aktuellen Marktdaten</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fachkräftemangel intensiviert sich</h3>
              <p className="text-3xl font-bold text-red-600 mb-2">76%</p>
              <p className="text-gray-600">der Gen-Z wählen Arbeitgeber nach Benefits aus</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lohnoptimierung wird Standard</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">50%</p>
              <p className="text-gray-600">der Unternehmen erhöhten ihr Benefit-Budget</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Personalisierung wichtiger</h3>
              <p className="text-gray-600 mt-4">One-size-fits-all funktioniert nicht mehr</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Digitalisierung der HR</h3>
              <p className="text-gray-600 mt-4">KI und Automatisierung werden erwartet</p>
            </div>
          </div>
        </div>
      </section>

      {/* API Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Drei strategische Berechnungsmodi
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">MaxErsparnis-Modus</h3>
                    <p className="text-gray-600">Maximiert die Arbeitgebereinsparungen bei gleichbleibendem Netto-Gehalt</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">MaxNetto-Modus</h3>
                    <p className="text-gray-600">Maximiert das Netto-Gehalt des Mitarbeiters bei gleichen Arbeitgeberkosten</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">FreeCalc-Modus</h3>
                    <p className="text-gray-600">Flexible Berechnung mit individuellen Parametern und Lohnbausteinen</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-6 relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">API Request Beispiel</h3>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                  onClick={() => copyToClipboard(apiRequestExample, 'request')}
                >
                  {copiedCode === 'request' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{apiRequestExample}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Zielgruppe und Anwendungsfälle
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Primäre Zielgruppe</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Große Unternehmen (500+ Mitarbeiter) mit häufigen Neueinstellungen</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Lohnabrechner und Steuerberater</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>HR-Dienstleister</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Personalberatungen</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sekundäre Zielgruppe</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                  <span>Mittelständische Unternehmen mit Wachstumsambitionen</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                  <span>Start-ups mit Skalierungsplänen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🚀 Einzigartige Mehrwerte für Unternehmen
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Für Arbeitgeber</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Kostenoptimierung</h4>
                    <p className="text-gray-600">Bis zu 30% Lohnnebenkosten-Ersparnis bei Neueinstellungen</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Wettbewerbsvorteil</h4>
                    <p className="text-gray-600">Attraktivere Angebote bei gleichen Kosten</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Automatisierte Expertise</h4>
                    <p className="text-gray-600">Komplexe Lohnoptimierung ohne Fachwissen</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Compliance-Sicherheit</h4>
                    <p className="text-gray-600">Alle Berechnungen rechtssicher und aktuell</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Für neue Mitarbeiter</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Höheres Netto</h4>
                    <p className="text-gray-600">Mehr Geld in der Tasche bei gleichem Brutto</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Flexible Benefits</h4>
                    <p className="text-gray-600">Individuelle Auswahl aus 15+ Lohnbausteinen</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sofortige Optimierung</h4>
                    <p className="text-gray-600">Von Tag 1 an optimiertes Gehaltspaket</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Response Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              API Response Beispiel
            </h2>
            <p className="text-xl text-gray-600">Ersparnis von 232,65€ bei gleichem Netto-Gehalt</p>
          </div>
          
          <div className="bg-gray-900 rounded-2xl p-6 relative max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">API Response</h3>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-400 hover:text-white"
                onClick={() => copyToClipboard(apiResponseExample, 'response')}
              >
                {copiedCode === 'response' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{apiResponseExample}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--lohn-primary)] to-[var(--lohn-secondary)] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für die Zukunft der Lohnoptimierung?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Integrieren Sie unsere API und starten Sie noch heute mit automatisierter Lohnoptimierung
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[var(--lohn-primary)] hover:bg-gray-100 text-lg px-8 py-4 rounded-full"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              API Zugang beantragen
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-[var(--lohn-primary)] text-lg px-8 py-4 rounded-full"
            >
              Technische Dokumentation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}