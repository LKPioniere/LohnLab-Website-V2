import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ContactForm as ContactFormType } from "@/types/contact";
import { useState } from "react";

interface ContactFormProps {
  formData: ContactFormType;
  onSubmit: (e: React.FormEvent) => void;
  onInputChange: (field: keyof ContactFormType, value: string) => void;
  isSubmitting: boolean;
}

/**
 * Kontaktformular Komponente mit Honeypot Spam-Schutz
 */
export default function ContactForm({
  formData,
  onSubmit,
  onInputChange,
  isSubmitting,
}: ContactFormProps) {
  // Honeypot field for spam protection
  const [honeypot, setHoneypot] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // If honeypot field is filled, it's likely a bot
    if (honeypot) {
      console.warn("Spam detected - honeypot field filled");
      return;
    }

    onSubmit(e);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="space-y-4">
        {/* Honeypot field - hidden from users but visible to bots */}
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor="website_url">Website (leave blank)</label>
          <input
            type="text"
            id="website_url"
            name="website_url"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Name *</label>
          <Input
            type="text"
            required
            value={formData.name}
            onChange={(e) => onInputChange("name", e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder:text-white/90 focus:outline-none focus:ring-2 focus:ring-[var(--lohn-teal)]"
            placeholder="Dein Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">E-Mail *</label>
          <Input
            type="email"
            required
            value={formData.email}
            onChange={(e) => onInputChange("email", e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder:text-white/90 focus:outline-none focus:ring-2 focus:ring-[var(--lohn-teal)]"
            placeholder="deine@email.de"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Ich bin...</label>
          <Select
            value={formData.userType}
            onValueChange={(value) => onInputChange("userType", value)}
          >
            <SelectTrigger className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder:text-white/90 focus:outline-none focus:ring-2 focus:ring-[var(--lohn-teal)] [&>span]:text-white/90">
              <SelectValue
                placeholder="Bitte auswählen"
                className="text-white/90"
              />
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
            onChange={(e) => onInputChange("message", e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder:text-white/90 focus:outline-none focus:ring-2 focus:ring-[var(--lohn-teal)] resize-none"
            placeholder="Deine Nachricht..."
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[var(--lohn-teal)] text-[var(--lohn-primary)] hover:bg-white transition-colors rounded-xl py-3 font-semibold"
        >
          {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
        </Button>
      </div>
    </form>
  );
}
