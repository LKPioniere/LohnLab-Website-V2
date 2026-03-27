import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Briefcase,
  Target,
  LineChart,
  CheckCircle2,
  ChevronRight,
  Mail,
  Phone,
} from "lucide-react";
import lindaDenkImage from "@/assets/images/team/linda-denk.jpg";
import { getJobOpenings } from "@/constants/karriere-data";
import type { JobOpening } from "@/constants/karriere-data";
import { useGender } from "@/lib/gender";

interface KarriereJobsSectionProps {
  onApplyClick: (jobId: string) => void;
  onScrollToBenefits: () => void;
}

export default function KarriereJobsSection({
  onApplyClick,
  onScrollToBenefits,
}: KarriereJobsSectionProps) {
  const gendered = useGender();
  const jobOpenings = getJobOpenings(gendered);
  return (
    <section
      id="jobs"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#ebedf3" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            Offene Stellen
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Finde die Position, die zu dir passt, oder bewirb dich initiativ
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          <Accordion type="single" collapsible className="space-y-4">
            {jobOpenings.map((job) => (
              <JobAccordionItem
                key={job.id}
                job={job}
                onApplyClick={onApplyClick}
                onScrollToBenefits={onScrollToBenefits}
              />
            ))}

            {/* Initiativbewerbung Card */}
            <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <Briefcase className="w-12 h-12 text-lohn-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-black mb-3">
                  Nichts Passendes gefunden?
                </h3>
                <p className="text-gray-700 mb-6">
                  Überzeuge uns mit einer Initiativbewerbung! Wir sind immer auf
                  der Suche nach talentierten Menschen, die unser Team
                  bereichern möchten.
                </p>
                <Button
                  onClick={() => onApplyClick("initiativ")}
                  className="bg-lohn-primary hover:bg-lohn-secondary text-white px-8 py-6 text-lg rounded-full"
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
                className="w-32 h-32 rounded-full border-4 border-gray-200 object-cover shrink-0"
                style={{ objectPosition: "center 65%" }}
              />
              <div className="flex-1 text-center md:text-left">
                <p className="font-bold text-xl text-black">Linda Denk</p>
                <p className="text-gray-600 mb-4">
                  Recruiting & Bestandskundenmanagement
                </p>
                <div className="space-y-2">
                  <a
                    href="mailto:ld@lohnlab.de"
                    className="flex items-center justify-center md:justify-start gap-2 text-lohn-primary hover:underline"
                  >
                    <Mail className="w-5 h-5" />
                    <span>ld@lohnlab.de</span>
                  </a>
                  <a
                    href="tel:06023918017"
                    className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-lohn-primary"
                  >
                    <Phone className="w-5 h-5" />
                    <span>06023 918017</span>
                  </a>
                </div>
                <p className="text-sm text-gray-600 mt-4 italic">
                  Hast du Fragen zu einer Position oder zur Bewerbung? Linda
                  beantwortet sie gerne persönlich!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function JobAccordionItem({
  job,
  onApplyClick,
  onScrollToBenefits,
}: {
  job: JobOpening;
  onApplyClick: (jobId: string) => void;
  onScrollToBenefits: () => void;
}) {
  return (
    <AccordionItem
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
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="w-6 h-6 text-lohn-primary" />
              <h4 className="text-xl font-bold text-black">Deine Mission</h4>
            </div>
            <ul className="space-y-2">
              {job.mission.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-6 h-6 text-lohn-primary" />
              <h4 className="text-xl font-bold text-black">Dein Profil</h4>
            </div>
            <ul className="space-y-2">
              {job.profile.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-6 h-6 text-lohn-primary" />
              <h4 className="text-xl font-bold text-black">Was wir bieten</h4>
            </div>
            <ul className="space-y-2">
              {job.weOffer.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <LineChart className="w-6 h-6 text-lohn-primary" />
              <h4 className="text-xl font-bold text-black">Vergütung</h4>
            </div>
            <ul className="space-y-2">
              {job.compensation.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={onScrollToBenefits}
              className="mt-4 text-lohn-primary hover:underline text-sm font-semibold flex items-center gap-1"
            >
              Alle Benefits ansehen
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              onClick={() => onApplyClick(job.id)}
              className="flex-1 bg-lohn-primary hover:bg-lohn-secondary text-white py-6 text-lg rounded-full shadow-lg"
            >
              Jetzt bewerben
            </Button>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
