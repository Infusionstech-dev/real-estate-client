import HeroSection from "@/components/home/HeroSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import ProcessSection from "@/components/home/ProcessSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhySpaceSection from "@/components/home/WhySpaceSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProcessSection />
      <WhySpaceSection />
      <ServicesSection />
      <PortfolioSection />
    </main>
  );
}
