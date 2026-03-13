export interface ApplicationForm {
  name: string;
  email: string;
  phone?: string;
  position: string;
  message: string;
  files: File[];
}

export interface ApplicationFormData {
  name: string;
  email: string;
  phone?: string;
  position: string;
  message: string;
}
