import {
  UserRound,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";

import Container from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import ValueCard from "@/components/ui/value-card";

const people = [
  {
    icon: UserRound,
    title: "Adults",
    description:
      "Support for adults navigating emotional difficulties, anxiety, depression, relationships, self-esteem, body image, overthinking, and other psychological concerns.",
  },
  {
    icon: GraduationCap,
    title: "Students",
    description:
      "A supportive space for students dealing with academic pressure, emotional challenges, relationships, self-esteem, anxiety, and important life transitions.",
  },
  {
    icon: HeartHandshake,
    title: "Parents & Caregivers",
    description:
      "Support for parents and caregivers seeking a better understanding of the emotional and psychological needs of the people they care for.",
  },
];

export default function Values() {
  return (
    <section id="who-i-work-with" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Who I Work With"
          title="Psychological support for different stages of life."
          description="Everyone's experience is different. The first step is having a space where your concerns can be understood without judgment."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {people.map((item) => (
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