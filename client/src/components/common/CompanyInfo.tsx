import { MapPin, Mail, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/constants/company";

/**
 * Komponente für Firmeninformationen
 */
export default function CompanyInfo() {
  return (
    <>
      <h3 className="text-2xl font-bold mb-6">{COMPANY_INFO.name}</h3>
      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-[var(--lohn-teal)] rounded-lg flex items-center justify-center mt-1">
            <MapPin className="text-[var(--lohn-primary)] text-sm" />
          </div>
          <div>
            <p className="font-medium">Adresse</p>
            <p className="text-blue-100">
              {COMPANY_INFO.address.street}<br />
              {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-[var(--lohn-teal)] rounded-lg flex items-center justify-center mt-1">
            <Mail className="text-[var(--lohn-primary)] text-sm" />
          </div>
          <div>
            <p className="font-medium">E-Mail</p>
            <p className="text-blue-100">{COMPANY_INFO.contact.email}</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-[var(--lohn-teal)] rounded-lg flex items-center justify-center mt-1">
            <Phone className="text-[var(--lohn-primary)] text-sm" />
          </div>
          <div>
            <p className="font-medium">Telefon</p>
            <p className="text-blue-100">{COMPANY_INFO.contact.phone}</p>
          </div>
        </div>
      </div>
    </>
  );
}