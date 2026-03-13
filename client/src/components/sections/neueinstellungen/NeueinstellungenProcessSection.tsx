import { getProcessSteps } from "@/constants/neueinstellungen-data";
import { useGender } from "@/lib/gender";

export default function NeueinstellungenProcessSection() {
  const gendered = useGender();
  const processSteps = getProcessSteps(gendered);
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lohn-primary mb-6">
            Nahtlose Integration in Ihren Einstellungsprozess
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zwischen Stellenausschreibung und Stammdatenerfassung - genau da,
            wo du optimale Gehaltspakete brauchst
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {processSteps.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 ${
                    step.accentColor === "primary"
                      ? "bg-lohn-primary"
                      : "bg-lohn-secondary"
                  }`}
                >
                  {step.stepNumber}
                </div>
                <h3 className="text-2xl font-bold text-lohn-primary">
                  {step.title}
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                {step.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-start space-x-3"
                  >
                    <feature.icon
                      className="text-lohn-teal mt-1"
                      size={20}
                    />
                    <div>
                      <h4 className="font-semibold text-lohn-primary">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className={`p-4 rounded-lg ${
                  step.accentColor === "primary"
                    ? "bg-lohn-primary bg-opacity-10"
                    : "bg-lohn-secondary bg-opacity-10"
                }`}
              >
                <p className="text-sm text-lohn-primary font-medium">
                  {step.tip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
