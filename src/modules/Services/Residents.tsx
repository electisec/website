/* eslint-disable @next/next/no-img-element */
import HyperText from "@/components/ui/hyper-text";
import Link from "next/link";

export default function Residents() {
  return (
    <>
      <div className="lg:grid md:grid sm:flex grid-cols-2 gap-16 sm:flex-col my-16 justify-between text-left">
        <img
          alt=""
          src="./illustrations/hands out of laptop.svg"
          className="lg:cols-span-1 md:cols-span-1 justify-self-center lg:h-[14rem] md:h-[10rem]"
        />
        <div className="lg:cols-span-1 md:cols-span-1 flex flex-col">
          <HyperText
            className="lg:text-4xl text-3xl font-bold "
            text="ZK & Smart Contract"
          />
          <HyperText
            className="lg:text-4xl text-3xl font-bold"
            text="Expertise"
          />
          <p className="text-zinc-500 mb-8">
            <br />
            Get your codebase audited by our top-tier resident auditors
          </p>
          <Link href={"/contact-us"}>
            <button className="px-8 py-3 sm:w-full rounded-xl text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
              Get an Audit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
