import {
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";

import Container from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import ContactCard from "@/components/ui/contact-card";

const contactOptions = [
  {
    icon: Mail,
    title: "Email",
    description:
      "Reach out through email for consultation enquiries and professional communication.",
  },
  {
    icon: ExternalLink,
    title: "LinkedIn",
    description:
      "Connect professionally and learn more about Manvi's clinical psychology journey.",
  },
  {
    icon: MapPin,
    title: "Location",
    description:
      "Based in Prayagraj, Uttar Pradesh, with experience across clinical and counselling settings.",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect in a safe and supportive space."
          description="Whether you are looking for psychological support, professional collaboration, or have questions, reaching out is the first step."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {contactOptions.map((item) => (
            <ContactCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            Ready to begin your mental health journey?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Take the first step towards understanding yourself better with
            compassionate, evidence-based psychological support.
          </p>

          <a
            href="mailto:manvimehrotra901@gmail.com"
            className="mt-6 inline-flex rounded-xl bg-primary px-6 py-3 font-medium text-white transition hover:opacity-90"
          >
            Send an Email
          </a>
        </div>
      </Container>
    </section>
  );
}