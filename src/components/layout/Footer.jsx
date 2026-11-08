import Link from "next/link";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SiteLogo from "@/components/layout/SiteLogo";
import {
  footerLegalLinks,
  footerNavLinks,
  footerSocialLinks,
} from "@/data/navigation";

const footerLinkColumns = [
  { columnTitle: "Navigation", columnLinks: footerNavLinks },
  { columnTitle: "Legal", columnLinks: footerLegalLinks },
];

// Cached so the year is read once per build/revalidation (required with cacheComponents)
async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

function SocialIcon({ socialIcon }) {
  const iconProps = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
    "aria-hidden": true,
  };
  const lineProps = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (socialIcon) {
    case "mail":
      return (
        <svg {...iconProps} {...lineProps}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3.5 6.5l8.5 6 8.5-6" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...iconProps} fill="currentColor">
          <path d="M12 2a10 10 0 0 0-1.6 19.87v-7h-2.5V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.45 2.87h-2.35v7A10 10 0 0 0 12 2z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...iconProps} {...lineProps}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...iconProps} {...lineProps}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M8 10.5V17M8 7.2v.1M12 17v-6.5M12 13.3c0-1.6 1.1-2.8 2.6-2.8s2.4 1 2.4 2.8V17" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps} {...lineProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
        </svg>
      );
  }
}

export default function Footer() {
  return (
    <footer className="bg-black pt-16 text-white">
      <div className="site-container grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.4fr]">
        {/* Brand */}
        <RevealOnScroll>
          <SiteLogo size="footer" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/80">
            Defining the future of luxury living through architectural precision
            and interior artistry.
          </p>
          <ul className="mt-6 flex gap-2">
            {footerSocialLinks.map((socialLink) => (
              <li key={socialLink.socialLabel}>
                <a
                  href={socialLink.socialHref}
                  aria-label={socialLink.socialLabel}
                  className="flex h-10 w-10 items-center justify-center text-white transition-colors hover:text-gold"
                >
                  <SocialIcon socialIcon={socialLink.socialIcon} />
                </a>
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        {/* Link columns */}
        {footerLinkColumns.map((linkColumn, columnIndex) => (
          <RevealOnScroll key={linkColumn.columnTitle} delay={(columnIndex + 1) * 120}>
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-gold">
              {linkColumn.columnTitle}
            </h3>
            <ul className="mt-6 space-y-4">
              {linkColumn.columnLinks.map((columnLink) => (
                <li key={columnLink.linkLabel}>
                  <Link
                    href={columnLink.linkHref}
                    className="text-sm text-white/90 transition-colors hover:text-gold"
                  >
                    {columnLink.linkLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        ))}

        {/* Newsletter (UI only for now) */}
        <RevealOnScroll delay={360}>
          <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-gold">
            Newsletter
          </h3>
          <p className="mt-6 text-sm text-white/90">
            Subscribe for luxury design insights and market trends.
          </p>
          <div className="mt-5 flex">
            <label htmlFor="newsletter-email" className="sr-only">
              Email Address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email Address"
              className="min-w-0 flex-1 rounded-l-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-gold focus:outline-none"
            />
            <Button size="small" className="rounded-l-none px-6">
              JOIN
            </Button>
          </div>
        </RevealOnScroll>
      </div>

      {/* Bottom bar */}
      <div className="site-container flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/80 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; <CopyrightYear /> Space Interior &amp; Builders. All rights reserved.
        </p>
        <p>Designed for Excellence.</p>
      </div>
    </footer>
  );
}
