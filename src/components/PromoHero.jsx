import WhatsAppButton, { WhatsAppIcon, WA_LINK } from "./WhatsAppButton";

export default function PromoHero() {
  return (
    <section id="top" className="hero-wash relative px-6 pb-16 pt-12 lg:pt-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <div className="float-soft relative w-full max-w-[400px]">
          <div className="promo-panel rounded-[28px] px-8 py-14 text-center shadow-[0_30px_60px_rgba(31,42,28,0.22)] sm:px-10 sm:py-16">
            <p className="relative z-10 text-[2rem] font-extrabold italic tracking-wide text-[#e8c9a0] sm:text-[2.4rem]">
              15%
            </p>
            <p className="relative z-10 mt-1 font-serif text-[clamp(2.2rem,6vw,3.2rem)] leading-none font-semibold text-[#f4f7f1]">
              BEST SERVICE
            </p>
            <p className="relative z-10 mt-3 text-sm tracking-[0.18em] text-[#c5d4b8] uppercase">
              Trusted platform
            </p>

            <div className="relative z-10 mt-10">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="wa-glow inline-flex items-center gap-2 rounded-full bg-wa px-5 py-2.5 text-sm font-semibold text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <span
                className="pointer-events-none absolute -right-3 bottom-[-8px] drop-shadow"
                aria-hidden="true"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#f4f7f1">
                  <path d="M5.5 3.21V20.8c0 .1.1.2.2.2.05 0 .1-.02.14-.05l4.36-4.36 2.4 5.76c.06.14.2.22.34.22.05 0 .1-.01.14-.03l2.02-.84a.38.38 0 00.2-.5l-2.4-5.76h5.9c.1 0 .2-.1.2-.2 0-.05-.02-.1-.05-.14L5.84 3.05A.2.2 0 005.5 3.21z" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <WhatsAppButton size="lg" />
        </div>
      </div>
    </section>
  );
}
