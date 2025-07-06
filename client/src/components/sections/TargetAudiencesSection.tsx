import { UserCheck, Building } from "lucide-react";
import AudienceCard from "@/components/common/AudienceCard";
import { TARGET_AUDIENCES } from "@/constants/target-audiences";

/**
 * Zielgruppen-Sektion Komponente
 */
export default function TargetAudiencesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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