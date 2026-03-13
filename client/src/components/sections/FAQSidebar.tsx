import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, HelpCircle } from "lucide-react";
import faqArbeitgeberPdf from "@/assets/documents/faq-arbeitgeber.pdf";
import faqPreviewImg from "@/assets/images/screenshots/faq-vorschau.png";

interface FAQSidebarProps {
  activeView: "mitarbeiter" | "arbeitgeber";
  /** "stacked" = für Desktop (space-y-6), "grid" = für Mobile (separate Grid-Items) */
  variant?: "stacked" | "grid";
}

function FAQPdfCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-300 p-6">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-lohn-primary rounded-lg flex items-center justify-center mr-3">
          <Download size={20} className="text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-black text-sm">FAQ als PDF</h3>
          <p className="text-xs text-gray-500">Kompakte Übersicht</p>
        </div>
      </div>
      <div className="mb-4">
        <div className="w-full h-36 bg-white rounded-lg border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-all duration-300">
          <img
            src={faqPreviewImg}
            alt="FAQ PDF Vorschau"
            className="w-full h-full object-cover"
            onClick={() => window.open(faqArbeitgeberPdf, "_blank")}
          />
        </div>
      </div>
      <Button
        asChild
        size="sm"
        className="w-full bg-lohn-primary hover:bg-lohn-secondary text-white shadow-md"
      >
        <a
          href={faqArbeitgeberPdf}
          download="LohnLab_FAQ_Arbeitgeber.pdf"
          className="flex items-center justify-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download size={14} />
          PDF herunterladen
        </a>
      </Button>
    </div>
  );
}

function FAQLinksCard({
  activeView,
}: {
  activeView: "mitarbeiter" | "arbeitgeber";
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-300 p-6">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gray-400/40 rounded-lg flex items-center justify-center mr-3">
          <ExternalLink size={20} className="text-gray-600" />
        </div>
        <div>
          <h3 className="font-semibold text-black text-sm">Nützliche Links</h3>
          <p className="text-xs text-gray-500">Direkte Zugänge</p>
        </div>
      </div>
      <div className="space-y-2">
        {activeView === "mitarbeiter" && (
          <>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="w-full justify-start hover:bg-gray-100 text-gray-700 border border-transparent hover:border-gray-300"
            >
              <a
                href="https://card.givve.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink size={14} className="text-gray-600" />
                givve® Card Portal
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="w-full justify-start hover:bg-gray-100 text-gray-700 border border-transparent hover:border-gray-300"
            >
              <a
                href="https://cleverlunch.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink size={14} className="text-gray-600" />
                cleverlunch
              </a>
            </Button>
          </>
        )}
        {activeView === "arbeitgeber" && (
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="w-full justify-start hover:bg-gray-100 text-gray-700 border border-transparent hover:border-gray-300"
          >
            <Link href="/" className="flex items-center gap-2">
              <ExternalLink size={14} className="text-gray-600" />
              LohnLab Cockpit
            </Link>
          </Button>
        )}
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="w-full justify-start hover:bg-gray-100 text-gray-700 border border-transparent hover:border-gray-300"
        >
          <Link href="/kontakt" className="flex items-center gap-2">
            <HelpCircle size={14} className="text-gray-600" />
            Persönliche Beratung
          </Link>
        </Button>
      </div>
    </div>
  );
}

export function FAQSidebar({
  activeView,
  variant = "stacked",
}: FAQSidebarProps) {
  if (variant === "grid") {
    return (
      <>
        {activeView === "arbeitgeber" && <FAQPdfCard />}
        <FAQLinksCard activeView={activeView} />
      </>
    );
  }

  return (
    <div className="space-y-6">
      {activeView === "arbeitgeber" && <FAQPdfCard />}
      <FAQLinksCard activeView={activeView} />
    </div>
  );
}
