import martinImage from "@/assets/martin-grau.jpg";
import michiNewImage from "@/assets/michi-new.webp";
import holgerNewImage from "@/assets/holger-new.jpg";

/**
 * Team-Mitglieder Daten
 */
export const TEAM_MEMBERS = [
  {
    id: 'mschmitt',
    name: 'Michi',
    role: 'Geschäftsführer',
    description: 'Michael Schmitt übernahm nach seinem zweiten Jura-Examen die Versicherungsagentur seines Vaters und entwickelte daraus die heutige Schmitt & Hartmann OHG. 2015 entdeckte er die Lohnoptimierung und gründete 2019 die LohnLab GmbH. Privat lebt er mit seiner Familie in Frankfurt und bezeichnet sich selbst als „Gewaltoptimist".',
    image: michiNewImage
  },
  {
    id: 'hpluemer',
    name: 'Holger',
    role: 'Geschäftsführer',
    description: 'Holger Plümer ist gelernter Bankkaufmann und studierter Betriebswirt. Nach Stationen in der Finanzdienstleistungsbranche sowie eigenen Unternehmungen ist er seit 2022 Geschäftsführer bei der LohnLab GmbH, wo er den strategisch-technischen Part verantwortet. Holger ist verheiratet, hat drei Kinder und betreibt leidenschaftlich gern den Ninja Sport.',
    image: holgerNewImage
  },
  {
    id: 'mgrau',
    name: 'Martin',
    role: 'Gesellschafter',
    description: 'Martin Grau ist seit 2009 Partner der megra Steuerberatungsgesellschaft und Unternehmer, Innovator sowie Speaker. Als Coach unter der Marke DiGiTAXperts® unterstützt er Kanzleileitungen in den Bereichen Führung, Werte und Digitalisierung. Seine Mission: die Rolle von Steuerberatern in der Gesellschaft zu stärken und deren wertvollen Beitrag zur Wirtschaft sichtbar zu machen.',
    image: martinImage
  }
] as const;