import WhatsAppButton from "./WhatsAppButton";

const STATS = [
  { value: "14 yrs", label: "roasting on the same corner" },
  { value: "6", label: "single-origin beans on rotation" },
  { value: "4:47 am", label: "the ovens come on" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="mb-4 text-[11px] font-semibold tracking-[0.22em] text-gold uppercase">
            Est. since sunrise
          </p>
          <h2 className="font-serif text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.12] font-medium tracking-tight text-white">
            A café that keeps{" "}
            <em className="italic text-gold">slow</em> hours.
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/90 sm:text-base">
            S.K Group Café began with a single copper kettle and a stubborn
            belief: coffee should taste of the hands that made it. We roast in
            small batches, pour by hand, and bake before the street wakes.
          </p>
          <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-muted sm:text-[15px]">
            No rush, no queue-shaped mornings. Just a warm room, honest beans,
            and a seat that is yours for as long as you like.
          </p>
          <div className="mt-8">
            <WhatsAppButton size="lg" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="rounded-2xl border border-white/5 border-l-2 border-l-gold bg-navy-card px-7 py-6"
            >
              <p className="font-serif text-[2rem] leading-none text-gold sm:text-[2.25rem]">
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
