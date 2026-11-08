import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

// Featured photo with the project name on top of the details page
export default function ProjectHero({ project }) {
  return (
    <section className="relative flex min-h-[60svh] items-end overflow-hidden bg-section-dark">
      <Image
        src={project.projectImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover motion-safe:animate-project-hero-zoom"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"
        aria-hidden="true"
      />

      <div className="site-container relative w-full pb-14">
        <RevealOnScroll direction="left">
          <h1 className="font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
            {project.projectTitle}
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-gold md:text-base">
            {project.projectCategory}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
