import WhatsAppButton from "./WhatsAppButton";

const STEPS = [
  {
    num: "01",
    title: "Sourced by hand",
    desc: "We buy green coffee direct from three estate families in the Western Ghats – no middlemen, prices agreed over tea.",
  },
  {
    num: "02",
    title: "Roasted small",
    desc: "Batches never exceed twelve kilos, so every roast is watched, smelled, and pulled at the exact second it sings.",
  },
  {
    num: "03",
    title: "Rested, then ground",
    desc: "Beans rest four days to settle, then we grind to order at the bar — never before you've sat down.",
  },
  {
    num: "04",
    title: "Poured slow",
    desc: "Whether it's a shot or a filter, nothing here is hurried. Good coffee refuses to be rushed, and so do we.",
  },
];

export default function Craft() {
  return (
    <section id="craft" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-gold uppercase">
          From bean to cup
        </p>
        <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.4rem)] leading-tight font-medium text-white">
          How the morning is made
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <article
              key={step.num}
              className="rounded-2xl border border-white/5 bg-navy-card px-6 py-8"
            >
              <p className="font-serif text-[2.75rem] leading-none text-stroke-gold">
                {step.num}
              </p>
              <h3 className="mt-5 font-serif text-xl text-white">{step.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-muted sm:text-sm">
                {step.desc}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-navy-card/60 px-7 py-7 sm:flex-row sm:items-center sm:px-10">
          <p className="max-w-md font-serif text-xl leading-snug text-white sm:text-2xl">
            Want us to save your usual order before you arrive?
          </p>
          <WhatsAppButton size="lg" className="shrink-0" />
        </div>
      </div>
    </section>
  );
}
