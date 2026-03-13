import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CreditCard, CheckCircle2, ChevronDown } from "lucide-react";
import lohnlabCard from "@/assets/images/general/lohnlab-card.png";
import { benefits } from "@/constants/karriere-data";

export default function KarriereBenefitsSection() {
  const [expandedBenefit, setExpandedBenefit] = useState<string | null>(null);

  const toggleBenefit = (category: string, index: number) => {
    const key = `${category}-${index}`;
    setExpandedBenefit((prev) => (prev === key ? null : key));
  };

  return (
    <section id="benefits" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            Deine Benefits bei LohnLab
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Bei uns erwarten dich nicht nur spannende Aufgaben, sondern auch
            Benefits, die wirklich einen Unterschied machen.
          </p>
        </div>

        {/* LohnLab Card Highlight */}
        <div className="mb-16 bg-linear-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Deine persönliche LohnLab Card
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Jeden Monat erhältst du 50€ Sachbezug auf deine eigene LohnLab
                Card – ein echter Mehrwert, den du überall in deiner Region
                nutzen kannst, wo Kartenzahlung akzeptiert wird. Plus: 60€ zum
                Geburtstag und mindestens 156€ zum Urlaub – alles steuerfrei!
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-lohn-primary font-semibold">
                  <CreditCard className="w-5 h-5" />
                  <span>50€ monatlich + 60€ Geburtstag + 156€ Urlaub</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>100% steuerfrei</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={lohnlabCard}
                alt="LohnLab Card"
                className="w-full max-w-md rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Benefits Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {benefits.map((category) => (
              <CarouselItem
                key={category.category}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-lohn-primary rounded-xl flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-black">
                        {category.category}
                      </h3>
                    </div>
                    <div className="space-y-3 flex-1">
                      {category.items.map((item, index) => {
                        const key = `${category.category}-${index}`;
                        const isExpanded = expandedBenefit === key;
                        return (
                          <div
                            key={index}
                            className="bg-white rounded-lg p-4 border border-gray-200"
                          >
                            <div
                              className="flex items-start gap-3 cursor-pointer"
                              onClick={() =>
                                toggleBenefit(category.category, index)
                              }
                            >
                              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center shrink-0 border border-gray-200">
                                <item.icon className="w-5 h-5 text-lohn-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                  <p className="font-semibold text-black text-sm">
                                    {item.title}
                                  </p>
                                  {item.longDesc && (
                                    <ChevronDown
                                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0 ${
                                        isExpanded ? "rotate-180" : ""
                                      }`}
                                    />
                                  )}
                                </div>
                                <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                                  {item.shortDesc}
                                </p>
                                {isExpanded && item.longDesc && (
                                  <p className="text-xs text-gray-700 mt-3 pt-3 border-t border-gray-200 leading-relaxed">
                                    {item.longDesc}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            Nutze die Pfeile, um alle {benefits.length} Benefit-Kategorien zu
            entdecken
          </p>
        </div>
      </div>
    </section>
  );
}
