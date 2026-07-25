import WhatsAppButton, { WhatsAppIcon, WA_LINK } from "./WhatsAppButton";

export default function PromoHero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-73px)] flex-col items-center justify-center px-6 pb-16 pt-10"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, #0e1a3a 0%, #050a1e 50%, #020617 100%)",
      }}
    >
      <div className="marble-bg relative flex w-full max-w-[400px] flex-col items-center justify-center rounded-[24px] px-8 py-14 text-center shadow-[0_25px_70px_rgba(0,0,0,0.5)] ring-1 ring-white/12 sm:max-w-[440px] sm:px-10 sm:py-16">
        <p className="gradient-gold relative z-10 mb-0.5 text-[1.65rem] font-extrabold italic tracking-wide sm:text-[1.85rem]">
          15%
        </p>
        <h1 className="gradient-gold relative z-10 text-[clamp(2.5rem,8vw,3.6rem)] font-black italic leading-[1.02] tracking-tight">
          BEST SERVICE
        </h1>
        <p className="gradient-trusted relative z-10 mt-1.5 text-[1.05rem] font-bold italic tracking-wider sm:text-xl">
          TRUSTED PLATFORM
        </p>

        <div className="relative z-10 mt-11">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-glow inline-flex items-center gap-2 rounded-full bg-wa px-5 py-2.5 text-sm font-semibold text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Now
          </a>
          <span
            className="pointer-events-none absolute -right-4 bottom-[-8px] drop-shadow-md"
            aria-hidden="true"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
              <path d="M5.5 3.21V20.8c0 .1.1.2.2.2.05 0 .1-.02.14-.05l4.36-4.36 2.4 5.76c.06.14.2.22.34.22.05 0 .1-.01.14-.03l2.02-.84a.38.38 0 00.2-.5l-2.4-5.76h5.9c.1 0 .2-.1.2-.2 0-.05-.02-.1-.05-.14L5.84 3.05A.2.2 0 005.5 3.21z" />
            </svg>
            <span className="absolute left-0 top-0 h-2.5 w-2.5 -translate-x-1 -translate-y-1 rounded-full bg-white opacity-90" />
          </span>
        </div>
      </div>

      <div className="mt-10">
        <WhatsAppButton size="lg" />
      </div>
    </section>
  );
}
