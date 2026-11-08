import { notFound } from "next/navigation";
import ServiceDetailRow from "@/components/services/ServiceDetailRow";
import ServiceStats from "@/components/services/ServiceStats";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { getServicePageBySlug, servicePages } from "@/data/services";

// Build one page per service at build time
export function generateStaticParams() {
  return servicePages.map((servicePage) => ({
    serviceSlug: servicePage.serviceSlug,
  }));
}

export async function generateMetadata({ params }) {
  const { serviceSlug } = await params;
  const servicePage = getServicePageBySlug(serviceSlug);
  if (!servicePage) return {};

  return {
    title: servicePage.serviceTitle,
    description: servicePage.heroIntro,
    openGraph: { images: [{ url: servicePage.heroImage }] },
  };
}

export default async function ServiceDetailsPage({ params }) {
  const { serviceSlug } = await params;
  const servicePage = getServicePageBySlug(serviceSlug);
  if (!servicePage) notFound();

  return (
    <main id="main-content">
      <PageHero
        eyebrowText={servicePage.heroEyebrow}
        titleLines={servicePage.heroTitleLines}
        introText={servicePage.heroIntro}
        backgroundImage={servicePage.heroImage}
      />

      <section className="bg-section-light py-20 md:py-24">
        <Container className="max-w-4xl">
          <ServiceStats />
        </Container>
      </section>

      <section className="bg-section-light pb-24 md:pb-32">
        <Container className="space-y-24">
          {servicePage.serviceSections.map((serviceSection, sectionIndex) => (
            <ServiceDetailRow
              key={serviceSection.sectionTitle}
              serviceSection={serviceSection}
              isImageOnRight={sectionIndex % 2 === 1}
            />
          ))}
        </Container>
      </section>
    </main>
  );
}
