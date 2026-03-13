import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { getBenefitsItems } from "@/constants/neueinstellungen-data";
import { useGender } from "@/lib/gender";

export default function NeueinstellungenBenefitsSection() {
  const gendered = useGender();
  const benefitsItems = getBenefitsItems(gendered);
  return (
    <section className="py-20 bg-linear-to-r from-lohn-purple to-lohn-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Dein Vorteil bei Neueinstellungen
        </h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto">
          Gewinne begehrte Fachkräfte durch optimierte Gehaltspakete und spare
          dabei noch Kosten
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefitsItems.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-white text-opacity-90">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/kontakt">
            <Button
              size="lg"
              className="bg-lohn-teal text-white hover:bg-lohn-teal/90"
            >
              Termin vereinbaren
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
