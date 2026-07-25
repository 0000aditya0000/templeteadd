import WhatsAppButton from "./WhatsAppButton";

const ITEMS = [
  {
    name: "House Espresso",
    price: "₹160",
    desc: "Chocolate and toasted almond from our daily blend. Short, sweet, and built for a second cup.",
  },
  {
    name: "Pour-Over of the Day",
    price: "₹230",
    desc: "A rotating Coorg or Wayanad lot, poured to order. Ask the bar which fruit notes showed up this morning.",
  },
  {
    name: "Ginger Honey Flat White",
    price: "₹250",
    desc: "Silky milk with fresh ginger syrup and a spoon of wild honey. Soft heat, clean finish.",
  },
  {
    name: "Seeded Sourdough Toast",
    price: "₹140",
    desc: "Overnight fermentation, thick-cut, with cultured butter and seasonal jam from the kitchen.",
  },
  {
    name: "Coconut Cold Brew",
    price: "₹210",
    desc: "Twelve-hour steep, finished with toasted coconut water and a pinch of jaggery salt.",
  },
  {
    name: "Cardamom Milk Roll",
    price: "₹95",
    desc: "Warm, soft, brushed with spiced sugar. Best before noon — they rarely last past it.",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="section-alt px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-olive uppercase">
          On the board
        </p>
        <h2 className="font-serif text-[clamp(2.1rem,4.5vw,3.2rem)] leading-tight font-medium text-ink">
          Cups &amp; <em className="italic text-olive">kitchen</em> today
        </h2>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <article
              key={item.name}
              className="flex flex-col border-t border-line pt-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-lg leading-snug text-ink sm:text-[1.15rem]">
                  {item.name}
                </h3>
                <span className="shrink-0 font-serif text-base text-accent">
                  {item.price}
                </span>
              </div>
              <p className="mt-3 flex-1 text-[13px] leading-relaxed text-muted sm:text-sm">
                {item.desc}
              </p>
              <div className="mt-5">
                <WhatsAppButton size="sm" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
