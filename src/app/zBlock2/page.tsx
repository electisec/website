"use client";

import { useState } from "react";
import { Navbar, MobileNavbar } from "@/modules/Navbar";
import React from "react";
import ZBlock2Modules from "@/modules/Zblock2/zBlock2";
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
        <ZBlock2Modules />
      </div>
      <Footer />
    </div>
  );
}
