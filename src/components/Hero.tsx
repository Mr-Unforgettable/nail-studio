import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 bg-[#f8f3ef]">
      <div className="grid min-h-full grid-cols-1 lg:grid-cols-2 px-6 sm:px-8 lg:px-0">
        {/* Content */}
        <div className="flex flex-col justify-center px-6 py-12 sm:px-8 lg:px-12">
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Beautiful Nails, <br /> Designed Just for You
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
            Elevate your everyday look with nail services focused on artistry,
            comfort, and clean, luxurious detail.
          </p>

          <button
            type="button"
            className="mt-8 self-start rounded-md bg-[#b89c85] px-6 py-3 font-medium text-[#242424] transition hover:bg-[#b58c6b]"
          >
            <Link href="/booknow">Book Now</Link>
          </button>
        </div>

        {/* Image */}
        <div className="relative justify-between aspect-4/3 w-full lg:aspect-auto lg:min-h-[calc(100vh-4rem)]">
          <Image
            src="/images/Hero/hero.jpg"
            alt="Nail artist creating a manicure"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
