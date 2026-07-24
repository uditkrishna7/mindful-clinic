import {
  ShieldCheck,
  HeartHandshake,
  Leaf,
  Brain,
  Ear,
  Scale,
} from "lucide-react";

import Container from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import ValueCard from "@/components/ui/value-card";

const values = [
  {
    icon: ShieldCheck,
    title: "Confidentiality",
    description:
      "Creating a safe and private environment where personal experiences and concerns are respected with professional ethics.",
  },
  {
    icon: HeartHandshake,
    title: "Empathy & Compassion",
    description:
      "Understanding each individual's experiences with kindness, patience, and genuine emotional support.",
  },
  {
    icon: Leaf,
    title: "Non-judgmental Space",
    description:
      "Providing a supportive environment where individuals can express themselves openly without fear of judgment.",
  },
  {
    icon: Brain,
    title: "Emotional Safety",
    description:
      "Helping individuals feel heard, understood, and comfortable throughout their mental health journey.",
  },
  {
    icon: Ear,
    title: "Active Listening",
    description:
      "Careful attention to thoughts, emotions, and experiences to better understand individual needs.",
  },
  {
    icon: Scale,
    title: "Professional Boundaries",
    description:
      "Maintaining ethical standards and healthy therapeutic boundaries throughout the counselling process.",
  },
];

export default function Values() {
  return (
    <section id="values" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="My Approach"
          title="A therapeutic space built on trust, respect, and understanding."
          description="Mental healthcare begins with feeling heard. Every interaction is guided by empathy, confidentiality, and ethical professional practice."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((item) => (
            <ValueCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}