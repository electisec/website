"use client";

import { useState } from "react";
import { Navbar, MobileNavbar } from "@/modules/Navbar";

import React from "react";
import ZBlock1Modules from "@/modules/Zblock1/zBlock1";
import Footer from "@/modules/Footer";

export default function ZblockPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex flex-col bg-white text-black w-full font-default">
      {menuOpen ? (
        <MobileNavbar setMenuOpen={setMenuOpen} />
      ) : (
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      )}
      <div className="lg:mx-[20vw] mx-6">
        <ZBlock1Modules />
      </div>
      <Footer />
    </div>
  );
}
