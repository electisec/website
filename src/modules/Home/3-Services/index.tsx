/* eslint-disable @next/next/no-img-element */
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import HyperText from "@/components/ui/hyper-text";
import Image from "next/image";

const features = [
  {
    name: "ZK & Smart Contract Expertise",
    description: "Get your codebase audited by our top-tier resident auditors",
    href: "/services",
    cta: "Learn more",
    className: "",
    background: (
      <>
        <img
          alt=""
          src="./illustrations/hands out of laptop.svg"
          className="h-[10rem] mx-auto transition-all ease-out hover:blur-none duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105"
        />{" "}
      </>
    ),
  },
  {
    name: "Boosted Audits",
    description:
      "Get 50 additional eyes on your codebase by scheduling your audit during our highly competitive fellowships",
    href: "/services",
    cta: "Learn more",
    className: "",
    background: (
      <>
        <img
          alt=""
          src="./illustrations/hands on shield.svg"
          className="h-[12rem] mx-auto transition-all  ease-out hover:blur-none duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105"
        />
      </>
    ),
  },
  {
    name: "Consulting",
    description:
      "Get due diligence on blockchain projects and protocols: architecture, design, code, algorithms, and approach.",
    href: "/services",
    cta: "Learn more",
    className: "",
    background: (
      <>
        <img
          alt=""
          src="./illustrations/code.svg"
          className="h-[8rem] mx-auto mt-8 transition-all ease-out hover:blur-none duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105"
        />
      </>
    ),
  },
];

export default function Services() {
  return (
    <div className="h-full flex flex-col my-16 sm:mx-6 md:mx-6 lg:mx-[20vw] ">
      <HyperText
        className="lg:text-4xl text-3xl font-bold mb-8 sm:text-center"
        text="Services"
      />
      <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
