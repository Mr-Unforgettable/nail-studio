import { Phone, MapPin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f8f3ef] px-6 py-16 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[2fr_1.5fr]">
        {/* Branding */}
        <div className="max-w-sm">
          {/* Logo */}
          <h2 className="text-2xl font-semibold">Logo ✨</h2>
          {/* Description */}
          <p className="mt-4 text-lg leading-relaxed text-[#6b5e55]">
            Clean, modern nail care focused on comfort, quality, and beautifully
            crafted results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Quick Links */}
          <nav className="flex flex-col gap-4" aria-label="Footer navigation">
            <h3 className="font-serif text-xl">Quick Links</h3>

            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="text-[#6b5e55] transition hover:text-[#242424]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#6b5e55] transition hover:text-[#242424]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#6b5e55] transition hover:text-[#242424]"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#6b5e55] transition hover:text-[#242424]"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            {/* Contact Information */}
            <h3 className="font-serif text-xl">Contact Information</h3>

            {/* Contacts */}
            <div className="mt-4 flex flex-col gap-4 text-[#6b5e55]">
              <div className="flex items-start gap-4">
                <Phone className="mt-1 shrink-0" size={18} />
                <p>(123) 456-7890</p>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 shrink-0" size={18} />
                <p>
                  123 Willow Street, <br />
                  Maple Heights, NY 11224
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 shrink-0" size={18} />
                <p>hello@yourstudio.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
