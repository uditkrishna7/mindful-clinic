import {
  Mail,
  MapPin,
  ExternalLink,
  Clock,
  MessageCircle,
} from "lucide-react";

import Container from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import ContactCard from "@/components/ui/contact-card";
import { siteConfig } from "@/lib/site";

const contactOptions = [
  {
    icon: Mail,
    title: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },

  {
    icon: ExternalLink,
    title: "LinkedIn",
    value: "View Professional Profile",
    href: siteConfig.linkedin,
  },

  {
    icon: MapPin,
    title: "Clinic",
    value: siteConfig.clinicName,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      siteConfig.clinicAddress
    )}`,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Take the first step toward emotional well-being."
          description="Whether you're seeking psychological support, professional guidance, or simply have a question, I'd be happy to hear from you."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {contactOptions.map((item) => (
            <ContactCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              value={item.value}
              href={item.href}
            />
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-card p-10">

          <div className="grid gap-8 md:grid-cols-2">

            <div>

              <h3 className="text-2xl font-bold">
                Consultation Details
              </h3>

              <div className="mt-8 space-y-6">

                <div className="flex gap-4">
                  <Clock className="mt-1 h-6 w-6 text-primary" />

                  <div>
                    <p className="font-semibold">
                      Consultation Hours
                    </p>

                    <p className="text-muted-foreground">
                      {siteConfig.consultationHours}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MessageCircle className="mt-1 h-6 w-6 text-primary" />

                  <div>
                    <p className="font-semibold">
                      Consultation Mode
                    </p>

                    <p className="text-muted-foreground">
                      {siteConfig.consultationMode}
                    </p>
                  </div>
                </div>

              </div>

            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-primary p-8 text-primary-foreground">

              <h3 className="text-2xl font-bold">
                Ready to Begin?
              </h3>

              <p className="mt-4 leading-7 opacity-90">
                Taking the first step can often be the hardest.
                If you'd like to schedule a consultation or ask a question,
                feel free to get in touch.
              </p>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                  "Hello Manvi, I came across your website and would like to schedule a psychological consultation."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit rounded-xl bg-white px-6 py-3 font-semibold text-primary transition hover:scale-105"
              >
                Schedule a Consultation
              </a>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}