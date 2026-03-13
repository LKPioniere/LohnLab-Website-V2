import { CheckCircle } from "lucide-react";
import { SERVICES } from "@/constants/new-hire-compensation-data";

export default function NewHireCompensationServicesSection() {
  return (
    <section className="py-20 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lohn-primary mb-4">
            Verbundene Services rund um die API
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir bieten mehr als nur eine API - ein komplettes Ökosystem für Ihre Lohnoptimierung
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-14 h-14 bg-linear-to-br ${service.iconGradientClass} rounded-xl flex items-center justify-center mb-6`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-lohn-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
