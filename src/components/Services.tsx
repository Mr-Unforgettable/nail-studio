import Image from "next/image";

const services = [
  {
    title: "Acrylic",
    description: "Strong, sculpted extensions with a clean, flawless finish.",
    image: "/images/services/acrylic.jpg",
    alt: "Acrylic nail design",
  },
  {
    title: "Nail Art",
    description:
      "Expert nail care focused on clean finishes and lasting quality.",
    image: "/images/services/nailart.jpg",
    alt: "Decorative nail art design",
  },
  {
    title: "Gel Polish",
    description: "Smooth gel polish with a high-shine, long-lasting finish.",
    image: "/images/services/gelpolish.jpg",
    alt: "Gel polish nail design",
  },
];

export default function Services() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-20 bg-[#f5efea]">
      {/* Section Header */}
      <div className="mx-auto mb-12 max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          {/* Left */}
          <div>
            <span className="inline-block rounded-full bg-white mb-10 px-3 py-2 text-sm text-[#665d57] shadow-sm">
              Services
            </span>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Our Top-Rated Signature Services
            </h2>
          </div>
          {/* Right */}
          <div className="max-w-md md:justify-self-end">
            <p className="text-base leading-relaxed text-[#665d57] md:text-lg">
              Enjoy a relaxing, personalized nail experience with services that
              blend expert craftsmanship and gentle self-care.
            </p>
            <button
              type="button"
              className="mt-6 flex items-center gap-2 rounded-full bg-[#242424] px-4 py-2 text-sm text-white transition hover:bg-[#403b38]"
            >
              View all
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#292625]">
                ↗
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="group relative aspect-3/4 overflow-hidden rounded-xl"
          >
            {/* Image */}
            <Image
              src={service.image}
              alt={service.alt}
              fill
              loading="eager"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white/85 p-4 backdrop-blur-sm md:p-5">
              <h3 className="font-serif text-2xl text-[#292929]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#665d57] md:text-base">
                {service.description}
              </p>

              <button
                type="button"
                className="mt-5 rounded-md bg-[#b89c85] px-5 py-2.5 text-sm font-medium text-[#242424] transition hover:bg-[#b85c6b]"
              >
                Book now
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
