const REVIEWS = [
  {
    quote:
      "I get my table ID the night before. Walk in, sit down, flat white already cooling to the right temperature.",
    name: "Meera Kapoor",
    tag: "weekday 7:40 regular",
  },
  {
    quote:
      "The ginger honey flat white is the only reason I leave the house before nine. Soft heat, never too sweet.",
    name: "Dev Malhotra",
    tag: "product designer",
  },
  {
    quote:
      "Wrote two chapters in the garden bench out back. Nobody hovered. That alone is worth the trip.",
    name: "Sana Iyer",
    tag: "weekend novelist",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-alt px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-olive uppercase">
          From the room
        </p>
        <h2 className="max-w-lg font-serif text-[clamp(2.1rem,4.5vw,3.2rem)] leading-tight font-medium text-ink">
          What people say after the second cup
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {REVIEWS.map((review) => (
            <article key={review.name} className="border-t border-olive/30 pt-6">
              <p className="font-serif text-[1.05rem] leading-relaxed text-ink-soft italic sm:text-lg">
                &ldquo;{review.quote}&rdquo;
              </p>
              <p className="mt-7 text-sm font-semibold text-olive-deep">
                {review.name}
              </p>
              <p className="mt-1 text-xs text-muted">{review.tag}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
