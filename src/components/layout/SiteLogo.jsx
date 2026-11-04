import Link from "next/link";

// Temporary SPACE logo built in code.
// Replace with the real logo file (public/images/logo.svg) when the designer sends it.
export default function SiteLogo({ className = "" }) {
  return (
    <Link
      href="/"
      aria-label="Space Interiors & Builders – home"
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <svg
        viewBox="0 0 40 40"
        className="h-9 w-9 text-gold"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden="true"
      >
        <path d="M12 36V10l8-6 8 6v26" />
        <path d="M17 36V16h6v20" />
        <path d="M4 36l16-12 16 12" stroke="#ffffff" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-body text-lg tracking-[0.45em] text-white">
          SPACE
        </span>
        <span className="mt-1 text-[8px] uppercase tracking-[0.2em] text-gold">
          Interiors and Builders
        </span>
      </span>
    </Link>
  );
}
