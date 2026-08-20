"use client";

import Image from "next/image";
import { useState } from "react";

const servicesCategories = [
  {
    name: "Manicure",
    services: [
      {
        title: "Classic Manicure",
        description: "Clean shaping, cuticle care, and polish finish.",
        duration: "45 mins",
        bestFor: "Best for everyday wear",
        price: "$35",
        image: "/images/ServicesGrid/classic-manicure.jpg",
        alt: "Classic manicure design",
      },
      {
        title: "Gel Manicure",
        description: "Long-lasting gel color with a smooth, glossy finish.",
        duration: "60 mins",
        bestFor: "Best for long-lasting wear",
        price: "$45",
        image: "/images/ServicesGrid/gel-manicure.jpg",
        alt: "Gel manicure design",
      },
    ],
  },
  {
    name: "Acrylic",
    services: [
      {
        title: "Full Set Acrylics",
        description:
          "Durable, sculpted extensions designed for strength and a flawless finish.",
        duration: "90 mins",
        bestFor: "Best for added length and structure",
        price: "$65",
        image: "/images/ServicesGrid/fullset-acrylics.jpg",
        alt: "Full Set Acrylic design",
      },
      {
        title: "Acrylic Fill",
        description:
          "Maintenance service to refresh growth and restore a clean, polished look.",
        duration: "75 mins",
        bestFor: "Best for maintaining acrylic sets",
        price: "$50",
        image: "/images/ServicesGrid/acrylic-fill.jpg",
        alt: "Acrylic Fill design",
      },
    ],
  },
  {
    name: "Nail Art",
    services: [
      {
        title: "Simple Nail Art",
        description:
          "Minimal accents and subtle designs to enhance your manicure.",
        duration: "20 mins",
        bestFor: "Best for a soft, custom touch",
        price: "$10",
        image: "/images/ServicesGrid/simple-nailart.jpg",
        alt: "Simple Nail Art design",
      },
      {
        title: "Detailed Nail Art",
        description:
          "Intricate designs and detailed artwork created to elevate your look.",
        duration: "45 mins",
        bestFor: "Best for bold or custom designs",
        price: "$20",
        image: "/images/ServicesGrid/detailed-nailart.jpg",
        alt: "Detailed Nail Art design",
      },
    ],
  },
];

export default function ServicesMain() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const visibleCategories =
    selectedCategory === "All"
      ? servicesCategories
      : servicesCategories.filter(
          (category) => category.name === selectedCategory,
        );

  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl">Services</h2>

        <p className="mt-3 text-[#6b5e55]">
          Explore a curated menu of nail services.
        </p>
      </div>

      {/* Categories */}
      <nav className="mx-auto mt-8 max-w-6xl">
        <ul className="flex flex-wrap gap-8">
          <li>
            <button
              type="button"
              onClick={() => setSelectedCategory("All")}
              className={`rounded-full px-4 py-2 text-sm transition ${
                selectedCategory === "All"
                  ? "bg-[#b89c85]"
                  : "bg-transparent hover:bg-[#e8dcd3]"
              }`}
            >
              All
            </button>
          </li>

          {/* Categories */}
          {servicesCategories.map((category) => (
            <li key={category.name}>
              <button
                type="button"
                onClick={() => setSelectedCategory(category.name)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  selectedCategory === category.name
                    ? "bg-[#b89c85]"
                    : "bg-transparent hover:bg-[#e8dcd3]"
                }`}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Services List */}
      <div className="mx-auto mt-12 max-w-6xl">
        {visibleCategories.map((category) => (
          <section key={category.name} className="mb-12">
            <h2 className="font-serif text-2xl text-[#292929]">
              {category.name}
            </h2>

            <div className="mt-5 flex flex-col gap-5">
              {category.services.map((service) => (
                <article
                  key={service.title}
                  className="mt-5 flex gap-5 max-w-3xl rounded-xl border border-[#d9cfc8] bg-[#fffdfb] p-3 transition duration-500 hover:scale-105"
                >
                  {/* Image */}
                  <Image
                    src={service.image}
                    alt={service.alt}
                    height={140}
                    width={140}
                    className="h-35 w-35 shrink-0 rounded-xl object-cover"
                  />

                  {/* Content */}
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl">
                        {service.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-[#6b5e55]">
                        {service.duration} • {service.bestFor}
                      </p>

                      <p className="mt-1 text-sm leading-relaxed text-[#6b5e55]">
                        {service.description}
                      </p>
                    </div>

                    {/* Price + Button */}
                    <div className="mt-4 flex items-center justify-between">
                      <p className="font-serif text-2xl text-[#292929]">
                        {service.price}
                      </p>

                      <button
                        type="button"
                        className="rounded-md px-5 py-2.5 text-sm font-medium text-[#242424] transition bg-[#b89c85] hover:bg-[#b58c6b]"
                      >
                        Book now
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
