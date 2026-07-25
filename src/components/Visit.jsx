import Logo from "./Logo";
import WhatsAppButton from "./WhatsAppButton";

const INFO = [
  { label: "Where", value: "42 Lamplight Lane, Off Church Street" },
  { label: "Hours", value: "Tue–Sun, 7:00 am – 9:30 pm · Mondays we rest" },
  { label: "Order ahead", value: "Message us and skip the wait entirely" },
];

const FOOTER_LINKS = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#craft", label: "Our Craft" },
  { href: "#visit", label: "Visit" },
];

export default function Visit() {
  return (
    <>
      <section id="visit" className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-gold uppercase">
              Find us
            </p>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.4rem)] leading-tight font-medium text-white">
              Come sit for a while
            </h2>

            <div className="mt-10">
              {INFO.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-1 border-t border-white/10 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="shrink-0 text-[11px] font-semibold tracking-[0.18em] text-gold uppercase">
                    {row.label}
                  </span>
                  <span className="text-[14px] text-white sm:text-right sm:text-[15px]">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <WhatsAppButton size="lg" />
            </div>
          </div>

          <div className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-white/8 bg-navy-card px-8 py-12 text-center sm:min-h-[380px]">
            <Logo />
            <p className="mt-8 max-w-xs font-serif text-lg leading-relaxed text-white sm:text-xl">
              Reserve a table, ask for today&apos;s single-origin, or plan a
              private evening — one message does it all.
            </p>
            <div className="mt-8">
              <WhatsAppButton size="lg" />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Logo />
            <p className="mt-2 max-w-xs text-sm text-muted">
              Slow-roasted coffee &amp; warm company, since sunrise.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 md:gap-8">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <WhatsAppButton size="md" />
        </div>
      </footer>
    </>
  );
}
