export default function Logo({ className = "" }) {
  return (
    <a href="#top" className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Trident / trishula */}
        <path
          d="M10 1.5C10 1.5 10.4 5.5 10.4 8.2C12.8 6.2 15.8 5.2 17.5 5.5C15.2 7.2 12.2 9.5 10.4 12"
          stroke="#c9a14a"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M10 1.5C10 1.5 9.6 5.5 9.6 8.2C7.2 6.2 4.2 5.2 2.5 5.5C4.8 7.2 7.8 9.5 9.6 12"
          stroke="#c9a14a"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M10 1.5V18.5"
          stroke="#c9a14a"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M6.5 20.5H13.5"
          stroke="#c9a14a"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="10" cy="12.5" r="1.2" fill="#c9a14a" />
      </svg>
      <span className="text-[15px] font-bold tracking-[0.08em] uppercase">
        <span className="text-white">S.K</span>{" "}
        <span className="text-gold">GROUP</span>
      </span>
    </a>
  );
}
