import Logo from "./Logo";
import WhatsAppButton from "./WhatsAppButton";

const INFO = [
  { label: "Where", value: "18 Maple Walk, Near River Market" },
  { label: "Hours", value: "Wed–Mon, 6:30 am – 8:00 pm · Tuesdays closed" },
  { label: "Table ID", value: "WhatsApp us — we’ll hold your spot" },
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
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-olive uppercase">
              Visit
            </p>
            <h2 className="font-serif text-[clamp(2.1rem,4.5vw,3.2rem)] leading-tight font-medium text-ink">
              Drop by — or message first
            </h2>

            <div className="mt-10">
              {INFO.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-1 border-t border-line py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="shrink-0 text-[11px] font-semibold tracking-[0.18em] text-olive uppercase">
                    {row.label}
                  </span>
                  <span className="text-[14px] text-ink-soft sm:text-right sm:text-[15px]">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <WhatsAppButton size="lg" label="Get my ID" />
            </div>
          </div>

          <div className="flex min-h-[300px] flex-col items-center justify-center bg-olive-deep px-8 py-12 text-center sm:min-h-[360px]">
            <Logo tone="light" />
            <p className="mt-8 max-w-xs font-serif text-lg leading-relaxed text-[#e8eee3] sm:text-xl">
              Reserve a corner, ask for today&apos;s pour-over, or request your
              table ID — one message covers it.
            </p>
            <div className="mt-8">
              <WhatsAppButton size="lg" />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Logo />
            <p className="mt-2 max-w-xs text-sm text-muted">
              Morning coffee, fresh bread, and a seat with your name on it.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 md:gap-8">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-ink-soft transition-colors hover:text-olive-deep"
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
