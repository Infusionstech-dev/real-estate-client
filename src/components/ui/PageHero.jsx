import BackgroundSlideshow from "@/components/ui/BackgroundSlideshow";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { heroSlides } from "@/data/home";

/**
 * Hero for inner pages (About, Projects): eyebrow, big title and intro text
 * on the same background slideshow as the Home hero.
 * titleLines: ["Let's Build Your", "Dream Together"] – one entry per line
 */
export default function PageHero({ eyebrowText, titleLines, introText }) {
  return (
    <section className="relative flex min-h-[70svh] items-center overflow-hidden bg-section-dark">
      <BackgroundSlideshow slides={heroSlides} />

      <div className="site-container relative w-full py-24">
        <RevealOnScroll direction="left" className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold md:text-sm">
            {eyebrowText}
          </p>
          <h1 className="mt-5 font-heading text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            {titleLines.map((titleLine) => (
              <span key={titleLine} className="block">
                {titleLine}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            {introText}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
