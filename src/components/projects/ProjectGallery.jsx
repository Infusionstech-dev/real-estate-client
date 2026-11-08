import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

// Same bento shape as the project grid: big, two small, small, wide
const galleryLayoutClasses = [
  "sm:col-span-2 lg:row-span-2",
  "",
  "",
  "",
  "lg:col-span-2",
];

export default function ProjectGallery({ galleryImages, projectTitle }) {
  return (
    <ul className="grid auto-rows-[16rem] gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[15rem]">
      {galleryImages.map((galleryImage, imageIndex) => (
        <li
          key={galleryImage}
          className={galleryLayoutClasses[imageIndex] ?? ""}
        >
          <RevealOnScroll
            direction="fade"
            delay={imageIndex * 120}
            className="h-full"
          >
            <div className="group relative h-full overflow-hidden rounded-2xl">
              <Image
                src={galleryImage}
                alt={`${projectTitle} – photo ${imageIndex + 1}`}
                fill
                sizes={
                  imageIndex === 0
                    ? "(min-width: 1024px) 760px, 100vw"
                    : "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                }
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </RevealOnScroll>
        </li>
      ))}
    </ul>
  );
}
