import Image from "next/image";
import Link from "next/link";
import { formatPostDate } from "@/data/blog";

export default function BlogPostCard({ blogPost }) {
  return (
    <Link
      href={`/blog/${blogPost.postSlug}`}
      className="card-lift group flex h-full flex-col overflow-hidden rounded-2xl bg-section-light shadow-[0_10px_30px_-12px_rgb(0_0_0/0.2)] ring-1 ring-black/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={blogPost.postImage}
          alt=""
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-[0.15em] text-gold">
          {blogPost.postCategory}
        </p>
        <h3 className="mt-3 font-heading text-xl leading-snug text-ink">
          {blogPost.postTitle}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">
          {blogPost.postExcerpt}
        </p>
        <p className="mt-6 flex items-center justify-between text-xs text-muted">
          <span>
            {formatPostDate(blogPost.postDate)} · {blogPost.postReadMinutes} min read
          </span>
          <span className="font-medium text-gold transition-transform group-hover:translate-x-1">
            Read More &rarr;
          </span>
        </p>
      </div>
    </Link>
  );
}
