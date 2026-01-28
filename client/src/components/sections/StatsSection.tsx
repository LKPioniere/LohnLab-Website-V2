/**
 * Statistik-Kacheln Sektion
 */
export default function StatsSection() {
  const stats = [
    {
      value: "+120.000",
      label: "optimierte Gehälter",
      sublabel: "Im letzten Jahr",
    },
    {
      value: "220+",
      label: "Unternehmenskunden",
      sublabel: "seit Gründung",
    },
    {
      value: "Ø 2.000 €",
      label: "Ersparnis pro Mitarbeiter",
      sublabel: "im Monat",
    },
    {
      value: "+14.900",
      label: "givve-Cards",
      sublabel: "in der laufenden Betreuung",
    },
  ];

  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: "#ebedf3" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-black mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500 mt-3">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
