import Container from "@/components/ui/Container";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/home";

// Line icons for the 5 steps
function ProcessStepIcon({ stepIcon }) {
  const iconProps = {
    viewBox: "0 0 24 24",
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (stepIcon) {
    case "handshake":
      return (
        <svg {...iconProps}>
          <path d="M2 11l4-4 3 1" />
          <path d="M22 11l-4-4-5 1-3 3a1.5 1.5 0 0 0 2 2l2-1.5" />
          <path d="M6 7l-1 7 5 4.5a1.4 1.4 0 0 0 2-.1l.6-.7" />
          <path d="M18 7l1 7-4.2 4.1a1.4 1.4 0 0 1-2-.1" />
          <path d="M10.5 15.5l1.5 1.3M13 13.5l2.2 2" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...iconProps}>
          <path d="M10 4l1.7 4.8L16.5 10.5l-4.8 1.7L10 17l-1.7-4.8L3.5 10.5l4.8-1.7z" />
          <path d="M18 3v4M16 5h4" />
        </svg>
      );
    case "ruler":
      return (
        <svg {...iconProps}>
          <rect x="2.5" y="8.5" width="19" height="7" rx="1.5" transform="rotate(-45 12 12)" />
          <path d="M9.2 9.2l1.4 1.4M11.3 7.1l2.1 2.1M13.4 5l1.4 1.4M7.1 11.3l2.1 2.1M5 13.4l1.4 1.4" />
        </svg>
      );
    case "gear":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" />
          <circle cx="12" cy="12" r="6.5" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <path d="M14 3v5h5M9 13h6M9 17h6" />
        </svg>
      );
  }
}

// Dotted curved arrow between two cards (flipped = curves underneath)
function ProcessArrow({ positionClass, isFlipped = false }) {
  return (
    <svg
      viewBox="0 0 160 50"
      fill="none"
      aria-hidden="true"
      className={`absolute hidden w-[16%] text-gold lg:block ${positionClass} ${
        isFlipped ? "-scale-y-100" : ""
      }`}
    >
      <path
        d="M6 46 Q80 -14 154 46"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="2 4"
        strokeLinecap="round"
      />
      <path d="M145 41l9 5-10 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export default function ProcessSection() {
  return (
    <section className="bg-section-light py-24 md:py-32">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            eyebrowText="Our Journey"
            titleText="Comprehensive Solutions"
            align="center"
          />
        </RevealOnScroll>

        <div className="relative mt-16 lg:mt-28 lg:mb-16">
          {/* Arrows: above between 1→2 and 3→4, below between 2→3 and 4→5 */}
          <ProcessArrow positionClass="-top-20 left-[12%]" />
          <ProcessArrow positionClass="-top-20 left-[52%]" />
          <ProcessArrow positionClass="-bottom-20 left-[32%]" isFlipped />
          <ProcessArrow positionClass="-bottom-20 left-[72%]" isFlipped />

          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((processStep, stepIndex) => (
              <li key={processStep.stepTitle}>
                <RevealOnScroll delay={stepIndex * 120} className="h-full">
                  <article className="card-lift flex h-full flex-col items-center rounded-2xl bg-section-light px-5 py-8 text-center shadow-[0_10px_30px_-12px_rgb(0_0_0/0.18)] ring-1 ring-black/5">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-ink shadow-md">
                      <ProcessStepIcon stepIcon={processStep.stepIcon} />
                    </span>
                    <h3 className="mt-6 font-heading text-xl text-gold">
                      {processStep.stepTitle}
                    </h3>
                    <p className="mt-4 text-xs leading-relaxed text-ink/80">
                      {processStep.stepDescription}
                    </p>
                  </article>
                </RevealOnScroll>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
