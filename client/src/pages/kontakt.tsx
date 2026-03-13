import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ConsentPlaceholder from "@/components/ConsentPlaceholder";
import { useConsent } from "@/lib/cookie-consent";
import ContactForm from "@/components/forms/ContactForm";
import ObfuscatedEmail from "@/components/common/ObfuscatedEmail";
import { useContactForm } from "@/hooks/api/useContactForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MapPin, Calendar, Loader2 } from "lucide-react";
import { CalendarFunnelCard } from "@/components/CalendarFunnelCard";
import {
  type CalendarType,
  getCalendarFunnelCards,
  CONTACT_PERSONS,
  HUBSPOT_MEETING_URLS,
} from "@/constants/contact-data";
import { useGender } from "@/lib/gender";

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
    if (!container) return;

    container.innerHTML = "";
    const meetingsDiv = document.createElement("div");
    meetingsDiv.className = "meetings-iframe-container";
    meetingsDiv.setAttribute("data-src", meetingUrl);
    container.appendChild(meetingsDiv);

    let isActive = true;
    let hasNotified = false;
    const notifyLoaded = () => {
      if (!isActive || hasNotified) return;
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
  const [selectedCalendar, setSelectedCalendar] = useState<CalendarType>("company");
  const [calendarLoading, setCalendarLoading] = useState(false);
  const [embedReloadTrigger, setEmbedReloadTrigger] = useState(0);
  const consent = useConsent();
  const marketingAllowed = consent?.marketing === true;

  const gendered = useGender();
  const CALENDAR_FUNNEL_CARDS = getCalendarFunnelCards(gendered);
  const { formData, handleSubmit, handleInputChange, isSubmitting } =
    useContactForm();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");

    if (type === "partner") {
      setSelectedCalendar("partner");
      setEmbedReloadTrigger((prev) => prev + 1);
      setCalendarLoading(true);
      setTimeout(() => {
        document.getElementById("calendar-section")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      window.scrollTo(0, 0);
      setCalendarLoading(true);
    }
  }, []);

  const handleCalendarSelect = (type: CalendarType) => {
    setSelectedCalendar(type);
    setEmbedReloadTrigger((prev) => prev + 1);
    setCalendarLoading(true);
    setTimeout(() => {
      document.getElementById("calendar-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ebedf3" }}>
      <Navigation />

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
              Wähle die passende Kategorie, um direkt {gendered ? "zur richtigen Ansprechpartner*in" : "zum richtigen Ansprechpartner"} zu gelangen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {CALENDAR_FUNNEL_CARDS.map((card) => (
              <CalendarFunnelCard
                key={card.type}
                type={card.type}
                title={card.title}
                description={card.description}
                icon={card.icon}
                isSelected={selectedCalendar === card.type}
                onSelect={() => handleCalendarSelect(card.type)}
              />
            ))}
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
              {!marketingAllowed ? (
                <div className="flex items-center justify-center h-full" style={{ minHeight: "400px" }}>
                  <ConsentPlaceholder service="Der Kalender" className="w-full max-w-lg" />
                </div>
              ) : (
                <>
                  {calendarLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white rounded-lg z-10">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-6">
                          <Loader2 className="w-full h-full text-lohn-primary animate-spin" />
                        </div>
                        <p className="text-lg font-semibold text-lohn-primary mb-2">
                          Kalender wird geladen...
                        </p>
                        <p className="text-sm text-gray-500">Einen Moment bitte</p>
                      </div>
                    </div>
                  )}
                  <HubspotMeetingEmbed
                    meetingUrl={HUBSPOT_MEETING_URLS[selectedCalendar]}
                    reloadTrigger={embedReloadTrigger}
                    onLoaded={() => setCalendarLoading(false)}
                  />
                </>
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
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-6">Schreib uns</h3>
              <ContactForm
                formData={formData}
                onSubmit={handleSubmit}
                onInputChange={handleInputChange}
                isSubmitting={isSubmitting}
              />
            </div>

            <div className="space-y-6">
              <Card className="text-center rounded-2xl shadow-lg border-2 border-gray-300">
                <CardHeader>
                  <div className="w-12 h-12 shrink-0 bg-lohn-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-black">Adresse</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-gray-800">LohnLab GmbH</p>
                  <p className="text-sm text-gray-600">Hauptstraße 20</p>
                  <p className="text-sm text-gray-600">63755 Alzenau</p>
                  <div className="mt-6 pt-6 border-t-2 border-gray-300">
                    <div className="flex items-center justify-center space-x-2 text-gray-600">
                      <Mail size={18} />
                      <ObfuscatedEmail
                        user="service"
                        domain="lohnlab.de"
                        className="hover:text-lohn-primary transition-colors"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-lg border-2 border-gray-300 p-6">
                <h3 className="text-xl font-bold text-black mb-6 text-center">
                  Unser Team
                </h3>
                <div className="space-y-6">
                  {CONTACT_PERSONS.map((person, index) => (
                    <div
                      key={person.name}
                      className={`flex items-center gap-4 ${index > 0 ? "pt-4 border-t-2 border-gray-300" : ""}`}
                    >
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-16 h-16 rounded-full border-2 border-gray-300 object-cover shrink-0"
                      />
                      <div className="flex-1">
                        <p className="font-bold text-black">{person.name}</p>
                        <p className="text-sm text-gray-600 mb-1">{person.role}</p>
                        <a
                          href={`mailto:${person.email}`}
                          className="text-sm text-lohn-primary hover:underline block"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {person.email}
                        </a>
                        <a
                          href={`tel:${person.phone}`}
                          className="text-sm text-gray-600 hover:text-lohn-primary block"
                        >
                          {person.phone}
                        </a>
                      </div>
                    </div>
                  ))}
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
