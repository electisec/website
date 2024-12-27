import styled from "styled-components";
// import Link from "next/link";
import Lottie from "lottie-react";
import logo from "./logo.json";
import Link from "next/link";

export const GradientWord = styled.span`
  background: linear-gradient(360deg, #22c55e -16.67%, #39e180 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

function HeroSection() {
  return (
    <div className="h-full relative sm:my-16 lg:ml-40">
      <Lottie animationData={logo} className="md:hidden lg:hidden" />
      <div className="grid grid-cols-5 md:mx-6 sm:flex sm:flex-col sm:mx-6 sm:text-center">
        <div className="col-span-2 flex flex-col lg:py-4 lg:my-40 md:my-32">
          <h1 className="lg:leading-normal lg:text-7xl md:text-4xl sm:text-4xl font-bold">
            <GradientWord>ZK</GradientWord> & <br />
            <GradientWord>Smart Contract</GradientWord> Security
          </h1>
          <h2 className="text-left sm:text-center my-4 text-zinc-500">
            Audits - Research - Training - Consulting
          </h2>
          <Link href={"/services"}>
            <button className="px-16 py-3 rounded-xl text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
              Get an Audit
            </button>
          </Link>
        </div>
        <div className="col-span-3 my-20 sm:hidden">
          <Lottie animationData={logo} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
