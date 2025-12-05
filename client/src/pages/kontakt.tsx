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
} from "lucide-react";

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
  const [selectedCalendar, setSelectedCalendar] = useState<CalendarType | null>(
    null
  );
  const [calendarLoading, setCalendarLoading] = useState(false);
  const [embedReloadTrigger, setEmbedReloadTrigger] = useState(0);
  const { formData, handleSubmit, handleInputChange, isSubmitting } =
    useContactForm();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-teal)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dein direkter Weg zu <br />
              <span className="text-[var(--lohn-accent)]">LohnLab</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Wähle die passende Kategorie und vereinbare direkt einen Termin - 
              für Interessenten, Bestandskunden und Kooperationspartner.
            </p>
          </div>
        </div>
      </section>

      {/* Funnel Selection Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
              Wer bist du?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Wähle die passende Kategorie, um direkt zum richtigen Ansprechpartner zu gelangen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 - Unternehmen & Interessenten */}
            <Card 
              onClick={() => handleCalendarSelect("company")}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0 overflow-hidden flex flex-col ${
                selectedCalendar === "company" 
                  ? "ring-4 ring-[var(--lohn-primary)] shadow-2xl" 
                  : ""
              }`}
            >
              <div className="relative bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-secondary)] p-8 pb-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 text-center min-h-[64px] flex items-center justify-center">
                  Unternehmen & Interessenten
                </h3>
              </div>
              <CardContent className="pt-6 pb-8 px-6 bg-white flex-1 flex flex-col">
                <p className="text-gray-600 mb-6 text-center min-h-[80px] flex items-center justify-center flex-1">
                  Interessiert an Lohnoptimierung und dem LohnLab Cockpit? 
                  Vereinbare jetzt ein Kennenlernengespräch.
                </p>
                <Button 
                  className="w-full bg-[var(--lohn-primary)] hover:bg-[var(--lohn-secondary)] text-white font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
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
              className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0 overflow-hidden flex flex-col ${
                selectedCalendar === "service" 
                  ? "ring-4 ring-[var(--lohn-teal)] shadow-2xl" 
                  : ""
              }`}
            >
              <div className="relative bg-gradient-to-br from-[var(--lohn-teal)] to-[var(--lohn-secondary)] p-8 pb-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Headset className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 text-center min-h-[64px] flex items-center justify-center">
                  Bestandskunden Service
                </h3>
              </div>
              <CardContent className="pt-6 pb-8 px-6 bg-white flex-1 flex flex-col">
                <p className="text-gray-600 mb-6 text-center min-h-[80px] flex items-center justify-center flex-1">
                  Du bist bereits Kunde? Buche hier einen Service-Termin 
                  für deine Anliegen.
                </p>
                <Button 
                  className="w-full bg-[var(--lohn-teal)] hover:bg-[var(--lohn-secondary)] text-white font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
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
              className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0 overflow-hidden flex flex-col ${
                selectedCalendar === "partner" 
                  ? "ring-4 ring-[#F59E0B] shadow-2xl" 
                  : ""
              }`}
            >
              <div className="relative bg-gradient-to-br from-[#F59E0B] to-[#D97706] p-8 pb-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Handshake className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 text-center min-h-[64px] flex items-center justify-center">
                  Kooperationspartner
                </h3>
              </div>
              <CardContent className="pt-6 pb-8 px-6 bg-white flex-1 flex flex-col">
                <p className="text-gray-600 mb-6 text-center min-h-[80px] flex items-center justify-center flex-1">
                  Steuerberater und Versicherungsvermittler - werde Partner 
                  oder nutze bestehende Vorteile.
                </p>
                <Button 
                  className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
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
        <section id="calendar-section" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[var(--lohn-primary)] mb-4">
                <Calendar className="inline-block mr-3" size={32} />
                Wähle deinen Wunschtermin
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Suche dir einen passenden Termin aus - wir freuen uns auf das Gespräch mit dir!
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-6">
              Weitere Kontaktmöglichkeiten
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-secondary)] rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Schreib uns</h3>
              <ContactForm
                formData={formData}
                onSubmit={handleSubmit}
                onInputChange={handleInputChange}
                isSubmitting={isSubmitting}
              />
            </div>

            {/* Address Card */}
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 flex-shrink-0 bg-[var(--lohn-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <CardTitle className="text-[var(--lohn-primary)]">
                  Adresse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-800">
                  LohnLab GmbH
                </p>
                <p className="text-sm text-gray-600">Hauptstraße 20</p>
                <p className="text-sm text-gray-600">63755 Alzenau</p>
                <div className="mt-6 pt-6 border-t border-gray-200">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
