import { useEffect, useState } from "react";

import SmartContracts from "../SC";
import ZK from "../ZK";
import GuestAuditor from "../GA";

const tabs = [
  {
    name: "Smart Contract Fellowship",
    href: "#smart-contract",
    current: false,
  },
  {
    name: "Zero Knowledge Fellowship",
    href: "#zero-knowledge",
    current: false,
  },
  { name: "Guest Auditor Program", href: "#guest-auditor", current: true },
];

export default function Summary() {
  const [currentTab, setCurrentTab] = useState("Smart Contract Fellowship");

  useEffect(() => {
    if (window.location.href.split("#")[1] === "zero-knowledge") {
      setCurrentTab("Zero Knowledge Fellowship");
    } else if (window.location.href.split("#")[1] === "guest-auditor") {
      setCurrentTab("Guest Auditor Program");
    } else if (window.location.href.split("#")[1] === "smart-contract") {
      setCurrentTab("Smart Contract Fellowship");
    }
  }, [window.location.href]);

  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center mb-8">Choose your hard</h2>
      <div className="sm:block">
        <div className="bg-emeraldlight bg-opacity-5 rounded-xl">
          <nav className="-mb-px grid grid-cols-3" aria-label="Tabs">
            {tabs.map((tab) => (
              <a key={tab.name} href={tab.href} className="col-span-1">
                <button
                  onClick={() => setCurrentTab(tab.name)}
                  className={`w-full p-3 rounded-xl text-md hover:bg-emeraldlight hover:bg-opacity-25 hover:text-darkgreen duration-700 ${
                    tab.name === currentTab
                      ? "bg-emeraldlight bg-opacity-25 text-darkgreen"
                      : "text-emeraldlight"
                  }`}
                >
                  {tab.name}
                </button>
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="mt-16">
        {currentTab === "Smart Contract Fellowship" && <SmartContracts />}
        {currentTab === "Zero Knowledge Fellowship" && <ZK />}
        {currentTab === "Guest Auditor Program" && <GuestAuditor />}
      </div>
      <div className="my-16 flex flex-row gap-4 p-8 items-center rounded-2xl bg-[#E8FFF8]">
        <img src="./icons/bulb.svg" className="h-[4rem]" />
        <p className="text-darkgreen text-sm">
          If you think our program is too advanced for you now, fear not, you
          can still join after going through an introductory program such as{" "}
          <a
            href="https://secureum.xyz/"
            target="_blank"
            className="text-black hover:underline duration-700"
          >
            Secureum
          </a>
          . If you prefer to fly solo, you can bootstrap yourself & hunt for
          bounties on{" "}
          <a
            href="https://immunefi.com/"
            target="_blank"
            className="text-black hover:underline duration-700"
          >
            Immunefi
          </a>
          . Then, come back & apply, we would love to boost your progress to an
          advanced level.
        </p>
      </div>
    </div>
  );
}
