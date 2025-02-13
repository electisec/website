import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import HyperText from "@/components/ui/hyper-text";
import Image from "next/image";

const features = [
  {
    name: "Smart Contract Fellowships",
    description: "4-6 weeks fully auditing 1-2 codebases, it goes deep",
    href: "/fellowships#smart-contract",
    cta: "Apply",
    className: "",
    background: (
      <>
        <img
          alt=""
          src="./illustrations/sc.svg"
          className="h-[10rem] mx-auto transition-all ease-out hover:blur-none duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105"
        />
      </>
    ),
  },
  {
    name: "ZK Fellowships",
    description: "2-3 months, you will be challenged",
    href: "/fellowships#zero-knowledge",
    cta: "Apply",
    className: "",
    background: (
      <>
        <img
          alt=""
          src="./illustrations/rust-window.svg"
          className="h-[12rem] mx-auto transition-all ease-out hover:blur-none duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105"
        />
      </>
    ),
  },
  {
    name: "Guest Auditor Program",
    description:
      "field experts leading audits and mentoring fellows alongside our residents",
    href: "/fellowships#guest-auditor",
    cta: "Apply",
    className: "",
    background: (
      <>
        <img
          alt=""
          src="./illustrations/fist-bump.svg"
          className="h-[8rem] mx-auto transition-all ease-out hover:blur-none duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105"
        />
      </>
    ),
  },
];

export default function Fellowships() {
  return (
    <div className="h-full flex flex-col my-8 sm:mx-6 md:mx-6 lg:mx-[20vw]">
      <HyperText
        className="lg:text-4xl text-3xl font-bold mb-4 sm:text-center"
        text="Fellowship Programs"
      />
      <p className="mb-16 text-zinc-500 sm:text-justify">
        Pioneering programs giving fellows the opportunity to audit alongside
        our resident auditors, with participation from guest auditors, codebase
        authors, and leading experts. The fellowships are trial-by-fire, there
        is no hand-holding.
      </p>
      <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
