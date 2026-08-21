"use client";

import { InlineWidget } from "react-calendly";

export default function BookingCalendar() {
  return (
    <section className="bg-[#fdf9f6] px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="">
          <InlineWidget
            url="https://calendly.com/abhinavpsingh2022/30min"
            styles={{
              height: "700px",
              width: "100%",
            }}
          />
        </div>
      </div>
    </section>
  );
}
