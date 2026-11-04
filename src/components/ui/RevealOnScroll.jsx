"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Shows its children with a slide/fade animation when they scroll into view.
 *
 * direction: "up" | "left" | "right" | "fade"
 *   up    → comes from below
 *   left  → comes from the left side
 *   right → comes from the right side
 *   fade  → only fades in, no movement
 * delay: wait in milliseconds before starting (use it to show cards one by one)
 */
export default function RevealOnScroll({
  as: RevealTag = "div",
  direction = "up",
  delay = 0,
  className = "",
  children,
}) {
  const revealElementRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const revealElement = revealElementRef.current;
    if (!revealElement) return;

    const revealObserver = new IntersectionObserver(
      ([revealEntry]) => {
        if (revealEntry.isIntersecting) {
          setIsRevealed(true);
          revealObserver.disconnect(); // animate only the first time
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    revealObserver.observe(revealElement);
    return () => revealObserver.disconnect();
  }, []);

  return (
    <RevealTag
      ref={revealElementRef}
      data-reveal-direction={direction}
      style={{ "--reveal-delay": `${delay}ms` }}
      className={`reveal-on-scroll ${isRevealed ? "is-revealed" : ""} ${className}`}
    >
      {children}
    </RevealTag>
  );
}
