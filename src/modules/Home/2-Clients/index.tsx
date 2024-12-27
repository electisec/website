/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef } from "react";
import HyperText from "@/components/ui/hyper-text";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const clients = [
  { name: "Exit10", logo: "exit10.png", website: "https://exit10.com/" },
  { name: "Vmex", logo: "vmex.png", website: "https://vmex.finance/" },
  {
    name: "Timeless Finance",
    logo: "timelessfi.svg",
    website: "https://timelessfi.com/",
  },
  {
    name: "Manifold Finance",
    logo: "manifold.svg",
    website: "https://manifoldfinance.com/",
  },
  { name: "Rage Trade", logo: "rage.svg", website: "https://ragetrade.io/" },
  { name: "Strike", logo: "strike.svg", website: "https://www.strike.org/" },
  { name: "Inverse", logo: "inverse.svg", website: "https://inverse.finance/" },
  { name: "Ramses", logo: "ramses.svg", website: "https://ramses.exchange/" },
  { name: "vfat", logo: "vfat.svg", website: "https://vfat.io/" },
  { name: "TLX", logo: "tlx.svg", website: "https://tlx.fi/" },
  { name: "Peapods", logo: "peapods.svg", website: "https://peapods.finance/" },
  { name: "Cove", logo: "cove.svg", website: "https://cove.finance/" },
  { name: "Rysk", logo: "rysk.svg", website: "https://www.rysk.finance/" },
  {
    name: "Superfluid",
    logo: "superfluid.svg",
    website: "https://www.superfluid.finance/",
  },
  {
    name: "Get Protocol",
    logo: "get-protocol.svg",
    website: "https://www.get-protocol.io/",
  },
  {
    name: "Llama Pay",
    logo: "llamapay.svg",
    website: "https://llamapay.io/",
  },
  {
    name: "Lamalend",
    logo: "llamalend.svg",
    website: "https://llamalendnft.com/",
  },
  { name: "Temple", logo: "templedao.svg", website: "https://templedao.link/" },

  { name: "Curve", logo: "curve.svg", website: "https://curve.fi/" },
  { name: "Euler", logo: "euler.svg", website: "https://www.euler.finance/" },
  {
    name: "Asymmetry",
    logo: "asymetry.svg",
    website: "https://www.asymmetry.finance/",
  },

  {
    name: "Personae Lab",
    logo: "personaelab.png",
    website: "https://www.personaelabs.xyz/",
  },
  {
    name: "Privacy & Scaling Explorations",
    logo: "pse.png",
    website: "https://pse.dev/en",
  },
  {
    name: "Olumpus DAO",
    logo: "olympus.svg",
    website: "https://www.olympusdao.finance/",
  },
  {
    name: "Nouns DAO",
    logo: "nouns.svg",
    website: "https://nouns.wtf/",
  },
  { name: "Yearn", logo: "yearn.svg", website: "https://yearn.fi/" },
];

interface EllipticalOrbitProps {
  children: React.ReactNode;
  radiusX: number;
  radiusY: number;
  duration?: number;
  delay?: number;
  className?: string;
}

const EllipticalOrbit: React.FC<EllipticalOrbitProps> = ({
  children,
  radiusX,
  radiusY,
  duration = 60,
  delay = 0,
  className = "",
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = ((elapsed / (duration * 1000)) % 1) * 2 * Math.PI;
      const angle = progress + (delay * Math.PI) / 180;

      const x = Math.cos(angle) * radiusX;
      const y = Math.sin(angle) * radiusY;

      element.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [radiusX, radiusY, duration, delay]);

  return (
    <div
      ref={elementRef}
      className={`absolute left-1/2 top-1/2 ${className}`}
      style={{
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

export default function ClientSection() {
  return (
    <section className="bg-white m-6">
      <div className="lg:mx-40">
        <HyperText className="lg:text-5xl text-3xl font-bold" text="Clients" />
        <EllipticalOrbitDemo />
      </div>
    </section>
  );
}

function EllipticalOrbitDemo() {
  // Optimized orbit configurations with all logos included
  const orbits = [
    {
      radiusX: 450,
      radiusY: 180,
      items: clients.slice(0, 10), // More logos in outer orbit
      duration: 45,
      startAngle: 30,
    },
    {
      radiusX: 350,
      radiusY: 130,
      items: clients.slice(10, 18), // Middle orbit
      duration: 60,
      startAngle: 0,
    },
    {
      radiusX: 200,
      radiusY: 70,
      items: clients.slice(18), // Rest of the logos in inner orbit
      duration: 70,
      startAngle: -30,
    },
  ];

  return (
    <div className="relative flex h-[75vh] flex-col items-center justify-center overflow-hidden rounded-lg bg-white">
      {/* Center Logo */}
      {/* <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <img alt=""  
          src="/favicon.ico" 
          alt="Company Logo" 
          className="h-8 object-contain"  // Larger size for center logo
        />
      </div> */}
      {/* SVG Orbit Paths */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        style={{
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {orbits.map((orbit, i) => (
          <ellipse
            key={`path-${i}`}
            cx="50%"
            cy="50%"
            rx={orbit.radiusX}
            ry={orbit.radiusY}
            fill="none"
            stroke="#666666"
            strokeWidth="1"
            opacity="0.5"
            strokeDasharray="4 4"
          />
        ))}
      </svg>

      <TooltipProvider>
        {orbits.map((orbit) =>
          orbit.items.map((client, i) => {
            const itemCount = orbit.items.length;
            const angleStep = 360 / itemCount;
            const delay = i * angleStep + orbit.startAngle;

            return (
              <Tooltip key={`tooltip-${client.name}`}>
                <EllipticalOrbit
                  radiusX={orbit.radiusX}
                  radiusY={orbit.radiusY}
                  duration={orbit.duration}
                  delay={delay}
                  className="transition-transform"
                >
                  <TooltipTrigger asChild>
                    <a
                      href={client.website}
                      aria-label={client.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-12 h-12"
                    >
                      <img
                        src={`/clients/${client.logo}`}
                        alt={client.name}
                        className="w-10 h-10 object-contain hover:scale-110 transition-transform"
                      />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{client.name}</p>
                  </TooltipContent>
                </EllipticalOrbit>
              </Tooltip>
            );
          })
        )}
      </TooltipProvider>
    </div>
  );
}
