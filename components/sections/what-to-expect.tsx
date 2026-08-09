import {
  MessageCircle,
  Clock3,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Reach Out",
    description:
      "Send a WhatsApp message or email to enquire about a consultation. You can simply share that you would like to know more about the process.",
  },
  {
    number: "02",
    icon: Clock3,
    title: "Initial Consultation",
    description:
      "The first session is approximately 45–60 minutes and provides an opportunity to talk about what you are experiencing.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Talk & Understand",
    description:
      "Your concerns, experiences, and goals can be discussed at a comfortable pace in a confidential and non-judgmental environment.",
  },
  {
    number: "04",
    icon: ArrowRight,
    title: "Discuss the Next Step",
    description:
      "Based on your individual needs, the appropriate way forward can be discussed together after the initial understanding of your concerns.",
  },
];

export default function WhatToExpect() {
  return (
    <section id="what-to-expect" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="What to Expect"
          title="Your first step doesn't have to feel complicated."
          description="Reaching out for psychological support can feel difficult. The process is designed to begin with a simple conversation."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group rounded-3xl border border-border/60 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-[0.2em] text-primary">
                      {step.number}
                    </p>

                    <h3 className="mt-1 text-xl font-semibold tracking-tight">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-primary/10 bg-primary/5 p-7 text-center">
          <p className="text-lg font-medium">
            You don't need to have everything figured out before reaching out.
          </p>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
            A first conversation can simply be a starting point to understand
            what you are going through and whether psychological support may be
            helpful.
          </p>

          <a
            href={`https://wa.me/${siteConfig.whatsapp.replace(
              /\D/g,
              ""
            )}?text=${encodeURIComponent(
              "Hello Manvi, I would like to enquire about a psychological consultation."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
          >
            <MessageCircle className="h-4 w-4" />
            Start a WhatsApp Enquiry
            <ArrowRight className="h-4 w-4" />
          </a>

          <p className="mt-4 text-xs text-muted-foreground">
            {siteConfig.consultationHours}
          </p>
        </div>
      </Container>
    </section>
  );
}