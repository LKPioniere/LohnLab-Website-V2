import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Construction, ArrowLeft, Coffee } from "lucide-react";

export default function Unternehmen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ebedf3" }}>
      <Navigation />

      <section className="py-32 md:py-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Construction className="w-24 h-24 mx-auto text-gray-400 mb-6 animate-pulse" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Hier entsteht etwas Großartiges
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Unsere "Über uns" Seite ist gerade im Bau. Wie ein guter Wein braucht auch
            eine gute Unternehmensseite ihre Zeit zum Reifen.
          </p>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Coffee className="w-8 h-8 text-lohn-primary" />
              <p className="text-lg text-gray-600">
                Während wir hier werkeln, kannst du gerne einen Kaffee trinken
              </p>
            </div>
            <p className="text-gray-500 text-sm">
              (Oder schau dir unsere anderen Seiten an, die sind schon fertig!)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button
                className="bg-lohn-primary text-white hover:bg-lohn-secondary transition-colors rounded-full px-8 py-3 text-base font-semibold shadow-md flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Zurück zur Startseite
              </Button>
            </Link>
            <Link href="/kontakt">
              <Button
                variant="outline"
                className="border-2 border-gray-400 text-gray-700 hover:bg-gray-50 transition-colors rounded-full px-8 py-3 text-base font-semibold bg-transparent"
              >
                Kontakt aufnehmen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
