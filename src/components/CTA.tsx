import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28 bg-[#f5efea]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-4/3 overflow-hidden rounded-xl">
            <Image
              src="/images/CTA/cta.jpg"
              alt="satisfied clients"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition duration-300 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center gap-5">
            <h2 className="font-serif text-5xl">Ready for Beautiful Nails?</h2>
            <p className="mt-2 leading-relaxed text-[#6b5e55]">
              Book your appointment in just a few steps and enjoy a calm,
              personalized nail experience designed with care and attention to
              detail and comfort.
            </p>
            <button
              type="button"
              className="mr-auto rounded-md px-5 py-2.5 text-sm font-medium text-[#242424] transition bg-[#b89c85] hover:bg-[#b58c6b]"
            >
              <Link href="/booknow">Book now</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
