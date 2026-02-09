import { useEffect } from "react";
import { FileDown } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import saasVertragPdf from "@/assets/SaaS_Vertrag_und_AVV_LL_Unternehmen.pdf";

/** Beim Austausch der PDF dieses Datum anpassen */
const ZULETZT_GEAENDERT = "09.02.2026";

export default function SaasVertrag() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[var(--lohn-primary)] mb-8">
            SaaS-Vertrag LohnLab Cockpit
          </h1>

          <p className="text-lg text-gray-600 mb-2">
            Hier findest du die aktuelle Fassung des SaaS-Vertrags und der
            Auftragsverarbeitungsvereinbarung (AVV) für das LohnLab Cockpit.
            Das Dokument gilt für die Nutzung durch Unternehmen.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Zuletzt geändert: {ZULETZT_GEAENDERT}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={saasVertragPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: "var(--lohn-primary)" }}
            >
              <FileDown className="w-5 h-5" />
              PDF in neuem Tab öffnen
            </a>
            <a
              href={saasVertragPdf}
              download="SaaS_Vertrag_und_AVV_LL_Unternehmen.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium border-2 border-[var(--lohn-primary)] text-[var(--lohn-primary)] transition-colors hover:bg-[var(--lohn-primary)] hover:text-white"
            >
              <FileDown className="w-5 h-5" />
              PDF herunterladen
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Bei Fragen zum Vertrag wende dich gerne an uns über die{" "}
            <a href="/kontakt" className="text-[var(--lohn-primary)] hover:underline">
              Kontaktseite
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
