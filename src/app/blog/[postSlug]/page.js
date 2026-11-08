import Link from "next/link";
import { notFound } from "next/navigation";
import BlogPostCard from "@/components/blog/BlogPostCard";
import BlogPostContent from "@/components/blog/BlogPostContent";
import BlogPostHero from "@/components/blog/BlogPostHero";
import CtaSection from "@/components/home/CtaSection";
import Container from "@/components/ui/Container";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";

// Build one page per post at build time
export function generateStaticParams() {
  return blogPosts.map((blogPost) => ({ postSlug: blogPost.postSlug }));
}

export async function generateMetadata({ params }) {
  const { postSlug } = await params;
  const blogPost = getBlogPostBySlug(postSlug);
  if (!blogPost) return {};

  return {
    title: blogPost.postTitle,
    description: blogPost.postExcerpt,
    openGraph: { type: "article", images: [{ url: blogPost.postImage }] },
  };
}

export default async function BlogPostPage({ params }) {
  const { postSlug } = await params;
  const blogPost = getBlogPostBySlug(postSlug);
  if (!blogPost) notFound();

  const relatedBlogPosts = blogPosts
    .filter((otherPost) => otherPost.postSlug !== blogPost.postSlug)
    .slice(0, 3);

  return (
    <main id="main-content">
      <BlogPostHero blogPost={blogPost} />

      <section className="bg-section-light py-20 md:py-24">
        <Container>
          <article className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="text-sm font-medium text-gold transition-colors hover:text-gold-hover"
            >
              &larr; Back to Blog
            </Link>
            <RevealOnScroll className="mt-10">
              <BlogPostContent postContent={blogPost.postContent} />
            </RevealOnScroll>
          </article>
        </Container>
      </section>

      <section className="bg-section-light pb-24 md:pb-32">
        <Container>
          <RevealOnScroll>
            <SectionHeading eyebrowText="Keep Reading" titleText="Related Articles" />
          </RevealOnScroll>
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedBlogPosts.map((relatedPost, postIndex) => (
              <li key={relatedPost.postSlug}>
                <RevealOnScroll delay={postIndex * 150} className="h-full">
                  <BlogPostCard blogPost={relatedPost} />
                </RevealOnScroll>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaSection />
    </main>
  );
}
