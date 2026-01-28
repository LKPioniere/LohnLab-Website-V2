import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactForm from "@/components/forms/ContactForm";
import ObfuscatedEmail from "@/components/common/ObfuscatedEmail";
import { useContactForm } from "@/hooks/api/useContactForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  MapPin,
  Calendar,
  Building,
  Headset,
  Handshake,
  Loader2,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  X,
} from "lucide-react";
import lrImage from "@/assets/lr-neu.jpg";
import kkImage from "@/assets/kk-neu.jpg";
import rbImage from "@/assets/rb-neu.jpg";

type CalendarType = "company" | "service" | "partner";

const HUBSPOT_MEETING_URLS: Record<CalendarType, string> = {
  company:
    "https://meetings-eu1.hubspot.com/lukas20/unternehmen-kennenlerngesprach-website?embed=true",
  service: "https://meetings-eu1.hubspot.com/lreichert/service-termin?embed=true",
  partner: "https://meetings-eu1.hubspot.com/lreichert/kooperationspartner?embed=true",
};

const HUBSPOT_MEETINGS_SCRIPT =
  "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";

type HubspotMeetingEmbedProps = {
  meetingUrl: string;
  reloadTrigger: number;
  onLoaded?: () => void;
};

function HubspotMeetingEmbed({
  meetingUrl,
  reloadTrigger,
  onLoaded,
}: HubspotMeetingEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    container.innerHTML = "";

    const meetingsDiv = document.createElement("div");
    meetingsDiv.className = "meetings-iframe-container";
    meetingsDiv.setAttribute("data-src", meetingUrl);
    container.appendChild(meetingsDiv);

    let isActive = true;
    let hasNotified = false;

    const notifyLoaded = () => {
      if (!isActive || hasNotified) {
        return;
      }
      hasNotified = true;
      onLoaded?.();
    };

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = HUBSPOT_MEETINGS_SCRIPT;
    script.async = true;
    script.onload = notifyLoaded;
    script.onerror = notifyLoaded;
    container.appendChild(script);

    const fallbackTimer = window.setTimeout(notifyLoaded, 5000);

    return () => {
      isActive = false;
      window.clearTimeout(fallbackTimer);
      container.innerHTML = "";
    };
  }, [meetingUrl, reloadTrigger, onLoaded]);

  return <div ref={containerRef} className="h-full" />;
}

export default function Kontakt() {
  const [selectedCalendar, setSelectedCalendar] = useState<CalendarType>(
    "company"
  );
  const [calendarLoading, setCalendarLoading] = useState(false);
  const [embedReloadTrigger, setEmbedReloadTrigger] = useState(0);
  const [showFeedbackNotice, setShowFeedbackNotice] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const { formData, handleSubmit, handleInputChange, isSubmitting } =
    useContactForm();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Kalender direkt laden, da "company" default ist
    setCalendarLoading(true);
    // Nach 5 Sekunden minimieren
    const timer = setTimeout(() => {
      setIsMinimized(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // E-Mail-Vorlage für Feedback
  const feedbackEmail = {
    subject: encodeURIComponent("Feedback zur Kontaktseite"),
    body: encodeURIComponent(`Hi Lennart, bitte ändere noch folgendes auf der Page "Kontaktseite":

[Dein Feedback hier einfügen]

---
Feedback-Regeln:
• Beschreibe möglichst genau, was geändert werden soll
• Gib an, wo sich das Element befindet (z.B. "im Hero-Bereich", "in der FAQ-Sektion")
• Beschreibe das gewünschte Ergebnis
• Du kannst auch Screenshots anhängen, um dein Feedback zu verdeutlichen
`),
  };

  const handleCalendarSelect = (type: CalendarType) => {
    setSelectedCalendar(type);
    setEmbedReloadTrigger((prev) => prev + 1);
    setCalendarLoading(true);

    // Scroll to calendar section after selection
    setTimeout(() => {
      const calendarSection = document.getElementById("calendar-section");
      if (calendarSection) {
        calendarSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ebedf3" }}>
      <Navigation />

      {/* Feedback Notice - schiebt sich von rechts rein */}
      {showFeedbackNotice && (
        <div 
          className={`fixed top-20 right-0 z-50 animate-slide-in-right transition-all duration-300 ${
            isMinimized ? 'group' : ''
          }`}
          onMouseEnter={() => {
            if (isMinimized) {
              setIsMinimized(false);
            }
          }}
        >
          <div className={`bg-white rounded-l-2xl shadow-2xl border-2 border-green-500 flex items-center gap-4 transition-all duration-300 ${
            isMinimized ? 'p-2' : 'p-4 pr-6'
          }`}>
            {/* Grüne Leuchte */}
            <div className="relative flex-shrink-0">
              <div className={`w-12 h-12 bg-green-500 rounded-full flex items-center justify-center ${
                isMinimized ? '' : 'animate-pulse'
              }`}>
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              {!isMinimized && (
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
              )}
            </div>
            {/* Text - nur sichtbar wenn nicht minimiert */}
            {!isMinimized && (
              <>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-black">
                    Verbesserungsvorschläge?
                  </p>
                  <p className="text-xs text-gray-600">
                    <a 
                      href={`mailto:lr@lohnlab.de?subject=${feedbackEmail.subject}&body=${feedbackEmail.body}`}
                      className="text-[var(--lohn-primary)] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      lr@lohnlab.de
                    </a>
                  </p>
                </div>
                {/* Minimize Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMinimized(true);
                  }}
                  className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Hinweis minimieren"
                >
                  <X className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20" style={{ backgroundColor: "#ebedf3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              Beratungsgespräch vereinbaren
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Wähle die passende Kategorie und vereinbare direkt einen Termin – 
              für Interessenten, Bestandskunden und Kooperationspartner.
            </p>
          </div>
        </div>
      </section>

      {/* Funnel Selection Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Wer bist du?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Wähle die passende Kategorie, um direkt zum richtigen Ansprechpartner zu gelangen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 - Unternehmen & Interessenten */}
            <Card 
              onClick={() => handleCalendarSelect("company")}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-lg border border-gray-300 overflow-hidden flex flex-col rounded-2xl relative ${
                selectedCalendar === "company" 
                  ? "shadow-md border-[var(--lohn-primary)]" 
                  : "shadow-sm"
              }`}
            >
              {selectedCalendar === "company" && (
                <div className="absolute top-4 right-4 z-10">
                  <CheckCircle2 className="w-6 h-6 text-[var(--lohn-primary)] bg-white rounded-full" />
                </div>
              )}
              <div className="relative bg-gradient-to-l from-[var(--lohn-primary)] to-[var(--lohn-secondary)] p-8 pb-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300">
                  <Building className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 text-center min-h-[64px] flex items-center justify-center">
                  Unternehmen & Interessenten
                </h3>
              </div>
              <CardContent className="pt-6 pb-8 px-6 bg-white flex-1 flex flex-col">
                <p className="text-gray-700 mb-6 text-center min-h-[80px] flex items-center justify-center flex-1">
                  Interessiert an Lohnoptimierung und dem LohnLab Cockpit? 
                  Vereinbare jetzt ein Kennenlernengespräch.
                </p>
                <Button 
                  className="w-full bg-[var(--lohn-primary)] hover:bg-[var(--lohn-secondary)] text-white font-semibold py-5 text-base rounded-full shadow-md hover:shadow-lg transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCalendarSelect("company");
                  }}
                >
                  Zum Kalender
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </CardContent>
            </Card>

            {/* Card 2 - Bestandskunden */}
            <Card 
              onClick={() => handleCalendarSelect("service")}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-lg border border-gray-300 overflow-hidden flex flex-col rounded-2xl relative ${
                selectedCalendar === "service" 
                  ? "shadow-md border-[var(--lohn-primary)]" 
                  : "shadow-sm"
              }`}
            >
              {selectedCalendar === "service" && (
                <div className="absolute top-4 right-4 z-10">
                  <CheckCircle2 className="w-6 h-6 text-[var(--lohn-primary)] bg-white rounded-full" />
                </div>
              )}
              <div className="relative bg-gradient-to-l from-[var(--lohn-primary)] to-[var(--lohn-secondary)] p-8 pb-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300">
                  <Headset className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 text-center min-h-[64px] flex items-center justify-center">
                  Bestandskunden Service
                </h3>
              </div>
              <CardContent className="pt-6 pb-8 px-6 bg-white flex-1 flex flex-col">
                <p className="text-gray-700 mb-6 text-center min-h-[80px] flex items-center justify-center flex-1">
                  Du bist bereits Kunde? Buche hier einen Service-Termin 
                  für deine Anliegen.
                </p>
                <Button 
                  className="w-full bg-[var(--lohn-primary)] hover:bg-[var(--lohn-secondary)] text-white font-semibold py-5 text-base rounded-full shadow-md hover:shadow-lg transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCalendarSelect("service");
                  }}
                >
                  Zum Kalender
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </CardContent>
            </Card>

            {/* Card 3 - Kooperationspartner */}
            <Card 
              onClick={() => handleCalendarSelect("partner")}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-lg border border-gray-300 overflow-hidden flex flex-col rounded-2xl relative ${
                selectedCalendar === "partner" 
                  ? "shadow-md border-[var(--lohn-primary)]" 
                  : "shadow-sm"
              }`}
            >
              {selectedCalendar === "partner" && (
                <div className="absolute top-4 right-4 z-10">
                  <CheckCircle2 className="w-6 h-6 text-[var(--lohn-primary)] bg-white rounded-full" />
                </div>
              )}
              <div className="relative bg-gradient-to-l from-[var(--lohn-primary)] to-[var(--lohn-secondary)] p-8 pb-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300">
                  <Handshake className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 text-center min-h-[64px] flex items-center justify-center">
                  Kooperationspartner
                </h3>
              </div>
              <CardContent className="pt-6 pb-8 px-6 bg-white flex-1 flex flex-col">
                <p className="text-gray-700 mb-6 text-center min-h-[80px] flex items-center justify-center flex-1">
                  Steuerberater und Versicherungsvermittler – werde Partner 
                  oder nutze bestehende Vorteile.
                </p>
                <Button 
                  className="w-full bg-[var(--lohn-primary)] hover:bg-[var(--lohn-secondary)] text-white font-semibold py-5 text-base rounded-full shadow-md hover:shadow-lg transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCalendarSelect("partner");
                  }}
                >
                  Zum Kalender
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kalender-Einbettung */}
      {selectedCalendar && (
        <section id="calendar-section" className="py-20" style={{ backgroundColor: "#ebedf3" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-black mb-4">
                <Calendar className="inline-block mr-3" size={32} />
                Wähle deinen Wunschtermin
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Suche dir einen passenden Termin aus – wir freuen uns auf das Gespräch mit dir!
              </p>
            </div>

            <div className="relative" style={{ minHeight: "700px" }}>
              {/* Loading Indicator */}
              {calendarLoading && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-white rounded-lg z-10"
                >
                  <div className="text-center">
                    {/* Simple Spinner */}
                    <div className="w-16 h-16 mx-auto mb-6">
                      <Loader2 className="w-full h-full text-[var(--lohn-primary)] animate-spin" />
                    </div>

                    {/* Loading Text */}
                    <p className="text-lg font-semibold text-[var(--lohn-primary)] mb-2">
                      Kalender wird geladen...
                    </p>
                    <p className="text-sm text-gray-500">
                      Einen Moment bitte
                    </p>
                  </div>
                </div>
              )}

              {selectedCalendar && (
                <HubspotMeetingEmbed
                  meetingUrl={HUBSPOT_MEETING_URLS[selectedCalendar]}
                  reloadTrigger={embedReloadTrigger}
                  onLoaded={() => setCalendarLoading(false)}
                />
              )}
            </div>
          </div>
        </section>
      )}

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Weitere Kontaktmöglichkeiten
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-300">
              <h3 className="text-2xl font-bold text-black mb-6">Schreib uns</h3>
              <ContactForm
                formData={formData}
                onSubmit={handleSubmit}
                onInputChange={handleInputChange}
                isSubmitting={isSubmitting}
              />
            </div>

            {/* Address Card mit Team-Bildern */}
            <div className="space-y-6">
              <Card className="text-center rounded-2xl shadow-lg border-2 border-gray-300">
                <CardHeader>
                  <div className="w-12 h-12 flex-shrink-0 bg-[var(--lohn-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-black">
                    Adresse
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-gray-800">
                    LohnLab GmbH
                  </p>
                  <p className="text-sm text-gray-600">Hauptstraße 20</p>
                  <p className="text-sm text-gray-600">63755 Alzenau</p>
                  <div className="mt-6 pt-6 border-t-2 border-gray-300">
                    <div className="flex items-center justify-center space-x-2 text-gray-600">
                      <Mail size={18} />
                      <ObfuscatedEmail
                        user="service"
                        domain="lohnlab.de"
                        className="hover:text-[var(--lohn-primary)] transition-colors"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Team-Bilder Card */}
              <Card className="rounded-2xl shadow-lg border-2 border-gray-300 p-6">
                <h3 className="text-xl font-bold text-black mb-6 text-center">
                  Unser Team
                </h3>
                <div className="space-y-6">
                  {/* Robert Behrend */}
                  <div className="flex items-center gap-4">
                    <img
                      src={rbImage}
                      alt="Robert Behrend"
                      className="w-16 h-16 rounded-full border-2 border-gray-300 object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <p className="font-bold text-black">Robert Behrend</p>
                      <p className="text-sm text-gray-600 mb-1">Vertrieb & Partnerschaften</p>
                      <a href="mailto:rb@lohnlab.de" className="text-sm text-[var(--lohn-primary)] hover:underline block" target="_blank" rel="noopener noreferrer">
                        rb@lohnlab.de
                      </a>
                      <a href="tel:01621665562" className="text-sm text-gray-600 hover:text-[var(--lohn-primary)] block">
                        01621665562
                      </a>
                    </div>
                  </div>
                  
                  {/* Kilian Kaupp */}
                  <div className="flex items-center gap-4 pt-4 border-t-2 border-gray-300">
                    <img
                      src={kkImage}
                      alt="Kilian Kaupp"
                      className="w-16 h-16 rounded-full border-2 border-gray-300 object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <p className="font-bold text-black">Kilian Kaupp</p>
                      <p className="text-sm text-gray-600 mb-1">Bestandskundenmanagement</p>
                      <a href="mailto:kk@lohnlab.de" className="text-sm text-[var(--lohn-primary)] hover:underline block" target="_blank" rel="noopener noreferrer">
                        kk@lohnlab.de
                      </a>
                      <a href="tel:017666810923" className="text-sm text-gray-600 hover:text-[var(--lohn-primary)] block">
                        017666810923
                      </a>
                    </div>
                  </div>
                  
                  {/* Lennart Reichert */}
                  <div className="flex items-center gap-4 pt-4 border-t-2 border-gray-300">
                    <img
                      src={lrImage}
                      alt="Lennart Reichert"
                      className="w-16 h-16 rounded-full border-2 border-gray-300 object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <p className="font-bold text-black">Lennart Reichert</p>
                      <p className="text-sm text-gray-600 mb-1">Produktentwicklung</p>
                      <a href="mailto:lr@lohnlab.de" className="text-sm text-[var(--lohn-primary)] hover:underline block" target="_blank" rel="noopener noreferrer">
                        lr@lohnlab.de
                      </a>
                      <a href="tel:01727738271" className="text-sm text-gray-600 hover:text-[var(--lohn-primary)] block">
                        01727738271
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
