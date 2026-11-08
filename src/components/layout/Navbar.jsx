"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "@/components/ui/Button";
import SiteLogo from "@/components/layout/SiteLogo";
import { mainNavLinks } from "@/data/navigation";

export default function Navbar() {
  const currentPathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // "Projects" also stays active on /projects/all and /projects/[projectSlug]
  const isLinkActive = (linkHref) =>
    currentPathname === linkHref ||
    (linkHref !== "/" && currentPathname.startsWith(`${linkHref}/`));

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur">
      <nav className="site-container flex h-20 items-center justify-between">
        <SiteLogo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 lg:flex">
          {mainNavLinks.map((navLink) => {
            const isActiveLink = isLinkActive(navLink.linkHref);

            return (
              <li key={navLink.linkHref}>
                <Link
                  href={navLink.linkHref}
                  aria-current={isActiveLink ? "page" : undefined}
                  className={`relative py-1 text-sm transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:bg-gold after:transition-transform after:duration-300 hover:text-gold hover:after:scale-x-100 ${
                    isActiveLink
                      ? "text-gold after:scale-x-100"
                      : "text-white after:scale-x-0"
                  }`}
                >
                  {navLink.linkLabel}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Button href="/contact" size="small">
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((wasOpen) => !wasOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-px w-6 bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-white transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu – slides down */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-white/10 transition-[max-height] duration-500 lg:hidden ${
          isMobileMenuOpen ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <ul className="site-container flex flex-col py-4">
          {mainNavLinks.map((navLink) => {
            const isActiveLink = isLinkActive(navLink.linkHref);

            return (
              <li key={navLink.linkHref}>
                <Link
                  href={navLink.linkHref}
                  onClick={closeMobileMenu}
                  aria-current={isActiveLink ? "page" : undefined}
                  className={`block py-3 text-base ${
                    isActiveLink ? "text-gold" : "text-white"
                  }`}
                >
                  {navLink.linkLabel}
                </Link>
              </li>
            );
          })}
          <li className="pt-3 sm:hidden">
            <Button href="/contact" fullWidth>
              Contact Us
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
