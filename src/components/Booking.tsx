import Image from "next/image";
import BookingStep from "./BookingStep";

export default function Booking() {
  return (
    <>
      <section className="px-6 py-20 lg:px-8 lg:py-28 bg-[#fdf9f6]">
        {/* Heading + Description */}
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-1 flex-col">
            {/* Heading */}
            <h2 className="text-5xl">Book Your Appointment</h2>
            {/* Paragraph */}
            <p className="mt-4 text-xl leading-relaxed text-[#6f6259]">
              Schedule your appointment in a few easy steps and enjoy a calm,
              personalized nail experience.
            </p>
          </div>
        </div>
      </section>
      <section className="px-6 py-20 lg:px-8 lg:py-28 bg-[#f8f3ef]">
        {/* Image + Steps */}
        <div className="mx-auto w-full max-w-6xl">
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-4/3 overflow-hidden rounded-xl">
              <Image
                src="/images/BookNow/booknow.jpg"
                alt="Client discussing"
                fill
                loading="eager"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition duration-300 hover:scale-105"
              />
            </div>

            {/* Steps */}
            <div className="flex flex-col justify-center gap-6">
              <BookingStep
                number="1"
                title="Choose Your Service"
                description="Browse the service list and select the option that best fits your needs."
              />
              <BookingStep
                number="2"
                title="Pick a Date & Time"
                description="Choose an available date and time that works best for your schedule."
              />
              <BookingStep
                number="3"
                title="Enter Your Details"
                description="Fill in your contact information to complete your booking and receive a confirmation."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
