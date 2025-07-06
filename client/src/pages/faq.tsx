import { useState, useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Search, HelpCircle, Users, Building, ExternalLink, Send, Download } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import faqArbeitgeberPdf from "@assets/FAQ_LohnLab_Arbeitgeber (2)_1751828923975.pdf";
import faqPreviewImg from "@/assets/faq-preview.png";

export default function FAQ() {
  const [activeView, setActiveView] = useState<"mitarbeiter" | "arbeitgeber">("mitarbeiter");
  const [searchQuery, setSearchQuery] = useState("");
  const [openAccordion, setOpenAccordion] = useState<string>("");
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      userType: "interessent",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await fetch(`/api/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to send question");
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Frage gesendet",
        description: "Vielen Dank! Wir werden Ihre Frage zeitnah beantworten und die FAQ entsprechend erweitern.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Fehler",
        description: "Beim Senden Ihrer Frage ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (values: InsertContact) => {
    mutation.mutate({
      ...values,
      message: `FAQ-Frage (${activeView}): ${values.message}`,
    });
  };

  // FAQ Data
  const mitarbeiterFAQs = [
    {
      id: "m1",
      question: "Welche Vorteile bietet ein Lohnkonzept für mich?",
      answer: "Ein Teil deines Bruttogehalts, der sonst in die gesetzliche Rentenkasse geflossen wäre, kann dein Arbeitgeber in eine betriebliche Altersvorsorge investieren. Das bedeutet für dich: Du zahlst keinen Euro mehr als vorher, bekommst aber später eine hochwertigere und vor allem kapitalgedeckte Rentenversicherung. Anders gesagt: Deine Beiträge arbeiten gezielter für deine Zukunft."
    },
    {
      id: "m2", 
      question: "Was passiert wenn sich die gesetzlichen Rahmenbedingungen ändern?",
      answer: "Sobald sich gesetzliche Rahmenbedingungen ändern, analysiert unser Expertenteam die Änderungen und passt das Lohnkonzept entsprechend an. Wir informieren dich und deinen Arbeitgeber rechtzeitig über notwendige Anpassungen, um sicherzustellen, dass eure Lohnoptimierungsstrategien immer auf dem neuesten Stand und rechtlich sicher sind. Anmerkung: In aller Regel fallen gesetzliche Änderungen positiv für Arbeitgeber und Arbeitnehmer aus!"
    },
    {
      id: "m3",
      question: "Warum muss ich eine Zusatzvereinbarung unterschreiben?",
      answer: "Die Zusatzvereinbarung sichert dein Lohnkonzept rechtlich ab. So stellen wir sicher, dass alle Änderungen transparent und korrekt dokumentiert sind und dass sowohl du als auch dein Arbeitgeber die neuen Bedingungen verstehen und akzeptieren."
    },
    {
      id: "m4",
      question: "Bleibt mein Gehalt transparent?",
      answer: "Ja, dein Gehalt bleibt transparent. Du erhältst weiterhin eine Gehaltsabrechnung. Dort werden alle Bestandteile deines Gehalts aufgeführt. So behältst du jederzeit den Überblick."
    },
    {
      id: "m5",
      question: "Wer kann mir bei Fragen zum neuen Lohnkonzept weiterhelfen?",
      answer: "Bei Fragen zum neuen Lohnkonzept kannst du dich an deine Personalabteilung wenden. Diese wurde von LohnLab mit allen Informationen zum Lohnkonzept ausgestattet. Sollte eine Frage einmal nicht direkt beantwortet werden können, hat deine Personalabteilung die Möglichkeit sich mit LohnLab in Verbindung zu setzen."
    },
    {
      id: "m6",
      question: "Wo kann ich nachschauen wie sich mein Lohnkonzept zusammensetzt?",
      answer: "Du findest alle Details auf deiner Lohnabrechnung, im Kartenportal und in der Zusatzvereinbarung."
    },
    {
      id: "m7",
      question: "Wie funktioniert eine Sachbezugskarte und wie kann ich sie nutzen?",
      answer: "Die givve® Card ist notwendig, damit du deine Zahlungen aus dem Lohnkonzept erhalten kannst. Mit der Karte kannst du ganz normal wie mit deiner Bankkarte auch alle Einkäufe erledigen, oder das Geld für größere Anschaffungen ansparen. Informiere dich in deiner givve®-App über deinen regionalen Bereich (siehe: Akzeptanzstellen), indem du dein Guthaben ausgeben kannst."
    },
    {
      id: "m8",
      question: "Wo kann ich mein Guthaben einsehen?",
      answer: "In der givve®-App, oder unter https://card.givve.com/"
    },
    {
      id: "m9",
      question: "Was passiert, wenn ich das Geld auf der givve® Card nicht direkt ausgebe?",
      answer: "Du kannst das Guthaben faktisch unbegrenzt lange ansparen"
    },
    {
      id: "m10",
      question: "Wo kann ich mit der givve® Card überall bezahlen?",
      answer: "Bei jedem Geschäft, welches Kreditkartenzahlung (Mastercard) akzeptiert. Also bei allen Supermärkten, Bekleidungsläden, Tankstellen, usw."
    },
    {
      id: "m11",
      question: "Warum ist die givve® Card auf eine PLZ-Region beschränkt?",
      answer: "Nach aktueller Rechtsprechung muss die givve® Card auf eine Region beschränkt werden. Dazu wird Deutschland in 2-stellige PLZ-Gebiete unterteilt. Du kannst in deinem PLZ-Gebiet und in allen Angrenzenden PLZ-Gebieten bei jeder Mastercard Akzeptanzstelle bezahlen."
    },
    {
      id: "m12",
      question: "Was tue ich, wenn ich meine Karte verloren habe?",
      answer: "Bitte lass deine Karte sofort sperren, das kannst du entweder selber in deiner givve® -App auf deinem Smartphone, oder unter https://card.givve.com/ erledigen. Oder du wendest dich damit an deinen Arbeitgeber und er macht das für dich. Es wird dann eine neue Karte für dich bestellt - das dauert etwa 10 Werktage. Die Karte wird dir dann von deinem Arbeitgeber ausgehändigt."
    }
  ];

  const arbeitgeberFAQs = [
    {
      id: "a1",
      question: "Ab wie vielen Mitarbeitern kann ich LohnLab nutzen?",
      answer: "Wir beraten jeden Kunden individuell und richten das Konzept nach seinen Wünschen unabhängig von der Mitarbeiterzahl ein. Ab 10 Mitarbeitern fällt für Sie bei der Einrichtung des Konzepts keine Einrichtungsgebühr an."
    },
    {
      id: "a2",
      question: "Für welche Mitarbeiter ist LohnLab relevant?",
      answer: "LohnLab ist für alle Mitarbeiter relevant, die: Nicht den Mindestlohn verdienen (der gesetzliche Mindestlohn darf nicht unterschritten werden) und keine Minijobber sind."
    },
    {
      id: "a3",
      question: "Was ist, wenn mein Unternehmen tarifgebunden ist?",
      answer: "Auch bei tarifgebundenen Unternehmen können alle Lohnbestandteile, die nicht zum festen Grundlohn gehören, optimiert werden. Das umfasst Überstunden, Prämien, Boni und ähnliches. Wenn ein Mitarbeiter den reinen Tariflohn erhält können tarifliche Lohnerhöhungen leider nicht optimiert werden."
    },
    {
      id: "a4",
      question: "Entsteht durch LohnLab zusätzlicher Aufwand in meinem Unternehmen?",
      answer: "Alle Daten, die wir benötigen, können ohne größeren Aufwand aus dem Lohnsystem übermittelt werden (Brutto-Gehälter, Steuerklassen, etc.). Bei der Umsetzung gibt es einen kurzen Termin, bei dem der Lohnimport und die Kommunikation zwischen Buchhaltung und LohnLab abgestimmt werden. Sie melden uns danach nur noch Updates zu Änderungen wie bspw. Ein- und Austritten."
    },
    {
      id: "a5",
      question: "Wie lange dauert die Einrichtung des Konzepts?",
      answer: "Üblicherweise circa 4 bis 8 Wochen. Allerdings lassen sich auch Lösungen für kurzfristigere Projekte finden."
    },
    {
      id: "a6",
      question: "Wie erkläre ich das Konzept unseren Mitarbeitern?",
      answer: "LohnLab kann unterschiedliche Hilfen zur Verfügung stellen, neben einer Vergleichs-Lohnabrechnung, können wir auch erprobte Unterlagen für die Mitarbeiterkommunikation zur Verfügung stellen."
    },
    {
      id: "a7",
      question: "Welche Lohnbausteine gibt es?",
      answer: "Steuerfrei: Sachbezug (50€/Monat), Handykosten, Kindergarten, Werbung (21€/Monat), Fehlgeld (16€/Monat), Verpflegungsmehraufwand (210€/Monat), Jobticket (49€/Monat), Berufskleidung, Aufmerksamkeiten (4x60€/Jahr), Ladezuschuss (15-70€/Monat). Pauschalversteuert: Internet (50€/Monat), Fahrtkostenzuschuss, Verpflegungsmehraufwand II (210€/Monat), Erholungsbeihilfe, §37b EStG (10.000€/Jahr), Essensmarken (108,45€/Monat)."
    },
    {
      id: "a8",
      question: "Wie gehe ich mit dem Rentennachteil um?",
      answer: "Pro 100€ Brutto und pro Jahr Betriebszugehörigkeit entsteht etwa 1€ monatlicher Rentenanspruch. Diese Differenz kann durch eine arbeitgeberfinanzierte Firmenrente kompensiert werden. Die Beiträge sind nur ein Bruchteil der zu erzielenden Ersparnis und das kann im Gesamtpaket eine sehr sinnvolle Ergänzung sein."
    },
    {
      id: "a9",
      question: "Können auch Teilzeitmitarbeiter von LohnLab profitieren?",
      answer: "Ja, unsere Konzepte sind auch für Teilzeitmitarbeiter anwendbar, sofern die allgemeinen Voraussetzungen erfüllt sind."
    },
    {
      id: "a10",
      question: "Funktioniert das auch reibungslos mit meinem Zeiterfassungs-/Lohnabrechnungssystem?",
      answer: "Ja, wir haben Schnittstellen zu über 20 bestehenden Systemen und programmieren kostenlos bei neuen Programmen nach und passen uns an Sie an."
    },
    {
      id: "a11",
      question: "Warum macht das nicht mein Steuerberater?",
      answer: "Die meisten Steuerberater haben ein sehr hohes Arbeitspensum und konzentrieren sich auf andere Schwerpunkte. Wenn der Steuerberater der Hausarzt für die Steuern ist, sind wir der Facharzt für das Thema Lohn."
    },
    {
      id: "a12",
      question: "Was passiert bei einer Betriebsprüfung?",
      answer: "Kein Grund zur Sorge: Unsere Zusatzvereinbarungen erfüllen alle Anforderungen, auf die Prüfer Wert legen. Wir stellen die nötigen Unterlagen zentral in einer digitalen Personalakte bereit und unterstützen bei Bedarf persönlich während der Prüfung. Unsere Erfahrung zeigt: Alle unsere Kunden sind bisher beanstandungsfrei durch Betriebsprüfungen gekommen."
    },
    {
      id: "a13",
      question: "Wie kann ich starten?",
      answer: "Sie buchen sich über die Homepage ein Erstgespräch, in dem wir Ihnen die Möglichkeiten erklären und Sie bei Interesse gerne durch den weiteren Prozess führen."
    }
  ];

  const currentFAQs = activeView === "mitarbeiter" ? mitarbeiterFAQs : arbeitgeberFAQs;
  
  const filteredFAQs = currentFAQs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAccordionChange = (value: string) => {
    setOpenAccordion(openAccordion === value ? "" : value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--lohn-primary)] to-[var(--lohn-secondary)] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <HelpCircle className="inline-block mr-4" size={48} />
            Häufig gestellte Fragen
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Finden Sie schnell Antworten auf Ihre Fragen zu LohnLab Cockpit und unseren Services.
          </p>
        </div>
      </section>

      {/* View Toggle */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h2 className="text-2xl font-bold text-[var(--lohn-primary)]">FAQ-Bereich auswählen</h2>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <Button
                  onClick={() => setActiveView("mitarbeiter")}
                  variant={activeView === "mitarbeiter" ? "default" : "ghost"}
                  className={`px-6 py-2 ${activeView === "mitarbeiter" ? "bg-[var(--lohn-primary)] text-white" : "text-gray-600"}`}
                >
                  <Users className="mr-2" size={18} />
                  Mitarbeiter
                </Button>
                <Button
                  onClick={() => setActiveView("arbeitgeber")}
                  variant={activeView === "arbeitgeber" ? "default" : "ghost"}
                  className={`px-6 py-2 ${activeView === "arbeitgeber" ? "bg-[var(--lohn-primary)] text-white" : "text-gray-600"}`}
                >
                  <Building className="mr-2" size={18} />
                  Arbeitgeber
                </Button>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Nach Fragen oder Stichworten suchen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 text-lg py-3"
                required
              />
            </div>
            {searchQuery && (
              <p className="mt-3 text-sm text-gray-600">
                {filteredFAQs.length} {filteredFAQs.length === 1 ? 'Ergebnis' : 'Ergebnisse'} für "{searchQuery}"
              </p>
            )}
          </div>

          {/* FAQ Content - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - FAQ List */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="mb-6">
                  <Badge variant="secondary" className="mb-2">
                    {activeView === "mitarbeiter" ? "Mitarbeiter-FAQ" : "Arbeitgeber-FAQ"}
                  </Badge>
                  <p className="text-gray-600">
                    {activeView === "mitarbeiter" 
                      ? "Antworten zu Ihrem Lohnkonzept, der givve® Card und weiteren Mitarbeiter-Services."
                      : "Informationen zur Einrichtung, Umsetzung und den Vorteilen von LohnLab für Ihr Unternehmen."
                    }
                  </p>
                </div>

                {filteredFAQs.length > 0 ? (
                  <Accordion type="single" collapsible value={openAccordion} onValueChange={handleAccordionChange}>
                    {filteredFAQs.map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id}>
                        <AccordionTrigger className="text-left hover:text-[var(--lohn-primary)]">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <div className="text-center py-8">
                    <HelpCircle className="mx-auto text-gray-400 mb-4" size={48} />
                    <p className="text-gray-600 mb-2">Keine passenden Fragen gefunden.</p>
                    <p className="text-sm text-gray-500">Versuchen Sie einen anderen Suchbegriff oder stellen Sie Ihre Frage unten.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - PDF Preview and Useful Links */}
            <div className="space-y-6">
              {/* PDF Preview for Arbeitgeber */}
              {activeView === "arbeitgeber" && (
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="font-semibold text-[var(--lohn-primary)] mb-4">
                    Umfassende FAQ als PDF
                  </h3>
                  <div className="mb-4">
                    <div className="w-full h-48 bg-gray-50 rounded-lg border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                      <img 
                        src={faqPreviewImg} 
                        alt="FAQ PDF Vorschau" 
                        className="w-full h-full object-cover"
                        onClick={() => window.open(faqArbeitgeberPdf, '_blank')}
                      />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Alle wichtigen Fragen und Antworten für Arbeitgeber kompakt zusammengefasst
                  </p>
                  <Button 
                    asChild 
                    className="w-full bg-[var(--lohn-primary)] hover:bg-[var(--lohn-primary)]/90 text-white"
                  >
                    <a 
                      href={faqArbeitgeberPdf} 
                      download="LohnLab_FAQ_Arbeitgeber.pdf"
                      className="flex items-center justify-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download size={16} />
                      PDF herunterladen
                    </a>
                  </Button>
                </div>
              )}

              {/* Useful Links */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="font-semibold text-[var(--lohn-primary)] mb-4">
                  Nützliche Links
                </h3>
                <div className="space-y-3">
                  {/* Mitarbeiter-spezifische Links */}
                  {activeView === "mitarbeiter" && (
                    <>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full justify-start border-[var(--lohn-primary)]/20 hover:bg-[var(--lohn-primary)]/5"
                      >
                        <a 
                          href="https://card.givve.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink size={16} />
                          givve® Card Portal
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full justify-start border-[var(--lohn-primary)]/20 hover:bg-[var(--lohn-primary)]/5"
                      >
                        <a 
                          href="https://cleverlunch.de/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink size={16} />
                          cleverlunch
                        </a>
                      </Button>
                    </>
                  )}
                  
                  {/* Arbeitgeber-spezifische Links */}
                  {activeView === "arbeitgeber" && (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start border-[var(--lohn-primary)]/20 hover:bg-[var(--lohn-primary)]/5"
                    >
                      <Link 
                        href="/"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        LohnLab Cockpit
                      </Link>
                    </Button>
                  )}
                  
                  {/* Für beide Gruppen verfügbar */}
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start border-[var(--lohn-primary)]/20 hover:bg-[var(--lohn-primary)]/5"
                  >
                    <Link 
                      href="/kontakt"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Persönliche Beratung
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Question Submission */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[var(--lohn-primary)] flex items-center">
                <Send className="mr-3" size={24} />
                Ihre Frage war nicht dabei?
              </CardTitle>
              <CardDescription>
                Stellen Sie uns Ihre Frage und wir erweitern unsere FAQ entsprechend. 
                Alle Fragen werden von unserem Expertenteam beantwortet.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Ihr Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-Mail</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="ihre.email@beispiel.de" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="userType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ich bin</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Bitte auswählen" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="interessent">Interessent</SelectItem>
                            <SelectItem value="kunde">Kunde</SelectItem>
                            <SelectItem value="partner">Partner/Steuerberater</SelectItem>
                            <SelectItem value="mitarbeiter">Mitarbeiter eines LohnLab-Kunden</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ihre Frage</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Beschreiben Sie Ihre Frage ausführlich..." 
                            className="min-h-[120px]"
                            value={field.value || ""}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            name={field.name}
                            ref={field.ref}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={mutation.isPending}
                    className="w-full bg-[var(--lohn-primary)] text-white hover:bg-[var(--lohn-secondary)] transition-colors"
                  >
                    {mutation.isPending ? "Wird gesendet..." : "Frage einreichen"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>



      <Footer />
    </div>
  );
}