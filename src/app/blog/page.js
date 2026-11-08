import BlogPostCard from "@/components/blog/BlogPostCard";
import FeaturedBlogPost from "@/components/blog/FeaturedBlogPost";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "Blog",
  description:
    "Interior design ideas, renovation advice and property tips from Space Interior & Builders.",
};

export default function BlogPage() {
  const [latestBlogPost, ...olderBlogPosts] = blogPosts;

  return (
    <main id="main-content">
      <PageHero
        eyebrowText="Our Blog"
        titleLines={["Insights &", "Inspiration"]}
        introText="Design ideas, renovation advice and property tips from our team – to help you plan a space you will love."
      />

      <section className="bg-section-light py-24 md:py-32">
        <Container>
          <RevealOnScroll>
            <FeaturedBlogPost blogPost={latestBlogPost} />
          </RevealOnScroll>

          <RevealOnScroll className="mt-24">
            <SectionHeading eyebrowText="Articles" titleText="More From the Blog" />
          </RevealOnScroll>

          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {olderBlogPosts.map((blogPost, postIndex) => (
              <li key={blogPost.postSlug}>
                <RevealOnScroll delay={(postIndex % 3) * 150} className="h-full">
                  <BlogPostCard blogPost={blogPost} />
                </RevealOnScroll>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  );
}
