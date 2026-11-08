import Image from "next/image";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

// One "image + list" block. isImageOnRight flips the sides for the zig-zag layout.
export default function ServiceDetailRow({ serviceSection, isImageOnRight }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
      <RevealOnScroll
        direction={isImageOnRight ? "right" : "left"}
        className={isImageOnRight ? "lg:order-2" : ""}
      >
        <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={serviceSection.sectionImage}
            alt={serviceSection.sectionTitle}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </RevealOnScroll>

      <RevealOnScroll
        direction={isImageOnRight ? "left" : "right"}
        delay={150}
        className={isImageOnRight ? "lg:order-1" : ""}
      >
        <h2 className="font-heading text-3xl text-gold">
          {serviceSection.sectionTitle}
        </h2>
        <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink/80">
          {serviceSection.sectionItems.map((sectionItem) => (
            <li key={sectionItem.itemLabel} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/70" />
              <span>
                <strong className="font-semibold text-ink">
                  {sectionItem.itemLabel} :
                </strong>{" "}
                {sectionItem.itemText}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button href="/contact" size="small">
            Book Consultation
          </Button>
        </div>
      </RevealOnScroll>
    </div>
  );
}
