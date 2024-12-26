import Link from "next/link";

export default function PartnerUp() {
  return (
    <>
      <div className="flex flex-col items-center gap-2 m-12 p-12 rounded-2xl bg-[#E8FFF8]">
        <img
          src="./illustrations/hands out of laptop.svg"
          className="h-[18rem] sm:m-0"
        />
        <h1 className="p-2 leading-normal lg:leading-tight lg:text-6xl text-center text-4xl font-bold">
          Partner up with <br /> a Protocol Audit
        </h1>
        <Link href={"/contact-us"}>
          <button className="px-8 py-3 rounded-xl text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
            Contact Us
          </button>
        </Link>
      </div>
    </>
  );
}
