"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "@/components/ui/Container";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import { beforeAfterImages } from "@/data/home";

export default function BeforeAfterSection() {
  // How much of the "before" photo is visible, from 0 to 100 (%)
  const [dividerPosition, setDividerPosition] = useState(50);

  return (
    <section className="bg-section-light py-24 md:py-32">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrowText="Result"
            titleText="Spatial Transformations"
            align="center"
          />
        </RevealOnScroll>

        <RevealOnScroll delay={150} className="mt-14">
          <div className="relative mx-auto aspect-[16/10] max-w-5xl select-none overflow-hidden rounded-2xl shadow-xl md:aspect-[16/9]">
            {/* After photo (bottom layer) */}
            <Image
              src={beforeAfterImages.afterImage}
              alt={beforeAfterImages.afterAlt}
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />

            {/* Before photo (top layer, cut at the divider) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - dividerPosition}% 0 0)` }}
            >
              <Image
                src={beforeAfterImages.beforeImage}
                alt={beforeAfterImages.beforeAlt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>

            {/* Divider line + round handle */}
            <div
              className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white"
              style={{ left: `${dividerPosition}%` }}
            >
              <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-lg">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />
                </svg>
              </span>
            </div>

            {/* Labels */}
            <span className="pointer-events-none absolute bottom-5 left-5 rounded-md bg-black/70 px-4 py-2 text-xs uppercase tracking-[0.15em] text-white">
              Before
            </span>
            <span className="pointer-events-none absolute right-5 bottom-5 rounded-md bg-gold px-4 py-2 text-xs uppercase tracking-[0.15em] text-white">
              After
            </span>

            {/* Invisible range input: handles mouse drag, touch and keyboard arrows */}
            <input
              type="range"
              min="0"
              max="100"
              value={dividerPosition}
              onChange={(changeEvent) =>
                setDividerPosition(Number(changeEvent.target.value))
              }
              aria-label="Drag to compare before and after"
              className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
