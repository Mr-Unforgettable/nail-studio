"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const mobileLinkClass =
    "block rounded-md px-4 py-3 text-[#6b5e55] transition-color hover:bg-[#eee5de] hover:text-[#292929]";

  const desktopLinkClass =
    "block rounded-md px-4 py-3 text-[#6b5e55] transition-color hover:bg-[#eee5de] hover:text-[#292929]";

  return (
    <nav className="sticky top-0 z-50 bg-[#fdf9f6] border border-[#e8dcd3] px-6 lg:px-8">
      {/* Main navbar row */}
      <div className="mx-auto max-w-7xl">
        <div className="m-2 flex items-center justify-between">
          {/* Logo */}
          <Link className="flex items-center rounded-md px-6 py-3" href="/">
            <svg
              width="162"
              height="30"
              viewBox="0 0 162 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_16_58)">
                <path
                  d="M12.4938 30H11.5363C9.04898 30 7.55251 29.9995 6.40936 29.7869L13.0251 21.0258L12.4938 30Z"
                  fill="#242424"
                />
                <path
                  d="M23.4362 29.8135C22.3127 29.9991 20.8406 30 18.4637 30H17.3318L16.7978 21.0232L23.4362 29.8135Z"
                  fill="#242424"
                />
                <path
                  d="M29.7536 23.7531C29.7053 23.983 29.6485 24.1991 29.5792 24.407C29.1253 25.7675 28.3284 26.9642 27.29 27.8987L19.83 19.533L29.7536 23.7531Z"
                  fill="#242424"
                />
                <path
                  d="M2.61408 27.8094C1.62297 26.8883 0.86054 25.725 0.420807 24.407C0.344661 24.1787 0.281437 23.9408 0.230377 23.6852L9.99292 19.5344L2.61408 27.8094Z"
                  fill="#242424"
                />
                <path
                  d="M30 18.4637C30 19.3071 29.9976 20.0365 29.9894 20.6769L21.1297 17.2545H30V18.4637Z"
                  fill="#242424"
                />
                <path
                  d="M8.69715 17.2545L0.00799005 20.6104C0.000529579 19.9861 0 19.278 0 18.4637V17.2545H8.69715Z"
                  fill="#242424"
                />
                <path
                  d="M18.4637 0C21.5855 0 23.1465 0.000415251 24.4069 0.42081C26.8484 1.23535 28.7647 3.15156 29.5792 5.59304C29.9995 6.85349 30 8.41447 30 11.5363V15.012H20.6317L27.3886 12.1396L25.3844 10.8092L18.8286 13.3407L21.9061 9.2685L19.6928 8.66257L16.2944 12.4712L16.0414 8.18182H13.7869L13.5299 12.4712L10.1341 8.66257L7.92217 9.2685L10.9957 13.3394L4.4438 10.8092L2.43963 12.1396L9.19522 15.012H0V11.5363C0 8.41447 0.000415251 6.85349 0.42081 5.59304C1.23535 3.15156 3.15156 1.23535 5.59304 0.42081C6.85349 0.000415251 8.41447 0 11.5363 0H18.4637Z"
                  fill="#242424"
                />
                <path
                  d="M69.955 23.5825C70.66 24.9045 72.0212 25.7365 73.7754 25.7365C75.5295 25.7365 76.8907 24.9045 77.5957 23.5825H80.2342C79.362 26.224 76.938 27.9895 73.7754 27.9895C70.613 27.9895 68.1887 26.224 67.3162 23.5825H69.955ZM108.377 9.56985C112.397 9.56985 115.214 12.335 115.214 16.3037C115.214 20.5028 112.09 22.8845 108.787 22.8845C106.738 22.8844 104.998 21.9625 104.076 20.3239V27.9536H101.643V16.3294C101.643 12.2071 104.46 9.56985 108.377 9.56985ZM108.403 11.8228C105.817 11.8228 104.076 13.6665 104.076 16.2268C104.076 18.7872 105.817 20.6308 108.403 20.6308C111.014 20.6308 112.756 18.7873 112.756 16.2268C112.756 13.6664 111.014 11.8228 108.403 11.8228ZM59.294 9.56985C63.2882 9.56985 66.1046 12.3862 66.1047 16.2268C66.1047 20.0674 63.2882 22.8845 59.294 22.8845C55.2997 22.8845 52.4831 20.0674 52.4831 16.2268C52.4833 12.3862 55.2998 9.56985 59.294 9.56985ZM59.294 11.8228C56.6824 11.8228 54.9412 13.6664 54.9412 16.2268C54.9412 18.7873 56.6823 20.6308 59.294 20.6308C61.9056 20.6308 63.6467 18.7873 63.6467 16.2268C63.6466 13.6664 61.9055 11.8228 59.294 11.8228ZM74.045 9.5757H80.661V11.751H78.954C79.9875 12.9099 80.5853 14.4593 80.5853 16.2268C80.5853 20.0674 77.769 22.8845 73.7747 22.8845C69.7804 22.8845 66.9639 20.0674 66.9639 16.2268C66.964 12.3862 69.7805 9.56985 73.7747 9.56985C73.8654 9.56985 73.9555 9.57277 74.045 9.5757ZM73.7747 11.8228C71.1631 11.8228 69.4219 13.6664 69.4219 16.2268C69.4219 18.7873 71.163 20.6308 73.7747 20.6308C76.386 20.6308 78.1275 18.7873 78.1275 16.2268C78.1275 13.6664 76.386 11.8228 73.7747 11.8228ZM88.2563 9.56985C92.25 9.56985 95.067 12.3862 95.067 16.2268C95.067 20.0674 92.25 22.8845 88.2563 22.8845C84.2618 22.8845 81.4455 20.0674 81.4455 16.2268C81.4455 12.3862 84.2618 9.56985 88.2563 9.56985ZM88.2563 11.8228C85.6448 11.8228 83.9033 13.6664 83.9033 16.2268C83.9033 18.7873 85.6448 20.6308 88.2563 20.6308C90.8678 20.6308 92.6092 18.7873 92.6092 16.2268C92.6085 13.6664 90.8678 11.8228 88.2563 11.8228ZM121.362 9.56985C124.384 9.56992 126.253 11.2856 126.304 13.4619H123.896C123.82 12.489 122.924 11.7716 121.388 11.7715C119.775 11.7715 118.853 12.5402 118.853 13.5388C118.853 14.7419 120.185 14.8699 121.746 15.0747C123.948 15.3563 126.636 15.7661 126.637 18.6592C126.637 21.2195 124.563 22.8844 121.388 22.8845C118.213 22.8845 116.216 21.1942 116.139 18.8899H118.597C118.648 19.9396 119.621 20.6821 121.388 20.6821C123.231 20.682 124.178 19.8884 124.178 18.8899C124.178 17.6865 122.847 17.5324 121.26 17.3276C119.058 17.046 116.395 16.6365 116.395 13.7431C116.395 11.2596 118.341 9.56985 121.362 9.56985ZM130.487 16.508C130.487 19.2477 131.999 20.6308 134.303 20.6308C136.607 20.6308 138.118 19.2477 138.118 16.508V9.90232H140.55V16.508C140.55 20.7072 138.041 22.8838 134.303 22.8838C130.565 22.8838 128.055 20.7328 128.055 16.508V9.90232H130.487V16.508ZM42.3618 20.1445H51.7588V22.5513H39.75V5.80591H42.3618V20.1445ZM99.3315 22.5513H96.8993V9.90232H99.3315V22.5513ZM156.57 9.56985C159.54 9.56985 161.794 11.3622 161.794 15.2285V22.5513H159.361V15.2285C159.361 12.873 158.107 11.8228 156.34 11.8228C154.625 11.8228 153.343 12.9241 153.343 15.2285V22.5513H150.911V15.2285C150.911 12.9241 149.605 11.8228 147.89 11.8228C146.123 11.8228 144.868 12.8729 144.868 15.2285V22.5513H142.436V15.2285C142.436 11.3622 144.69 9.56985 147.66 9.56985C149.606 9.56992 151.244 10.4405 152.114 12.0791C152.985 10.4404 154.598 9.56985 156.57 9.56985ZM98.103 4.5C99.0758 4.5 99.7935 5.21683 99.7935 6.1897C99.7935 7.16267 99.0758 7.90575 98.103 7.90575C97.1302 7.90567 96.4132 7.1626 96.4132 6.1897C96.4132 5.21689 97.1302 4.5001 98.103 4.5Z"
                  fill="#242424"
                />
              </g>
              <defs>
                <clipPath id="clip0_16_58">
                  <rect width="162" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>

          {/* Desktop navigation */}
          <ul className="m-4 hidden items-center gap-8 lg:flex">
            <li>
              <Link className={desktopLinkClass} href="/#home">
                Home
              </Link>
            </li>
            <li>
              <Link className={desktopLinkClass} href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className={desktopLinkClass} href="/booknow">
                Booking
              </Link>
            </li>
            <li>
              <Link className={desktopLinkClass} href="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className={desktopLinkClass} href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={desktopLinkClass} href="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <Link
            href="/booknow"
            className="hidden rounded-md bg-[#B89C85] px-6 py-3 font-medium text-[#242424] hover:bg-[#b58c6b] lg:block"
          >
            Book Now
          </Link>

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
                  href="/#home"
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
                  href="/booknow"
                  onClick={() => setMenuOpen(false)}
                >
                  Booking
                </Link>
              </li>
              <li>
                <Link
                  className={mobileLinkClass}
                  href="/portfolio"
                  onClick={() => setMenuOpen(false)}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className={mobileLinkClass}
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={mobileLinkClass}
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Sidebar CTA */}
            <Link
              href="/booknow"
              onClick={() => setMenuOpen(false)}
              className="mt-auto rounded-md bg-[#b89c85] px-6 py-3 text-center font-medium text-[#242424] hover:bg-[#b58c6b]"
            >
              Book Now
            </Link>
          </aside>
        </>
      )}
    </nav>
  );
}
