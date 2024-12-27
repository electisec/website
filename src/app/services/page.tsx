"use client";

import { useState } from "react";
import { Navbar, MobileNavbar } from "@/modules/Navbar";

import Sections from "@/modules/Services";
import Footer from "@/modules/Footer";

export function generateStaticParams() {
  return [{ slug: 'services' }]
}

export default function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex flex-col bg-white text-black w-full font-default">
          {menuOpen ? (
            <MobileNavbar setMenuOpen={setMenuOpen} />
          ) : (
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          )}
      <Sections />
      <Footer />
    </div>
  );
}
