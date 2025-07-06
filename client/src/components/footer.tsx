import { Linkedin } from "lucide-react";
import { SiXing } from "react-icons/si";
import { Link } from "wouter";
import lohnlabLogo from "@/assets/lohnlab-logo-white.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[var(--lohn-primary)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img 
              src={lohnlabLogo} 
              alt="LohnLab Logo" 
              className="h-8 w-auto mb-4"
            />
            <p className="text-blue-100 mb-4">
              Ihr digitales Werkzeug für moderne Lohnoptimierung - entwickelt für Steuerberater und Unternehmen, 
              die auf Präzision und Effizienz setzen.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-white w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Xing"
              >
                <SiXing className="text-white w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Produkt</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="hover:text-white transition-colors text-left"
                >
                  Features
                </button>
              </li>
              <li>
                <span className="text-gray-400 cursor-not-allowed">
                  Roadmap
                </span>
              </li>
              <li><span className="text-gray-400 cursor-not-allowed">Preise</span></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#" className="hover:text-white transition-colors">Über uns</a></li>
              <li>
                <Link href="/kontakt" className="hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
              <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; 2025 LohnLab GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
