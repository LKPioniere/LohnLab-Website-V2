import { Linkedin } from "lucide-react";
import { Link } from "wouter";
import lohnlabLogo from "@/assets/lohnlab-logo-white.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white pt-40 md:pt-60 pb-12" style={{ backgroundColor: "#2c2c2c" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <img
              src={lohnlabLogo}
              alt="LohnLab Logo"
              className="h-8 w-auto mb-4"
            />
            <p className="text-blue-100 mb-4">
              Dein digitales Werkzeug für moderne Lohnoptimierung - entwickelt
              für Steuerberater und Unternehmen, die auf Präzision und Effizienz
              setzen.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/lohnlab-gmbh/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-white w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Lösungen</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link
                  href="/loesungen/lohnerhoehung"
                  className="hover:text-white transition-colors"
                >
                  Lohnerhöhung
                </Link>
              </li>
              <li>
                <Link
                  href="/loesungen/neueinstellungen"
                  className="hover:text-white transition-colors"
                >
                  Neueinstellungen
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Für Wen</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link
                  href="/steuerberater"
                  className="hover:text-white transition-colors"
                >
                  Steuerberater
                </Link>
              </li>
              <li>
                <Link
                  href="/unternehmen"
                  className="hover:text-white transition-colors"
                >
                  Unternehmen
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link
                  href="/kontakt"
                  className="hover:text-white transition-colors"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/karriere"
                  className="hover:text-white transition-colors"
                >
                  Karriere
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-100">&copy; 2026 LohnLab GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6 text-blue-100">
            <Link
              href="/impressum"
              className="hover:text-white transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-white transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
