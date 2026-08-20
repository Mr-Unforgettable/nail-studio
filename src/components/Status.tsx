import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Status() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28 bg-[#fdf9f6]">
      <div className="mx-auto max-w-6xl">
        <div className="relative aspect-16/7 overflow-hidden">
          <Image
            src="/images/Contact/map.png"
            alt="Location of business"
            fill
            loading="eager"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Contact Info */}
        <div className="mt-26 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="flex items-center gap-2 font-semibold">
              <Phone size={18} />
              Phone
            </h3>
            <p className="mt-2 leading-relaxed text-[#6b5e55]">
              Feel free to call me at
            </p>
            <p className="mt-2 font font-semibold text-sm underline">
              +1 (123) 456-7890
            </p>
          </div>
          <div>
            <h3 className="flex items-center gap-2 font-semibold">
              <Mail size={18} />
              Email
            </h3>
            <p className="mt-2 leading-relaxed text-[#6b5e55]">
              Feel free to email me at
            </p>
            <p className="mt-2 font font-semibold text-sm underline">
              hello@yourstudio.com
            </p>
          </div>
          <div>
            <h3 className="flex items-center gap-2 font-semibold">
              <MapPin size={18} />
              Address
            </h3>
            <p className="mt-2 leading-relaxed text-[#6b5e55]">
              Visit the studio at
            </p>
            <p className="mt-2 font font-semibold text-sm underline">
              123 Willow Street, Maple Heights, NY 11224
            </p>
          </div>
          <div>
            <h3 className="flex items-center gap-2 font-semibold">
              <Clock size={18} />
              Opening hour
            </h3>
            <p className="mt-2 leading-relaxed text-[#6b5e55]">
              We are available between
            </p>
            <p className="mt-2 font font-semibold text-sm underline">
              8am to 5pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
