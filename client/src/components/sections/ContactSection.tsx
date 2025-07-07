import ContactForm from "@/components/forms/ContactForm";
import CompanyInfo from "@/components/common/CompanyInfo";
import EarlyBirdBenefits from "@/components/common/EarlyBirdBenefits";
import { useContactForm } from "@/hooks/api/useContactForm";

/**
 * Kontakt-Sektion Komponente
 */
export default function ContactSection() {
  const { formData, handleSubmit, handleInputChange, isSubmitting } = useContactForm();

  return (
    <section id="kontakt" className="py-32 bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-secondary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für die Zukunft der Lohnberatung?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Sichern Sie sich frühzeitig Ihren Zugang zu LohnLab Cockpit und profitieren Sie 
            als Early Adopter von besonderen Konditionen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Kontakt aufnehmen</h3>
            <ContactForm 
              formData={formData}
              onSubmit={handleSubmit}
              onInputChange={handleInputChange}
              isSubmitting={isSubmitting}
            />
          </div>

          <div className="space-y-8">
            <div>
              <CompanyInfo />
            </div>
            <EarlyBirdBenefits />
          </div>
        </div>
      </div>
    </section>
  );
}