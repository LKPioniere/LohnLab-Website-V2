import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  FileText, 
  Shield, 
  TrendingUp, 
  Database, 
  CheckCircle, 
  Clock, 
  Euro, 
  Handshake,
  Target,
  Award,
  ArrowRight,
  Calculator,
  FileCheck,
  Settings,
  Quote,
  Zap,
  ChevronLeft,
  ChevronRight,
  Expand,
  X
} from "lucide-react";
import { Link } from "wouter";
import martinGrauImage from "@/assets/martin-grau.jpg";
import hartmutSchubertImage from "@/assets/HartmutSchubert.png";
import memberspotImage from "@/assets/Memberspot.png";
import { useState } from "react";

export default function Steuerberater() {
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);
  const [isScreenshotExpanded, setIsScreenshotExpanded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partners = [
    {
      id: 'martin-grau',
      name: 'Martin Grau',
      title: 'Steuerberater & Inhaber',
      companies: [
        { name: 'megra Steuerberatungsgesellschaft PartG mbB', url: 'https://megra-beratung.de' },
        { name: 'zuno.tax GmbH', url: 'https://zunotax.de' }
      ],
      quote: 'Wir als Verantwortlicher für die Lohnbuchhaltung von vielen Unternehmen standen Lohnoptimierern auf Grund der Zusatzaufwände immer skeptisch gegenüber. Die LohnLab hat es geschafft uns für das Thema zu begeistern, da der Kostenersparnis beim Mandanten bei gleichzeitig höherem Nutzen für den Mitarbeiter durch die hohe Automatisierung fast kein Zusatzaufwand gegenübersteht.',
      image: martinGrauImage,
      tags: ['Automatisierung', 'Lohnbuchhaltung', 'Mandantenbetreuung', 'Digitale Steuerberatung'],
      themeColor: 'blue',
      companyInfo: [
        { label: 'Mandanten', value: '500+' },
        { label: 'Spezialisierung', value: 'Digital' }
      ]
    },
    {
      id: 'hartmut-schubert',
      name: 'Hartmut Schubert',
      title: 'Geschäftsführer',
      companies: [
        { name: 'HaackSchubert Partnerschaftsgesellschaft mbB', url: 'https://www.haackschubert.de' }
      ],
      quote: 'LohnLab hat sich im Markt der Lohnoptimierer als Premium-Dienstleister herauskristallisiert, der besonderen Wert auf das Thema Rechtssicherheit legt. Dieser Aspekt war uns für unsere Mandanten das wichtigste.',
      image: hartmutSchubertImage,
      tags: ['Rechtssicherheit', 'Premium-Service', 'Interdisziplinär', 'Mandantenbetreuung'],
      themeColor: 'green',
      companyInfo: [
        { label: 'Mitarbeiter', value: '30+ Experten' },
        { label: 'Standorte', value: 'Offenbach, Frankfurt' },
        { label: 'Bereiche', value: 'Recht, Steuern, WP' }
      ]
    }
  ];

  const currentPartner = partners[currentPartnerIndex];

  const nextPartner = () => {
    setCurrentPartnerIndex((prev) => (prev + 1) % partners.length);
  };

  const prevPartner = () => {
    setCurrentPartnerIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };

  const getThemeColors = (theme: string) => {
    switch (theme) {
      case 'blue':
        return {
          gradient: 'from-[var(--lohn-primary)] to-[var(--lohn-teal)]',
          accent: 'text-[var(--lohn-primary)]',
          background: 'bg-blue-50',
          border: 'border-[var(--lohn-primary)]',
          tagBg: 'bg-blue-100 text-blue-800',
          ring: 'border-[var(--lohn-primary)]'
        };
      case 'green':
        return {
          gradient: 'from-green-500 to-emerald-600',
          accent: 'text-green-600',
          background: 'bg-green-50',
          border: 'border-green-600',
          tagBg: 'bg-green-100 text-green-800',
          ring: 'border-green-500'
        };
      default:
        return {
          gradient: 'from-gray-500 to-gray-600',
          accent: 'text-gray-600',
          background: 'bg-gray-50',
          border: 'border-gray-600',
          tagBg: 'bg-gray-100 text-gray-800',
          ring: 'border-gray-500'
        };
    }
  };

  const benefits = [
    {
      icon: Clock,
      title: "Zeitersparnis durch Automatisierung",
      description: "Mandanten erstellen selbständig Berechnungen und Probeabrechnungen - kein E-Mail-Pingpong mehr",
      color: "bg-blue-500"
    },
    {
      icon: Database,
      title: "DATEV-Integration",
      description: "DSGVO-konforme Datenübertragung in perfekt verarbeitbarer Struktur direkt aus dem Cockpit",
      color: "bg-green-500"
    },
    {
      icon: Shield,
      title: "Rechtssicherheit als Filter",
      description: "Das Cockpit prüft automatisch die rechtliche Zulässigkeit aller Lohnoptimierungen",
      color: "bg-purple-500"
    },
    {
      icon: Euro,
      title: "Mehrwert für Mandanten",
      description: "Bis zu 2.000€ Ersparnis pro Mitarbeiter und Jahr - ein einzigartiges Angebot für Ihre Kanzlei",
      color: "bg-orange-500"
    }
  ];

     const features = [
     {
       title: "Neueinstellungsrechner",
       description: "Mandanten kalkulieren optimal strukturierte Vergütungspakete für neue Mitarbeiter",
       icon: Users,
       link: "/loesungen/neueinstellungen"
     },
     {
       title: "Lohnerhöhungsrechner", 
       description: "Effiziente Berechnung von Gehaltsanpassungen mit sofortiger Probeabrechnung",
       icon: TrendingUp,
       link: "/loesungen/lohnerhoehung"
     },
     {
       title: "Monatliche Importdatei",
       description: "Monatliche Bewegungslohn-Datei für saubere Trennung aller Lohnbausteine",
       icon: FileText,
       link: "/#datev-integration"
     },
     {
       title: "Cloud-Dokumentation",
       description: "Alle Zusatzvereinbarungen und Listen zentral für Sachbearbeiter und Betriebsprüfer",
       icon: Database
     }
   ];

  const partnerBenefits = [
    "Wettbewerbsvorteil durch innovativen Mehrwert",
    "Höhere Mandantenbindung durch erweiterte Dienstleistung", 
    "Full-Service inklusive - vom Schnittstellen-Management bis zur Betreuung",
    "Transparente Preisgestaltung ohne versteckte Gebühren",
    "100% rechtssicher durch 'Made in Germany' Qualität"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[var(--lohn-primary)] via-[var(--lohn-secondary)] to-[var(--lohn-purple)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-[var(--lohn-teal)]">Partnerprogramm</span>  
                <br />für Steuerberater
              </h1>
              <p className="text-xl mb-6 text-blue-100">
                Bieten Sie Ihren Mandanten echten Mehrwert durch moderne Lohnoptimierung. 
                Sparen Sie Zeit, reduzieren Sie Komplexität und positionieren Sie sich als innovativer Partner.
              </p>
              <p className="text-lg mb-8 text-[var(--lohn-teal)] font-semibold">
                Bis zu 2.000€ Ersparnis pro Mitarbeiter und Jahr für Ihre Mandanten.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt">
                  <Button className="bg-[var(--lohn-teal)] text-[var(--lohn-primary)] hover:bg-white transition-colors rounded-full px-8 py-4 font-semibold">
                    Partnerschaft starten
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Ihre Vorteile auf einen Blick</h3>
                <div className="space-y-4">
                  {partnerBenefits.slice(0, 3).map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--lohn-teal)] flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hauptvorteile Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-6">
              Warum Steuerberater LohnLab lieben
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Moderne Lohnoptimierung, die Ihren Kanzleialltag revolutioniert und Ihre Mandanten begeistert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Background Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                  <div className={`w-full h-full ${benefit.color.replace('bg-', 'bg-gradient-to-br from-')} to-transparent`}></div>
                </div>
                
                {/* Floating Icon */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="text-white" size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-4 group-hover:text-[var(--lohn-secondary)] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  {/* Accent Line */}
                  <div className={`w-0 group-hover:w-20 h-1 ${benefit.color} rounded-full mt-6 transition-all duration-500`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Praktisches Beispiel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="bg-[var(--lohn-primary)] text-white px-4 py-2 text-sm font-semibold mb-4">
                  Praxis-Beispiel
                </Badge>
                                 <h2 className="text-3xl font-bold text-[var(--lohn-primary)] mb-4 flex items-center justify-center gap-3">
                   <Zap className="w-8 h-8 text-[var(--lohn-teal)]" />
                   Der "Staubsauger-Effekt" in Aktion
                 </h2>
                <p className="text-lg text-gray-600">
                  Wie das LohnLab Cockpit komplexe Lohnoptimierung automatisch rechtssicher macht
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Die Situation:</h3>
                  <p className="text-gray-700 mb-6">
                    Ihr Mandant nutzt bereits Fahrtkostenzuschüsse nach § 40 Abs. 2 Satz 2 Nr. 1 b EStG 
                    und möchte nun zusätzlich Jobtickets einführen. Beide zahlen auf die Entfernungspauschale 
                    gem. § 9 Abs. 1 Satz 3 Nr. 4 EStG ein.
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Das Problem:</h3>
                  <p className="text-gray-700 mb-6">
                    Das steuerfreie Jobticket nach § 3 Nr. 15 EStG und Fahrtkostenzuschuss dürfen zusammen 
                    die individuelle Höchstgrenze nicht überschreiten. Ohne Cockpit passieren hier oft Fehler.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    LohnLab Lösung:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-sm text-gray-700">
                        Automatische Prüfung der rechtlichen Grenzen
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-sm text-gray-700">
                        Sofortige Aufklärung über Alternativen (z.B. Pauschalversteuerung nach § 40 Abs. 2 Satz 2 EStG)
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-sm text-gray-700">
                        Zentrale Importdatei mit sauberer Trennung aller Lohnarten
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lernplattform Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-secondary)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                         <div>
               <h2 className="text-3xl md:text-4xl font-bold mb-6">
                 Unsere Lernplattform: Ihr Single Source of Truth
               </h2>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Wir wissen, wie schwer es ist, den Status Quo zu verändern und mit einem neuen Projekt zu starten. 
                Deshalb unterstützen wir Sie vom ersten Tag an.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Mandanten-Aktivierung</h4>
                    <p className="text-blue-100">Schritt-für-Schritt Anleitungen für die erste Einrichtung und Onboarding</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Sachbearbeiter-Schulungen</h4>
                    <p className="text-blue-100">Umfassende Trainings für Ihr Kanzlei-Team mit praxisnahen Beispielen</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Klare Prozessanleitungen</h4>
                    <p className="text-blue-100">Gemeinsam entwickelte Workflows, die perfekt zu Ihrem Kanzleialltag passen</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a 
                  href="https://memberspot.lohnlab.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[var(--lohn-primary)] hover:bg-gray-100 transition-colors px-8 py-4 rounded-full font-semibold"
                >
                  Zur Lernplattform
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

                         <div className="relative">
               <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                 <h3 className="text-2xl font-bold mb-6 text-center">Einblick in die Lernplattform</h3>
                 
                 {/* Memberspot Screenshot */}
                 <div className="mb-6 rounded-xl overflow-hidden shadow-lg relative">
                   <img 
                     src={memberspotImage} 
                     alt="LohnLab Lernplattform - Memberspot"
                     className="w-full h-auto object-cover cursor-pointer transition-transform hover:scale-105"
                     onClick={() => setIsScreenshotExpanded(true)}
                   />
                   <div className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-lg opacity-75 hover:opacity-100 transition-opacity">
                     <Expand className="w-4 h-4" />
                   </div>
                 </div>
                 
                 <div className="space-y-4">
                   <div className="flex items-center gap-4">
                     <Database className="w-8 h-8 text-[var(--lohn-teal)]" />
                     <div>
                       <h4 className="font-semibold">Zentrale Dokumentation</h4>
                       <p className="text-sm text-blue-100">Alle Ressourcen an einem Ort verfügbar</p>
                     </div>
                   </div>
                   <div className="flex items-center gap-4">
                     <Users className="w-8 h-8 text-[var(--lohn-teal)]" />
                     <div>
                       <h4 className="font-semibold">Team-Schulungen</h4>
                       <p className="text-sm text-blue-100">Interaktive Lernmodule für alle Mitarbeiter</p>
                     </div>
                   </div>
                   <div className="flex items-center gap-4">
                     <Settings className="w-8 h-8 text-[var(--lohn-teal)]" />
                     <div>
                       <h4 className="font-semibold">Individuelle Prozesse</h4>
                       <p className="text-sm text-blue-100">Maßgeschneidert für Ihre Kanzlei</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features für Steuerberater */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-6">
              Tools, die Ihren Alltag erleichtern
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Speziell entwickelte Funktionen für die Zusammenarbeit zwischen Steuerberatern und Mandanten
            </p>
          </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {features.map((feature, index) => (
               <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative group">
                 <CardHeader className="pb-4">
                   <div className="w-16 h-16 bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-teal)] rounded-full flex items-center justify-center mx-auto mb-4">
                     <feature.icon className="text-white" size={28} />
                   </div>
                   <CardTitle className="text-lg text-[var(--lohn-primary)]">{feature.title}</CardTitle>
                 </CardHeader>
                 <CardContent>
                   <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                   {feature.link && (
                     <Link href={feature.link}>
                       <Button 
                         variant="ghost" 
                         size="sm" 
                         className="text-[var(--lohn-primary)] hover:text-white hover:bg-[var(--lohn-primary)] transition-colors group-hover:translate-x-1 duration-300"
                       >
                         Mehr erfahren
                         <ChevronRight className="w-4 h-4 ml-1" />
                       </Button>
                     </Link>
                   )}
                 </CardContent>
               </Card>
             ))}
           </div>
        </div>
      </section>

      {/* Partner Vorteile */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-6">
                Ihre Partnerschaft mit LohnLab
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Werden Sie Teil eines innovativen Netzwerks und bieten Sie Ihren Mandanten 
                echten Mehrwert durch moderne Lohnoptimierung.
              </p>
              
              <div className="space-y-6">
                {partnerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/kontakt">
                  <Button className="bg-[var(--lohn-primary)] text-white hover:bg-[var(--lohn-secondary)] transition-colors px-8 py-4 rounded-full font-semibold flex items-center gap-2">
                    Jetzt Partner werden
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-purple)] rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Gemeinsam erfolgreich</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Target className="w-8 h-8 text-[var(--lohn-teal)]" />
                    <div>
                      <h4 className="font-semibold">Individuelle Richtlinien</h4>
                      <p className="text-sm text-blue-100">Angepasst an Ihren Kanzleialltag</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Settings className="w-8 h-8 text-[var(--lohn-teal)]" />
                    <div>
                      <h4 className="font-semibold">Maßgeschneiderte Prozesse</h4>
                      <p className="text-sm text-blue-100">Perfekt integriert in Ihre Workflows</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Award className="w-8 h-8 text-[var(--lohn-teal)]" />
                    <div>
                      <h4 className="font-semibold">Kontinuierliche Weiterentwicklung</h4>
                      <p className="text-sm text-blue-100">Immer am Puls der Zeit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Referenzen */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-6">
              Steuerberater vertrauen uns
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erfolgreiche Partnerschaften mit innovativen Kanzleien
            </p>
          </div>

                                <div className="max-w-6xl mx-auto">
             {/* Einheitliche Partner-Referenz Karte */}
             <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200 max-h-[600px]">
               {/* Header mit Theme-Farbe - immer mit Gradient */}
               <div className={`h-2 bg-gradient-to-r ${getThemeColors(currentPartner.themeColor).gradient}`}></div>
               
               {/* Main Content */}
               <div className="p-6 lg:p-8">
                 <div className="flex flex-col lg:flex-row gap-6 items-start h-full">
                  
                                     {/* Profile Section */}
                   <div className="flex-shrink-0 text-center lg:text-left lg:w-72">
                     <div className="relative inline-block mb-3">
                       <img 
                         src={currentPartner.image} 
                         alt={currentPartner.name}
                         className="w-24 h-24 lg:w-28 lg:h-28 rounded-full object-cover shadow-md border-4 border-white"
                       />
                       {/* Colored ring around image */}
                       <div className={`absolute inset-0 rounded-full border-2 ${getThemeColors(currentPartner.themeColor).ring} opacity-50`}></div>
                     </div>
                     
                     <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                       {currentPartner.name}
                     </h3>
                     <p className={`text-base font-semibold mb-3 ${getThemeColors(currentPartner.themeColor).accent}`}>
                       {currentPartner.title}
                     </p>
                     
                     {/* Company Names as Links */}
                     <div className="space-y-1 mb-3">
                       {currentPartner.companies.map((company, index) => (
                         <a 
                           key={index}
                           href={company.url}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="block text-gray-600 text-sm font-medium hover:text-[var(--lohn-primary)] transition-colors"
                         >
                           {company.name}
                         </a>
                       ))}
                     </div>

                     {/* Company Info */}
                     <div className="bg-gray-50 rounded-lg p-2 text-xs text-gray-600">
                       {currentPartner.companyInfo.map((info, index) => (
                         <div key={index} className={`flex items-center justify-between ${index < currentPartner.companyInfo.length - 1 ? 'mb-1' : ''}`}>
                           <span>{info.label}:</span>
                           <span className="font-semibold">{info.value}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                  
                                     {/* Content Section */}
                   <div className="flex-1 space-y-4 min-h-0">
                     
                     {/* Quote */}
                     <div className={`${getThemeColors(currentPartner.themeColor).background} p-4 rounded-xl border-l-4 ${getThemeColors(currentPartner.themeColor).border} max-h-40`}>
                       <div className="flex items-start space-x-3 h-full">
                         <Quote className={`w-5 h-5 ${getThemeColors(currentPartner.themeColor).accent} mt-1 flex-shrink-0`} />
                         <div className="flex-1 min-h-0">
                           <blockquote className="text-gray-800 leading-relaxed font-medium text-sm lg:text-base overflow-y-auto max-h-32 pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                             „{currentPartner.quote}"
                           </blockquote>
                         </div>
                       </div>
                     </div>
                     
                     {/* Tags */}
                     <div className="space-y-2">
                       <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                         Schwerpunkte
                       </h4>
                       <div className="flex flex-wrap gap-2">
                         {currentPartner.tags.map((tag, index) => (
                           <Badge 
                             key={index}
                             variant="secondary" 
                             className={`${getThemeColors(currentPartner.themeColor).tagBg} text-xs px-2 py-1 font-medium border-0`}
                           >
                             {tag}
                           </Badge>
                         ))}
                       </div>
                     </div>
                   </div>
                </div>
              </div>
              
              {/* Footer Accent */}
              <div className={`h-1 bg-gradient-to-r ${getThemeColors(currentPartner.themeColor).gradient} opacity-60`}></div>
            </div>

            {/* Navigation - Only show when there are multiple partners */}
            {partners.length > 1 && (
              <div className="flex justify-center mt-8 space-x-4">
                <button
                  onClick={prevPartner}
                  className="p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all duration-200"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                
                <div className="flex space-x-2 items-center">
                  {partners.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPartnerIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentPartnerIndex 
                          ? `bg-[var(--lohn-primary)]` 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextPartner}
                  className="p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all duration-200"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            )}

            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--lohn-primary)] to-[var(--lohn-teal)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit für die Zukunft der Steuerberatung?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Starten Sie noch heute Ihre Partnerschaft mit LohnLab und bieten Sie Ihren Mandanten 
            innovativen Mehrwert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt">
              <Button className="bg-white text-[var(--lohn-primary)] hover:bg-gray-100 transition-colors px-8 py-4 rounded-full font-semibold">
                Kontakt aufnehmen
              </Button>
            </Link>
            <Button 
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[var(--lohn-primary)] transition-colors px-8 py-4 rounded-full font-semibold"
            >
              Mehr erfahren
            </Button>
          </div>
        </div>
      </section>

             <Footer />

       {/* Screenshot Fullscreen Modal */}
       {isScreenshotExpanded && (
         <div 
           className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
           onClick={() => setIsScreenshotExpanded(false)}
         >
           <div className="relative max-w-6xl max-h-full">
             <img 
               src={memberspotImage} 
               alt="LohnLab Lernplattform - Memberspot (Vergrößerte Ansicht)" 
               className="max-w-full max-h-full rounded-lg shadow-2xl"
               onClick={(e) => e.stopPropagation()}
             />
             <button
               onClick={() => setIsScreenshotExpanded(false)}
               className="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-2 hover:bg-gray-100 transition-colors"
             >
               <X className="w-6 h-6" />
             </button>
           </div>
         </div>
       )}
     </div>
   );
 }
