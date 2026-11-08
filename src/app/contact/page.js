import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Contact",
  description:
    "Contact Space Interior & Builders in Mirpur DOHS, Dhaka – call, email or send us a message about your project.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="bg-section-light py-20 md:py-28">
      <Container className="grid gap-16 lg:grid-cols-2 lg:gap-12">
        <ContactInfo />
        <ContactForm />
      </Container>
    </main>
  );
}
