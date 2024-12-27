import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import HyperText from "@/components/ui/hyper-text";
import Image from "next/image";

const features = [
  {
    name: "Smart Contract Fellowship",
    description:
      "4-6 week program to audit pre-production or in-production codebases alongside our residents, guest auditors, and mentors",
    href: "/fellowships",
    cta: "Apply",
    className: "",
    background: (
      <>
        <Image
          alt=""
          src="./illustrations/sc.svg"
          className="h-[10rem] mx-auto transition-all ease-out hover:blur-none duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105"
        />
      </>
    ),
  },
  {
    name: "ZK Fellowship",
    description:
      "Duration depends on the codebase. Includes retreat sessions with leading experts in the field, office hours with devs and/or our residents.",
    href: "/fellowships",
    cta: "Apply",
    className: "",
    background: (
      <>
        <Image
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
      "Seasoned experts deliver exhaustive architectural and code reviews",
    href: "/fellowships",
    cta: "Apply",
    className: "",
    background: (
      <>
        <Image
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
    <div className="h-full flex flex-col my-16 md:my-16 sm:my-16 sm:mx-6 md:mx-6 lg:mx-48 ">
      <HyperText
        className="lg:text-5xl text-3xl font-bold mb-16 sm:text-center"
        text="Fellowship Programs"
      />
      <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
