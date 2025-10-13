import { z } from "zod";

/**
 * Kontakt-bezogene Typen
 */
export interface ContactForm {
  name: string;
  email: string;
  userType: string;
  message: string;
}

// Zod schema for contact form validation
export const insertContactSchema = z.object({
  name: z.string().min(1, "Name ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  userType: z.string().min(1, "Bitte wählen Sie eine Option"),
  message: z.string().optional(),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
