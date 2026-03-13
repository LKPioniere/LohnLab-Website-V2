import { Star, UserPlus } from "lucide-react";
import { Link } from "wouter";
import michaelSchmittImage from "@/assets/images/team/michael-schmitt.jpg";
import martinGrauImage from "@/assets/images/team/martin-grau.jpg";
import holgerPluemerImage from "@/assets/images/team/holger-pluemer.jpg";
import lrImage from "@/assets/images/team/lennart-reichert.jpg";
import kkImage from "@/assets/images/team/kilian-kraemer.jpg";
import rbImage from "@/assets/images/team/robin-betz.jpg";
import lindaDenkImage from "@/assets/images/team/linda-denk.jpg";

const experts = [
  {
    name: "Lennart Reichert",
    role: "Produktentwicklung",
    email: "lr@lohnlab.de",
    phone: "01727738271",
    image: lrImage,
  },
  {
    name: "Kilian Kaupp",
    role: "Bestandskundenmanagement",
    email: "kk@lohnlab.de",
    phone: "017666810923",
    image: kkImage,
  },
  {
    name: "Robert Behrend",
    role: "Vertrieb & Partnerschaften",
    email: "rb@lohnlab.de",
    phone: "01621665562",
    image: rbImage,
  },
  {
    name: "Linda Denk",
    role: "Bestandskundenmanagement",
    email: "ld@lohnlab.de",
    phone: "06023918017",
    image: lindaDenkImage,
  },
];

function TeamMemberCard({
  image,
  name,
  role,
  email,
  phone,
  className = "",
  imagePosition,
}: {
  image: string;
  name: string;
  role: string;
  email?: string;
  phone?: string;
  className?: string;
  imagePosition?: string;
}) {
  return (
    <div className={`relative rounded-2xl overflow-hidden group ${className}`}>
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
        style={imagePosition ? { objectPosition: imagePosition } : undefined}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
        <p className="text-white font-bold text-xl">{name}</p>
        <p className="text-white text-base">{role}</p>
      </div>
      {email && (
        <div className="absolute bottom-20 left-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
          <div className="bg-gray-700 text-white rounded-lg p-4 shadow-2xl min-w-[220px] text-sm whitespace-nowrap">
            <p className="font-bold text-base mb-1">{name}</p>
            <p className="text-gray-300 mb-2 text-xs">{role}</p>
            <a
              href={`mailto:${email}`}
              className="text-white hover:text-blue-300 block mb-1 text-xs"
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
            >
              {email}
            </a>
            {phone && (
              <a
                href={`tel:${phone}`}
                className="text-white hover:text-blue-300 block text-xs"
                onClick={(e) => e.stopPropagation()}
              >
                {phone}
              </a>
            )}
            <div className="absolute top-full left-6 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-gray-700"></div>
          </div>
        </div>
      )}
    </div>
  );
}

function EinsparungenKachel() {
  return (
    <div className="bg-gray-100 rounded-2xl p-6 flex flex-col justify-between" style={{ flex: "0.5" }}>
      <div>
        <p className="text-black font-bold text-4xl mb-2">
          +38,4 Mio. €
        </p>
        <p className="text-gray-700 text-sm mb-4">Realisierte Einsparungen</p>
      </div>
      <div className="flex flex-col items-start">
        <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        <p className="text-gray-700 text-sm">
          Vertrauen von über 220 Unternehmenskunden
        </p>
      </div>
    </div>
  );
}

function ExpertenKachel() {
  return (
    <div className="bg-gray-100 rounded-2xl p-6" style={{ flex: "0.5" }}>
      <p className="text-black font-bold text-lg mb-2">
        ... und viele weitere Experten
      </p>
      <p className="text-gray-700 text-sm mb-4">
        Engagierte Fachleute unterstützen deine Lohnoptimierung.
      </p>
      <div className="flex items-center -space-x-3 relative">
        {experts.map((expert, index) => (
          <div
            key={expert.name}
            className="relative group"
            style={{ zIndex: 30 + (experts.length - index) }}
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-16 h-16 rounded-full border-4 border-white shrink-0 object-cover cursor-pointer hover:scale-110 transition-transform duration-300"
              style={expert.name === "Linda Denk" ? { objectPosition: "center 65%" } : {}}
            />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
              <div className="bg-gray-700 text-white rounded-lg p-4 shadow-2xl min-w-[220px] text-sm whitespace-nowrap">
                <p className="font-bold text-base mb-1">{expert.name}</p>
                <p className="text-gray-300 mb-2 text-xs">{expert.role}</p>
                <a
                  href={`mailto:${expert.email}`}
                  className="text-white hover:text-blue-300 block mb-1 text-xs"
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {expert.email}
                </a>
                <a
                  href={`tel:${expert.phone}`}
                  className="text-white hover:text-blue-300 block text-xs"
                  onClick={(e) => e.stopPropagation()}
                >
                  {expert.phone}
                </a>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-gray-700"></div>
              </div>
            </div>
          </div>
        ))}

        <Link href="/karriere">
          <div
            className="relative group"
            style={{ zIndex: 25 }}
          >
            <div className="w-16 h-16 rounded-full border-4 border-white shrink-0 bg-white flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
              <UserPlus className="w-8 h-8 text-gray-300" />
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
              <div className="bg-gray-700 text-white rounded-lg p-4 shadow-2xl min-w-[260px] text-sm">
                <p className="font-bold text-base mb-1">Das könntest du sein!</p>
                <p className="text-gray-300 mb-2 text-xs leading-relaxed">
                  Wir suchen Verstärkung für unser Vertriebsteam. Werde Teil unserer Mission!
                </p>
                <span className="text-white hover:text-blue-300 block text-xs font-semibold">
                  Bewirb dich jetzt auf unserer Karriereseite!
                </span>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-gray-700"></div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black break-words text-center lg:text-left">
            Triff die Experten, die deinen Lohn optimieren.
          </h2>
          <div className="text-gray-700 leading-relaxed flex flex-col justify-start">
            <p>
              Hinter LohnLab steht ein interdisziplinäres Team aus
              Steuerexperten, Payroll-Spezialisten, HR-Strategen,
              Software-Architekten und Unternehmensberater – mit einem
              gemeinsamen Ziel:{" "}
              <strong>
                Personalkosten steuerbar machen. Nettoeffekte maximieren.
                Arbeitgeberattraktivität nachhaltig stärken.
              </strong>
            </p>
            <p className="mt-4 text-sm italic">
              Jedes Detail spiegelt unser Engagement für Exzellenz und
              langfristige Kundenzufriedenheit wider.
            </p>
          </div>
        </div>

        {/* Desktop: 3-Spalten-Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 items-stretch" style={{ minHeight: "600px" }}>
          <div className="flex flex-col gap-6">
            <TeamMemberCard
              image={michaelSchmittImage}
              name="Michael Schmitt"
              role="Vertrieb"
              email="ms@lohnlab.de"
              phone="01777970970"
              className="grow"
              imagePosition={undefined}
            />
            <ExpertenKachel />
          </div>

          <TeamMemberCard
            image={martinGrauImage}
            name="Martin Grau"
            role="Steuern & Recht"
            email="martin.grau@neuplaner.de"
          />

          <div className="flex flex-col gap-6">
            <EinsparungenKachel />
            <TeamMemberCard
              image={holgerPluemerImage}
              name="Holger Plümer"
              role="Finanzen"
              email="hp@lohnlab.de"
              className="grow"
            />
          </div>
        </div>

        {/* Mobile: Bilder erst, dann Info-Kacheln */}
        <div className="flex flex-col gap-6 lg:hidden">
          <TeamMemberCard
            image={michaelSchmittImage}
            name="Michael Schmitt"
            role="Vertrieb"
            email="ms@lohnlab.de"
            phone="01777970970"
            className="min-h-[350px]"
          />
          <TeamMemberCard
            image={martinGrauImage}
            name="Martin Grau"
            role="Steuern & Recht"
            email="martin.grau@neuplaner.de"
            className="min-h-[350px]"
          />
          <TeamMemberCard
            image={holgerPluemerImage}
            name="Holger Plümer"
            role="Finanzen"
            email="hp@lohnlab.de"
            className="min-h-[350px]"
          />
          <EinsparungenKachel />
          <ExpertenKachel />
        </div>
      </div>
    </section>
  );
}
