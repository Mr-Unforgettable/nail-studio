import Image from "next/image";

const portfolioItems = [
  {
    title: "Acrylic",
    number: "01",
    image: "/images/portfolio/Acrylic.jpg",
    alt: "Green acrylic nail design",
  },
  {
    title: "Manicure",
    number: "02",
    image: "/images/portfolio/Manicure.jpg",
    alt: "Dark manicure nail design",
  },
  {
    title: "Gel Polish",
    number: "03",
    image: "/images/portfolio/GelPolish.jpg",
    alt: "Pink gel polish nail design",
  },
  {
    title: "Other",
    number: "04",
    image: "/images/portfolio/Other.jpg",
    alt: "Blue nail design with jewelry",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-[#f8f3ef] px-6 py-20 lg:px-8 lg:py-28">
      {/* Header */}
      <div className="mx-auto mb-12 mx-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          {/* Left */}
          <div>
            <span className="inline-block rounded-full bg-white px-3 py-2 text-sm text-[#665d57] shadow-sm">
              Gallery
            </span>

            <h2 className="mt-8 font-serif text-4xl leading-tight text-[#292929] md:text-5xl">
              The Art of Beautiful Nails
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-md md:justify-self-end">
            <p className="text-base leading-relaxed text-[#665d57] md:text-lg">
              A curated collection of nail designs showcasing clean finishes,
              detail, and creativity.
            </p>

            <button
              type="button"
              className="mt-6 flex items-center gap-2 rounded-full bg-[#292929] px-4 py-2 text-sm text-white transition hover:bg-[#403b38]"
            >
              View all
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#292929]">
                ↗
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {portfolioItems.map((item, index) => (
          <article
            key={item.number}
            className={"rounded-xl border border-[#d8cfc8] bg-[#fffdfb] p-4"}
          >
            <div
              className={`relative w-full overflow-hidden rounded-lg ${
                index % 2 === 0 ? "aspect-2.5/4" : "aspect-4/5"
              }`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <h3 className="font-serif text-2xl text-[#292929]">
                {item.title}
              </h3>

              <span className="font-serif text-2xl text-[#292929]">
                {item.number}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
