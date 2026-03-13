import ApplicationForm from "@/components/forms/ApplicationForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ApplicationFormData } from "@/types/application";
import { getJobOpenings } from "@/constants/karriere-data";
import { useGender } from "@/lib/gender";

interface ApplicationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedJob: string | null;
  formData: ApplicationFormData;
  files: File[];
  onInputChange: (field: keyof ApplicationFormData, value: string) => void;
  onFilesChange: (files: File[]) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

export default function ApplicationDialog({
  open,
  onOpenChange,
  selectedJob,
  formData,
  files,
  onInputChange,
  onFilesChange,
  onSubmit,
  isSubmitting,
}: ApplicationDialogProps) {
  const gendered = useGender();
  const jobOpenings = getJobOpenings(gendered);
  const dialogTitle =
    selectedJob === "initiativ"
      ? "Initiativbewerbung"
      : jobOpenings.find((j) => j.id === selectedJob)?.title;

  const handleSubmit = (e: React.FormEvent) => {
    onSubmit(e);
    setTimeout(() => {
      if (!isSubmitting) {
        onOpenChange(false);
      }
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {dialogTitle}
          </DialogTitle>
          <DialogDescription>
            Fülle das Formular aus und wir melden uns schnellstmöglich bei dir.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <ApplicationForm
            formData={formData}
            files={files}
            onSubmit={handleSubmit}
            onInputChange={onInputChange}
            onFilesChange={onFilesChange}
            isSubmitting={isSubmitting}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
