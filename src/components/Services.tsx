import Image from "next/image";

export default function Services() {
  return (
    <section>
      <div className="border border-black flex items-center justify-between">
        <div className="flex justify-center px-5 py-2 border border-black">
          <h2>Our Top-Rated Signature Services</h2>
        </div>
        <div className="border border-black">
          <p>
            Enjoy a relaxing, personalized nail experience with services that
            blend expert craftsmanship and gentle self-care.
          </p>
          <button type="button">View all</button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <article className="border border-black">
          <div className="relative aspect-4/3 w-full">
            <Image
              src="/images/services/acrylic.jpg"
              alt="Acrylic nail design"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover rounded-2xl"
            />
          </div>
          <h3 className="m-2 p-3 font-medium text-3xl">Acrylic</h3>
          <p className="">Strong, sculpted extensions with a clean, flawless finish.</p>
          <button
            type="button"
            className="m-6 pl-6 pr-6 pt-3 pb-3 rounded-md gap-2.5 bg-[#B89C85] text-[#242424] hover:bg-[#b58c6b] font-medium"
          >
            Book Now
          </button>
        </article>
        <article className="border border-black">
          <div className="relative aspect-4/3 w-full">
            <Image
              src="/images/services/nailart.jpg"
              alt="Acrylic nail design"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover rounded-2xl"
            />
          </div>
          <div>
            <h3 className="m-2 p-3 font-medium text-3xl">Nail Art</h3>
            <p>
              Expert nail care focused on clean finishes and lasting quality.
            </p>
            <button
              type="button"
              className="m-6 pl-6 pr-6 pt-3 pb-3 rounded-md gap-2.5 bg-[#B89C85] text-[#242424] hover:bg-[#b58c6b] font-medium"
            >
              Book Now
            </button>
          </div>
        </article>
        <article className="border border-black">
          <div className="relative aspect-4/3 w-full">
            <Image
              src="/images/services/gelpolish.jpg"
              alt="Acrylic nail design"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover rounded-2xl"
            />
          </div>
          <h3 className="m-2 p-3 font-medium text-3xl">Gel Polish</h3>
          <p>Smooth gel polish with a high-shine long-lasting finish.</p>
          <button
            type="button"
            className="m-6 pl-6 pr-6 pt-3 pb-3 rounded-md gap-2.5 bg-[#B89C85] text-[#242424] hover:bg-[#b58c6b] font-medium"
          >
            Book Now
          </button>
        </article>
      </div>
    </section>
  );
}
