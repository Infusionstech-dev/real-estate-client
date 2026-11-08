// All site links in one place – Navbar and Footer read from here

export const mainNavLinks = [
  { linkLabel: "Home", linkHref: "/" },
  { linkLabel: "About", linkHref: "/about" },
  { linkLabel: "Services", linkHref: "/services" },
  { linkLabel: "Projects", linkHref: "/projects" },
  { linkLabel: "Blog", linkHref: "/blog" },
  { linkLabel: "Contact", linkHref: "/contact" },
];

// The footer shows the same 6 links as the navbar, split into two columns
export const footerNavLinks = mainNavLinks.slice(0, 3);
export const footerLegalLinks = mainNavLinks.slice(3);
