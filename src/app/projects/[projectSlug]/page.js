import Link from "next/link";
import { notFound } from "next/navigation";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectHero from "@/components/projects/ProjectHero";
import Container from "@/components/ui/Container";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { clientTestimonials } from "@/data/home";
import { getProjectBySlug, projects } from "@/data/projects";

// Build one page per project at build time
export function generateStaticParams() {
  return projects.map((project) => ({ projectSlug: project.projectSlug }));
}

export async function generateMetadata({ params }) {
  const { projectSlug } = await params;
  const project = getProjectBySlug(projectSlug);
  if (!project) return {};

  return {
    title: project.projectTitle,
    description: `${project.projectSubtitle} – a ${project.projectCategory.toLowerCase()} project by Space Interior & Builders.`,
    openGraph: { images: [{ url: project.projectImage }] },
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { projectSlug } = await params;
  const project = getProjectBySlug(projectSlug);
  if (!project) notFound();

  return (
    <main id="main-content">
      <ProjectHero project={project} />

      <section className="bg-section-light py-20 md:py-24">
        <Container>
          <RevealOnScroll className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-heading text-3xl text-ink md:text-4xl">
              {project.projectSubtitle}
            </h2>
            <Link
              href="/projects"
              className="text-sm font-medium text-gold transition-colors hover:text-gold-hover"
            >
              &larr; Back to Previous Page
            </Link>
          </RevealOnScroll>

          <div className="mt-12">
            <ProjectGallery
              galleryImages={project.projectGallery}
              projectTitle={project.projectTitle}
            />
          </div>
        </Container>
      </section>

      <TestimonialsSection
        eyebrowText="Testimonial"
        titleText="HAPPY CLIENT"
        testimonials={[clientTestimonials[1]]}
      />
    </main>
  );
}
