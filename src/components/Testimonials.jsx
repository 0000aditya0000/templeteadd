const REVIEWS = [
  {
    quote:
      "I've tried every café on this street. This is the only one where the barista remembers my grind and my dog's name.",
    name: "Ritika Menon",
    tag: "comes for the 8am filter",
  },
  {
    quote:
      "The saffron latte ruined every other latte for me. I message them the night before and it's waiting when I walk in.",
    name: "Arman Qureshi",
    tag: "freelance illustrator",
  },
  {
    quote:
      "Quiet, warm, unhurried. I've written half a novel in the window seat and they never once rushed me out.",
    name: "Nadia Fernandes",
    tag: "Tuesday & Thursday regular",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-gold uppercase">
          Regulars say
        </p>
        <h2 className="max-w-lg font-serif text-[clamp(2.2rem,4.5vw,3.4rem)] leading-tight font-medium text-white">
          Voices from the corner table
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <article
              key={review.name}
              className="rounded-2xl border border-white/8 bg-navy-card px-7 py-8"
            >
              <p className="font-serif text-[1.05rem] leading-relaxed text-white italic sm:text-lg">
                &ldquo;{review.quote}&rdquo;
              </p>
              <p className="mt-8 text-sm font-semibold text-gold">{review.name}</p>
              <p className="mt-1 text-xs text-muted">{review.tag}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
