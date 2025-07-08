import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CheckCircle, Clock, Wrench, Lightbulb, Calendar, Users, TrendingUp, MessageSquare, Send, Rocket, Target, FileText, Shield, Smartphone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const feedbackFormSchema = z.object({
  name: z.string().min(1, "Name ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  feedbackType: z.string().min(1, "Bitte wählen Sie eine Kategorie"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
});

type FeedbackFormValues = z.infer<typeof feedbackFormSchema>;

export default function Roadmap() {
  const { toast } = useToast();
  
  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      name: "",
      email: "",
      feedbackType: "",
      message: "",
    },
  });

  const onSubmit = async (values: FeedbackFormValues) => {
    try {
      // Simulate sending feedback
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Feedback gesendet!",
        description: "Vielen Dank für Ihr wertvolles Feedback. Wir melden uns in Kürze bei Ihnen.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es später erneut.",
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="//embed.typeform.com/next/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const completedFeatures = [
    {
      title: "Givve Onboarding Integration",
      description: "Ausfüllhilfe für Bestellformular und Dokumentationsbogen",
      category: "Integration"
    },
    {
      title: "Mitarbeiterdaten Import",
      description: "Excel-Import für Mitarbeiterdaten (DATEV-Integration in Entwicklung)",
      category: "Datenmanagement"
    },
    {
      title: "Mitarbeiterverwaltung",
      description: "Anlegen und Bearbeiten einzelner Mitarbeiter",
      category: "Verwaltung"
    },
    {
      title: "Multi-Tenancy für Berater",
      description: "Mehrere Mandanten mit einem Zugang verwalten",
      category: "Kanzlei-Features"
    },
    {
      title: "Lohnrechner",
      description: "Brutto/Netto/Lohnkosten-Berechnung mit flexiblen Vorgaben",
      category: "Berechnung"
    },
    {
      title: "Lohnerhöhungsrechner",
      description: "Für einen oder mehrere Mitarbeiter inkl. Lohnoptimierung",
      category: "Berechnung"
    }
  ];

  // Phase 1: Gehaltsberechnung & Optimierung (kurz nach MVP)
  const phase1Features = [
    {
      title: "Gehaltsneuberechnung",
      description: "Berechnung neuer Mitarbeitergehälter mit automatischer Optimierung",
      category: "Kernfunktion",
      timeline: "September 2025"
    },
    {
      title: "Lohnerhöhungsoptimierung",
      description: "Intelligente Verteilung von Gehaltserhöhungen auf Lohnbausteine",
      category: "Kernfunktion",
      timeline: "September 2025"
    },
    {
      title: "Multi-Szenarien Vergleich",
      description: "Vergleich verschiedener Optimierungsansätze mit Vor- und Nachteilen",
      category: "Analyse",
      timeline: "Oktober 2025"
    },
    {
      title: "DATEV-Style Probeabrechnungen",
      description: "Downloadbare Berechnungen im vertrauten DATEV-Design",
      category: "Export",
      timeline: "Oktober 2025"
    }
  ];

  // Phase 2: Lohnkonzept-Verwaltung
  const phase2Features = [
    {
      title: "Dokumentencloud",
      description: "Zentrale Verwaltung aller Zusatzvereinbarungen mit rollenbasierten Zugriffsrechten",
      category: "Dokumentenverwaltung",
      timeline: "Q1 2026"
    },
    {
      title: "Compliance Dashboard",
      description: "Übersicht fehlender Unterschriften, ausstehender Kostennachweise und Fristen",
      category: "Monitoring",
      timeline: "Q1 2026"
    },
    {
      title: "Dynamische Lohnbausteinanpassung",
      description: "Automatische Neuberechnung bei Änderungen (z.B. Umzug → Fahrtkostenzuschuss)",
      category: "Automatisierung",
      timeline: "Q2 2026"
    },
    {
      title: "Vertragsautomatisierung",
      description: "Baukastensystem für Zusatzvereinbarungen basierend auf genutzten Lohnbausteinen",
      category: "Effizienz",
      timeline: "Q2 2026"
    },
    {
      title: "Kostennachweis-Management",
      description: "Upload und Verwaltung von Belegen (Handykosten, Fahrtkosten, etc.)",
      category: "Compliance",
      timeline: "Q2 2026"
    }
  ];

  // Phase 3: Mitarbeiter-App
  const phase3Features = [
    {
      title: "Mitarbeiter Mobile App",
      description: "Native App für iOS und Android mit persönlichem Dashboard",
      category: "Mitarbeiterkommunikation",
      timeline: "Q3 2026"
    },
    {
      title: "Givve Card Integration",
      description: "Echtzeit-Guthabenabfrage und Einsatzmöglichkeiten der Sachbezugskarte",
      category: "Benefits",
      timeline: "Q3 2026"
    },
    {
      title: "Digitale Unterschriften",
      description: "Zusatzvereinbarungen direkt in der App unterzeichnen",
      category: "Digitalisierung",
      timeline: "Q4 2026"
    },
    {
      title: "Transparente Gehaltsoptimierung",
      description: "Verständliche Erklärung der Lohnoptimierung für jeden Mitarbeiter",
      category: "Kommunikation",
      timeline: "Q4 2026"
    },
    {
      title: "Mobile Belegverwaltung",
      description: "Kostennachweise direkt per Smartphone fotografieren und hochladen",
      category: "Convenience",
      timeline: "Q4 2026"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[var(--lohn-primary)] via-blue-700 to-[var(--lohn-teal)] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Roadmap & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--lohn-accent)] to-yellow-300">Community</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-blue-100">
              Bleiben Sie auf dem Laufenden über die Entwicklung des LohnLab Cockpits und gestalten Sie aktiv mit!
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Calendar size={16} className="mr-2" />
                <span>MVP Release: 04.08.2025</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <Users size={16} className="mr-2" />
                <span>Community-Driven</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <TrendingUp size={16} className="mr-2" />
                <span>Kontinuierliche Updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="completed" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-gray-100 p-1 rounded-xl">
              <TabsTrigger 
                value="completed" 
                className="text-sm sm:text-base py-3 px-2 sm:px-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-[var(--lohn-primary)] transition-all"
              >
                <CheckCircle className="mr-1 sm:mr-2 hidden sm:inline-block" size={18} />
                <span className="hidden lg:inline">Verfügbare Features</span>
                <span className="lg:hidden">Verfügbar</span>
              </TabsTrigger>
              <TabsTrigger 
                value="phases" 
                className="text-sm sm:text-base py-3 px-2 sm:px-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-[var(--lohn-primary)] transition-all"
              >
                <Rocket className="mr-1 sm:mr-2 hidden sm:inline-block" size={18} />
                <span className="hidden lg:inline">3-Phasen Roadmap</span>
                <span className="lg:hidden">Phasen</span>
              </TabsTrigger>
              <TabsTrigger 
                value="feedback" 
                className="text-sm sm:text-base py-3 px-2 sm:px-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-[var(--lohn-primary)] transition-all"
              >
                <Lightbulb className="mr-1 sm:mr-2 hidden sm:inline-block" size={18} />
                <span className="hidden lg:inline">Community Feedback</span>
                <span className="lg:hidden">Feedback</span>
              </TabsTrigger>
              <TabsTrigger 
                value="vision" 
                className="text-sm sm:text-base py-3 px-2 sm:px-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-[var(--lohn-primary)] transition-all"
              >
                <Target className="mr-1 sm:mr-2 hidden sm:inline-block" size={18} />
                <span className="hidden lg:inline">Unsere Vision</span>
                <span className="lg:hidden">Vision</span>
              </TabsTrigger>
            </TabsList>
            
            {/* Completed Features */}
            <TabsContent value="completed" className="space-y-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
                  Das kann das Cockpit bereits
                </h2>
                <p className="text-lg text-gray-600">
                  Diese Features sind bereits vollständig implementiert und stehen zur Verfügung
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {completedFeatures.map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg text-[var(--lohn-primary)] mb-2">
                            {feature.title}
                          </CardTitle>
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                            <CheckCircle size={14} className="mr-1" />
                            {feature.category}
                          </Badge>
                        </div>
                        <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* In Development */}
            <TabsContent value="development" className="space-y-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
                  Aktuell in Entwicklung
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Diese Features werden gerade entwickelt und sind Teil des MVP-Releases am 04.08.2025
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
                  <div className="flex items-center justify-center mb-4">
                    <Calendar className="text-blue-600 mr-2" size={24} />
                    <span className="text-lg font-semibold text-blue-800">MVP Release: 04. August 2025</span>
                  </div>
                  <p className="text-blue-700">
                    Nach dem Release holen wir Feedback von ausgewählten Kanzleien und Mandanten ein, 
                    um das System weiter zu optimieren.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-6 flex items-center">
                    <Clock className="mr-3 text-orange-500" size={28} />
                    Neue Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {phase1Features.map((feature, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-lg text-[var(--lohn-primary)] mb-2">
                                {feature.title}
                              </CardTitle>
                              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                                <Clock size={14} className="mr-1" />
                                {feature.category}
                              </Badge>
                            </div>
                            <Clock className="text-orange-500 flex-shrink-0" size={24} />
                          </div>
                          <div className="mt-2">
                            <Badge variant="outline" className="text-xs">
                              {feature.timeline}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base">
                            {feature.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Feedback & Ideas */}
            <TabsContent value="feedback" className="space-y-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
                  Ideentank & Community Feedback
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Ihre Meinung ist uns wichtig! Teilen Sie Ihre Ideen, Feedback und Priorisierungswünsche mit uns.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {/* Typeform Option */}
                <Card className="border-0 shadow-xl overflow-hidden h-fit">
                  <CardHeader className="bg-gradient-to-r from-[var(--lohn-primary)] to-[var(--lohn-teal)] text-white">
                    <CardTitle className="text-xl flex items-center">
                      <Lightbulb className="mr-3" size={24} />
                      Umfangreiche Umfrage
                    </CardTitle>
                    <CardDescription className="text-blue-100">
                      Nehmen Sie an unserer detaillierten Community-Umfrage teil
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div 
                      data-tf-live="01JZK3G8NZEAZ8W2RH5D997T00"
                      style={{ height: '700px', width: '100%' }}
                    ></div>
                  </CardContent>
                </Card>
                
                {/* Direct Message Option */}
                <Card className="border-0 shadow-xl h-fit">
                  <CardHeader className="bg-gradient-to-r from-[var(--lohn-teal)] to-[var(--lohn-accent)] text-white">
                    <CardTitle className="text-xl flex items-center">
                      <MessageSquare className="mr-3" size={24} />
                      Direktnachricht
                    </CardTitle>
                    <CardDescription className="text-gray-100">
                      Senden Sie uns eine schnelle Nachricht mit Ihrem Feedback
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Ihr Name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>E-Mail</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="ihre.email@beispiel.de" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="feedbackType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Feedback-Kategorie</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Wählen Sie eine Kategorie" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="feature">Neue Feature-Idee</SelectItem>
                                  <SelectItem value="improvement">Verbesserungsvorschlag</SelectItem>
                                  <SelectItem value="bug">Fehlermeldung</SelectItem>
                                  <SelectItem value="priority">Priorisierungswunsch</SelectItem>
                                  <SelectItem value="general">Allgemeines Feedback</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Ihre Nachricht</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Teilen Sie uns Ihre Ideen, Vorschläge oder Feedback mit..." 
                                  className="min-h-[120px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button 
                          type="submit" 
                          disabled={form.formState.isSubmitting}
                          className="w-full bg-[var(--lohn-primary)] text-white hover:bg-[var(--lohn-secondary)] transition-colors"
                        >
                          {form.formState.isSubmitting ? (
                            <>Wird gesendet...</>
                          ) : (
                            <>
                              <Send className="mr-2" size={18} />
                              Feedback senden
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <Card className="text-center border-0 shadow-md">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-[var(--lohn-primary)]">Feature-Ideen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Schlagen Sie neue Features vor, die Ihren Arbeitsalltag erleichtern würden.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center border-0 shadow-md">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-[var(--lohn-primary)]">Priorisierung</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Bewerten Sie geplante Features nach ihrer Wichtigkeit für Sie.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center border-0 shadow-md">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-[var(--lohn-primary)]">Verbesserungen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Geben Sie uns Feedback zu bestehenden Features und deren Nutzererfahrung.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* 3-Phases Roadmap */}
            <TabsContent value="phases" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
                  Unsere 3-Phasen Entwicklungsstrategie
                </h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                  Nach dem MVP-Release im August 2025 entwickeln wir LohnLab in drei aufeinander aufbauenden Phasen 
                  zu einer vollständigen Lohnoptimierungs-Plattform weiter.
                </p>
              </div>

              {/* Phase 1 */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--lohn-primary)]">
                      Phase 1: Gehaltsberechnung & Optimierung
                    </h3>
                    <p className="text-gray-600">September - Oktober 2025</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Kurz nach dem MVP-Release erweitern wir die Kernfunktionalitäten für die Berechnung und Optimierung 
                  von Gehältern - sowohl für neue Mitarbeiter als auch für Gehaltserhöhungen.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {phase1Features.map((feature, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-[var(--lohn-primary)] mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                      <Badge variant="outline" className="mt-2 text-xs">{feature.timeline}</Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phase 2 */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--lohn-primary)]">
                      Phase 2: Lohnkonzept-Verwaltung
                    </h3>
                    <p className="text-gray-600">Q1 - Q2 2026</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Die zweite Phase fokussiert sich auf die professionelle Verwaltung von Lohnkonzepten mit 
                  Dokumentenmanagement, Compliance-Überwachung und automatisierten Anpassungen.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {phase2Features.map((feature, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-[var(--lohn-primary)] mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                      <Badge variant="outline" className="mt-2 text-xs">{feature.timeline}</Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phase 3 */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--lohn-primary)]">
                      Phase 3: Mitarbeiter-App
                    </h3>
                    <p className="text-gray-600">Q3 - Q4 2026</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  In der finalen Phase bringen wir die Lohnoptimierung direkt zu den Mitarbeitern mit einer 
                  intuitiven Mobile App für maximale Transparenz und Benutzerfreundlichkeit.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {phase3Features.map((feature, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-[var(--lohn-primary)] mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                      <Badge variant="outline" className="mt-2 text-xs">{feature.timeline}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            {/* Vision */}
            <TabsContent value="vision" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
                  Unsere Vision für die Zukunft
                </h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                  LohnLab wird die führende Plattform für intelligente Lohnoptimierung im deutschsprachigen Raum
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <Card className="border-0 shadow-xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-[var(--lohn-primary)] to-blue-700">
                    <CardTitle className="text-white text-xl flex items-center">
                      <Target className="mr-3" size={24} />
                      Unsere Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4">
                      Wir revolutionieren die Art und Weise, wie Unternehmen und Steuerberater mit Lohnoptimierung umgehen. 
                      Durch intelligente Automatisierung und intuitive Benutzeroberflächen machen wir komplexe Steuervorteile 
                      für jeden zugänglich.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Maximale Ersparnisse für Unternehmen</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Höheres Netto für Mitarbeiter</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm">Effizienzsteigerung für Steuerberater</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-[var(--lohn-teal)] to-green-600">
                    <CardTitle className="text-white text-xl flex items-center">
                      <Smartphone className="mr-3" size={24} />
                      Die Zukunft ist digital
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4">
                      Mit unserer 3-Phasen-Strategie bauen wir ein vollständiges Ökosystem für die moderne Lohnverwaltung 
                      auf. Von der Berechnung über die Verwaltung bis zur Mitarbeiterkommunikation - alles aus einer Hand.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-blue-600 font-bold text-sm">1</span>
                        </div>
                        <span className="text-sm">Intelligente Berechnungen</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-green-600 font-bold text-sm">2</span>
                        </div>
                        <span className="text-sm">Automatisierte Verwaltung</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                          <span className="text-purple-600 font-bold text-sm">3</span>
                        </div>
                        <span className="text-sm">Transparente Kommunikation</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-[var(--lohn-primary)] to-[var(--lohn-teal)] rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Werden Sie Teil der Zukunft</h3>
                <p className="text-lg mb-6 text-blue-100">
                  Begleiten Sie uns auf dem Weg zur führenden Lohnoptimierungs-Plattform Deutschlands
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-[var(--lohn-primary)] hover:bg-gray-100"
                    onClick={() => window.location.href = '/kontakt'}
                  >
                    Jetzt Early Bird werden
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10"
                    onClick={() => document.querySelector('[data-tf-live]')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Feedback geben
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <Card className="text-center border-0 shadow-md hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <FileText className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-[var(--lohn-primary)]">100% Compliance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Alle Lohnbausteine sind rechtssicher und werden kontinuierlich an neue Gesetze angepasst
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-md hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-[var(--lohn-primary)]">Datenschutz</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      DSGVO-konform mit höchsten Sicherheitsstandards für sensible Mitarbeiterdaten
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-md hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-[var(--lohn-primary)]">Community-First</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Entwicklung basierend auf echtem Nutzerfeedback und Branchenbedürfnissen
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}