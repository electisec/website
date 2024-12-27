import HyperText from "@/components/ui/hyper-text";
import Link from "next/link";
import Image from "next/image";

export default function Fellows() {
  return (
    <>
      <div className="grid grid-cols-2 sm:flex sm:flex-col gap-4 my-32 md:my-16 sm:my-16 sm:mx-6 md:mx-6 text-justify">
        <div className="col-span-1 sm:hidden">
          <Image
            alt=""
            src="./illustrations/hands on shield.svg"
            className="h-[24rem] md:h-[20rem] mt-8"
          />
        </div>
        <div className="col-span-1 sm:flex sm:flex-col sm:align-center">
          <HyperText
            className="lg:text-5xl text-3xl font-bold sm:text-center"
            text="Boosted Audits"
          />
          <Image
            alt=""
            src="./illustrations/hands on shield.svg"
            className="h-[24rem] sm:h-[16rem] mt-8 lg:hidden md:hidden"
          />
          <p className="text-zinc-500 mb-8">
            <br />
            Get 50 additional eyes on your codebase by scheduling your audit
            during our highly competitive fellowships
          </p>
          <Link href={"/contact-us"}>
            <button className="px-8 py-3 rounded-xl sm:w-full text-md sm:text-sm text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
              Start your Audit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
