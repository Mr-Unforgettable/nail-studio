import Image from "next/image";

export default function Services() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28">
      {/* Section Header */}
      <div className="mx-auto mb-12 flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Our Top-Rated Signature Services
          </h2>
        </div>
        <div className="max-w-md">
          <p className="text-base leading-relaxed text-gray-600">
            Enjoy a relaxing, personalized nail experience with services that
            blend expert craftsmanship and gentle self-care.
          </p>
          <button
            type="button"
            className="mt-5 font-medium underline underline-offset-4 transition hover:text-[#b89c85]"
          >
            View all
          </button>
        </div>
      </div>

      {/* Service Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Acrylic */}
        <article className="group overflow-hidden rounded-2xl bg-[#f5f1ed]">
          <div className="relative aspect-4/3 w-full overflow-hidden">
            <Image
              src="/images/services/acrylic.jpg"
              alt="Acrylic nail design"
              fill
              loading="eager"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col p-6">
            <h3 className="text-2xl font-semibold">Acrylic</h3>
            <p className="mt-3 leading-relaxed text-gray-600">
              Strong, sculpted extensions with a clean, flawless finish.
            </p>
            <button
              type="button"
              className="mt-6 self-start rounded-md bg-[#b89c85] px-6 py-3 font-medium text-[#242424] transition hover:bg-[#b58c6b]"
            >
              Book Now
            </button>
          </div>
          {/* Nail Art */}
        </article>
        <article className="group overflow-hidden rounded-2xl bg-[#f5f1ed]">
          <div className="relative aspect-4/3 w-full overflow-hidden">
            <Image
              src="/images/services/nailart.jpg"
              alt="Decorative nail art design"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col p-6">
            <h3 className="text-2xl font-semibold">Nail Art</h3>
            <p className="mt-3 leading-relaxed text-gray-600">
              Expert nail care focused on clean finishes and lasting quality.
            </p>
            <button
              type="button"
              className="mt-6 self-start rounded-md bg-[#b89c85] px-6 py-3 font-medium text-[#242424] transition hover:bg-[#b58c6b]"
            >
              Book Now
            </button>
          </div>
        </article>
        {/* Gel Polish */}
        <article className="group overflow-hidden rounded-2xl bg-[#f5f1ed]">
          <div className="relative aspect-4/3 w-full overflow-hidden">
            <Image
              src="/images/services/gelpolish.jpg"
              alt="Gel polish nail design"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col p-6">
            <h3 className="text-2xl font-semibold">Gel Polish</h3>
            <p className="mt-3 leading-relaxed text-gray-600">
              Smooth gel polish with a high-shine long-lasting finish.
            </p>
            <button
              type="button"
              className="mt-6 self-start rounded-md bg-[#b89c85] px-6 py-3 font-medium text-[#242424] transition hover:bg-[#b58c6b]"
            >
              Book Now
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
