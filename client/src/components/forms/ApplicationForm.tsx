import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ApplicationFormData } from "@/types/application";
import { useState, useRef } from "react";
import { Upload, X, FileText } from "lucide-react";

interface ApplicationFormProps {
  formData: ApplicationFormData;
  onSubmit: (e: React.FormEvent) => void;
  onInputChange: (field: keyof ApplicationFormData, value: string) => void;
  onFilesChange: (files: File[]) => void;
  files: File[];
  isSubmitting: boolean;
}

/**
 * Bewerbungsformular Komponente mit Dateiupload und Honeypot Spam-Schutz
 */
export default function ApplicationForm({
  formData,
  onSubmit,
  onInputChange,
  onFilesChange,
  files,
  isSubmitting,
}: ApplicationFormProps) {
  const [honeypot, setHoneypot] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // If honeypot field is filled, it's likely a bot
    if (honeypot) {
      console.warn("Spam detected - honeypot field filled");
      return;
    }

    onSubmit(e);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      handleFiles(selectedFiles);
    }
  };

  const handleFiles = (newFiles: File[]) => {
    // Filter für erlaubte Dateitypen
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    const validFiles = newFiles.filter(file => {
      if (!allowedTypes.includes(file.type)) {
        alert(`${file.name}: Nur PDF, DOC und DOCX Dateien sind erlaubt.`);
        return false;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert(`${file.name}: Datei ist zu groß. Maximal 5 MB erlaubt.`);
        return false;
      }
      return true;
    });

    // Maximal 2 Dateien
    const updatedFiles = [...files, ...validFiles].slice(0, 2);
    onFilesChange(updatedFiles);
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    onFilesChange(updatedFiles);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="space-y-4">
        {/* Honeypot field - hidden from users but visible to bots */}
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor="website_url">Website (leave blank)</label>
          <input
            type="text"
            id="website_url"
            name="website_url"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
          <Input
            type="text"
            required
            value={formData.name}
            onChange={(e) => onInputChange("name", e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lohn-primary focus:border-lohn-primary"
            placeholder="Dein Name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail *</label>
          <Input
            type="email"
            required
            value={formData.email}
            onChange={(e) => onInputChange("email", e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lohn-primary focus:border-lohn-primary"
            placeholder="deine@email.de"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Telefon (optional)</label>
          <Input
            type="tel"
            value={formData.phone || ""}
            onChange={(e) => onInputChange("phone", e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lohn-primary focus:border-lohn-primary"
            placeholder="+49 123 456789"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Position *</label>
          <Select
            value={formData.position}
            onValueChange={(value) => onInputChange("position", value)}
            required
          >
            <SelectTrigger className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lohn-primary focus:border-lohn-primary [&>span]:text-gray-900">
              <SelectValue
                placeholder="Bitte auswählen"
                className="text-gray-900"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sales-manager">Sales Manager (Remote)</SelectItem>
              <SelectItem value="initiativ">Initiativbewerbung</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nachricht/Motivation *</label>
          <Textarea
            rows={6}
            required
            value={formData.message}
            onChange={(e) => onInputChange("message", e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lohn-primary focus:border-lohn-primary resize-none"
            placeholder="Erzähl uns, warum du Teil unseres Teams werden möchtest..."
            minLength={10}
          />
        </div>

        {/* File Upload Area */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Unterlagen (Lebenslauf, Anschreiben)
          </label>
          <div
            className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-colors ${
              dragActive
                ? "border-lohn-primary bg-blue-50"
                : "border-gray-300 bg-gray-50"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleFileInput}
              className="hidden"
            />
            
            {files.length === 0 ? (
              <div className="flex flex-col items-center justify-center">
                <Upload className="w-12 h-12 text-gray-400 mb-3" />
                <p className="text-gray-700 font-medium mb-1">
                  Dateien hier ablegen oder klicken zum Auswählen
                </p>
                <p className="text-sm text-gray-500">
                  PDF, DOC, DOCX • Max. 5 MB pro Datei • Max. 2 Dateien
                </p>
                <Button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-4 bg-lohn-primary text-white hover:bg-lohn-secondary transition-colors rounded-full px-6 py-2"
                >
                  Dateien auswählen
                </Button>
              </div>
            ) : (
              <div className="space-y-2">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <FileText className="w-5 h-5 text-lohn-primary shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {file.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatFileSize(file.size)}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="shrink-0 text-gray-400 hover:text-red-500 transition-colors ml-2"
                      aria-label="Datei entfernen"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
                {files.length < 2 && (
                  <Button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    variant="outline"
                    className="w-full mt-2 border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    Weitere Datei hinzufügen
                  </Button>
                )}
              </div>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Optional: Lade deine Bewerbungsunterlagen hoch (z.B. Lebenslauf, Anschreiben)
          </p>
        </div>

        {/* Datenschutz-Hinweis */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <p className="text-xs text-gray-600">
            Mit dem Absenden deiner Bewerbung erklärst du dich damit einverstanden, dass wir deine 
            Daten zur Bearbeitung deiner Bewerbung verwenden. Weitere Informationen findest du in unserer{" "}
            <a href="/datenschutz" className="text-lohn-primary hover:underline" target="_blank" rel="noopener noreferrer">
              Datenschutzerklärung
            </a>.
          </p>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-lohn-primary text-white hover:bg-lohn-secondary transition-colors rounded-full py-3 font-semibold shadow-md"
        >
          {isSubmitting ? "Wird gesendet..." : "Jetzt bewerben"}
        </Button>
      </div>
    </form>
  );
}
