import { zk_residents } from "@/modules/Members/Data/zk-residents";
import {
  m2report as rln,
  m3report as spartan,
} from "@/modules/Zblock1/Data/zblock1";
import { Report } from "@/modules/Zblock1/utils";
import {
  m1report as summav1,
  m2report as summav2,
} from "@/modules/Zblock2/Data/zblock2";
import Link from "next/link";
import Image from "next/image";

export default function Highlights() {
  const work = [
    {
      title: "Write a Halo2 Bug PoC in under 20 LoC",
      avatar: zk_residents.find((r) => r.name === "teddav")?.avatar,
      link: "https://www.personaelabs.xyz/",
    },
    {
      title: "Proposal for a Verifier Validator Registry",
      avatar: zk_residents.find((r) => r.name === "Flying Nobita")?.avatar,
      link: "https://pse.dev/en",
    },
    {
      title: "Soundness Error in lookup_any API in PSE's Halo2 fork",
      avatar: zk_residents.find((r) => r.name === "teddav")?.avatar,
      link: "https://pse.dev/en",
    },
    {
      title: "Calling SEAL",
      avatar: zk_residents.find((r) => r.name === "Oba")?.avatar,
      link: "https://pse.dev/en",
    },
    {
      title: "Sneakpeak into our Tooling Directory",
      avatar: zk_residents.find((r) => r.name === "zeroqn")?.avatar,
      link: "https://pse.dev/en",
    },
    {
      title: "Binius",
      avatar: zk_residents.find((r) => r.name === "nullity")?.avatar,
      link: "https://pse.dev/en",
    },
  ];

  const reports = [rln, spartan, summav1, summav2];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 lg:my-24 p-12 lg:px-44 bg-green-100">
        <h2 className="lg:text-5xl text-3xl font-bold">Recent Work</h2>
        <div className="grid grid-cols-3 sm:grid-cols-1 gap-2 mt-10 ">
          {work.slice(0, 3).map((w) => (
            <div
              className="cols-span-1 bg-white flex flex-row p-6 gap-4 rounded-lg items-center font-semibold"
              key={w.title}
            >
              <Image
                alt=""
                src={w.avatar || ""}
                className="rounded-full h-[3rem]"
              />
              <a
                href={w.link}
                className="hover:underline duration-700"
                target="_blank"
              >
                {w.title}
              </a>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-1 gap-2 ">
          {work.slice(3, 6).map((w) => (
            <div
              className="cols-span-1 bg-white flex flex-row p-6 gap-4 rounded-lg items-center font-semibold"
              key={w.title}
            >
              <Image
                alt=""
                src={w.avatar || ""}
                className="rounded-full h-[3rem]"
              />
              <a
                href={w.link}
                className="hover:underline duration-700"
                target="_blank"
              >
                {w.title}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:px-44 sm:my-24 p-12">
        <h2 className="lg:text-5xl text-3xl font-bold mb-10 ">Audits</h2>
        <div className="grid grid-cols-4 sm:grid-cols-1 gap-2 ">
          {reports.slice(0, 4).map((w) => (
            <div
              className="cols-span-1 flex flex-row gap-4 p-4 items-center rounded-2xl bg-[#E8FFF8]"
              key={w.title}
            >
              <Report report={w} />
            </div>
          ))}
        </div>
        <div className="flex flex-row sm:flex-col gap-4 mt-2 items-center">
          <p className="text-xl font-bold leading-10 text-gray-600">
            See all audits :
          </p>
          <Link href="/zBlock1">
            <p className="text-md font-semibold leading-8 text-darkgreen hover:underline duration-700">
              zBlock1 (May 2023)
            </p>
          </Link>
          <Link href="/zBlock2">
            <p className="text-md font-semibold leading-8 text-darkgreen hover:underline duration-700">
              zBlock2 (Jan - May 2024)
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
