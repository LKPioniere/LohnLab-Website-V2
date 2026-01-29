import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ApplicationForm from "@/components/forms/ApplicationForm";
import { useApplicationForm } from "@/hooks/api/useApplicationForm";
import { useSEO } from "@/hooks/useSEO";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  CreditCard,
  Train,
  Bike,
  Home,
  Clock,
  Baby,
  Smartphone,
  Wifi,
  GraduationCap,
  LineChart,
  Rocket,
  Target,
  Phone,
  Mail,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Briefcase,
  Car,
  UtensilsCrossed,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import lohnlabCard from "@/assets/lohnlab-card.png";
import lindaDenkImage from "@/assets/linda-denk.jpg";
import teamImage from "@/assets/team-lohnlab.jpg";

// Stellenanzeigen-Daten
const jobOpenings = [
  {
    id: "sales-manager",
    title: "Sales Manager (Remote)",
    location: "Remote",
    type: "Vollzeit",
    department: "Vertrieb",
    description: "Werde Teil unseres Vertriebsteams und hilf uns, mehr Unternehmen zu erreichen",
    mission: [
      "Erstgespräche mit potenziellen Kunden vereinbaren",
      "Selbstständiger Aufbau unserer Vertriebspipeline",
      "Aktive Kaltakquise per Telefon",
      "Qualifizierung von Leads im B2B-Umfeld",
    ],
    profile: [
      "Kommunikationsstärke & Überzeugungskraft",
      "Eigeninitiative und strukturierte Arbeitsweise",
      "Idealerweise erste Erfahrung im Vertrieb (aber auch Quereinsteiger willkommen!)",
      "Affinität für digitale Tools & CRM-Systeme",
      "Deutsch auf Muttersprachler-Niveau",
    ],
    weOffer: [
      "Leads & modernes CRM (HubSpot) werden gestellt",
      "Klare KPIs für messbare Erfolge",
      "Schnelle Entscheidungswege in kleinem, ambitioniertem Team",
      "Remote-First Kultur mit optionalen Team-Events",
    ],
    compensation: [
      "Attraktives Fixgehalt + erfolgsbasierte Provision",
      "Plus alle unten genannten Benefits",
    ],
  },
];

export default function Karriere() {
  const { formData, files, handleSubmit, handleInputChange, handleFilesChange, isSubmitting } =
    useApplicationForm();
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [expandedBenefit, setExpandedBenefit] = useState<string | null>(null);

  useSEO({
    title: "Karriere bei LohnLab - Werde Teil unserer Mission",
    description:
      "Offene Stellen bei LohnLab! Arbeite flexibel, entwickle dich weiter und profitiere von außergewöhnlichen Benefits wie LohnLab Card, Jobbike und arbeitgeberfinanzierter BAV.",
    keywords:
      "Karriere, Jobs, Sales Manager, Remote, LohnLab, FinTech, HR-Tech, Lohnoptimierung, Stellenangebote",
    canonical: "https://www.lohnlab.de/karriere",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleApplyClick = (jobId: string) => {
    setSelectedJob(jobId);
    handleInputChange("position", jobId);
    setIsDialogOpen(true);
  };

  const scrollToBenefits = () => {
    const element = document.getElementById("benefits");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Benefits mit ausführlicher Beschreibung
  const benefits = [
    {
      category: "Finanzielle Benefits",
      icon: CreditCard,
      items: [
        {
          icon: CreditCard,
          title: "LohnLab Card",
          shortDesc: "50€ monatlich + 60€ Geburtstag + 156€ Urlaub",
          longDesc: "Jeden Monat erhältst du 50€ steuerfreien Sachbezug auf deine eigene LohnLab Card – ein echter Mehrwert, den du überall in deiner Region nutzen kannst, wo Kartenzahlung akzeptiert wird. Zusätzlich gibt's 60€ zu deinem Geburtstag und mindestens 156€ zum Urlaub. Alles 100% steuerfrei und kommt netto bei dir an!",
        },
        {
          icon: UtensilsCrossed,
          title: "Essenszuschuss",
          shortDesc: "7,23€ pro Arbeitstag",
          longDesc: "Pro Arbeitstag gibt es 7,23€ zurück auf dein Konto – für dein Mittagessen oder Lebensmitteleinkäufe. So kannst du dich während der Arbeit stärken, ohne dass es dein Gehalt belastet.",
        },
        {
          icon: CheckCircle2,
          title: "Betriebliche Altersvorsorge",
          shortDesc: "100% arbeitgeberfinanziert",
          longDesc: "Wir sorgen für deine Zukunft: Du erhältst eine vollständig arbeitgeberfinanzierte betriebliche Altersvorsorge – ohne eigenen Beitrag! Zusätzlich hast du die Option, privat aufzustocken und profitierst dann von 30% Arbeitgeberzuschuss.",
        },
      ],
    },
    {
      category: "Mobilität",
      icon: Car,
      items: [
        {
          icon: Car,
          title: "Fahrtkostenzuschuss",
          shortDesc: "38 Cent pro Kilometer",
          longDesc: "Falls du doch mal ins Office kommst: Du erhältst 38 Cent für jeden Kilometer zur Arbeit als Fahrtkostenzuschuss. Außerdem gibt's bis zu 28€ Spesen pro Tag bei Geschäftsreisen und Vertriebsterminen.",
        },
        {
          icon: Train,
          title: "Jobticket",
          shortDesc: "Für deine Mobilität",
          longDesc: "Nutze öffentliche Verkehrsmittel steuerbegünstigt. Wir unterstützen deine Mobilität mit einem Jobticket, sodass du entspannt zur Arbeit oder zu Kundenterminen kommst.",
        },
        {
          icon: Bike,
          title: "Jobbike",
          shortDesc: "Inkl. Versicherung & Zubehör",
          longDesc: "Lease dein Wunschrad über uns – egal ob E-Bike, Mountainbike oder Citybike. Wir übernehmen die Versicherung und das Zubehör. Bleib fit und schone die Umwelt!",
        },
      ],
    },
    {
      category: "Work-Life-Balance",
      icon: Home,
      items: [
        {
          icon: Home,
          title: "100% Remote möglich",
          shortDesc: "Arbeite von überall in Deutschland",
          longDesc: "Bei uns bist du nicht an einen Standort gebunden. Arbeite von zu Hause, aus dem Café oder von wo immer du möchtest – solange du in Deutschland bist. Echte Flexibilität für deine Work-Life-Balance.",
        },
        {
          icon: Clock,
          title: "Flexible Arbeitszeit",
          shortDesc: "Vertrauensarbeitszeit",
          longDesc: "Wir arbeiten mit Vertrauensarbeitszeit. Das bedeutet: Du teilst dir deine Zeit flexibel ein, solange die Ergebnisse stimmen. Perfekt für Frühaufsteher, Nachteulen und alle dazwischen.",
        },
        {
          icon: Baby,
          title: "Kindergartenzuschuss",
          shortDesc: "In Höhe der tatsächlichen Betreuungskosten",
          longDesc: "Wir unterstützen Familien aktiv mit einem Kindergartenzuschuss in Höhe der tatsächlichen Betreuungskosten. So kannst du Beruf und Familie besser vereinbaren und dich auf beides konzentrieren.",
        },
        {
          icon: Smartphone,
          title: "Diensthandy",
          shortDesc: "Berufliches und Privates trennen",
          longDesc: "Du erhältst ein modernes Diensthandy mit passenden Tarifen. Nutze es auch privat – so kannst du Berufliches und Privates besser trennen oder hast nur noch ein Gerät.",
        },
        {
          icon: Wifi,
          title: "Internetkosten",
          shortDesc: "Volle Erstattung",
          longDesc: "Wer im Homeoffice arbeitet, braucht gutes Internet. Wir erstatten dir deine Internetkosten vollständig, damit du bestens ausgestattet bist.",
        },
      ],
    },
    {
      category: "Weiterbildung & Zusammenarbeit",
      icon: GraduationCap,
      items: [
        {
          icon: GraduationCap,
          title: "Strukturiertes Onboarding",
          shortDesc: "Mit persönlichem Mentor",
          longDesc: "Du startest nicht ins kalte Wasser: Unser strukturiertes Onboarding-Programm mit persönlichem Mentor sorgt dafür, dass du schnell ankommst und dich von Anfang an wohlfühlst.",
        },
        {
          icon: Rocket,
          title: "Weiterbildung",
          shortDesc: "Laufende Schulungen",
          longDesc: "Wir investieren in deine Entwicklung! Profitiere von internen und externen Schulungen, Workshops und Zertifizierungen. Dein Wachstum ist unser Erfolg.",
        },
        {
          icon: LineChart,
          title: "Klare KPIs",
          shortDesc: "Transparente Erfolgsmessung",
          longDesc: "Keine unklaren Ziele: Bei uns weißt du genau, woran du gemessen wirst. Klare, faire KPIs machen deinen Erfolg messbar und nachvollziehbar.",
        },
      ],
    },
    {
      category: "Individuelle Benefits",
      icon: MessageCircle,
      items: [
        {
          icon: MessageCircle,
          title: "Dein Lieblings-Benefit ist nicht dabei?",
          shortDesc: "Lass uns darüber sprechen!",
          longDesc: "Wir sind offen für individuelle Lösungen! Hast du einen Benefit im Kopf, der hier fehlt? Sprich uns einfach an – wir finden gemeinsam eine Lösung, die zu dir passt.",
        },
      ],
    },
  ];

  const toggleBenefit = (category: string, index: number) => {
    const key = `${category}-${index}`;
    setExpandedBenefit(prev => prev === key ? null : key);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ebedf3" }}>
      <Navigation />

      {/* Hero Section - ähnlich wie Landingpage */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16" style={{ backgroundColor: "#ebedf3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
                Gestalte die Zukunft der Lohnoptimierung mit
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Wir sind ein junges innovatives Unternehmen, das die Art und Weise revolutioniert, 
                wie Unternehmen Löhne verstehen. Werde Teil unseres ambitionierten Teams 
                und hilf uns, die Arbeitswelt fairer und effizienter zu gestalten.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => {
                    const element = document.getElementById("jobs");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-[var(--lohn-primary)] hover:bg-[var(--lohn-secondary)] text-white px-8 py-6 text-lg rounded-full shadow-lg"
                >
                  Offene Stellen ansehen
                </Button>
                <Button
                  onClick={() => handleApplyClick("initiativ")}
                  variant="outline"
                  className="border-2 border-[var(--lohn-primary)] text-[var(--lohn-primary)] hover:bg-[var(--lohn-primary)] hover:text-white px-8 py-6 text-lg rounded-full"
                >
                  Initiativbewerbung
                </Button>
              </div>
            </div>

            {/* Right: Team Image */}
            <div className="relative">
              <img
                src={teamImage}
                alt="LohnLab Team"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
              Deine Benefits bei LohnLab
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Bei uns erwarten dich nicht nur spannende Aufgaben, sondern auch 
              Benefits, die wirklich einen Unterschied machen.
            </p>
          </div>

          {/* LohnLab Card Highlight */}
          <div className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  Deine persönliche LohnLab Card
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Jeden Monat erhältst du 50€ Sachbezug auf deine eigene LohnLab Card – 
                  ein echter Mehrwert, den du überall in deiner Region nutzen kannst, wo Kartenzahlung akzeptiert wird. 
                  Plus: 60€ zum Geburtstag und mindestens 156€ zum Urlaub – alles steuerfrei!
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[var(--lohn-primary)] font-semibold">
                    <CreditCard className="w-5 h-5" />
                    <span>50€ monatlich + 60€ Geburtstag + 156€ Urlaub</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>100% steuerfrei</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={lohnlabCard}
                  alt="LohnLab Card"
                  className="w-full max-w-md rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Benefits Carousel - kompakte Ansicht */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {benefits.map((category) => (
                <CarouselItem key={category.category} className="md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-[var(--lohn-primary)] rounded-xl flex items-center justify-center">
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-black">{category.category}</h3>
                      </div>
                      <div className="space-y-3 flex-1">
                        {category.items.map((item, index) => {
                          const key = `${category.category}-${index}`;
                          const isExpanded = expandedBenefit === key;
                          return (
                            <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                              <div 
                                className="flex items-start gap-3 cursor-pointer"
                                onClick={() => toggleBenefit(category.category, index)}
                              >
                                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-200">
                                  <item.icon className="w-5 h-5 text-[var(--lohn-primary)]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-start justify-between gap-2">
                                    <p className="font-semibold text-black text-sm">{item.title}</p>
                                    {item.longDesc && (
                                      <ChevronDown 
                                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                                          isExpanded ? 'rotate-180' : ''
                                        }`}
                                      />
                                    )}
                                  </div>
                                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">{item.shortDesc}</p>
                                  {isExpanded && item.longDesc && (
                                    <p className="text-xs text-gray-700 mt-3 pt-3 border-t border-gray-200 leading-relaxed">
                                      {item.longDesc}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          {/* Indikator für mehr Kategorien */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              Nutze die Pfeile, um alle {benefits.length} Benefit-Kategorien zu entdecken
            </p>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="jobs" className="py-20 md:py-28" style={{ backgroundColor: "#ebedf3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
              Offene Stellen
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Finde die Position, die zu dir passt – oder bewirb dich initiativ
            </p>
          </div>

          {/* Job Accordion */}
          <div className="max-w-5xl mx-auto space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {jobOpenings.map((job) => (
                <AccordionItem
                  key={job.id}
                  value={job.id}
                  className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden"
                >
                  <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-gray-50">
                    <div className="flex items-center justify-between w-full text-left">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                            {job.type}
                          </div>
                          <span className="text-sm text-gray-600">{job.location}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-black mb-1">{job.title}</h3>
                        <p className="text-gray-600">{job.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8">
                    <div className="space-y-6 pt-6 border-t-2 border-gray-200">
                      {/* Deine Mission */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Rocket className="w-6 h-6 text-[var(--lohn-primary)]" />
                          <h4 className="text-xl font-bold text-black">Deine Mission</h4>
                        </div>
                        <ul className="space-y-2">
                          {job.mission.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Dein Profil */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Briefcase className="w-6 h-6 text-[var(--lohn-primary)]" />
                          <h4 className="text-xl font-bold text-black">Dein Profil</h4>
                        </div>
                        <ul className="space-y-2">
                          {job.profile.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Was wir bieten */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Target className="w-6 h-6 text-[var(--lohn-primary)]" />
                          <h4 className="text-xl font-bold text-black">Was wir bieten</h4>
                        </div>
                        <ul className="space-y-2">
                          {job.weOffer.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Vergütung */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <LineChart className="w-6 h-6 text-[var(--lohn-primary)]" />
                          <h4 className="text-xl font-bold text-black">Vergütung</h4>
                        </div>
                        <ul className="space-y-2">
                          {job.compensation.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={scrollToBenefits}
                          className="mt-4 text-[var(--lohn-primary)] hover:underline text-sm font-semibold flex items-center gap-1"
                        >
                          Alle Benefits ansehen
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Apply Button */}
                      <div className="flex gap-4 pt-4">
                        <Button
                          onClick={() => handleApplyClick(job.id)}
                          className="flex-1 bg-[var(--lohn-primary)] hover:bg-[var(--lohn-secondary)] text-white py-6 text-lg rounded-full shadow-lg"
                        >
                          Jetzt bewerben
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}

              {/* Initiativbewerbung Card */}
              <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 p-8 text-center">
                <div className="max-w-2xl mx-auto">
                  <Briefcase className="w-12 h-12 text-[var(--lohn-primary)] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-black mb-3">
                    Nichts Passendes gefunden?
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Überzeuge uns mit einer Initiativbewerbung! Wir sind immer auf der Suche 
                    nach talentierten Menschen, die unser Team bereichern möchten.
                  </p>
                  <Button
                    onClick={() => handleApplyClick("initiativ")}
                    className="bg-[var(--lohn-primary)] hover:bg-[var(--lohn-secondary)] text-white px-8 py-6 text-lg rounded-full"
                  >
                    Initiativ bewerben
                  </Button>
                </div>
              </div>
            </Accordion>
          </div>

          {/* Contact Person */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
              <h3 className="text-xl font-bold text-black mb-6 text-center">
                Deine Ansprechpartnerin
              </h3>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <img
                  src={lindaDenkImage}
                  alt="Linda Denk"
                  className="w-32 h-32 rounded-full border-4 border-gray-200 object-cover flex-shrink-0"
                  style={{ objectPosition: "center 65%" }}
                />
                <div className="flex-1 text-center md:text-left">
                  <p className="font-bold text-xl text-black">Linda Denk</p>
                  <p className="text-gray-600 mb-4">Recruiting & Bestandskundenmanagement</p>
                  <div className="space-y-2">
                    <a
                      href="mailto:ld@lohnlab.de"
                      className="flex items-center justify-center md:justify-start gap-2 text-[var(--lohn-primary)] hover:underline"
                    >
                      <Mail className="w-5 h-5" />
                      <span>ld@lohnlab.de</span>
                    </a>
                    <a
                      href="tel:06023918017"
                      className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-[var(--lohn-primary)]"
                    >
                      <Phone className="w-5 h-5" />
                      <span>06023 918017</span>
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mt-4 italic">
                    Hast du Fragen zu einer Position oder zur Bewerbung? Linda beantwortet sie gerne persönlich!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {selectedJob === "initiativ" 
                ? "Initiativbewerbung" 
                : jobOpenings.find(j => j.id === selectedJob)?.title}
            </DialogTitle>
            <DialogDescription>
              Fülle das Formular aus und wir melden uns schnellstmöglich bei dir.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <ApplicationForm
              formData={formData}
              files={files}
              onSubmit={(e) => {
                handleSubmit(e);
                // Dialog nach erfolgreichem Submit schließen
                setTimeout(() => {
                  if (!isSubmitting) {
                    setIsDialogOpen(false);
                  }
                }, 1000);
              }}
              onInputChange={handleInputChange}
              onFilesChange={handleFilesChange}
              isSubmitting={isSubmitting}
            />
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
