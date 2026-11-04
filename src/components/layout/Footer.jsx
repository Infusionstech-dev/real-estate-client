import Link from "next/link";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SiteLogo from "@/components/layout/SiteLogo";
import { footerLegalLinks, footerNavLinks } from "@/data/navigation";

const footerLinkColumns = [
  { columnTitle: "Navigation", columnLinks: footerNavLinks },
  { columnTitle: "Legal", columnLinks: footerLegalLinks },
];

const footerSocialLinks = [
  { socialLabel: "Share", socialHref: "#", socialIcon: "share" },
  { socialLabel: "Website", socialHref: "#", socialIcon: "globe" },
];

// Cached so the year is read once per build/revalidation (required with cacheComponents)
async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

function SocialIcon({ socialIcon }) {
  if (socialIcon === "share") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="18" cy="5" r="2.5" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="19" r="2.5" />
        <path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black pt-16 text-white">
      <div className="site-container grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.4fr]">
        {/* Brand */}
        <RevealOnScroll>
          <SiteLogo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/80">
            Defining the future of luxury living through architectural precision
            and interior artistry.
          </p>
          <ul className="mt-6 flex gap-3">
            {footerSocialLinks.map((socialLink) => (
              <li key={socialLink.socialLabel}>
                <a
                  href={socialLink.socialHref}
                  aria-label={socialLink.socialLabel}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-colors hover:border-gold hover:text-gold"
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
