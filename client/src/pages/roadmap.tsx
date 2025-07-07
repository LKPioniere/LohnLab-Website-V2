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
import { CheckCircle, Clock, Wrench, Lightbulb, Calendar, Users, TrendingUp, MessageSquare, Send } from "lucide-react";
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

  const inDevelopmentFeatures = [
    {
      title: "DATEV-Style Probeabrechnungen",
      description: "Downloadbare Berechnungen im vertrauten DATEV-Design",
      category: "Export",
      timeline: "Q3 2025"
    },
    {
      title: "Neueinstellungsberechnung",
      description: "Spezielle Berechnung und Darstellung für neue Mitarbeiter",
      category: "Berechnung",
      timeline: "Q3 2025"
    },
    {
      title: "DATEV API Anbindung",
      description: "Direkte Integration in DATEV-Systeme",
      category: "Integration",
      timeline: "Q3 2025"
    },
    {
      title: "Stammdatenerfassung",
      description: "Vollständige Erfassung für Neueinstellungen",
      category: "Datenmanagement",
      timeline: "Q3 2025"
    },
    {
      title: "Template-System",
      description: "Vorlagen für Abteilungen und wiederkehrende Use Cases",
      category: "Effizienz",
      timeline: "Q3 2025"
    }
  ];

  const inRevisionFeatures = [
    {
      title: "Verbesserte Ergebnisdarstellung",
      description: "Fokus auf High-Level-Informationen mit Diagrammen und Visualisierungen",
      category: "UX/UI",
      timeline: "Q3 2025"
    },
    {
      title: "Dashboard mit Insights",
      description: "Erweiterte Analytics mit Branchenvergleich und KPIs",
      category: "Analytics",
      timeline: "Q3 2025"
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
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-gray-100 p-1 rounded-xl">
              <TabsTrigger 
                value="completed" 
                className="text-base sm:text-lg py-3 px-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-[var(--lohn-primary)] transition-all"
              >
                <CheckCircle className="mr-2 hidden sm:inline-block" size={20} />
                <span className="hidden sm:inline">Verfügbare Features</span>
                <span className="sm:hidden">Verfügbar</span>
              </TabsTrigger>
              <TabsTrigger 
                value="development" 
                className="text-base sm:text-lg py-3 px-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-[var(--lohn-primary)] transition-all"
              >
                <Clock className="mr-2 hidden sm:inline-block" size={20} />
                <span className="hidden sm:inline">In Entwicklung</span>
                <span className="sm:hidden">Entwicklung</span>
              </TabsTrigger>
              <TabsTrigger 
                value="feedback" 
                className="text-base sm:text-lg py-3 px-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-[var(--lohn-primary)] transition-all"
              >
                <Lightbulb className="mr-2 hidden sm:inline-block" size={20} />
                <span className="hidden sm:inline">Ideentank</span>
                <span className="sm:hidden">Ideen</span>
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
                    {inDevelopmentFeatures.map((feature, index) => (
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
                
                <div>
                  <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-6 flex items-center">
                    <Wrench className="mr-3 text-purple-500" size={28} />
                    Überarbeitung bestehender Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {inRevisionFeatures.map((feature, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-lg text-[var(--lohn-primary)] mb-2">
                                {feature.title}
                              </CardTitle>
                              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                                <Wrench size={14} className="mr-1" />
                                {feature.category}
                              </Badge>
                            </div>
                            <Wrench className="text-purple-500 flex-shrink-0" size={24} />
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
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}