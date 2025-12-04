import { useEffect, useState } from "react";
import lohnlabLogo from "@/assets/lohnlab-logo-blue.png";
import datevLogo from "@/assets/datev-logo.png";
import { Settings } from "lucide-react";

const STEP_DURATION = 5000;

const SPHERE_ONE_SEQUENCE = [
  { label: "Stammdaten", color: "#5EBAAA" },
  { label: "Änderungen", color: "#5EBAAA" },
  { label: "Stundenlöhne", color: "#5EBAAA" },
  { label: "neue Mitarbeiter", color: "#5EBAAA" },
] as const;

const SPHERE_TWO_SEQUENCE = [
  { label: "Sachbezüge", color: "#0F2289" },
  { label: "Barzuschüsse", color: "#0F2289" },
  { label: "Überstunden", color: "#0F2289" },
  { label: "Nachträge", color: "#0F2289" },
] as const;

const SPHERE_ONE_TRAVEL_DURATION = 12; // seconds
const SPHERE_TWO_TRAVEL_DURATION = 12; // seconds

export default function DatevLohnlabAnimation() {
  const [sphereOneIndex, setSphereOneIndex] = useState(0);
  const [sphereTwoIndex, setSphereTwoIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const interval = window.setInterval(() => {
      setSphereOneIndex((prev) => (prev + 1) % SPHERE_ONE_SEQUENCE.length);
    }, STEP_DURATION);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const interval = window.setInterval(() => {
      setSphereTwoIndex((prev) => (prev + 1) % SPHERE_TWO_SEQUENCE.length);
    }, STEP_DURATION);
    return () => window.clearInterval(interval);
  }, []);

  const sphereOneTag = SPHERE_ONE_SEQUENCE[sphereOneIndex];
  const sphereTwoTag = SPHERE_TWO_SEQUENCE[sphereTwoIndex];

  return (
    <div className="relative w-full mx-auto flex items-center justify-center" style={{ height: "600px", maxWidth: "600px" }}>
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Definitionen für Gradienten und Filter */}
        <defs>
          {/* Gradient für die Pfade */}
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--lohn-primary)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="var(--lohn-teal)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--lohn-primary)" stopOpacity="0.3" />
          </linearGradient>

          {/* Glow-Effekt für Datenpunkte */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Halbkreis von DATEV zu LohnLab (linke Seite) */}
          <path
            id="datevToLohnlab"
            d="M 200,300
               A 100,100 0 0,1 100,200
               A 100,100 0 0,1 200,100"
            fill="none"
          />

          {/* Halbkreis von LohnLab zu DATEV (rechte Seite) */}
          <path
            id="lohnlabToDatev"
            d="M 200,100
               A 100,100 0 0,1 300,200
               A 100,100 0 0,1 200,300"
            fill="none"
          />
        </defs>

        {/* Hintergrund-Kreislinie */}
        <circle
          cx="200"
          cy="200"
          r="100"
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth="3"
          strokeDasharray="5,5"
          className="opacity-40"
        />
        {/* Kugel 1: Startet türkis bei DATEV (zeigt DATEV-Daten), wird blau bei LohnLab (zeigt LohnLab-Daten) */}
        <g className="pointer-events-none">
          <circle
            r="8"
            filter="url(#glow)"
            fill={sphereOneTag.color}
          >
            <animate
              attributeName="r"
              values="7;9;7"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>

          <text
            y="-22"
            textAnchor="middle"
            fontSize="13"
            fontWeight="600"
            fill={sphereOneTag.color}
            style={{
              letterSpacing: "0.01em",
            }}
          >
            {sphereOneTag.label}
          </text>

          <animateMotion
            dur={`${SPHERE_ONE_TRAVEL_DURATION}s`}
            repeatCount="indefinite"
            rotate="0"
          >
            <mpath href="#datevToLohnlab" />
          </animateMotion>
        </g>

        {/* Kugel 2: Startet blau bei LohnLab (zeigt LohnLab-Daten), wird türkis bei DATEV (zeigt DATEV-Daten) */}
        <g className="pointer-events-none">
          <circle
            r="8"
            filter="url(#glow)"
            fill={sphereTwoTag.color}
          >
            <animate
              attributeName="r"
              values="7;9;7"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>

          <text
            y="-22"
            textAnchor="middle"
            fontSize="13"
            fontWeight="600"
            fill={sphereTwoTag.color}
            style={{
              letterSpacing: "0.01em",
            }}
          >
            {sphereTwoTag.label}
          </text>

          <animateMotion
            dur={`${SPHERE_TWO_TRAVEL_DURATION}s`}
            repeatCount="indefinite"
            rotate="0"
          >
            <mpath href="#lohnlabToDatev" />
          </animateMotion>
        </g>

        {/* LohnLab Logo Container (oben) */}
        <g>
          {/* Hintergrund-Kreis */}
          <circle
            cx="200"
            cy="100"
            r="45"
            fill="white"
            className="drop-shadow-lg"
          />

          {/* Lucide Settings Icon als Zahnrad */}
          <g transform="translate(200, 100)">
            <foreignObject x="-45" y="-45" width="90" height="90">
              <div style={{ width: '90px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Settings 
                  size={70} 
                  color="#D1D5DB" 
                  strokeWidth={1.5}
                  style={{ 
                    animation: "spin 8s linear infinite",
                    opacity: 0.5
                  }} 
                />
              </div>
            </foreignObject>
          </g>

          {/* LohnLab Logo Image */}
          <image
            href={lohnlabLogo}
            x="170"
            y="70"
            width="60"
            height="60"
            className="pointer-events-none"
          />
        </g>

        {/* DATEV Logo Container (unten) */}
        <g>
          {/* Hintergrund-Kreis */}
          <circle
            cx="200"
            cy="300"
            r="45"
            fill="white"
            className="drop-shadow-lg"
          />

          {/* Lucide Settings Icon als Zahnrad */}
          <g transform="translate(200, 300)">
            <foreignObject x="-45" y="-45" width="90" height="90">
              <div style={{ width: '90px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Settings 
                  size={70} 
                  color="#D1D5DB" 
                  strokeWidth={1.5}
                  style={{ 
                    animation: "spin 8s linear infinite",
                    opacity: 0.5
                  }} 
                />
              </div>
            </foreignObject>
          </g>

          {/* DATEV Logo Image */}
          <image
            href={datevLogo}
            x="160"
            y="270"
            width="80"
            height="60"
            className="pointer-events-none"
          />
        </g>

      </svg>
    </div>
  );
}

