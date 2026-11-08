import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import CtaSection from "@/components/home/CtaSection";
import HeroSection from "@/components/home/HeroSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import ProcessSection from "@/components/home/ProcessSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhySpaceSection from "@/components/home/WhySpaceSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProcessSection />
      <WhySpaceSection />
      <ServicesSection />
      <PortfolioSection />
      <BeforeAfterSection />
      <CtaSection />
      <TestimonialsSection />
    </main>
  );
}
