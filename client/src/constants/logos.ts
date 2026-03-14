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
import absLogo from "@/assets/logos/lohn-systeme/abs.png";
import kdvLogo from "@/assets/logos/lohn-systeme/kdv.png";
import kidicapLogo from "@/assets/logos/lohn-systeme/kidicap.png";
import edlohnLogo from "@/assets/logos/lohn-systeme/edlohn.png";

export interface LohnSystemLogo {
  name: string;
  src: string;
  scale?: number;
  website?: string;
  needsInvert?: boolean;
}

export const LOHN_SYSTEM_LOGOS: LohnSystemLogo[] = [
  { name: "DATEV", src: datevLogo, website: "https://www.datev.de" },
  { name: "Lexware", src: lexwareLogo, scale: 1.5, website: "https://www.lexware.de" },
  { name: "Sage", src: sageLogo, scale: 2.5, website: "https://www.sage.com/de-de/" },
  { name: "Wolters Kluwer", src: wolterskluverLogo, website: "https://www.wolterskluwer.com/de-de" },
  { name: "CSS LOHN", src: csslohnLogo, website: "https://www.css-ag.de" },
  { name: "PI", src: piLogo, scale: 3.5, website: "https://www.pi-ag.com" },
  { name: "VRG", src: vrgLogo, website: "https://www.vrg-gruppe.de" },
  { name: "Agenda", src: agendaLogo, scale: 1.6, website: "https://www.agenda-software.de" },
  { name: "ABS", src: absLogo, website: "https://www.abs-team.de" },
  { name: "KDV", src: kdvLogo, website: "https://www.kdv.de" },
  { name: "kidicap", src: kidicapLogo, website: "https://www.kidicap.de" },
  { name: "edlohn", src: edlohnLogo, website: "https://www.edlohn.de" },
];
