import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Calendar, MessageSquare, Users, Building, Handshake } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

declare global {
  interface Window {
    HubSpotConversations: any;
  }
}

export default function Kontakt() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      userType: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await fetch(`/api/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank für Ihre Anfrage. Wir melden uns in Kürze bei Ihnen.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.",
      });
    },
  });

  const onSubmit = (values: InsertContact) => {
    mutation.mutate(values);
  };

  useEffect(() => {
    // Load HubSpot Meetings Embed Script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[var(--lohn-primary)] via-blue-700 to-[var(--lohn-teal)] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Kontakt & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--lohn-accent)] to-yellow-300">Beratung</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-blue-100">
              Für Interessenten, Kunden und Partner - wir sind für Sie da.
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>Persönliche Beratung</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>Flexible Termine</span>
              </div>
              <div className="flex items-center">
                <MessageSquare size={16} className="mr-2" />
                <span>Schnelle Antwort</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group hover:scale-105 transition-transform duration-300">
              <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--lohn-primary)] to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-3 transition-transform">
                    <Users className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-[var(--lohn-primary)] text-xl">Interessenten</CardTitle>
                  <CardDescription className="text-base">Sie möchten das LohnLab Cockpit kennenlernen?</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="mb-3 bg-blue-100 text-blue-700 hover:bg-blue-200">Kostenlose Demo</Badge>
                  <p className="text-sm text-gray-600">Lernen Sie alle Funktionen in einer persönlichen Demonstration kennen.</p>
                </CardContent>
              </Card>
            </div>

            <div className="group hover:scale-105 transition-transform duration-300">
              <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--lohn-teal)] to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-3 transition-transform">
                    <Building className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-[var(--lohn-primary)] text-xl">Kunden</CardTitle>
                  <CardDescription className="text-base">Sie sind bereits LohnLab Kunde?</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="mb-3 bg-teal-100 text-teal-700 hover:bg-teal-200">Support & Beratung</Badge>
                  <p className="text-sm text-gray-600">Wir helfen Ihnen bei Fragen zur Anwendung und Optimierung.</p>
                </CardContent>
              </Card>
            </div>

            <div className="group hover:scale-105 transition-transform duration-300">
              <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--lohn-accent)] to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-3 transition-transform">
                    <Handshake className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-[var(--lohn-primary)] text-xl">Partner</CardTitle>
                  <CardDescription className="text-base">Sie sind Steuerberater oder Wirtschaftsprüfer?</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="mb-3 bg-yellow-100 text-yellow-700 hover:bg-yellow-200">Partnerberatung</Badge>
                  <p className="text-sm text-gray-600">Erfahren Sie mehr über unser Partnerprogramm und Schulungen.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* HubSpot Meetings Integration */}
            <div>
              <div className="bg-[var(--lohn-primary)] rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                  <Calendar className="mr-3" size={32} />
                  Termin vereinbaren
                </h2>
                <p className="text-lg text-blue-100 mb-8">
                  Buchen Sie direkt einen passenden Termin für Ihre persönliche Beratung oder Demo.
                </p>
                
                {/* HubSpot Meetings Embed */}
                <div className="bg-white rounded-lg shadow-inner p-4">
                  <div 
                    className="meetings-iframe-container" 
                    data-src="https://meetings-eu1.hubspot.com/michael-schmitt?embed=true"
                    style={{ minHeight: '600px' }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-[var(--lohn-primary)] mb-4 flex items-center">
                  <MessageSquare className="mr-3" size={32} />
                  Nachricht senden
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Alternativ können Sie uns auch direkt eine Nachricht senden. Wir melden uns zeitnah bei Ihnen.
                </p>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Ihr vollständiger Name" {...field} />
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
                        name="userType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Ich bin...</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Bitte wählen Sie" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="interessent">Interessent</SelectItem>
                                <SelectItem value="steuerberater">Steuerberater/in</SelectItem>
                                <SelectItem value="unternehmen">Unternehmen</SelectItem>
                                <SelectItem value="kunde">Bestehender Kunde</SelectItem>
                                <SelectItem value="partner">Partner</SelectItem>
                                <SelectItem value="sonstiges">Sonstiges</SelectItem>
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
                            <FormLabel>Nachricht</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Beschreiben Sie Ihr Anliegen..." 
                                className="min-h-[120px]"
                                value={field.value || ""}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                name={field.name}
                                ref={field.ref}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        disabled={mutation.isPending}
                        className="w-full bg-[var(--lohn-primary)] text-white hover:bg-[var(--lohn-secondary)] transition-colors rounded-lg py-6 text-lg font-semibold"
                      >
                        {mutation.isPending ? "Wird gesendet..." : "Nachricht senden"}
                      </Button>
                    </form>
                  </Form>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="absolute inset-0 bg-grid-gray-900/5 bg-grid-16"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--lohn-primary)] mb-4">
              Weitere Kontaktmöglichkeiten
            </h2>
            <p className="text-lg text-gray-600">Wir sind auf verschiedenen Wegen für Sie erreichbar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <Card className="text-center h-full hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--lohn-primary)] to-blue-700 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Phone className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-[var(--lohn-primary)] text-2xl">Telefon</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-gray-800 mb-2">+49 6023 9170 100</p>
                  <p className="text-gray-600">Mo-Fr: 9:00 - 17:00 Uhr</p>
                  <Button variant="outline" className="mt-4 group-hover:bg-[var(--lohn-primary)] group-hover:text-white transition-colors">
                    Jetzt anrufen
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="group">
              <Card className="text-center h-full hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--lohn-teal)] to-cyan-600 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-[var(--lohn-primary)] text-2xl">E-Mail</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-gray-800 mb-2">kontakt@lohnlab.de</p>
                  <p className="text-gray-600">Antwort innerhalb von 24h</p>
                  <Button variant="outline" className="mt-4 group-hover:bg-[var(--lohn-teal)] group-hover:text-white transition-colors">
                    E-Mail schreiben
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="group">
              <Card className="text-center h-full hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--lohn-accent)] to-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <MapPin className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-[var(--lohn-primary)] text-2xl">Adresse</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-gray-800">LohnLab GmbH</p>
                  <p className="text-gray-600">Hauptstraße 20</p>
                  <p className="text-gray-600 mb-2">63755 Alzenau</p>
                  <Button variant="outline" className="mt-4 group-hover:bg-[var(--lohn-accent)] group-hover:text-white transition-colors">
                    Route planen
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}