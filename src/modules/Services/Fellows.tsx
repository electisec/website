import HyperText from "@/components/ui/hyper-text";
import Link from "next/link";
import Image from "next/image";

export default function Fellows() {
  return (
    <>
      <div className="lg:grid md:grid sm:flex grid-cols-2 gap-16 sm:flex-col my-16 justify-between">
        <div className="lg:cols-span-1 md:cols-span-1 ">
          <img
            alt=""
            src="./illustrations/hands on shield.svg"
            className="lg:h-[20rem] md:h-[16rem] justify-self-center"
          />
        </div>
        <div className="lg:cols-span-1 md:cols-span-1 flex flex-col">
          <HyperText
            className="lg:text-4xl text-3xl font-bold"
            text="Boosted Audits"
          />
          <p className="text-zinc-500 mb-8">
            <br />
            Get 50 additional eyes on your codebase by scheduling your audit
            during our highly competitive fellowships
          </p>
          <Link href={"/contact-us"}>
            <button className="px-8 py-3 sm:w-full rounded-xl text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
              Start your Audit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
