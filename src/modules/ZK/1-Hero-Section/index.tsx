import Link from "next/link";
import Typewriter from "typewriter-effect";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="h-full relative sm:my-8 lg:mx-40 lg:my-32 flex flex-row sm:text-center justify-between">
      <div className="my-8">
        <h1 className="lg:leading-normal lg:text-5xl md:text-3xl sm:text-3xl font-bold">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  'Breaking your <br /> <span style="background: linear-gradient(360deg, #22c55e -16.67%, #39e180 100%); -webkit-text-fill-color: transparent; -webkit-background-clip: text;">proofs</span>'
                )
                .pauseFor(500)
                .deleteChars(6)
                .typeString(
                  '<span style="background: linear-gradient(360deg, #22c55e -16.67%, #39e180 100%); -webkit-text-fill-color: transparent; -webkit-background-clip: text;">code</span>'
                )
                .pauseFor(500)
                .deleteChars(4)
                .typeString(
                  '<span style="background: linear-gradient(360deg, #22c55e -16.67%, #39e180 100%); -webkit-text-fill-color: transparent; -webkit-background-clip: text;">cryptography</span>'
                )

                .pauseFor(500)
                .typeString(" <br /> so no one else can")
                .pauseFor(20000)
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
              delay: 80,
            }}
          />
        </h1>
        <h2 className="sm:text-center my-4 text-zinc-500">
          Don’t let a soundness bug rekt your protocol
        </h2>
        <Link href={"/contact-us"}>
          <button className="px-16 py-3 rounded-xl text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
            Get an Audit
          </button>
        </Link>
      </div>
      <Image
        alt=""
        src="/illustrations/hero.svg"
        className="h-[26rem] sm:hidden"
      />
    </div>
  );
}

export default HeroSection;
