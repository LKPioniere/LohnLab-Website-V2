import { Button } from "@/components/ui/button";
import teamImage from "@/assets/images/general/team-lohnlab.jpg";

interface KarriereHeroSectionProps {
  onViewJobs: () => void;
  onInitiativApply: () => void;
}

export default function KarriereHeroSection({
  onViewJobs,
  onInitiativApply,
}: KarriereHeroSectionProps) {
  return (
    <section
      className="pt-24 pb-12 md:pt-32 md:pb-16"
      style={{ backgroundColor: "#ebedf3" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              Gestalte die Zukunft der Lohnoptimierung mit
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Wir sind ein junges innovatives Unternehmen, das die Art und Weise
              revolutioniert, wie Unternehmen Löhne verstehen. Werde Teil unseres
              ambitionierten Teams und hilf uns, die Arbeitswelt fairer und
              effizienter zu gestalten.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={onViewJobs}
                className="bg-lohn-primary hover:bg-lohn-secondary text-white px-8 py-6 text-lg rounded-full shadow-lg"
              >
                Offene Stellen ansehen
              </Button>
              <Button
                onClick={onInitiativApply}
                variant="outline"
                className="border-2 border-lohn-primary text-lohn-primary hover:bg-lohn-primary hover:text-white px-8 py-6 text-lg rounded-full"
              >
                Initiativbewerbung
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={teamImage}
              alt="LohnLab Team"
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
