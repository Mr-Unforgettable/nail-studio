"use client";

import Image from "next/image";
import { useState } from "react";

const galleryItems = [
  {
    id: 1,
    title: "Acrylic",
    category: "Acrylic",
    image: "/images/Portfolio/acrylic.jpg",
    alt: "Acrylic nail design",
    layout: "featured",
  },
  {
    id: 2,
    title: "Manicure",
    category: "Manicure",
    image: "/images/Portfolio/manicure.jpg",
    alt: "Manicure nail design",
    layout: "half",
  },
  {
    id: 3,
    title: "Nail Art",
    category: "Nail Art",
    image: "/images/Portfolio/nailart.jpg",
    alt: "Nail art design",
    layout: "half",
  },
  {
    id: 4,
    title: "Acrylic",
    category: "Acrylic",
    image: "/images/Portfolio/acrylic.jpg",
    alt: "Acrylic nail design",
    layout: "third",
  },
  {
    id: 5,
    title: "Manicure",
    category: "Manicure",
    image: "/images/Portfolio/manicure.jpg",
    alt: "Manicure nail design",
    layout: "third",
  },
  {
    id: 6,
    title: "Nail Art",
    category: "Nail Art",
    image: "/images/Portfolio/nailart.jpg",
    alt: "Nail art design",
    layout: "third",
  },
  {
    id: 7,
    title: "Acrylic",
    category: "Acrylic",
    image: "/images/Portfolio/acrylic.jpg",
    alt: "Acrylic nail design",
    layout: "featured",
  },
];

const categories = ["All", "Acrylic", "Manicure", "Nail Art"];

const layoutClasses = {
  featured: "col-span-6",
  half: "col-span-3",
  third: "col-span-2",
};

export default function PortfolioMain() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl">Gallery</h2>

        <p className="mt-3 max-w-2xl text-[#6b5e55]">
          A curated collection of nail designs showcasing clean finishes,
          detail, and creativity.
        </p>
      </div>

      {/* Categories */}
      <nav className="mx-auto mt-8 max-w-6xl">
        <ul className="flex flex-wrap gap-8">

          {/* Categories */}
          {categories.map((category) => (
            <li key={category}>
              <button
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  selectedCategory === category
                    ? "bg-[#b89c85]"
                    : "bg-transparent hover:bg-[#e8dcd3]"
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Category Cards */}
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-6 gap-4">
        {filteredItems.map((item) => (
          <article
          key={item.id}
          className={`${layoutClasses[item.layout as keyof typeof layoutClasses]} self-start overflow-hidden rounded-lg border border-[#d9cfc8] p-3 bg-[#fffdfb]  transition duration-500 hover:scale-105`}
          >
            <div className={`relative ${
              item.layout === "featured"
              ? "aspect-5/2"
              : "aspect-square"
            }`}>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
                />
            </div>

            <div className="px-2 py-1">
              <p className="text-sm text-[#292929]">{item.title}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
