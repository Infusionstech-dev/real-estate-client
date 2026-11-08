import Image from "next/image";
import Container from "@/components/ui/Container";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import { whySpaceFeatures } from "@/data/home";

function CheckCircleIcon() {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 12.2l2.4 2.3 4.6-4.8" />
      </svg>
    </span>
  );
}

export default function WhySpaceSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background photo + dark overlay */}
      <Image
        src="/images/home/why-space-background.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/80" aria-hidden="true" />

      <Container className="relative grid items-center gap-16 lg:grid-cols-2">
        {/* Team photo with badge */}
        <RevealOnScroll direction="left">
          <div className="relative mx-auto max-w-md lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/home/why-space-team.jpg"
                alt="Designer working on floor plans with material samples"
                fill
                sizes="(min-width: 1024px) 450px, 90vw"
                className="object-cover object-[30%_center]"
              />
            </div>
            <div className="animate-float absolute -bottom-8 -right-4 rounded-xl bg-gold px-8 py-6 text-white shadow-xl sm:-right-10">
              <p className="font-heading text-4xl">10+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em]">
                Years Experience
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Text + features */}
        <RevealOnScroll direction="right" delay={150}>
          <SectionHeading
            eyebrowText="Why Space"
            titleText="The Standards of Excellence"
            theme="dark"
          />
          <ul className="mt-10 space-y-8">
            {whySpaceFeatures.map((whySpaceFeature) => (
              <li key={whySpaceFeature.featureTitle} className="flex gap-5">
                <CheckCircleIcon />
                <div>
                  <h3 className="font-heading text-xl text-gold">
                    {whySpaceFeature.featureTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {whySpaceFeature.featureDescription}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
