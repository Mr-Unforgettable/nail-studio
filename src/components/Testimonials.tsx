import Image from "next/image";

const features = [
  {
    title: "Flawless from Start to Finish",
    description:
      "Absolutely loved my nails. The details were clean and precise, and the final result was exactly what I wanted. The entire experience felt calm, professional, and very well organized.",
    avatar: "/images/Testimonials/image1.png",
    name: "Novák Réka",
  },
  {
    title: "Polished and Professional",
    description:
      "Professional service and beautiful results. I loved how polished my nails looked, and the overall experience felt calm, comfortable, and unrushed throughout.",
    avatar: "/images/Testimonials/image2.png",
    name: "Natasha Romanoff",
  },
  {
    title: "Beautiful Results That Last",
    description:
      "Beautiful work with great attention to detail. Everything felt clean and comfortable throughout the appointment, and my nails lasted beautifully without any issues.",
    avatar: "/images/Testimonials/image3.png",
    name: "Janetta Rotolo",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28 bg-[#f8f3ef]">
      {/* Label */}
      <div className="mx-auto max-w-6xl">
        <span className="inline-block rounded-full bg-white px-4 py-2 text-sm text-[#6b555] shadow-sm">
          Testimonials
        </span>

        {/* Header */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Left */}
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            What Clients Say
          </h2>

          {/* Right */}
          <div className="max-w-xl">
            <p className="text-lg leading-relaxed text-[#6b5e55]">
              Honest feedback from clients who love the experience, the details,
              and the care behind every appointment.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Cards */}
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex h-full flex-col gap-5 rounded-xl border border-[#d8cfc8] bg-[#fffdfb] p-8 transition duration-300 hover:scale-105"
            >
              <div className="inline-block text-xl text-[#d6c23e]">★★★★★</div>
              <div>
                <h3 className="font-serif text-2xl leading-tight">
                  {feature.title}
                </h3>
                <p className="mt-6 text-lg leading-relaxed text-[#6b5e55]">
                  {feature.description}
                </p>
              </div>

              {/* divider */}
              <div className="mt-auto pt-4 flex items-center border-t border-t-[#d8c3b0]">
                {/* avatar */}
                <div className="inline-block rounded-full overflow-hidden transition duration-300 hover:scale-150">
                  <Image
                    src={feature.avatar}
                    alt={feature.name}
                    height={40}
                    width={40}
                  />
                </div>
                {/* name */}
                <span className="mx-5 font-bold">{feature.name}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
