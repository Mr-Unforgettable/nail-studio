import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex-1">
      <div className="mx-auto grid min-h-[90vh] grid-cols-1 items-center lg:grid-cols-2">
        {/* Content */}
        <div className="mx-32 px-6 py-6 lg:px-8">
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Beautiful Nails, <br /> Designed Just for You
          </h1>
          <p className="mt-6 text-lg">
            Elevate your everyday look with nail services focused on artistry,
            comfort, and clean, luxurious detail.
          </p>
          <button
            type="button"
            className="mt-8 rounded-md bg-[#B89C85] text-[#242424] hover:bg-[#b58c6b] font-medium px-6 py-3"
          >
            Book Now
          </button>
        </div>
        {/* Image */}
        <div className="relative min-h-100 w-full sm:min-h-125 lg:min-h-0 lg:h-full">
          <Image
            src="/images/hero.jpg"
            alt="Nail artist creating a manicure"
            fill
            loading="eager"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
