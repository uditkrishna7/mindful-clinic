import {
  Mail,
  MapPin,
  ExternalLink,
  Clock,
  MessageCircle,
  Video,
  Building2,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import ContactCard from "@/components/ui/contact-card";
import { siteConfig } from "@/lib/site";

const whatsappNumber = siteConfig.whatsapp.replace(/\D/g, "");

const whatsappMessage = encodeURIComponent(
  "Hello Dr. Manvi, I came across your website and would like to enquire about a psychological consultation."
);

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
          eyebrow="Consultation"
          title="Take the first step towards feeling understood."
          description="Whether you prefer an online or in-person consultation, you can begin with a simple enquiry. Share what you are looking for and discuss the next step directly."
        />

        {/* Contact Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
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

        {/* Consultation Information */}
        <div className="mt-12 rounded-3xl border border-border/60 bg-card p-8 shadow-sm sm:p-10">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Consultation Options */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Consultation Options
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Choose the format that works for you.
              </h3>

              <div className="mt-8 space-y-5">
                {/* Online Consultation */}
                <div className="flex gap-4 rounded-2xl border border-border/60 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Video className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Online Consultation
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Private psychological consultations conducted remotely,
                      allowing you to access support from wherever you are.
                    </p>
                  </div>
                </div>

                {/* In-Person Consultation */}
                <div className="flex gap-4 rounded-2xl border border-border/60 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      In-Person Consultation
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Consultations are available at{" "}
                      <span className="font-medium text-foreground">
                        {siteConfig.clinicName}
                      </span>
                      .
                    </p>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {siteConfig.clinicAddress}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="flex flex-col rounded-3xl bg-primary p-8 text-primary-foreground sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-80">
                Start Here
              </p>

              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                Ready to begin?
              </h3>

              <p className="mt-4 leading-7 opacity-90">
                You don't need to explain everything at once. Simply send an
                enquiry and discuss the consultation options, availability,
                and what you are looking for.
              </p>

              <div className="mt-8 space-y-5">
                {/* Consultation Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 opacity-80" />

                  <div>
                    <p className="font-semibold">
                      Consultation Hours
                    </p>

                    <p className="mt-1 text-sm opacity-80">
                      {siteConfig.consultationHours}
                    </p>
                  </div>
                </div>

                {/* Consultation Fees */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                    <span className="text-lg">♡</span>
                  </div>

                  <div>
                    <p className="font-semibold">
                      Consultation Fees
                    </p>

                    <p className="mt-1 text-sm leading-6 opacity-80">
                      Fees can be discussed according to individual
                      circumstances, with affordability kept in mind.
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <MessageCircle className="h-5 w-5" />
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </a>

              <p className="mt-4 text-center text-xs opacity-70">
                Your enquiry will begin as a private WhatsApp conversation.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}