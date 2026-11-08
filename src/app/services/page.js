import ServicesSection from "@/components/home/ServicesSection";

export const metadata = {
  title: "Services",
  description:
    "Interior design, construction and property sales & marketing services by Space Interior & Builders.",
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <ServicesSection showViewAllButton={false} isPageHeading />
    </main>
  );
}
