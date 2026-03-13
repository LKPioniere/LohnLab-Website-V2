import { getMarketTrends } from "@/constants/new-hire-compensation-data";
import { useGender } from "@/lib/gender";

export default function NewHireCompensationMarketTrendsSection() {
  const gendered = useGender();
  const MARKET_TRENDS = getMarketTrends(gendered);
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lohn-primary mb-4">
            Markttrends 2025 - Warum jetzt?
          </h2>
          <p className="text-xl text-gray-600">Basierend auf aktuellen Marktdaten</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MARKET_TRENDS.map((trend) => {
            const Icon = trend.icon;
            return (
              <div
                key={trend.title}
                className="bg-white rounded-2xl p-6 shadow-lg text-center h-full"
              >
                <div
                  className={`w-16 h-16 ${trend.iconBgClass} ${trend.iconColorClass} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-lohn-primary">
                  {trend.title}
                </h3>
                <div className={`${trend.statBgClass} rounded-lg p-4 mb-3`}>
                  <p className={`text-3xl font-bold mb-1 ${trend.statTextClass}`}>
                    {trend.stat}
                  </p>
                  <p className="text-sm text-gray-600">{trend.statLabel}</p>
                </div>
                <p className="text-gray-600 text-sm">{trend.description}</p>
                <p className="text-xs text-gray-400 mt-2">{trend.source}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
