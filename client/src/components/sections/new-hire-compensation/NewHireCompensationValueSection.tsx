import { getValueProps } from "@/constants/new-hire-compensation-data";
import { useGender } from "@/lib/gender";

export default function NewHireCompensationValueSection() {
  const gendered = useGender();
  const VALUE_PROPS = getValueProps(gendered);
  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lohn-primary mb-4">
            Der Game-Changer für Ihre Gehaltsberechnungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Eine API, die mehr kann als nur rechnen - sie optimiert, spart und begeistert
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {VALUE_PROPS.map((prop) => {
            const Icon = prop.icon;
            return (
              <div
                key={prop.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-16 h-16 bg-linear-to-br ${prop.iconGradientClass} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-lohn-primary mb-4">
                  {prop.title}
                </h3>
                <p className="text-gray-600 mb-6">{prop.description}</p>
                <div className={`${prop.tipBgClass} p-4 rounded-lg`}>
                  <p className="text-sm text-lohn-teal font-medium">{prop.tip}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
