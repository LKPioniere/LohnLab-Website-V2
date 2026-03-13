import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NeueinstellungenHeroSection() {
  return (
    <section className="pt-32 pb-20 bg-linear-to-br from-lohn-primary to-lohn-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Neueinstellungen <br />
            <span className="text-lohn-accent">
              intelligent gestalten
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Von der optimalen Gehaltsberechnung bis zur nahtlosen
            DATEV-Integration - gestalte Neueinstellungen effizienter und
            kostensparender.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt">
              <Button
                size="lg"
                className="bg-lohn-teal text-white hover:bg-lohn-teal/90"
              >
                Kostenlos testen
              </Button>
            </Link>
            <Link href="/kontakt">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-blue-600 bg-white hover:bg-gray-100"
              >
                Demo anfordern
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
