"use client";

import { useState } from "react";
import { Navbar, MobileNavbar } from "@/modules/Navbar";

import Stats from "@/modules/Fellowships/Stats";
import Footer from "@/modules/Footer";
import Summary from "@/modules/Fellowships/Mid";

export default function FellowshipsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex flex-col bg-white text-black w-full font-default">
      {menuOpen ? (
        <MobileNavbar setMenuOpen={setMenuOpen} />
      ) : (
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      )}
      <div className="lg:mx-[20vw] mx-6 h-full relative">
        <Stats />
        <Summary />
      </div>
      <Footer />
    </div>
  );
}
