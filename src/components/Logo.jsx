export default function Logo({ className = "", tone = "dark" }) {
  const isLight = tone === "light";
  const mark = isLight ? "#c5d4b8" : "#5a6f4a";
  const primary = isLight ? "#f4f7f1" : "#1f2a1c";
  const accent = isLight ? "#c5d4b8" : "#5a6f4a";

  return (
    <a href="#top" className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="11" cy="11" r="10" stroke={mark} strokeWidth="1.4" />
        <path
          d="M11 5.5c1.8 1.4 2.8 3.2 2.8 5.2 0 2.2-1.3 3.8-2.8 5.3-1.5-1.5-2.8-3.1-2.8-5.3 0-2 1-3.8 2.8-5.2z"
          fill={mark}
        />
        <path
          d="M8 12.5c1 .8 2 1.2 3 1.2s2-.4 3-1.2"
          stroke={isLight ? "#3e5234" : "#eef2ea"}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
      <span
        className="text-[15px] font-semibold tracking-[0.12em] uppercase"
        style={{ color: primary }}
      >
        Hel<span style={{ color: accent }}>ia</span>
      </span>
    </a>
  );
}
