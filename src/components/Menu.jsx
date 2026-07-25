import WhatsAppButton from "./WhatsAppButton";

const ITEMS = [
  {
    name: "Copper Kettle Espresso",
    price: "₹180",
    desc: "A dense, cocoa-heavy shot pulled from our house blend. Thick crema, low bitterness, built for sipping.",
  },
  {
    name: "Slow-Drip Filter",
    price: "₹210",
    desc: "Single-origin Chikmagalur beans, poured over four gentle minutes. Bright, floral, a little bit of stone fruit.",
  },
  {
    name: "Saffron Cardamom Latte",
    price: "₹240",
    desc: "Steamed milk folded with real saffron threads and freshly cracked cardamom. Our most-ordered afternoon cup.",
  },
  {
    name: "Stone-Baked Croissant",
    price: "₹160",
    desc: "Laminated over three days, baked on the hearth until it shatters. Butter from a dairy two towns over.",
  },
  {
    name: "Jaggery Cold Brew",
    price: "₹220",
    desc: "Steeped eighteen hours, sweetened with melted jaggery and a pinch of sea salt. Served over one big clear cube.",
  },
  {
    name: "Masala Chai Bun",
    price: "₹90",
    desc: "A soft milk bun brushed with chai-spiced butter, torn warm and eaten with your hands. Gone by noon most days.",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-gold uppercase">
          The list
        </p>
        <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.4rem)] leading-tight font-medium text-white">
          What we&apos;re{" "}
          <em className="italic">pouring</em>{" "}
          <em className="italic">&amp;</em> baking
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <article
              key={item.name}
              className="flex flex-col rounded-2xl border border-white/5 bg-navy-card px-6 py-7"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-lg leading-snug text-white sm:text-[1.15rem]">
                  {item.name}
                </h3>
                <span className="shrink-0 font-serif text-base text-gold">
                  {item.price}
                </span>
              </div>
              <p className="mt-3 flex-1 text-[13px] leading-relaxed text-muted sm:text-sm">
                {item.desc}
              </p>
              <div className="mt-6">
                <WhatsAppButton size="sm" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
