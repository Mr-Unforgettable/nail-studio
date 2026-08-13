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
    <section className="px-6 py-20 lg:px-8 lg:py-28 bg-[#f5efea]">
      <div className="mx-auto max-w-6xl">
        {/* Label */}
        <span className="inline-block rounded-full bg-white px-4 py-2 text-sm text-[#665d57] shadow-sm">
          Services
        </span>

        {/* Headers */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-end">
          {/* Left */}
          <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            Our Top-Rated Signature Services
          </h2>

          {/* Right */}
          <div className="max-w-xl">
            <p className="text-lg leading-relaxed text-[#6b5e55]">
              Enjoy a relaxing, personalized nail experience with services that
              blend expert craftsmanship and gentle self-care.
            </p>
            <button
              type="button"
              className="mt-6 rounded-full bg-[#242424] px-4 py-2 text-sm text-white transition hover:bg-[#403b38]"
            >
              View all ↗
            </button>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="mt-12 mx-38 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="group relative aspect-4/5 overflow-hidden rounded-xl"
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
