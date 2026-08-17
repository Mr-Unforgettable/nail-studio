"use client";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const mobileLinkClass =
    "block rounded-md px-4 py-3 text-[#6b5e55] transition-color hover:bg-[#eee5de] hover:text-[#292929]";

  return (
    <nav className="sticky top-0 z-50 bg-[#f8f3ef] border border-[#e8dcd3] px-6 lg:px-8">
      {/* Main navbar row */}
      <div className="m-2 flex items-center justify-between">
        {/* Logo */}
        <Link
          className="flex items-center rounded-md border border-gray-500 px-6 py-3"
          href="/"
        >
          Logo ✨
        </Link>

        {/* Desktop navigation */}
        <ul className="m-4 hidden items-center gap-8 lg:flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="#">Booking</Link>
          </li>
          <li>
            <Link href="#">Portfolio</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
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
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {menuOpen && (
        <>
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close navigation menu"
            className="fixed inset-0 z-55 bg-black/30 lg:hidden"
          />

          {/* Sidebar */}
          <aside className="fixed right-0 top-0 z-60 flex h-full w-80 max-w-[85vw] flex-col bg-[#f8f3ef] p-6 shadow-xl lg:hidden">
            {/* Sidebar header */}
            <div className="flex items-center justify-between">
              <span className="font-serif text-2xl">Menu</span>

              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setMenuOpen(false)}
              >
                <X size={28} />
              </button>
            </div>

            {/* Sidebar navigation */}
            <ul className="mt-12 flex flex-col gap-6">
              <li>
                <Link
                  className={mobileLinkClass}
                  href="/"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={mobileLinkClass}
                  href="/services"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className={mobileLinkClass}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                >
                  Booking
                </Link>
              </li>
              <li>
                <Link
                  className={mobileLinkClass}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className={mobileLinkClass}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={mobileLinkClass}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Sidebar CTA */}
            <button
              type="button"
              className="mt-auto rounded-md bg-[#b89c85] px-6 py-3 font-medium text-[#242424] hover:bg-[#b58c6b]"
            >
              Book Now
            </button>
          </aside>
        </>
      )}
    </nav>
  );
}
