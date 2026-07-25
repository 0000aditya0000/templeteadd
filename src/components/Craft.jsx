import WhatsAppButton from "./WhatsAppButton";

const STEPS = [
  {
    num: "01",
    title: "Farm partners",
    desc: "We work with four highland farms — prices fixed seasonally, lots cupped together before a single bag ships.",
  },
  {
    num: "02",
    title: "Roast in-house",
    desc: "Small drum loads, never more than ten kilos. Each batch is pulled by smell and sound, not a timer alone.",
  },
  {
    num: "03",
    title: "Rest & mill",
    desc: "Beans rest three days. Flour for bread is milled upstairs the evening before it hits the oven.",
  },
  {
    num: "04",
    title: "Serve calm",
    desc: "No rush tickets, no shouted names. Your drink lands when it’s ready — and when you are.",
  },
];

export default function Craft() {
  return (
    <section id="craft" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-olive uppercase">
          Behind the counter
        </p>
        <h2 className="font-serif text-[clamp(2.1rem,4.5vw,3.2rem)] leading-tight font-medium text-ink">
          How a quiet morning happens
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <article key={step.num} className="relative">
              <p className="font-serif text-[2.6rem] leading-none text-leaf/40">
                {step.num}
              </p>
              <h3 className="mt-4 font-serif text-xl text-ink">{step.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-muted sm:text-sm">
                {step.desc}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border border-line bg-surface px-7 py-8 sm:flex-row sm:items-center sm:px-10">
          <p className="max-w-md font-serif text-xl leading-snug text-ink sm:text-2xl">
            Need your usual waiting when you walk in? Send your ID.
          </p>
          <WhatsAppButton size="lg" className="shrink-0" />
        </div>
      </div>
    </section>
  );
}
