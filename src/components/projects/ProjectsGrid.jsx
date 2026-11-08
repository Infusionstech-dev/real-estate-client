import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

// Grid size for each card type (bento layout)
const projectLayoutClasses = {
  large: "sm:col-span-2 lg:row-span-2",
  small: "",
  wide: "lg:col-span-2",
};

export default function ProjectsGrid({ projects, className = "" }) {
  return (
    <ul
      className={`grid auto-rows-[16rem] gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[15rem] ${className}`}
    >
      {projects.map((project, projectIndex) => {
        const isLargeProject = project.projectLayout === "large";

        return (
          <li
            key={project.projectSlug}
            className={projectLayoutClasses[project.projectLayout]}
          >
            <RevealOnScroll
              direction="fade"
              delay={projectIndex * 120}
              className="h-full"
            >
              <Link
                href={`/projects/${project.projectSlug}`}
                className="group relative block h-full overflow-hidden rounded-2xl"
              >
                {/* Empty alt: the title below already describes the photo */}
                <Image
                  src={project.projectImage}
                  alt=""
                  fill
                  sizes={
                    isLargeProject
                      ? "(min-width: 1024px) 760px, 100vw"
                      : "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  }
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div
                  className={`absolute inset-x-0 bottom-0 p-6 ${
                    isLargeProject ? "text-left lg:p-8" : "text-center"
                  }`}
                >
                  {isLargeProject && (
                    <p className="text-sm uppercase tracking-[0.15em] text-gold">
                      {project.projectCategory}
                    </p>
                  )}
                  <h3
                    className={`font-heading text-white ${
                      isLargeProject ? "mt-1 text-3xl" : "text-xl"
                    }`}
                  >
                    {project.projectTitle}
                  </h3>
                </div>
              </Link>
            </RevealOnScroll>
          </li>
        );
      })}
    </ul>
  );
}
