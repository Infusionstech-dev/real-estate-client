"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDE_CHANGE_INTERVAL_MS = 3000;

/**
 * Full-size background photo slideshow with a dark overlay and slide dots.
 * Used by the Home hero and the About hero.
 * slides: [{ slideImage, slideAlt }]
 */
export default function BackgroundSlideshow({ slides }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Move to the next photo every 3 seconds, back to the first after the last
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlideIndex(
        (previousSlideIndex) => (previousSlideIndex + 1) % slides.length
      );
    }, SLIDE_CHANGE_INTERVAL_MS);

    return () => clearInterval(slideTimer);
  }, [activeSlideIndex, slides.length]); // restarts the timer when a dot is clicked

  return (
    <>
      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((slide, slideIndex) => {
          const isActiveSlide = slideIndex === activeSlideIndex;

          return (
            <div
              key={slide.slideImage}
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
                  src={slide.slideImage}
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

      {/* Slide dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2">
        {slides.map((slide, slideIndex) => {
          const isActiveSlide = slideIndex === activeSlideIndex;

          return (
            // The button is bigger than the visible bar so it is easy to tap
            <button
              key={slide.slideImage}
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
    </>
  );
}
