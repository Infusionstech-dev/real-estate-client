import AboutHeroSection from "@/components/about/AboutHeroSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export const metadata = {
  title: "About Us",
  description:
    "Space Interior & Builders is your trusted partner for interior design, construction project management and property sales.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <AboutHeroSection />
      <ServicesSection showViewAllButton={false} />
      <PortfolioSection />
      <TestimonialsSection />
    </main>
  );
}
