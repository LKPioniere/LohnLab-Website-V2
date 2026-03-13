import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { ApplicationFormData } from "@/types/application";

/**
 * Hook für Bewerbungsformular-Funktionalität mit File-Upload
 */
export function useApplicationForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ApplicationFormData>({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: ""
  });
  const [files, setFiles] = useState<File[]>([]);

  const submitApplication = useMutation({
    mutationFn: async (data: { formData: ApplicationFormData; files: File[] }) => {
      // Create FormData for multipart/form-data
      const formDataToSend = new FormData();
      formDataToSend.append('name', data.formData.name);
      formDataToSend.append('email', data.formData.email);
      if (data.formData.phone) {
        formDataToSend.append('phone', data.formData.phone);
      }
      formDataToSend.append('position', data.formData.position);
      formDataToSend.append('message', data.formData.message);
      
      // Append files
      data.files.forEach((file) => {
        formDataToSend.append('files', file);
      });

      const response = await fetch('/api/applications', {
        method: 'POST',
        body: formDataToSend,
        // Don't set Content-Type header - browser will set it with boundary
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit application');
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Bewerbung gesendet",
        description: "Vielen Dank für deine Bewerbung! Wir melden uns bald bei dir.",
      });
      setFormData({ name: "", email: "", phone: "", position: "", message: "" });
      setFiles([]);
    },
    onError: (error: Error) => {
      toast({
        title: "Fehler",
        description: error.message || "Bewerbung konnte nicht gesendet werden. Bitte versuche es später erneut.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.position || !formData.message) {
      toast({
        title: "Fehler",
        description: "Bitte fülle alle Pflichtfelder aus.",
        variant: "destructive",
      });
      return;
    }
    if (formData.message.length < 10) {
      toast({
        title: "Fehler",
        description: "Die Nachricht muss mindestens 10 Zeichen lang sein.",
        variant: "destructive",
      });
      return;
    }
    submitApplication.mutate({ formData, files });
  };

  const handleInputChange = (field: keyof ApplicationFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFilesChange = (newFiles: File[]) => {
    setFiles(newFiles);
  };

  return {
    formData,
    files,
    handleSubmit,
    handleInputChange,
    handleFilesChange,
    isSubmitting: submitApplication.isPending
  };
}
