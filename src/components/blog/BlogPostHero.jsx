import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { formatPostDate } from "@/data/blog";

export default function BlogPostHero({ blogPost }) {
  return (
    <section className="relative flex min-h-[60svh] items-end overflow-hidden bg-section-dark">
      <Image
        src={blogPost.postImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover motion-safe:animate-project-hero-zoom"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10"
        aria-hidden="true"
      />

      <div className="site-container relative w-full pb-14">
        <RevealOnScroll direction="left" className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-gold">
            {blogPost.postCategory}
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-tight text-white sm:text-5xl">
            {blogPost.postTitle}
          </h1>
          <p className="mt-5 text-sm text-white/70">
            {formatPostDate(blogPost.postDate)} · {blogPost.postReadMinutes} min
            read · Space Interior &amp; Builders
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
