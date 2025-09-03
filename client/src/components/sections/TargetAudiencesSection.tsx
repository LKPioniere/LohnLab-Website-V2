import { UserCheck, Building } from "lucide-react";
import AudienceCard from "@/components/common/AudienceCard";
import { TARGET_AUDIENCES } from "@/constants/target-audiences";

/**
 * Zielgruppen-Sektion Komponente
 */
export default function TargetAudiencesSection() {
  return (
    <section className="py-32 bg-white relative">
      {/* Visuelle Abtrennung oben */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--lohn-secondary)] to-[var(--lohn-purple)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[var(--lohn-primary)]/10 rounded-full px-8 py-3 mb-6">
            <span className="text-[var(--lohn-primary)] font-semibold text-lg">🎯 Zielgruppen</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
            Für wen ist das LohnLab Cockpit?
          </h2>
          <p className="text-xl text-gray-600">Zwei Zielgruppen, ein gemeinsamer Nutzen</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div id="steuerberater">
            <AudienceCard
              title={TARGET_AUDIENCES.steuerberater.title}
              description={TARGET_AUDIENCES.steuerberater.description}
              benefits={TARGET_AUDIENCES.steuerberater.benefits}
              icon={UserCheck}
              iconBgColor="bg-[var(--lohn-primary)]"
              iconColor="text-white"
            />
          </div>

          <div id="unternehmen">
            <AudienceCard
              title={TARGET_AUDIENCES.unternehmen.title}
              description={TARGET_AUDIENCES.unternehmen.description}
              benefits={TARGET_AUDIENCES.unternehmen.benefits}
              icon={Building}
              iconBgColor="bg-[var(--lohn-teal)]"
              iconColor="text-[var(--lohn-primary)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}