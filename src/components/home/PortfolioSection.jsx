import Image from "next/image";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

/**
 * "Masterpieces of Spatial Design" project grid.
 * theme "dark": photo background (Home, About). theme "light": plain light background (Projects page).
 */
export default function PortfolioSection({
  theme = "dark",
  viewAllHref = "/projects/all",
}) {
  const isDarkTheme = theme === "dark";

  return (
    <section
      className={`relative overflow-hidden py-24 md:py-32 ${
        isDarkTheme ? "" : "bg-section-light"
      }`}
    >
      {isDarkTheme && (
        <>
          <Image
            src="/images/home/why-space-background.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/85" aria-hidden="true" />
        </>
      )}

      <Container className="relative">
        <RevealOnScroll className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrowText="Portfolio"
            titleText="Masterpieces of Spatial Design"
            theme={theme}
          />
          <Button
            href={viewAllHref}
            size="small"
            className="self-start sm:self-auto"
          >
            View All
          </Button>
        </RevealOnScroll>

        <ProjectsGrid projects={projects} className="mt-14" />
      </Container>
    </section>
  );
}
