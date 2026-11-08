import Image from "next/image";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-44">
      <Image
        src="/images/home/cta-house-night.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />

      <RevealOnScroll className="site-container relative text-center">
        <h2 className="font-heading text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
          Let&apos;s Build Your
          <br />
          Dream Together
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
          From initial concept to final handover, we are your partners in
          architectural transformation. Your vision deserves the SPACE
          treatment.
        </p>
        <div className="mt-10">
          <Button href="/contact">Let&apos;s Connect</Button>
        </div>
      </RevealOnScroll>
    </section>
  );
}
