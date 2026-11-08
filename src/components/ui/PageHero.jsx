import Image from "next/image";
import BackgroundSlideshow from "@/components/ui/BackgroundSlideshow";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { heroSlides } from "@/data/home";

/**
 * Hero for inner pages (About, Projects): eyebrow, big title and intro text
 * on the same background slideshow as the Home hero.
 * titleLines: ["Let's Build Your", "Dream Together"] – one entry per line
 * backgroundImage: optional single photo (slow zoom) instead of the slideshow
 */
export default function PageHero({
  eyebrowText,
  titleLines,
  introText,
  backgroundImage,
}) {
  return (
    <section className="relative flex min-h-[70svh] items-center overflow-hidden bg-section-dark">
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover motion-safe:animate-project-hero-zoom"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"
            aria-hidden="true"
          />
        </>
      ) : (
        <BackgroundSlideshow slides={heroSlides} />
      )}

      <div className="site-container relative w-full py-24">
        <RevealOnScroll direction="left" className="max-w-3xl">
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
