"use client";

import { useState } from "react";
import { MenuIcon, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#f8f3ef] border border-[#e8dcd3] px-6 lg:px-32">
      {/* Main navbar row */}
      <div className="m-2 flex items-center justify-between">
        {/* Logo */}
        <h2 className="flex items-center rounded-md border border-gray-500 px-6 py-3">
          Logo ✨
        </h2>

        {/* Desktop navigation */}
        <ul className="m-4 hidden items-center gap-8 lg:flex">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Booking</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Desktop CTA */}
        <button
          type="button"
          className="hidden rounded-md bg-[#B89C85] px-6 py-3 font-medium text-[#242424] hover:bg-[#b58c6b] lg:block"
        >
          Book Now
        </button>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <ul className="flex flex-col gap-4 border-t border-[#e8dcd3] py-5 lg:hidden">
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              Booking
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}