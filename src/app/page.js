import Container from "@/components/ui/Container";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";

// Temporary animation preview – replaced by the real Hero in REC-20
const processPreviewSteps = [
  {
    stepTitle: "Consultation",
    stepDescription: "We understand your space, budget and design preferences.",
  },
  {
    stepTitle: "Design Concept",
    stepDescription: "Custom layouts, material selection and 3D visualizations.",
  },
  {
    stepTitle: "Execution",
    stepDescription: "Our team manages everything through quality control.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* 1. Left + right reveal, floating card */}
      <section className="flex min-h-screen items-center bg-section-dark">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <RevealOnScroll direction="left">
            <SectionHeading
              eyebrowText="Animation Preview"
              titleText="Design. Build. Transform."
              theme="dark"
            />
            <p className="mt-6 max-w-md text-white/70">
              This text comes from the left. The card on the right comes from
              the right and then keeps floating. Scroll down for more.
            </p>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={200}>
            <div className="animate-float mx-auto max-w-xs rounded-2xl border border-white/15 bg-white/5 p-8 text-center text-white backdrop-blur">
              <p className="font-heading text-6xl text-gold">10+</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/70">
                Years Experience
              </p>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* 2. Cards rise from the bottom one by one, lift on hover */}
      <Container as="section" className="py-28">
        <RevealOnScroll>
          <SectionHeading
            eyebrowText="Our Journey"
            titleText="Comprehensive Solutions"
            align="center"
          />
        </RevealOnScroll>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {processPreviewSteps.map((processStep, stepIndex) => (
            <RevealOnScroll
              key={processStep.stepTitle}
              delay={stepIndex * 150}
            >
              <article className="card-lift h-full rounded-2xl bg-section-light p-8 shadow-md">
                <h3 className="font-heading text-2xl text-gold">
                  {processStep.stepTitle}
                </h3>
                <p className="mt-3 text-sm text-muted">
                  {processStep.stepDescription}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Container>

      {/* 3. Image from the left, text from the right */}
      <section className="bg-section-light py-28">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <RevealOnScroll direction="left">
            <div className="aspect-[4/3] rounded-2xl bg-section-dark" />
          </RevealOnScroll>
          <RevealOnScroll direction="right" delay={150}>
            <SectionHeading
              eyebrowText="Why Space"
              titleText="The Standards of Excellence"
            />
            <p className="mt-6 text-muted">
              Mouse over the cards above to see them lift up.
            </p>
          </RevealOnScroll>
        </Container>
      </section>
    </main>
  );
}
