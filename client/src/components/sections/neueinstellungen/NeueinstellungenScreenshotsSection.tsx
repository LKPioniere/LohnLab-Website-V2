import salaryCalculationImage from "@/assets/images/screenshots/gehaltsberechnung.webp";
import employeeDataImage from "@/assets/images/screenshots/mitarbeiter-dateneingabe.png";
import { screenshotSteps } from "@/constants/neueinstellungen-data";

const screenshotImages = [salaryCalculationImage, employeeDataImage];

const screenshotAlts = [
  "LohnLab Cockpit: Präzise Gehaltsberechnung für Neueinstellungen mit Kostenoptimierung und DATEV-Integration",
  "LohnLab Cockpit: Mitarbeiterdaten-Eingabe und Verwaltung im Einstellungsprozess mit automatischer Optimierung",
];

export default function NeueinstellungenScreenshotsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lohn-primary mb-6">
            So funktioniert's in der Praxis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Einblicke in die benutzerfreundliche Software-Oberfläche
          </p>
        </div>

        <div className="space-y-16">
          {screenshotSteps.map((step, index) => (
            <div
              key={step.stepNumber}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                step.imageOrder === "left" ? "" : ""
              }`}
            >
              <div
                className={
                  step.imageOrder === "left"
                    ? "order-2 lg:order-1"
                    : "order-1 lg:order-2"
                }
              >
                <img
                  src={screenshotImages[index]}
                  alt={screenshotAlts[index]}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div
                className={
                  step.imageOrder === "left"
                    ? "order-1 lg:order-2"
                    : "order-2 lg:order-1"
                }
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-4 ${
                      step.stepNumber === 1
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
                <div className="space-y-4">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
