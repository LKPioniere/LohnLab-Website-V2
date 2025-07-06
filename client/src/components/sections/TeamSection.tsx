import TeamMember from "@/components/common/TeamMember";
import { TEAM_MEMBERS } from "@/constants/team";

/**
 * Team-Sektion Komponente
 */
export default function TeamSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
            Das Team hinter LohnLab
          </h2>
          <p className="text-xl text-gray-600">
            Experten für digitale Lohnoptimierung
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <TeamMember key={member.id} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}