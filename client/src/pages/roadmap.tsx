import { useState, useEffect } from "react";
import { Check, FlaskConical, Rocket, Calendar, Activity, Clock, Target, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function RoadmapPage() {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    // Calculate days until August 4, 2025 (MVP completion)
    const mvpDate = new Date('2025-08-04');
    const today = new Date();
    const timeDiff = mvpDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    setDaysLeft(daysDiff > 0 ? daysDiff : 0);
  }, []);

  const roadmapPhases = [
    {
      id: 1,
      title: "Entwicklung",
      status: "completed",
      date: "Januar - Juli 2024",
      description: "Grundlegende Funktionen und API-Entwicklung",
      icon: <FlaskConical className="w-6 h-6" />,
      items: [
        "Lohnerhöhungsrechner entwickelt",
        "API-Schnittstellen implementiert", 
        "Grundlegende UI/UX gestaltet",
        "Erste Tests durchgeführt"
      ]
    },
    {
      id: 2,
      title: "MVP Testing",
      status: "in-progress",
      date: "August 2024 - August 2025",
      description: "Intensive Tests mit ausgewählten Kunden",
      icon: <Activity className="w-6 h-6" />,
      items: [
        "Closed Beta mit Steuerberatern",
        "Feedback-Integration und Verbesserungen",
        "Performance-Optimierungen",
        "Sicherheitstests und Compliance-Prüfung"
      ]
    },
    {
      id: 3,
      title: "Offizieller Rollout",
      status: "upcoming",
      date: "Ab August 2025",
      description: "Vollständige Markteinführung für alle Kunden",
      icon: <Rocket className="w-6 h-6" />,
      items: [
        "Öffentliche Verfügbarkeit",
        "Marketing-Kampagne",
        "Kundenbetreuung skalieren",
        "Weitere Features basierend auf Feedback"
      ]
    }
  ];

  const upcomingFeatures = [
    {
      title: "DATEV Integration",
      description: "Nahtlose Integration mit DATEV-Systemen",
      timeline: "Q3 2025",
      priority: "high"
    },
    {
      title: "Mobile App",
      description: "Native Apps für iOS und Android",
      timeline: "Q4 2025",
      priority: "medium"
    },
    {
      title: "Erweiterte Analytics",
      description: "Detaillierte Berichte und Analysen",
      timeline: "Q1 2026",
      priority: "medium"
    },
    {
      title: "Multi-Mandanten-Fähigkeit",
      description: "Verwaltung mehrerer Mandanten in einer Instanz",
      timeline: "Q2 2026",
      priority: "high"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-blue-500';
      case 'upcoming':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Abgeschlossen';
      case 'in-progress':
        return 'In Arbeit';
      case 'upcoming':
        return 'Geplant';
      default:
        return 'Unbekannt';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-secondary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Entwicklungsstand & Roadmap
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Transparenter Einblick in unsere Entwicklung
          </p>
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <Clock className="w-5 h-5 mr-2" />
            <span className="font-semibold">
              {daysLeft > 0 ? `${daysLeft} Tage bis MVP-Fertigstellung` : 'MVP ist fertiggestellt!'}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Progress Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--lohn-primary)] mb-4">Aktueller Fortschritt</h2>
            <p className="text-gray-600 text-lg">So entwickelt sich Ihr digitales Lohnoptimierungs-Werkzeug</p>
          </div>
          
          <div className="relative">
            <div className="absolute top-8 left-0 w-full h-1 bg-gray-200 rounded-full">
              <div className="h-full bg-gradient-to-r from-[var(--lohn-teal)] to-[var(--lohn-secondary)] rounded-full transition-all duration-1000" style={{width: '60%'}}></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {roadmapPhases.map((phase, index) => (
                <Card key={phase.id} className={`relative ${phase.status === 'in-progress' ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-16 h-16 ${getStatusColor(phase.status)} rounded-full flex items-center justify-center text-white`}>
                        {phase.icon}
                      </div>
                      <Badge variant={phase.status === 'completed' ? 'default' : phase.status === 'in-progress' ? 'secondary' : 'outline'}>
                        {getStatusText(phase.status)}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{phase.title}</CardTitle>
                    <p className="text-sm text-gray-500">{phase.date}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-700">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--lohn-primary)] mb-4">Geplante Features</h2>
            <p className="text-gray-600 text-lg">Diese Funktionen entwickeln wir für Sie</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <Badge 
                      variant="outline" 
                      className={`${getPriorityColor(feature.priority)} text-white border-none`}
                    >
                      {feature.priority === 'high' ? 'Hoch' : feature.priority === 'medium' ? 'Mittel' : 'Niedrig'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{feature.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Geplant für {feature.timeline}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Milestone Timeline */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--lohn-primary)] mb-4">Wichtige Meilensteine</h2>
            <p className="text-gray-600 text-lg">Schlüsseltermine auf unserem Weg</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-4"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">Alpha-Version gestartet</h3>
                    <span className="text-sm text-gray-500">Januar 2024</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">Erste funktionsfähige Version für interne Tests</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-4"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">Beta-Testing Phase</h3>
                    <span className="text-sm text-gray-500">Laufend</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">Tests mit ausgewählten Steuerberatern und Partnern</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mr-4"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">MVP-Fertigstellung</h3>
                    <span className="text-sm text-gray-500">04. August 2025</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">Vollständige Minimum Viable Product Version</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-400 rounded-full mr-4"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">Öffentlicher Launch</h3>
                    <span className="text-sm text-gray-500">September 2025</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">Verfügbarkeit für alle Kunden</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}