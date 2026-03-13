import { getCandidateBenefits } from "@/constants/neueinstellungen-data";
import { useGender } from "@/lib/gender";

export default function NeueinstellungenCandidateBenefitsSection() {
  const gendered = useGender();
  const candidateBenefits = getCandidateBenefits(gendered);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lohn-primary mb-6">
            Auch deine Bewerber profitieren
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ein transparenter und unkomplizierter Bewerbungsprozess macht dich
            als {gendered ? "Arbeitgeber*in" : "Arbeitgeber"} noch attraktiver
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {candidateBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="text-center bg-gray-50 rounded-2xl p-8"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  benefit.iconBgColor === "teal"
                    ? "bg-lohn-teal"
                    : benefit.iconBgColor === "primary"
                      ? "bg-lohn-primary"
                      : "bg-lohn-secondary"
                }`}
              >
                <benefit.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-lohn-primary mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
