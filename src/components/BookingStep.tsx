type BookingProps = {
  number: string;
  title: string;
  description: string;
};

export default function BookingStep({
  number,
  title,
  description,
}: BookingProps) {
  return (
    <div className="flex gap-4">
      <span className="text-2xl font-serif flex size-8 shrink-0 items-baseline-last justify-center rounded-md bg-[#ddc8b5]">
        {number}
      </span>

      <div>
        <h2 className="text-2xl font-serif">{title}</h2>
        <p className="mt-1 text-xl leading-relaxed text-[#6b5e55]">
          {description}
        </p>
      </div>
    </div>
  );
}
