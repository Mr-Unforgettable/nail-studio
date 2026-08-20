"use client";

import Image from "next/image";

import MissionVision from "./MissionVision";
import Accordion from "./Accordion";

export default function AboutMain() {
  return (
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
              loading="eager"
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
              to feel calm, personal, and unrushed, creating an experience where
              clients feel relaxed and confident. <br /> With careful
              preparation, quality products, and modern techniques, I deliver
              results that are both elegant and durable. Whether simple and
              polished or more detailed and creative, each service is
              thoughtfully tailored to suit your style and nail health.
            </p>
          </div>
        </div>
      </div>

      {/* Mission + Vision */}
      <MissionVision />

      {/* Accordion Section */}
      <Accordion />
    </section>
  );
}
