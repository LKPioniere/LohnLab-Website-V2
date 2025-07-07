import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Calculator, TrendingUp, Settings, Shield, Zap, CheckCircle, Copy, ExternalLink, Sparkles, Database, FileText, Gift, Target, Users, ArrowRight, Workflow, Package } from "lucide-react";

export default function NewHireCompensationAPI() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedMode, setSelectedMode] = useState<'maxErsparnis' | 'maxNetto' | 'freeCalc'>('maxErsparnis');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Simple JSON syntax highlighter
  const highlightJSON = (json: string) => {
    return json
      .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
        let cls = 'text-gray-400'; // default
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'text-blue-400'; // key
          } else {
            cls = 'text-green-400'; // string
          }
        } else if (/true|false/.test(match)) {
          cls = 'text-yellow-400'; // boolean
        } else if (/null/.test(match)) {
          cls = 'text-red-400'; // null
        } else {
          cls = 'text-purple-400'; // number
        }
        return `<span class="${cls}">${match}</span>`;
      });
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
    "summeAllerLohnbausteine": 165,
    "Nebenkosten": {
      "summeAllerNebenkosten": 232.65
    }
  }
}`;

  const getOptionsListResponse = `{
  "errorText": "",
  "lohnbausteine": [
    {
      "bausteinname": "Fahrtkosten",
      "lohnbausteinId": "cef7a7e2-f107-4a25-bde7-f6a4561dd65f",
      "paymentModes": ["givve", "cash"],
      "maxAmount": 230
    },
    {
      "bausteinname": "CleverLunch",
      "lohnbausteinId": "9e0dfb22-7d81-4c0d-9f0e-eb98aab05959",
      "paymentModes": ["givve"],
      "maxAmount": 108
    },
    {
      "bausteinname": "Handy",
      "lohnbausteinId": "2c709c20-bb67-43a0-b089-999f53043cf9",
      "paymentModes": ["givve", "cash", "non_cash"],
      "maxAmount": 50
    },
    {
      "bausteinname": "Job Ticket",
      "lohnbausteinId": "1301ec10-f9f6-4f88-9b97-6d7d4c840ad1",
      "paymentModes": ["givve", "non_cash"],
      "maxAmount": 230
    },
    {
      "bausteinname": "Internet",
      "lohnbausteinId": "86361d71-0249-4915-badc-d678838b7cac",
      "paymentModes": ["givve", "cash"],
      "maxAmount": 50
    },
    {
      "bausteinname": "Sachbezug P8",
      "lohnbausteinId": "d062b9c6-7c28-400d-b532-6fd26c1b2df9",
      "paymentModes": ["givve"],
      "maxAmount": 50
    }
  ]
}`;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--lohn-primary)] via-[var(--lohn-secondary)] to-[var(--lohn-purple)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-green-500 text-white mb-4 px-4 py-1">API Service</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              New Hire Compensation API
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Berechnen Sie neue Gehälter exakt und profitieren Sie von unglaublicher Flexibilität bei der Dateneingabe
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={() => document.getElementById('api-docs')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-[var(--lohn-primary)] hover:bg-gray-100 transition-colors rounded-full px-8 py-4 font-semibold"
              >
                API Dokumentation
              </Button>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[var(--lohn-primary)] transition-colors rounded-full px-8 py-4 font-semibold"
              >
                Demo anfordern
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The AHA Effect - Main Value Proposition */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
              Der Game-Changer für Ihre Gehaltsberechnungen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eine API, die mehr kann als nur rechnen - sie optimiert, spart und begeistert
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Flexibility Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-secondary)] rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-4">Unglaubliche Flexibilität</h3>
              <p className="text-gray-600 mb-6">
                Berechnen Sie Gehälter basierend auf Netto, Brutto oder Budget. Definieren Sie eigene Parameter und nutzen Sie beliebige Lohnbausteine.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-[var(--lohn-primary)] font-medium">
                  💡 Von einfachen Gehaltsberechnungen bis zu komplexen Szenarien mit 15+ Lohnbausteinen
                </p>
              </div>
            </div>

            {/* Template System Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--lohn-teal)] to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-4">Intelligente Templates</h3>
              <p className="text-gray-600 mb-6">
                Erstellen Sie vorkonfigurierte Szenarien für verschiedene Abteilungen oder Positionen. Einmal definiert, immer wieder nutzen.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-[var(--lohn-primary)] font-medium">
                  ⚡ Außendienst = Dienstwagen, Homeoffice = Jobticket + Home-Office-Pauschale
                </p>
              </div>
            </div>

            {/* Optimization Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--lohn-purple)] to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-4">Automatische Optimierung</h3>
              <p className="text-gray-600 mb-6">
                Die API findet automatisch die beste Kombination aus Lohnbausteinen für Ihre Ziele - mehr Netto oder weniger Kosten.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-[var(--lohn-primary)] font-medium">
                  🎯 Bis zu 232,65€ Ersparnis pro Mitarbeiter möglich
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Optimization Modes Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
              Das i-Tüpfelchen: Drei Optimierungsmodi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wählen Sie den perfekten Modus für Ihre Ziele
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* MaxErsparnis Mode */}
            <div 
              className={`bg-white rounded-2xl p-8 shadow-lg cursor-pointer transition-all ${
                selectedMode === 'maxErsparnis' ? 'ring-4 ring-[var(--lohn-primary)] scale-105' : 'hover:shadow-xl'
              }`}
              onClick={() => setSelectedMode('maxErsparnis')}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                {selectedMode === 'maxErsparnis' && (
                  <Badge className="bg-[var(--lohn-primary)] text-white">Aktiv</Badge>
                )}
              </div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-3">MaxErsparnis</h3>
              <p className="text-gray-600 mb-4">
                Viel Geld sparen: Maximiert Ihre Einsparungen bei gleichbleibendem Netto-Gehalt des Mitarbeiters
              </p>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-green-700 font-medium">
                  ✓ Bis zu 232,65€ Ersparnis pro Mitarbeiter
                </p>
              </div>
            </div>

            {/* MaxNetto Mode */}
            <div 
              className={`bg-white rounded-2xl p-8 shadow-lg cursor-pointer transition-all ${
                selectedMode === 'maxNetto' ? 'ring-4 ring-[var(--lohn-primary)] scale-105' : 'hover:shadow-xl'
              }`}
              onClick={() => setSelectedMode('maxNetto')}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                {selectedMode === 'maxNetto' && (
                  <Badge className="bg-[var(--lohn-primary)] text-white">Aktiv</Badge>
                )}
              </div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-3">MaxNetto</h3>
              <p className="text-gray-600 mb-4">
                Jede Fachkraft bekommen: Maximiert das Netto-Gehalt bei gleichbleibenden Arbeitgeberkosten
              </p>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">
                  ✓ Mehr Gehalt zum gleichen Preis
                </p>
              </div>
            </div>

            {/* FreeCalc Mode */}
            <div 
              className={`bg-white rounded-2xl p-8 shadow-lg cursor-pointer transition-all ${
                selectedMode === 'freeCalc' ? 'ring-4 ring-[var(--lohn-primary)] scale-105' : 'hover:shadow-xl'
              }`}
              onClick={() => setSelectedMode('freeCalc')}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-purple-600" />
                </div>
                {selectedMode === 'freeCalc' && (
                  <Badge className="bg-[var(--lohn-primary)] text-white">Aktiv</Badge>
                )}
              </div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-3">FreeCalc</h3>
              <p className="text-gray-600 mb-4">
                Gehalt plus On-Top Benefits: Freie Berechnung mit individuellen Lohnbausteinen
              </p>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-sm text-purple-700 font-medium">
                  ✓ Maximale Flexibilität
                </p>
              </div>
            </div>
          </div>

          {/* API Example based on selected mode */}
          <div className="bg-gray-900 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">API Request - {selectedMode === 'maxErsparnis' ? 'MaxErsparnis Beispiel' : selectedMode === 'maxNetto' ? 'MaxNetto Beispiel' : 'FreeCalc Beispiel'}</h3>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-400 hover:text-white"
                onClick={() => copyToClipboard(apiRequestExample, 'request')}
              >
                {copiedCode === 'request' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
            <pre 
              className="text-sm overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: highlightJSON(apiRequestExample) }}
            />
          </div>
        </div>
      </section>

      {/* API Documentation Section */}
      <section id="api-docs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
              API Dokumentation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Einfache Integration, kraftvolle Ergebnisse
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Response Example */}
            <div>
              <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-6">Response Beispiel</h3>
              <div className="bg-gray-900 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-semibold">API Response</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-gray-400 hover:text-white"
                    onClick={() => copyToClipboard(apiResponseExample, 'response')}
                  >
                    {copiedCode === 'response' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                <pre 
                  className="text-sm overflow-x-auto"
                  dangerouslySetInnerHTML={{ __html: highlightJSON(apiResponseExample) }}
                />
              </div>
              <div className="mt-4 bg-green-100 p-4 rounded-lg">
                <p className="text-sm text-green-800 font-medium">
                  💰 Ersparnis: 232,65€ pro Mitarbeiter bei gleichem Netto!
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-6">Hauptfunktionen</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-start">
                    <Database className="w-5 h-5 text-[var(--lohn-teal)] mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[var(--lohn-primary)] mb-2">Flexible Dateneingabe</h4>
                      <p className="text-gray-600 text-sm">
                        Berechnen Sie basierend auf Netto, Brutto oder Budget - die API passt sich Ihren Bedürfnissen an
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-start">
                    <Settings className="w-5 h-5 text-[var(--lohn-teal)] mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[var(--lohn-primary)] mb-2">Intelligente Optimierung</h4>
                      <p className="text-gray-600 text-sm">
                        Automatische Auswahl der besten Lohnbausteine für Ihre Ziele
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-[var(--lohn-teal)] mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[var(--lohn-primary)] mb-2">Rechtssicher & Aktuell</h4>
                      <p className="text-gray-600 text-sm">
                        Immer auf dem neuesten Stand der Gesetzgebung und Sozialversicherung
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lohnbausteine API Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
              Verfügbare Lohnbausteine
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Abrufen aller verfügbaren Lohnbausteine mit der getOptionsList API
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-[var(--lohn-primary)]">getOptionsList Endpoint</h3>
                <p className="text-gray-600 mt-1">Erhalten Sie eine vollständige Liste aller verfügbaren Lohnbausteine</p>
              </div>
              <Badge className="bg-green-100 text-green-800">GET Request</Badge>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <code className="text-sm text-gray-800">
                https://iszozxpglzuicbukmhah.supabase.co/functions/v1/getOptionsList
              </code>
            </div>

            <div className="bg-gray-900 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-semibold">Response</span>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                  onClick={() => copyToClipboard(getOptionsListResponse, 'optionsList')}
                >
                  {copiedCode === 'optionsList' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <pre 
                className="text-sm overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: highlightJSON(getOptionsListResponse) }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <Gift className="w-8 h-8 text-blue-600 mb-3" />
              <h4 className="font-semibold text-[var(--lohn-primary)] mb-2">15+ Lohnbausteine</h4>
              <p className="text-sm text-gray-600">Von Fahrtkosten bis Sachbezug - alles verfügbar</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <Calculator className="w-8 h-8 text-green-600 mb-3" />
              <h4 className="font-semibold text-[var(--lohn-primary)] mb-2">Maximale Beträge</h4>
              <p className="text-sm text-gray-600">Rechtssichere Höchstgrenzen für jeden Baustein</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <Workflow className="w-8 h-8 text-purple-600 mb-3" />
              <h4 className="font-semibold text-[var(--lohn-primary)] mb-2">Payment Modes</h4>
              <p className="text-sm text-gray-600">Givve Card, Cash oder Non-Cash Optionen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
              Verbundene Services rund um die API
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir bieten mehr als nur eine API - ein komplettes Ökosystem für Ihre Lohnoptimierung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Lohnprogramm Integration */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Workflow className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-3">Lohnprogramm-Integration</h3>
              <p className="text-gray-600 mb-4">
                Nahtlose Umsetzung im Lohnprogramm per Schnittstelle - keine manuelle Übertragung notwendig
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  <span>DATEV-kompatibel</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  <span>Automatische Übertragung</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  <span>Fehlerfreie Datenübermittlung</span>
                </li>
              </ul>
            </div>

            {/* Probelohnabrechnung */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-3">Probelohnabrechnung</h3>
              <p className="text-gray-600 mb-4">
                Erhalten Sie eine fertige Probelohnabrechnung direkt über die API für transparente Kommunikation
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  <span>PDF-Export verfügbar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  <span>Mitarbeitergerecht aufbereitet</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  <span>Sofort einsatzbereit</span>
                </li>
              </ul>
            </div>

            {/* Lohnbausteine Management */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Package className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-3">Lohnbausteine-Betreuung</h3>
              <p className="text-gray-600 mb-4">
                Vollständige Verwaltung und Betreuung aller Lohnbausteine inklusive Givve Card Integration
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  <span>15+ Lohnbausteine verfügbar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  <span>Rechtssichere Umsetzung</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  <span>Kontinuierliche Updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
              Markttrends 2025 - Warum jetzt?
            </h2>
            <p className="text-xl text-gray-600">Basierend auf aktuellen Marktdaten</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center h-full">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-[var(--lohn-primary)]">Fachkräftemangel verschärft sich</h3>
              <div className="bg-red-50 rounded-lg p-4 mb-3">
                <p className="text-3xl font-bold text-red-600 mb-1">76%</p>
                <p className="text-sm text-gray-600">der Gen-Z bewerten Benefits als entscheidend</p>
              </div>
              <p className="text-gray-600 text-sm">
                Unternehmen müssen attraktive Gehaltsstrukturen bieten, um qualifizierte Mitarbeiter zu gewinnen
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center h-full">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-[var(--lohn-primary)]">Lohnoptimierung als Standard</h3>
              <div className="bg-blue-50 rounded-lg p-4 mb-3">
                <p className="text-3xl font-bold text-blue-600 mb-1">85%</p>
                <p className="text-sm text-gray-600">mehr Nachfrage nach Benefits</p>
              </div>
              <p className="text-gray-600 text-sm">
                Steueroptimierte Gehaltsstrukturen werden vom Nice-to-have zum Must-have für Arbeitgeber
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center h-full">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-[var(--lohn-primary)]">Individuelle Lösungen</h3>
              <div className="bg-purple-50 rounded-lg p-4 mb-3">
                <p className="text-3xl font-bold text-purple-600 mb-1">62%</p>
                <p className="text-sm text-gray-600">wünschen personalisierte Benefits</p>
              </div>
              <p className="text-gray-600 text-sm">
                One-size-fits-all Ansätze funktionieren nicht mehr - Flexibilität ist gefragt
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center h-full">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-[var(--lohn-primary)]">Digitale Transformation</h3>
              <div className="bg-green-50 rounded-lg p-4 mb-3">
                <p className="text-3xl font-bold text-green-600 mb-1">91%</p>
                <p className="text-sm text-gray-600">setzen auf automatisierte Prozesse</p>
              </div>
              <p className="text-gray-600 text-sm">
                APIs und Automatisierung werden zur Grundvoraussetzung für effiziente HR-Prozesse
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}