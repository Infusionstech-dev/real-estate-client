import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import { serviceCards } from "@/data/home";

export default function ServicesSection({ showViewAllButton = true }) {
  return (
    <section className="bg-section-light py-24 md:py-32">
      <Container>
        <RevealOnScroll className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrowText="Our Services"
            titleText="From Vision to Completion"
          />
          {showViewAllButton && (
            <Button href="/services" className="self-start sm:self-auto">
              View All Services
            </Button>
          )}
        </RevealOnScroll>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((serviceCard, cardIndex) => (
            // On tablets the 3rd card sits alone, so it is centered
            <RevealOnScroll
              key={serviceCard.serviceTitle}
              delay={cardIndex * 150}
              className={`h-full ${
                cardIndex === 2 ? "md:col-span-2 md:mx-auto md:w-1/2 lg:col-span-1 lg:w-full" : ""
              }`}
            >
              <article className="card-lift group flex h-full flex-col rounded-2xl bg-section-light p-3 shadow-[0_10px_30px_-12px_rgb(0_0_0/0.2)] ring-1 ring-black/5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={serviceCard.serviceImage}
                    alt={serviceCard.serviceTitle}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-6 text-center font-heading text-2xl text-gold">
                  {serviceCard.serviceTitle}
                </h3>

                <ol className="mt-5 flex-1 space-y-2 px-3 text-sm text-ink/80">
                  {serviceCard.serviceItems.map((serviceItem, itemIndex) => (
                    <li key={serviceItem}>
                      {itemIndex + 1}. {serviceItem}
                    </li>
                  ))}
                </ol>

                <Button href={serviceCard.serviceHref} fullWidth className="mt-6">
                  View Details
                </Button>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
