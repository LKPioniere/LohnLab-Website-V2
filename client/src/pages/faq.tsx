import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Users, Building } from "lucide-react";
import { getMitarbeiterFAQs, getArbeitgeberFAQs } from "@/constants/faq-data";
import { useGender } from "@/lib/gender";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FAQSidebar } from "@/components/sections/FAQSidebar";

export default function FAQ() {
  const [activeView, setActiveView] = useState<"mitarbeiter" | "arbeitgeber">(
    "mitarbeiter"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [openAccordion, setOpenAccordion] = useState<string>("");
  const gendered = useGender();

  const mitarbeiterFAQs = getMitarbeiterFAQs(gendered);
  const arbeitgeberFAQs = getArbeitgeberFAQs(gendered);
  const currentFAQs =
    activeView === "mitarbeiter" ? mitarbeiterFAQs : arbeitgeberFAQs;

  const filteredFAQs = currentFAQs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAccordionChange = (value: string) => {
    setOpenAccordion(openAccordion === value ? "" : value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ebedf3" }}>
      <Navigation />

      {/* Hero Section */}
      <section
        className="pt-24 pb-16 md:pt-32 md:pb-20"
        style={{ backgroundColor: "#ebedf3" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            Häufig gestellte Fragen
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Finde schnell Antworten auf deine Fragen zu LohnLab Cockpit und
            unseren Services.
          </p>
        </div>
      </section>

      {/* View Toggle */}
      <section className="py-12" style={{ backgroundColor: "#ebedf3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-300 p-6 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h2 className="text-xl md:text-2xl font-bold text-black">
                FAQ-Bereich auswählen
              </h2>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <Button
                  onClick={() => setActiveView("mitarbeiter")}
                  variant={activeView === "mitarbeiter" ? "default" : "ghost"}
                  className={`px-6 py-2 rounded-lg ${
                    activeView === "mitarbeiter"
                      ? "bg-lohn-primary text-white"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Users className="mr-2" size={18} />
                  {gendered ? "Mitarbeiter*innen" : "Mitarbeiter"}
                </Button>
                <Button
                  onClick={() => setActiveView("arbeitgeber")}
                  variant={activeView === "arbeitgeber" ? "default" : "ghost"}
                  className={`px-6 py-2 rounded-lg ${
                    activeView === "arbeitgeber"
                      ? "bg-lohn-primary text-white"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Building className="mr-2" size={18} />
                  {gendered ? "Arbeitgeber*in" : "Arbeitgeber"}
                </Button>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-300 p-6 mb-8">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                type="text"
                placeholder="Nach Fragen oder Stichworten suchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 text-lg py-3 border-gray-300 focus:border-lohn-primary focus:ring-lohn-primary"
                required
              />
            </div>
            {searchQuery && (
              <p className="mt-3 text-sm text-gray-600">
                {filteredFAQs.length}{" "}
                {filteredFAQs.length === 1 ? "Ergebnis" : "Ergebnisse"} für "
                {searchQuery}"
              </p>
            )}
          </div>

          {/* FAQ Content with Sidebar */}
          <div className="relative">
            {/* Main FAQ Container */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-300 p-6">
              <div className="mb-6">
                <p className="text-gray-700 text-sm">
                  {activeView === "mitarbeiter"
                    ? "Antworten zu deinem Lohnkonzept, der givve® Card und weiteren Mitarbeiter-Services."
                    : "Informationen zur Einrichtung, Umsetzung und den Vorteilen von LohnLab für dein Unternehmen."}
                </p>
              </div>

              <FAQAccordion
                faqs={filteredFAQs}
                openAccordion={openAccordion}
                onAccordionChange={handleAccordionChange}
              />
            </div>

            {/* Floating Right Sidebar - Desktop */}
            <div className="hidden xl:block absolute top-0 -right-80 w-72 space-y-6">
              <FAQSidebar activeView={activeView} />
            </div>
          </div>

          {/* Mobile/Tablet Sidebar Content */}
          <div className="xl:hidden grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <FAQSidebar activeView={activeView} variant="grid" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
