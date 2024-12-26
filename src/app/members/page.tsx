"use client";

import { useState } from "react";
import { Navbar, MobileNavbar } from "@/modules/Navbar";
import Footer from "../../modules/Footer";
import Core from "../../modules/Members/1-Core";
import {
  SmartContractResident,
  ResidentAlumni,
  ZKResident,
} from "../../modules/Members/2-Residents";
import {
  Block1,
  Block2,
  Block3,
  Block4,
  Block5,
  Block6,
  ZBlock1,
  ZBlock2,
} from "../../modules/Members/3-Fellows";

export default function MembersPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex flex-col bg-white text-black w-full font-default">
      {menuOpen ? (
        <MobileNavbar setMenuOpen={setMenuOpen} />
      ) : (
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      )}
      <div className="lg:mx-40 mx-6 h-full relative">
        <Core />
        <SmartContractResident />
        <ZKResident />
        <ResidentAlumni />
        <h1 className="text-4xl mb-8 sm:text-center">Fellows</h1>
        <ZBlock2 />
        <ZBlock1 />
        <Block6 />
        <Block5 />
        <Block4 />
        <Block3 />
        <Block2 />
        <Block1 />
      </div>
      <Footer />
    </div>
  );
}
