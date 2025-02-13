import HyperText from "@/components/ui/hyper-text";
import Image from "next/image";
import Link from "next/link";

export default function DueDiligence() {
  return (
    <>
      <div className="lg:grid md:grid sm:flex grid-cols-2 gap-16 sm:flex-col my-16 justify-between text-left">
        <div className="lg:cols-span-1 md:cols-span-1">
          <img alt="" src="./illustrations/code.svg" className="h-[16rem] justify-self-center" />
        </div>
        <div className="lg:cols-span-1 md:cols-span-1 flex flex-col">
          <HyperText
            className="lg:text-4xl text-3xl font-bold"
            text="Consulting"
          />
          <p className="text-zinc-500 mb-8">
            <br />
            Get due diligence on blockchain projects and protocols :
            architecture, design, code, algorithms, and approach.
          </p>
          <Link href={"/contact-us"}>
            <button className="px-8 py-3 sm:w-full rounded-xl text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
              Enquire
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
