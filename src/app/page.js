import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function HomePage() {
  return (
    <main>
      {/* Light section preview */}
      <Container as="section" className="py-16">
        <SectionHeading
          eyebrowText="Our Journey"
          titleText="Comprehensive Solutions"
          align="center"
        />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact">Contact Us</Button>
          <Button size="small">View All</Button>
          <Button size="large">View All Services</Button>
        </div>
        <div className="mx-auto mt-6 max-w-xs">
          <Button fullWidth>View Details</Button>
        </div>
      </Container>

      {/* Dark section preview */}
      <section className="bg-section-dark py-16">
        <Container>
          <SectionHeading
            eyebrowText="Why Space"
            titleText="The Standards of Excellence"
            theme="dark"
          />
          <div className="mt-10 flex gap-4">
            <Button variant="outline">Explore Projects</Button>
            <Button>Let's Connect</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
