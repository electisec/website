"use client";

import { useState } from "react";
import { Navbar, MobileNavbar } from "@/modules/Navbar";
import ContactUs from "@/modules/Contact";
import Footer from "@/modules/Footer";

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex flex-col bg-white text-black w-full font-default">
      {menuOpen ? (
        <MobileNavbar setMenuOpen={setMenuOpen} />
      ) : (
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      )}
      <ContactUs />
      <Footer />
    </div>
  );
}
