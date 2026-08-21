"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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

export default function Accordion() {
  const [openItem, setOpenItem] = useState(0);
  
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28 bg-[#fdf9f6]">
      <div className="mx-auto max-w-6xl grid gap-8 items-start lg:grid-cols-[1.5fr_1fr]">
        {/* Info dropdowns */}
        <div className="flex h-full flex-col">
          {details.map((item, index) => {
            const isOpen = openItem === index;

            return (
              <div
                key={item.title}
                className={`flex flex-col p-6 border-b border-[#d8cfc8] ${isOpen ? "bg-[#f5efea]" : "bg-[#fdf9f6]"}`}
              >
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
  );
}
