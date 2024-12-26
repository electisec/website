"use client";

import { useState } from "react";
import { Navbar, MobileNavbar } from "@/modules/Navbar";
import HeroSection from "@/modules/Home/1-Hero-Section";
import Footer from "@/modules/Footer";
import Partners from "@/modules/Home/2-Clients";
import Feedback from "@/modules/Home/6-Feedback";
import Services from "@/modules/Home/3-Services";
import Fellowships from "@/modules/Home/4-Fellowships";
import Research from "@/modules/Home/5-Research";


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex flex-col bg-white text-black w-full font-default">
      {menuOpen ? (
        <MobileNavbar setMenuOpen={setMenuOpen} />
      ) : (
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      )}

      <HeroSection />
      <Partners />
      <Services />
      <Fellowships />
      <Research />
      <Feedback />
      <Footer />
    </div>
  );
}
