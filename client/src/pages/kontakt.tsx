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
      <section className="pt-32 pb-20 bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-teal)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Kontakt & <br />
              <span className="text-[var(--lohn-accent)]">Beratung</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Für Interessenten, Kunden und Partner - wir sind für Sie da.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-[var(--lohn-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <CardTitle className="text-[var(--lohn-primary)]">Interessent</CardTitle>
                <CardDescription>Sie möchten das LohnLab Cockpit kennenlernen?</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="mb-2">Kostenlose Demo</Badge>
                <p className="text-sm text-gray-600">Lernen Sie alle Funktionen in einer persönlichen Demonstration kennen.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="text-white" size={24} />
                </div>
                <CardTitle className="text-[var(--lohn-primary)]">Kunde</CardTitle>
                <CardDescription>Sie sind bereits LohnLab Kunde?</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="mb-2">Support & Beratung</Badge>
                <p className="text-sm text-gray-600">Wir helfen Ihnen bei Fragen zur Anwendung und Optimierung.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-[var(--lohn-purple)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="text-white" size={24} />
                </div>
                <CardTitle className="text-[var(--lohn-primary)]">Partner</CardTitle>
                <CardDescription>Sie sind Steuerberater oder Wirtschaftsprüfer?</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="mb-2">Partnerberatung</Badge>
                <p className="text-sm text-gray-600">Erfahren Sie mehr über unser Partnerprogramm und Schulungen.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* HubSpot Meetings Integration */}
            <div>
              <h2 className="text-3xl font-bold text-[var(--lohn-primary)] mb-6">
                <Calendar className="inline-block mr-3" size={32} />
                Termin vereinbaren
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Buchen Sie direkt einen passenden Termin für Ihre persönliche Beratung oder Demo.
              </p>
              
              {/* HubSpot Meetings Embed */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div 
                  className="meetings-iframe-container" 
                  data-src="https://meetings-eu1.hubspot.com/michael-schmitt?embed=true"
                  style={{ minHeight: '600px' }}
                ></div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-6">
              Weitere Kontaktmöglichkeiten
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-[var(--lohn-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white" size={24} />
                </div>
                <CardTitle className="text-[var(--lohn-primary)]">Telefon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-800">+49 6023 9170 100</p>
                <p className="text-sm text-gray-600 mt-2">Mo-Fr: 9:00 - 17:00 Uhr</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={24} />
                </div>
                <CardTitle className="text-[var(--lohn-primary)]">E-Mail</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-800">service@lohnlab.de</p>
                <p className="text-sm text-gray-600 mt-2">Antwort innerhalb von 24h</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-[var(--lohn-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <CardTitle className="text-[var(--lohn-primary)]">Adresse</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-800">LohnLab GmbH</p>
                <p className="text-sm text-gray-600">Hauptstraße 20</p>
                <p className="text-sm text-gray-600">63755 Alzenau</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}