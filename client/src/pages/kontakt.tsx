import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Calendar, Users, Monitor, Building, Handshake, Loader2, ChevronRight } from "lucide-react";

export default function Kontakt() {
  const [selectedCalendar, setSelectedCalendar] = useState<'optimization' | 'cockpit'>('optimization');
  const [hubspotLoaded, setHubspotLoaded] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCalendarSwitch = (type: 'optimization' | 'cockpit') => {
    setSelectedCalendar(type);
  };

  useEffect(() => {
    // Preload HubSpot Meetings Embed Script for faster loading
    const hubspotScript = document.createElement('script');
    hubspotScript.type = 'text/javascript';
    hubspotScript.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    hubspotScript.async = true;
    
    // Add onload event to track when script is ready
    hubspotScript.onload = () => {
      setHubspotLoaded(true);
    };
    
    // Preload script immediately when component mounts
    document.head.appendChild(hubspotScript);

    // Also try to preconnect to HubSpot domains for faster loading
    const preconnect1 = document.createElement('link');
    preconnect1.rel = 'preconnect';
    preconnect1.href = 'https://static.hsappstatic.net';
    document.head.appendChild(preconnect1);

    const preconnect2 = document.createElement('link');
    preconnect2.rel = 'preconnect';
    preconnect2.href = 'https://meetings-eu1.hubspot.com';
    document.head.appendChild(preconnect2);

    return () => {
      // Cleanup
      const existingHubspotScript = document.querySelector('script[src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"]');
      if (existingHubspotScript) {
        existingHubspotScript.remove();
      }
      const preconnectLinks = document.querySelectorAll('link[rel="preconnect"]');
      preconnectLinks.forEach(link => {
        if (link.getAttribute('href')?.includes('hsappstatic.net') || 
            link.getAttribute('href')?.includes('hubspot.com')) {
          link.remove();
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-teal)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Kontakt & <br />
              <span className="text-[var(--lohn-accent)]">Beratung</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Für Interessenten, Kunden und Partner - wir sind für Sie da.
            </p>
          </div>
        </div>
      </section>



      {/* Kalender-Einbettung - Direkt geladen */}
      <section id="calendar-section" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[var(--lohn-primary)] mb-4">
              <Calendar className="inline-block mr-3" size={32} />
              Termin vereinbaren
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Wählen Sie Ihren gewünschten Berater und buchen Sie direkt einen Termin
            </p>
            
            {/* Kalender-Switcher */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-lg p-1 inline-flex">
                <button
                  onClick={() => handleCalendarSwitch('optimization')}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 flex items-center gap-2 ${
                    selectedCalendar === 'optimization'
                      ? 'bg-[var(--lohn-primary)] text-white shadow-md'
                      : 'text-[var(--lohn-primary)] hover:bg-gray-200'
                  }`}
                >
                  <Users size={20} />
                  <div className="flex flex-col items-start">
                    <span>Michael Schmitt</span>
                    <span className="text-xs opacity-75">Lohnoptimierung-Beratung</span>
                  </div>
                </button>
                <button
                  onClick={() => handleCalendarSwitch('cockpit')}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 flex items-center gap-2 ${
                    selectedCalendar === 'cockpit'
                      ? 'bg-[var(--lohn-teal)] text-white shadow-md'
                      : 'text-[var(--lohn-teal)] hover:bg-gray-200'
                  }`}
                >
                  <Monitor size={20} />
                  <div className="flex flex-col items-start">
                    <span>Robert Behrend</span>
                    <span className="text-xs opacity-75">Cockpit kennenlernen</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
            {/* Beide Kalender laden, aber nur den ausgewählten anzeigen */}
            <div 
              className={`meetings-iframe-container ${selectedCalendar === 'optimization' ? 'block' : 'hidden'}`}
              data-src="https://meetings-eu1.hubspot.com/michael-schmitt?embed=true"
              style={{ minHeight: '700px' }}
            ></div>
            
            <div 
              className={`meetings-iframe-container ${selectedCalendar === 'cockpit' ? 'block' : 'hidden'}`}
              data-src="https://meetings-eu1.hubspot.com/rbehrend?embed=true"
              style={{ minHeight: '700px' }}
            ></div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-6">
              Weitere Kontaktmöglichkeiten
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-[var(--lohn-teal)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={24} />
                </div>
                <CardTitle className="text-[var(--lohn-primary)]">E-Mail</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-800">service@lohnlab.de</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-[var(--lohn-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <CardTitle className="text-[var(--lohn-primary)]">Adresse</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-800">LohnLab GmbH</p>
                <p className="text-sm text-gray-600">Hauptstraße 20</p>
                <p className="text-sm text-gray-600">63755 Alzenau</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}