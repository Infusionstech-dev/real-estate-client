import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioProjects } from "@/data/home";

// Grid size for each card type (bento layout)
const projectLayoutClasses = {
  large: "sm:col-span-2 lg:row-span-2",
  small: "",
  wide: "lg:col-span-2",
};

export default function PortfolioSection() {
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
      <div className="absolute inset-0 bg-black/85" aria-hidden="true" />

      <Container className="relative">
        <RevealOnScroll className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrowText="Portfolio"
            titleText="Masterpieces of Spatial Design"
            theme="dark"
          />
          <Button href="/projects" size="small" className="self-start sm:self-auto">
            View All
          </Button>
        </RevealOnScroll>

        <ul className="mt-14 grid auto-rows-[16rem] gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[15rem]">
          {portfolioProjects.map((portfolioProject, projectIndex) => {
            const isLargeProject = portfolioProject.projectLayout === "large";

            return (
              <li
                key={portfolioProject.projectTitle}
                className={projectLayoutClasses[portfolioProject.projectLayout]}
              >
                <RevealOnScroll direction="fade" delay={projectIndex * 120} className="h-full">
                  <Link
                    href="/projects"
                    className="group relative block h-full overflow-hidden rounded-2xl"
                  >
                    {/* Empty alt: the title below already describes the photo */}
                    <Image
                      src={portfolioProject.projectImage}
                      alt=""
                      fill
                      sizes={isLargeProject ? "(min-width: 1024px) 760px, 100vw" : "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div
                      className={`absolute inset-x-0 bottom-0 p-6 ${
                        isLargeProject ? "text-left lg:p-8" : "text-center"
                      }`}
                    >
                      {portfolioProject.projectCategory && (
                        <p className="text-sm uppercase tracking-[0.15em] text-gold">
                          {portfolioProject.projectCategory}
                        </p>
                      )}
                      <h3
                        className={`font-heading text-white ${
                          isLargeProject ? "mt-1 text-3xl" : "text-xl"
                        }`}
                      >
                        {portfolioProject.projectTitle}
                      </h3>
                    </div>
                  </Link>
                </RevealOnScroll>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
