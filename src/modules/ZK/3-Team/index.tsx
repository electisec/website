import { zk_residents } from "@/modules/Members/Data/zk-residents";
import Image from "next/image";

export default function Team() {
  return (
    <div className="lg:mx-32 lg:my-20 p-12">
      <h1 className="lg:text-5xl text-3xl font-bold mb-4">Team</h1>
      <p>
        Electisec&apos;s ZK team consists of ZK Circuit breakers, MPC
        Specialists, FHE experts, TEE geeks, seasoned Rustaceans and
        Cryptography connoisseurs.
      </p>
      <div className="grid grid-cols-4 sm:grid-cols-2 gap-10 my-10">
        {zk_residents.map((member) => (
          <div className="flex flex-col items-center" key={member.name}>
            <Image
              src={member.avatar}
              alt={member.name}
              className="h-[3rem] rounded-full"
            />
            <h2 className="font-semibold text-md mt-2 hover:underline duration-700">
              <a href={member.twitter} target="_blank">
                {member.name}
              </a>
            </h2>
          </div>
        ))}
      </div>
      <button className="px-16 py-3 rounded-xl text-md text-darkgreen text-bold bg-emeraldlight bg-opacity-25 hover:bg-opacity-5 hover:text-emeraldlight duration-700">
        <a
          href="https://sweltering-bill-f01.notion.site/Resident-Bios-1c9003f75a6d45a084c62468cd180018"
          target="_blank"
        >
          Read Auditor Bio
        </a>
      </button>
    </div>
  );
}
