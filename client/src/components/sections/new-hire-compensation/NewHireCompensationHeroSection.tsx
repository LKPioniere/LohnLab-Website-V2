import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function NewHireCompensationHeroSection() {
  return (
    <section className="bg-linear-to-br from-lohn-primary via-lohn-secondary to-lohn-purple text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="bg-green-500 text-white mb-4 px-4 py-1">API Service</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            New Hire Compensation API
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Berechnen Sie neue Gehälter exakt und profitieren Sie von unglaublicher Flexibilität bei der Dateneingabe
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              onClick={() =>
                document.getElementById("api-docs")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-lohn-primary hover:bg-gray-100 transition-colors rounded-full px-8 py-4 font-semibold"
            >
              API Dokumentation
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-lohn-primary transition-colors rounded-full px-8 py-4 font-semibold"
            >
              Demo anfordern
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
