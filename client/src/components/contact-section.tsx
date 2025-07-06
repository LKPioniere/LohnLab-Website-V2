import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { MapPin, Mail, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface ContactForm {
  name: string;
  email: string;
  userType: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    userType: "",
    message: ""
  });

  const submitContact = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest('POST', '/api/contacts', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Nachricht gesendet",
        description: "Vielen Dank für Ihr Interesse! Wir melden uns bald bei Ihnen.",
      });
      setFormData({ name: "", email: "", userType: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Fehler",
        description: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle Pflichtfelder aus.",
        variant: "destructive",
      });
      return;
    }
    submitContact.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="kontakt" className="py-20 bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-secondary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bereit für die Zukunft der Lohnberatung?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Sichern Sie sich frühzeitig Ihren Zugang zu LohnLab Cockpit und profitieren Sie 
            als Early Adopter von besonderen Konditionen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Kontakt aufnehmen</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[var(--lohn-teal)]"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">E-Mail *</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[var(--lohn-teal)]"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Ich bin...</label>
                  <Select value={formData.userType} onValueChange={(value) => handleInputChange('userType', value)}>
                    <SelectTrigger className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-[var(--lohn-teal)]">
                      <SelectValue placeholder="Bitte auswählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="steuerberater">Steuerberater</SelectItem>
                      <SelectItem value="unternehmen">Unternehmen</SelectItem>
                      <SelectItem value="sonstiges">Sonstiges</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Nachricht</label>
                  <Textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[var(--lohn-teal)] resize-none"
                    placeholder="Ihre Nachricht..."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={submitContact.isPending}
                  className="w-full bg-[var(--lohn-teal)] text-[var(--lohn-primary)] hover:bg-white transition-colors rounded-xl py-3 font-semibold"
                >
                  {submitContact.isPending ? "Wird gesendet..." : "Nachricht senden"}
                </Button>
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">LohnLab GmbH</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[var(--lohn-teal)] rounded-lg flex items-center justify-center mt-1">
                    <MapPin className="text-[var(--lohn-primary)] text-sm" />
                  </div>
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-blue-100">Hauptstraße 20<br />63755 Alzenau</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[var(--lohn-teal)] rounded-lg flex items-center justify-center mt-1">
                    <Mail className="text-[var(--lohn-primary)] text-sm" />
                  </div>
                  <div>
                    <p className="font-medium">E-Mail</p>
                    <p className="text-blue-100">service@lohnlab.de</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[var(--lohn-teal)] rounded-lg flex items-center justify-center mt-1">
                    <Phone className="text-[var(--lohn-primary)] text-sm" />
                  </div>
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-blue-100">06023 / 9180-10</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4">Early Bird Vorteile</h4>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center space-x-2">
                  <Star className="text-[var(--lohn-teal)] text-sm" />
                  <span>Bevorzugter Zugang zum MVP</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="text-[var(--lohn-teal)] text-sm" />
                  <span>Sonderkonditionen für Frühanwender</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="text-[var(--lohn-teal)] text-sm" />
                  <span>Direkter Draht zum Entwicklungsteam</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="text-[var(--lohn-teal)] text-sm" />
                  <span>Kostenlose Schulungen und Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
