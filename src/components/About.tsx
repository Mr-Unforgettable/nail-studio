import Image from "next/image";
import { Award, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    title: "Experienced Care",
    description:
      "Years of hands-on experience delivering clean, consistent, and beautifully finished nails.",
    icon: Award,
  },
  {
    title: "Hygiene First",
    description:
      "Strict hygiene practices and high-quality products used for every appointment.",
    icon: ShieldCheck,
  },
  {
    title: "Personalized Service",
    description:
      "Custom designs and thoughtful care created for every individual client.",
    icon: Sparkles,
  },
];

export default function About() {
  return (
    <section className="bg-[#f5efea] px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Label */}
        <span className="inline-block rounded-full bg-white px-4 py-2 text-sm text-[#6b5e55]">
          About
        </span>

        {/* Header */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Meet your Nail Artist
          </h2>

          <div className="max-w-xl">
            <p className="text-lg leading-relaxed text-[#6b5e55]">
              I specialize in clean, modern nail care with a focus on detail,
              comfort, and quality. Every appointment is designed to feel
              relaxed, personal, and thoughtfully crafted.
            </p>

            <button
              type="button"
              className="mt-6 rounded-full bg-[#242424] px-5 py-3 text-sm text-white"
            >
              Learn more ↗
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-4.6/3 overflow-hidden rounded-xl">
            <Image
              src="/images/About/About.jpg"
              alt="Nail artist working on a client's nails"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Feature cards */}
          <div className="flex flex-col gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="flex items-center gap-5 rounded-xl border border-[#d8cfc8] bg-[#fffdfb] p-3"
                >
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-[#dcc6b1]">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl">{feature.title}</h3>

                    <p className="mt-2 leading-relaxed text-[#6b5e55]">
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
