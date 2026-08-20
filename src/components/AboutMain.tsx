"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const details = [
  {
    title: "Years of Experience",
    description:
      "I have several years of hands-on experience providing professional nail care services. Over time, I've worked with a variety of styles and client needs, allowing me to deliver consistent, high-quality results with confidence and care.",
  },
  {
    title: "Areas of Expertise",
    description:
      "I specialize in clean, modern nail care with a focus on detail, comfort, and long-lasting quality.",
  },
  {
    title: "Training & Techniques",
    description:
      "My training focuses on professional nail care techniques, hygiene, precision, and consistent results.",
  },
  {
    title: "Professional Approach",
    description:
      "Every appointment is approached with attention to detail, comfort, cleanliness, and the individual needs of each client.",
  },
];

export default function AboutMain() {
  const [openItem, setOpenItem] = useState(0);
  return (
    <>
      <section className="px-6 py-20 lg:px-8 lg:py-28 bg-[#fdf9f6]">
        <div className="mx-auto max-w-6xl">
          {/* Headers */}
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-5xl">About me</h1>
            <p className="mt-2 leading-relaxed text-[#6b5e55]">
              Get to know the artist behind the work and the care that goes into
              every appointment.
            </p>
          </div>

          {/* Profile Picture + Intro */}
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-xl transition duration-500 hover:scale-105">
              <Image
                src="/images/AboutMain/sarah.png"
                alt="sarah's profile picture"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* Intro */}
            <div className="my-auto">
              <h2 className="text-4xl">Hi, I'm Sarah</h2>
              <p className="mt-2 leading-relaxed text-[#6b5e55]">
                I specialize in clean, modern nail care with a focus on detail,
                comfort, and long-lasting quality. Every appointment is designed
                to feel calm, personal, and unrushed, creating an experience
                where clients feel relaxed and confident. <br /> With careful
                preparation, quality products, and modern techniques, I deliver
                results that are both elegant and durable. Whether simple and
                polished or more detailed and creative, each service is
                thoughtfully tailored to suit your style and nail health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Vision Section */}
      <section className="px-6 py-20 lg:px-8 lg:py-28 bg-[#f5efea]">
        <div className="mx-auto max-w-6xl">
          <div className="w-4xl grid gap-10 lg:grid-cols-2">
            {/* Mission column */}
            <div className="lg:border-l lg:border-[#d8cfc8] lg:pl-6">
              <h3 className="text-3xl">Mission</h3>
              <p className="mt-2 leading-relaxed text-[#6b6259]">
                My mission is to provide clean, modern nail care that
                prioritizes comfort, quality, and attention to detail. Every
                appointment is designed to feel calm, personal, and thoughtfully
                crafted, ensuring clients leave feeling confident and well cared
                for.
              </p>
            </div>

            {/* Vision */}
            <div className="lg:border-l lg:border-[#d8cfc8] lg:pl-6">
              <h3 className="text-3xl">Vision</h3>
              <p className="mt-2 leading-relaxed text-[#6b6259]">
                My mission is to create a welcoming space where nail care feels
                refined, relaxing, and personal. I aim to build lasting
                relationships through consistent quality, clean practices, and
                beautifully crafted results that reflect each client's
                individual style.
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

      <section className="px-6 py-20 lg:px-8 lg:py-28 bg-[#fdf9f6]">
        <div className="mx-auto max-w-6xl grid gap-8 items-start lg:grid-cols-[1.5fr_1fr]">
          {/* Info dropdowns */}
          <div className="flex h-full flex-col">
            {details.map((item, index) => {
              const isOpen = openItem === index;

              return (
                <div key={item.title} className={`flex flex-col p-6 border-b border-[#d8cfc8] ${isOpen ? "bg-[#f5efea]" : "bg-[#fdf9f6]"}`}>
                  <button
                    type="button"
                    onClick={() => setOpenItem(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between py-4 text-left"
                  >
                    <h3 className="text-lg sm:text-xl">{item.title}</h3>
                    <span aria-hidden>
                      {isOpen ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="pb-4 text-sm leading-relaxed text-[#6b6259] bg-[#f5efea]">
                      {item.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="relative aspect-3.5/4 self-start overflow-hidden rounded-xl">
            <Image
              src="/images/AboutMain/about2.jpg"
              alt="Stylist filing the nails"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </>
  );
}
