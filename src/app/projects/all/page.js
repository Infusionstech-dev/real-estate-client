import ProjectsGrid from "@/components/projects/ProjectsGrid";
import Container from "@/components/ui/Container";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export const metadata = {
  title: "All Projects",
  description:
    "Every interior design and construction project by Space Interior & Builders.",
};

export default function AllProjectsPage() {
  return (
    <main id="main-content" className="bg-section-light py-20 md:py-28">
      <Container>
        <RevealOnScroll>
          <SectionHeading eyebrowText="Our Portfolio" titleText="View Our All Projects" />
        </RevealOnScroll>
        <ProjectsGrid projects={projects} className="mt-12" />
      </Container>
    </main>
  );
}
