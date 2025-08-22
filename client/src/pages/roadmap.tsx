import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FunctionGroupCard from "@/components/roadmap/FunctionGroupCard";
import { ROADMAP_DATA } from "@/constants/roadmap-features";
import { 
  BarChart3,
  Users,
  Calendar,
  MessageSquare
} from "lucide-react";

export default function Roadmap() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  
  // Calculate days since development start (01.02.2025)
  const startDate = new Date('2025-02-01');
  const currentDate = new Date();
  const timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
  const daysSinceStart = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--lohn-primary)] via-[var(--lohn-secondary)] to-[var(--lohn-purple)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <BarChart3 className="w-16 h-16 text-[var(--lohn-teal)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entwicklungsfortschritt
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Hier finden Sie eine Übersicht über alle geplanten Features und Funktionen. 
              Im Community-Bereich können Sie aktiv an der Mitgestaltung teilnehmen und Ihre Wünsche einbringen.
            </p>
            <div className="flex justify-center">
              <Button 
                variant="outline"
                onClick={() => scrollToSection('community-feedback')}
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[var(--lohn-primary)] transition-colors rounded-full px-8 py-4 font-semibold"
              >
                Zur Umfrage
              </Button>
            </div>
          </div>
        </div>
      </section>




      {/* Functions Overview */}
      <section id="functions-overview" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
              Funktionsübersicht
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diese Kernfunktionen werden derzeit weiterentwickelt. Die einzelnen Features sind nach Status sortiert.
            </p>
          </div>

          {/* Function Groups Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ROADMAP_DATA.map((functionGroup) => (
              <FunctionGroupCard 
                key={functionGroup.id} 
                functionGroup={functionGroup}
              />
            ))}
          </div>
        </div>
      </section>



      {/* Community Feedback */}
      <section id="community-feedback" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Users className="w-16 h-16 text-[var(--lohn-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">
              Community Feedback
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Mit unserem Feedback-Formular können Sie aktiv Einfluss auf die nächsten Funktionen und deren Entwicklung nehmen. 
              Wir aktualisieren diese Roadmap regelmäßig basierend auf Ihren Rückmeldungen.
            </p>
            
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex justify-center mb-6">
                <MessageSquare className="w-12 h-12 text-[var(--lohn-primary)]" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--lohn-primary)] mb-4">
                Ihre Meinung ist gefragt!
              </h3>
              <p className="text-gray-600 mb-6">
                Teilen Sie uns mit, welche Features für Sie am wichtigsten sind und welche Funktionen 
                wir als nächstes entwickeln sollten.
              </p>
              <Button 
                onClick={() => window.open('https://lohnkonzepte.typeform.com/cockpitfeedback', '_blank')}
                className="bg-[var(--lohn-primary)] hover:bg-[var(--lohn-secondary)] text-white rounded-full px-8 py-4 font-semibold text-lg transition-colors"
              >
                Zur Feedback-Umfrage
              </Button>
            </div>
          </div>
        </div>
      </section>



      <Footer />
      
      {/* Floating Development Days Counter */}
      <div className="fixed right-3 top-32 z-50 hidden lg:block">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md border border-gray-200/50">
          <div className="text-center">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Calendar className="w-4 h-4 text-gray-600" />
            </div>
            <div className="text-2xl font-semibold text-gray-700 mb-1">{daysSinceStart}</div>
            <h3 className="text-xs font-medium text-gray-500">Tage in Entwicklung</h3>
          </div>
        </div>
      </div>
    </div>
  );
}