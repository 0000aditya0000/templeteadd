import WhatsAppButton from "./WhatsAppButton";

const STATS = [
  { value: "9 yrs", label: "baking on Maple Walk" },
  { value: "5", label: "estate lots rotating weekly" },
  { value: "5:10 am", label: "first tray leaves the oven" },
];

export default function About() {
  return (
    <section id="about" className="grain px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="mb-4 text-[11px] font-semibold tracking-[0.22em] text-olive uppercase">
            Open with the light
          </p>
          <h2 className="font-serif text-[clamp(2.3rem,5vw,3.6rem)] leading-[1.12] font-medium tracking-tight text-ink">
            A morning house for{" "}
            <em className="italic text-olive">unhurried</em> people.
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft sm:text-base">
            Helia started as a walk-up counter with one espresso machine and a
            chalkboard. Today we still roast in-house, mill flour for the
            morning breads, and keep a short list of drinks done properly.
          </p>
          <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-muted sm:text-[15px]">
            Bring a book, bring a laptop, or bring nothing at all. Your seat
            stays yours — just drop us a WhatsApp for your table ID.
          </p>
          <div className="mt-8">
            <WhatsAppButton size="lg" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="border-l-[3px] border-olive bg-surface/80 px-6 py-5 shadow-[0_1px_0_rgba(31,42,28,0.04)]"
            >
              <p className="font-serif text-[2rem] leading-none text-olive-deep sm:text-[2.2rem]">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
