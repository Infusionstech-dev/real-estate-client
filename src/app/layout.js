import { Playfair_Display, Poppins } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Set NEXT_PUBLIC_SITE_URL to the live domain (e.g. https://spaceinteriors.com) when deploying
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteName = "Space Interiors & Builders";
const siteDescription =
  "Complete interior design, construction and property solutions crafted with precision — from first consultation to final handover.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Interior Design & Construction`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName,
    title: `${siteName} | Interior Design & Construction`,
    description: siteDescription,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury living room designed by Space Interiors & Builders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Interior Design & Construction`,
    description: siteDescription,
    images: ["/og-image.jpg"],
  },
};

export const viewport = {
  themeColor: "#0b0b0b",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${poppins.variable}`}
    >
      <body className="font-body text-ink antialiased">
        {/* Lets keyboard users jump past the menu */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
