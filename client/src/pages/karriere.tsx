import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useApplicationForm } from "@/hooks/api/useApplicationForm";
import { useSEO } from "@/hooks/useSEO";
import KarriereHeroSection from "@/components/sections/karriere/KarriereHeroSection";
import KarriereBenefitsSection from "@/components/sections/karriere/KarriereBenefitsSection";
import KarriereJobsSection from "@/components/sections/karriere/KarriereJobsSection";
import ApplicationDialog from "@/components/sections/karriere/ApplicationDialog";

export default function Karriere() {
  const { formData, files, handleSubmit, handleInputChange, handleFilesChange, isSubmitting } =
    useApplicationForm();
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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

  const scrollToJobs = () => {
    document.getElementById("jobs")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBenefits = () => {
    document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ebedf3" }}>
      <Navigation />

      <KarriereHeroSection
        onViewJobs={scrollToJobs}
        onInitiativApply={() => handleApplyClick("initiativ")}
      />

      <KarriereBenefitsSection />

      <KarriereJobsSection
        onApplyClick={handleApplyClick}
        onScrollToBenefits={scrollToBenefits}
      />

      <ApplicationDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        selectedJob={selectedJob}
        formData={formData}
        files={files}
        onInputChange={handleInputChange}
        onFilesChange={handleFilesChange}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />

      <Footer />
    </div>
  );
}
