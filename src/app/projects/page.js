import PortfolioSection from "@/components/home/PortfolioSection";
import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "Projects",
  description:
    "Explore interior design and construction projects by Space Interior & Builders.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrowText="Our Projects"
        titleLines={["Let's Build Your", "Dream Together"]}
        introText="Whether you need a beautifully designed interior, a professionally managed construction project, or expert assistance in buying or selling property, Space Interior & Builders is your trusted partner."
      />
      <PortfolioSection theme="light" viewAllHref="/projects/all" />
    </main>
  );
}
