/**
 * Lohn-System Logos für Carousel-Anzeige
 */

import agendaLogo from "@/assets/logos/lohn-systeme/agenda.png";
import csslohnLogo from "@/assets/logos/lohn-systeme/css-lohn.png";
import datevLogo from "@/assets/logos/lohn-systeme/datev.png";
import lexwareLogo from "@/assets/logos/lohn-systeme/lexware.png";
import piLogo from "@/assets/logos/lohn-systeme/pi.png";
import sageLogo from "@/assets/logos/lohn-systeme/sage.png";
import sapLogo from "@/assets/logos/lohn-systeme/sap.png";
import vrgLogo from "@/assets/logos/lohn-systeme/vrg.png";
import wolterskluverLogo from "@/assets/logos/lohn-systeme/wolters-kluwer.png";

export interface LohnSystemLogo {
  name: string;
  src: string;
  scale?: number;
}

export const LOHN_SYSTEM_LOGOS: LohnSystemLogo[] = [
  { name: "DATEV", src: datevLogo },
  { name: "SAP", src: sapLogo },
  { name: "Lexware", src: lexwareLogo },
  { name: "Sage", src: sageLogo, scale: 1.8 },
  { name: "Wolters Kluwer", src: wolterskluverLogo },
  { name: "CSS LOHN", src: csslohnLogo },
  { name: "PI", src: piLogo, scale: 2.5 },
  { name: "VRG", src: vrgLogo },
  { name: "Agenda", src: agendaLogo },
];
