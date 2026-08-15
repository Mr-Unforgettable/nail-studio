export default function Policies() {
  return (
    <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">
            Policies
          </h1>

          <p className="mt-3 text-[#6b5e55] leading-relaxed">
            Please review our policies before booking as they help ensure
            fairness, quality service, and a smooth booking process.
          </p>
        </div>

        {/* Policies */}
        <div className="mt-8">
          <ul className="list-disc pl-5 space-y-4 text-[#6b5e55]">
            <li>
              All services are by appointment to ensure dedicated time and care.
            </li>
            <li>
              A deposit may be required to secure your booking and will be
              applied to your service.
            </li>
            <li>
              Please provide at least 24 hours' notice for cancellations or
              rescheduling.
            </li>
            <li>
              Arrivals more than 10-15 minutes late may need to be rescheduled.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
