import Image from "next/image";
import Button from "@/components/ui/Button";
import { formatPostDate } from "@/data/blog";

// Latest post shown big at the top of the Blog page
export default function FeaturedBlogPost({ blogPost }) {
  return (
    <article className="group grid overflow-hidden rounded-2xl bg-section-dark lg:grid-cols-2">
      <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[26rem]">
        <Image
          src={blogPost.postImage}
          alt=""
          fill
          sizes="(min-width: 1024px) 570px, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.2em] text-gold">
          Latest · {blogPost.postCategory}
        </p>
        <h2 className="mt-4 font-heading text-3xl leading-tight text-white md:text-4xl">
          {blogPost.postTitle}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
          {blogPost.postExcerpt}
        </p>
        <p className="mt-6 text-xs text-white/60">
          {formatPostDate(blogPost.postDate)} · {blogPost.postReadMinutes} min read
        </p>
        <div className="mt-8">
          <Button href={`/blog/${blogPost.postSlug}`}>Read Article</Button>
        </div>
      </div>
    </article>
  );
}
