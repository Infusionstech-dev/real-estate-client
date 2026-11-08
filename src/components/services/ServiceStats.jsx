import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { serviceStats } from "@/data/services";

function ServiceStatIcon({ statIcon }) {
  const iconProps = {
    viewBox: "0 0 48 48",
    className: "h-12 w-12",
    fill: "currentColor",
    "aria-hidden": true,
  };

  if (statIcon === "projects") {
    // stacked bricks
    return (
      <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round">
        <rect x="17" y="8" width="14" height="9" rx="1" />
        <rect x="10" y="17" width="14" height="9" rx="1" />
        <rect x="24" y="17" width="14" height="9" rx="1" />
        <rect x="3" y="26" width="14" height="9" rx="1" />
        <rect x="17" y="26" width="14" height="9" rx="1" />
        <rect x="31" y="26" width="14" height="9" rx="1" />
        <path d="M3 39h42" />
      </svg>
    );
  }

  if (statIcon === "experience") {
    // apartment building
    return (
      <svg {...iconProps}>
        <path d="M8 6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v14h8a2 2 0 0 1 2 2v22H8zm6 6v4h4v-4zm8 0v4h4v-4zm-8 8v4h4v-4zm8 0v4h4v-4zm12 6v4h4v-4zm-20 2v4h4v-4zm8 0v4h4v-4zm12 6v4h4v-4zm-16 0v8h6v-8z" fillRule="evenodd" />
      </svg>
    );
  }

  // group of people
  return (
    <svg {...iconProps}>
      <circle cx="24" cy="13" r="7" />
      <circle cx="10" cy="17" r="5" />
      <circle cx="38" cy="17" r="5" />
      <path d="M12 42v-6a12 12 0 0 1 24 0v6z" />
      <path d="M1 40v-3a9 9 0 0 1 12.5-8.3A15.9 15.9 0 0 0 10 36v4zM47 40v-3a9 9 0 0 0-12.5-8.3A15.9 15.9 0 0 1 38 36v4z" />
    </svg>
  );
}

export default function ServiceStats() {
  return (
    <ul className="grid grid-cols-3 gap-6 text-center">
      {serviceStats.map((serviceStat, statIndex) => (
        <li key={serviceStat.statLabel}>
          <RevealOnScroll delay={statIndex * 150} className="flex flex-col items-center">
            <span className="text-ink transition-transform duration-300 hover:-translate-y-1">
              <ServiceStatIcon statIcon={serviceStat.statIcon} />
            </span>
            <p className="mt-6 font-heading text-3xl text-gold md:text-4xl">
              {serviceStat.statValue}
            </p>
            <p className="mt-2 text-sm font-medium text-ink">{serviceStat.statLabel}</p>
          </RevealOnScroll>
        </li>
      ))}
    </ul>
  );
}
