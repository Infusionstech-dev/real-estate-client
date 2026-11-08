import BackgroundSlideshow from "@/components/ui/BackgroundSlideshow";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { heroSlides, heroStats } from "@/data/home";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-section-dark">
      <BackgroundSlideshow slides={heroSlides} />

      {/* Content */}
      <div className="site-container relative grid w-full items-center gap-12 py-20 lg:grid-cols-[1.4fr_1fr]">
        <RevealOnScroll direction="left">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold md:text-sm">
            Established 2024
          </p>
          <h1 className="mt-5 font-heading text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Design. Build.
            <br />
            Transform.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/80 md:text-lg">
            Complete Interior Design, Construction &amp; Property Solutions
            Crafted with Precision.
          </p>
          <div className="mt-10">
            <Button href="/projects" variant="outline">
              Explore Projects
            </Button>
          </div>
        </RevealOnScroll>

        <ul className="grid grid-cols-3 gap-3 sm:gap-5 lg:ml-auto lg:w-72 lg:grid-cols-1">
          {heroStats.map((heroStat, statIndex) => (
            <li key={heroStat.statLabel}>
              <RevealOnScroll direction="right" delay={300 + statIndex * 150}>
                <div
                  className="animate-float h-full rounded-2xl border border-white/15 bg-black/40 px-4 py-4 backdrop-blur-md sm:px-8 sm:py-6"
                  style={{ animationDelay: `${statIndex * 0.8}s` }}
                >
                  <p className="font-heading text-2xl text-gold sm:text-4xl">
                    {heroStat.statValue}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.06em] text-white/75 sm:text-xs sm:tracking-[0.2em]">
                    {heroStat.statLabel}
                  </p>
                </div>
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
