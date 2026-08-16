import Image from "next/image";

export default function ServicesMain() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-serif text-4xl md:text-5xl">Services</h1>

        <p className="mt-3 text-[#6b5e55]">
          Explore a curated menu of nail services.
        </p>
      </div>

      {/* Categories */}
      <nav className="mx-auto mt-8 max-w-6xl">
        <ul className="flex flex-wrap gap-8">
          <li className="rounded-full bg-[#b89c85] px-4 py-2 text-sm">All</li>
          <li className="rounded-full bg-[#b89c85] px-4 py-2 text-sm">
            Manicure
          </li>
          <li className="rounded-full bg-[#b89c85] px-4 py-2 text-sm">
            Acrylic
          </li>
          <li className="rounded-full bg-[#b89c85] px-4 py-2 text-sm">
            Nail Art
          </li>
        </ul>
      </nav>

      {/* Services List */}
      <div className="mx-auto mt-12 max-w-6xl">
        {/* Manicure Cards*/}
        <div>
          <h2 className="font-serif text-2xl text-[#292929]">Manicure</h2>

          {/* Item 1 */}
          <article className="mt-5 flex gap-5 rounded-xl border border-[#d9cfc8] bg-[#fffdfb] p-3">
            {/* Image */}
            <Image
              src="/images/ServicesGrid/classic-manicure.jpg"
              alt="classic manicure design"
              height={140}
              width={140}
              className="h-35 w-35 shrink-0 rounded-xl object-cover"
            />

            {/* Content */}
            <div className="flex min-w-0 flex-1 flex-col">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl">
                  Classic Manicure
                </h3>

                <p className="text-sm leading-relaxed text-[#6b5e55]">
                  45 mins • Best for everyday wear
                </p>

                <p className="mt-1 text-sm leading-relaxed text-[#6b5e55]">
                  Clean shaping, cuticle care, and polish finish.
                </p>
              </div>

              {/* Price + Button */}
              <div className="mt-4 flex items-center justify-between">
                <p className="font-serif text-2xl text-[#292929]">$35</p>

                <button
                  type="button"
                  className="rounded-md px-5 py-2.5 text-sm font-medium text-[#242424] transition bg-[#b89c85] hover:bg-[#b58c6b]"
                >
                  Book now
                </button>
              </div>
            </div>
          </article>

          {/* Item 2 */}
          <article>Article 2</article>
          {/* So on... */}
        </div>

        {/* Acrylic Cards */}
        <div>
          <h1>Acrylic</h1>
          {/* Item 1 */}
          {/* Item 2 */}
          {/* So on... */}
        </div>

        {/* Nail Art */}
        <div>
          <h1>Nail Art</h1>
          {/* Item 1 */}
          {/* Item 2 */}
          {/* So on... */}
        </div>
      </div>
    </section>
  );
}
