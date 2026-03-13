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
import { useGender } from "@/lib/gender";

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
  const gendered = useGender();
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
          <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
          <Input
            type="text"
            required
            value={formData.name}
            onChange={(e) => onInputChange("name", e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lohn-primary focus:border-lohn-primary"
            placeholder="Dein Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail *</label>
          <Input
            type="email"
            required
            value={formData.email}
            onChange={(e) => onInputChange("email", e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lohn-primary focus:border-lohn-primary"
            placeholder="deine@email.de"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Ich bin...</label>
          <Select
            value={formData.userType}
            onValueChange={(value) => onInputChange("userType", value)}
          >
            <SelectTrigger className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lohn-primary focus:border-lohn-primary [&>span]:text-gray-900">
              <SelectValue
                placeholder="Bitte auswählen"
                className="text-gray-900"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="steuerberater">{gendered ? "Steuerberater*in" : "Steuerberater"}</SelectItem>
              <SelectItem value="unternehmen">Unternehmen</SelectItem>
              <SelectItem value="sonstiges">Sonstiges</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nachricht</label>
          <Textarea
            rows={8}
            value={formData.message}
            onChange={(e) => onInputChange("message", e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lohn-primary focus:border-lohn-primary resize-none"
            placeholder="Deine Nachricht..."
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-lohn-primary text-white hover:bg-lohn-secondary transition-colors rounded-full py-3 font-semibold shadow-md"
        >
          {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
        </Button>
      </div>
    </form>
  );
}
