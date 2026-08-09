import {
  MessageCircle,
  Clock3,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import TimelineItem from "@/components/ui/timeline-item";
import { siteConfig } from "@/lib/site";

const journey = [
  {
    duration: "Aug 2025 – Present",
    title: "Consultant Psychologist",
    organization: "Inner Sanctuary, Sanatan Healthcare • Prayagraj",
    description:
      "Providing individual psychotherapy and counselling across diverse mental health concerns. Conducting psychometric evaluations, developing personalised intervention plans, and contributing to community mental health awareness programmes and institutional outreach.",
  },
  {
    duration: "Apr 2026 – Jun 2026",
    title: "Rehabilitation / NGO Counsellor",
    organization: "Samadhan Abhiyan – Rehabilitation Centre • Prayagraj",
    description:
      "Provided rehabilitation counselling to individuals experiencing substance use and psychosocial challenges. Supported individualised recovery planning, facilitated group sessions, and conducted psychoeducation workshops for residents and families.",
  },
  {
    duration: "2024 – 2026",
    title: "Master's in Clinical Psychology",
    organization: "Amity University • Noida",
    description:
      "Completed postgraduate training in Clinical Psychology with focused learning across psychological assessment, psychotherapy, counselling, clinical research, and evidence-based mental healthcare.",
  },
  {
    duration: "6 Months",
    title: "Clinical Psychology Intern",
    organization: "Manasthan Clinic • Prayagraj",
    description:
      "Gained hands-on clinical experience through standardised psychological assessments, clinical case documentation, and supervised support for clients experiencing anxiety, depression, and related concerns.",
  },
  {
    duration: "Professional Experience",
    title: "Clinical Training & Early Practice",
    organization: "MHI • Counsel India • HroHour • Prayagraj",
    description:
      "Built broader experience through counselling, psychological testing, clinical support, and community mental health initiatives, including independent counselling and pro bono psychological consultations.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Experience & Journey"
          title="Clinical experience shaped by learning, practice, and people."
          description="My professional journey has included clinical, counselling, rehabilitation, and community mental health settings, allowing me to develop a practical and compassionate approach to psychological care."
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-8">
          {journey.map((item, index) => (
            <TimelineItem
              key={`${item.duration}-${item.title}`}
              duration={item.duration}
              title={item.title}
              organization={item.organization}
              description={item.description}
              isLast={index === journey.length - 1}
            />
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-border/60 bg-card p-8 text-center shadow-sm">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <HeartHandshake className="h-6 w-6 text-primary" />
          </div>

          <h3 className="mt-5 text-xl font-semibold">
            You don&apos;t need to have everything figured out before reaching
            out.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
            A first conversation can simply be a starting point to understand
            what you are going through and whether psychological support may be
            helpful.
          </p>

          <a
            href={`https://wa.me/${siteConfig.whatsapp.replace(
              /\D/g,
              ""
            )}?text=${encodeURIComponent(
              "Hello Doctor, I would like to enquire about a psychological consultation."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
          >
            <MessageCircle className="h-4 w-4" />
            Start an Enquiry
            <ArrowRight className="h-4 w-4" />
          </a>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock3 className="h-4 w-4" />
            <span>{siteConfig.consultationHours}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}