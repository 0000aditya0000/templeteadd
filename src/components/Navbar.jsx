import { useState } from "react";
import Logo from "./Logo";
import WhatsAppButton from "./WhatsAppButton";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#craft", label: "Our Craft" },
  { href: "#visit", label: "Visit" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-navy/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-white/85 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton size="md" />
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-md text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/85"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <WhatsAppButton size="md" className="mt-2 w-full" />
          </nav>
        </div>
      )}
    </header>
  );
}
