import Container from "@/components/ui/Container";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import { clientTestimonials } from "@/data/home";

function FiveStars() {
  return (
    <div className="flex gap-1 text-gold" role="img" aria-label="5 out of 5 stars">
      {[1, 2, 3, 4, 5].map((starNumber) => (
        <svg key={starNumber} viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />
        </svg>
      ))}
    </div>
  );
}

// Initials until real client photos are available
function ClientInitials({ clientName }) {
  const clientInitials = clientName
    .split(" ")
    .map((namePart) => namePart[0])
    .join("");

  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 font-medium text-gold ring-1 ring-gold/30">
      {clientInitials}
    </span>
  );
}

/**
 * Client reviews. Defaults to the Home version ("Voices / Client Experiences", all reviews).
 * Project pages pass their own heading and a single review.
 */
export default function TestimonialsSection({
  eyebrowText = "Voices",
  titleText = "Client Experiences",
  testimonials = clientTestimonials,
}) {
  const hasSingleTestimonial = testimonials.length === 1;

  return (
    <section className="bg-section-light py-24 md:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_2fr] lg:items-start">
        <RevealOnScroll direction="left">
          <SectionHeading eyebrowText={eyebrowText} titleText={titleText} />
        </RevealOnScroll>

        <div className={`grid gap-6 ${hasSingleTestimonial ? "" : "md:grid-cols-2"}`}>
          {testimonials.map((clientTestimonial, testimonialIndex) => {
            const isElevatedCard =
              hasSingleTestimonial || testimonialIndex % 2 === 1;

            return (
              <RevealOnScroll
                key={clientTestimonial.clientName}
                direction="right"
                delay={testimonialIndex * 150}
                className="h-full"
              >
                <figure
                  className={`card-lift flex h-full flex-col rounded-2xl p-8 ${
                    isElevatedCard
                      ? "bg-section-light shadow-[0_12px_32px_-12px_rgb(0_0_0/0.22)] ring-1 ring-black/5"
                      : ""
                  }`}
                >
                  <FiveStars />
                  <blockquote className="mt-6 flex-1 text-sm leading-relaxed italic text-ink">
                    &ldquo;{clientTestimonial.testimonialQuote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <ClientInitials clientName={clientTestimonial.clientName} />
                    <span>
                      <span className="block text-sm font-semibold text-ink">
                        {clientTestimonial.clientName}
                      </span>
                      <span className="block text-xs text-muted">
                        {clientTestimonial.clientRole}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
