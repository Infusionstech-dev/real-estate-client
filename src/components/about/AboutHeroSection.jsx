import BackgroundSlideshow from "@/components/ui/BackgroundSlideshow";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { heroSlides } from "@/data/home";

export default function AboutHeroSection() {
  return (
    <section className="relative flex min-h-[70svh] items-center overflow-hidden bg-section-dark">
      <BackgroundSlideshow slides={heroSlides} />

      <div className="site-container relative w-full py-24">
        <RevealOnScroll direction="left" className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold md:text-sm">
            About Us
          </p>
          <h1 className="mt-5 font-heading text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Let&apos;s Build Your
            <br />
            Dream Together
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Whether you need a beautifully designed interior, a professionally
            managed construction project, or expert assistance in buying or
            selling property, Space Interior &amp; Builders is your trusted
            partner.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
