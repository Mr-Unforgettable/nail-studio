import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28 bg-[#f5efea]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Mission column */}
          <div className="lg:border-l lg:border-[#d8cfc8] lg:pl-6">
            <h3 className="text-3xl">Mission</h3>
            <p className="mt-2 leading-relaxed text-[#6b6259]">
              My mission is to provide clean, modern nail care that prioritizes
              comfort, quality, and attention to detail. Every appointment is
              designed to feel calm, personal, and thoughtfully crafted,
              ensuring clients leave feeling confident and well cared for.
            </p>
          </div>

          {/* Vision */}
          <div className="lg:border-l lg:border-[#d8cfc8] lg:pl-6">
            <h3 className="text-3xl">Vision</h3>
            <p className="mt-2 leading-relaxed text-[#6b6259]">
              My mission is to create a welcoming space where nail care feels
              refined, relaxing, and personal. I aim to build lasting
              relationships through consistent quality, clean practices, and
              beautifully crafted results that reflect each client's individual
              style.
            </p>
          </div>
        </div>

        {/* Image */}
        <div>
          <div className="mt-10 relative aspect-5/2 overflow-hidden rounded-xl">
            <Image
              src="/images/AboutMain/about1.jpg"
              alt="Stylist giving their services"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
