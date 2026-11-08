"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { heroSlides, heroStats } from "@/data/home";

const SLIDE_CHANGE_INTERVAL_MS = 3000;

export default function HeroSection() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Move to the next photo every 3 seconds, back to the first after the last
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlideIndex(
        (previousSlideIndex) => (previousSlideIndex + 1) % heroSlides.length
      );
    }, SLIDE_CHANGE_INTERVAL_MS);

    return () => clearInterval(slideTimer);
  }, [activeSlideIndex]); // restarts the timer when a dot is clicked

  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-section-dark">
      {/* Background slideshow */}
      <div className="absolute inset-0" aria-hidden="true">
        {heroSlides.map((heroSlide, slideIndex) => {
          const isActiveSlide = slideIndex === activeSlideIndex;

          return (
            <div
              key={heroSlide.slideImage}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                isActiveSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Slow zoom while the slide is visible (Ken Burns effect) */}
              <div
                className={`absolute inset-0 transition-transform duration-[6000ms] ease-out ${
                  isActiveSlide ? "motion-safe:scale-110" : "scale-100"
                }`}
              >
                <Image
                  src={heroSlide.slideImage}
                  alt=""
                  fill
                  sizes="100vw"
                  priority={slideIndex === 0}
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}

        {/* Dark overlay so the text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      </div>

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

      {/* Slide dots */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2">
        {heroSlides.map((heroSlide, slideIndex) => {
          const isActiveSlide = slideIndex === activeSlideIndex;

          return (
            // The button is bigger than the visible bar so it is easy to tap
            <button
              key={heroSlide.slideImage}
              type="button"
              onClick={() => setActiveSlideIndex(slideIndex)}
              aria-label={`Show photo ${slideIndex + 1}`}
              aria-current={isActiveSlide ? "true" : undefined}
              className="group flex h-6 min-w-6 items-center justify-center px-1"
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  isActiveSlide
                    ? "w-8 bg-gold"
                    : "w-3 bg-white/40 group-hover:bg-white/70"
                }`}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
