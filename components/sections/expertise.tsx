import Container from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import ExpertiseCard from "@/components/ui/expertise-card";

import {
  Brain,
  HeartHandshake,
  Users,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";

const areasOfSupport = [
  {
    icon: HeartHandshake,
    title: "Emotional Well-being",
    description:
      "Support for self-esteem, emotional difficulties, overthinking, and challenges that can affect how you feel, think, and relate to yourself.",
  },
  {
    icon: Brain,
    title: "Anxiety & Depression",
    description:
      "Psychological support for severe anxiety, depression, persistent emotional distress, and difficulties that may affect everyday life.",
  },
  {
    icon: Users,
    title: "Relationships & Adolescence",
    description:
      "Support around relationship concerns and emotional challenges faced by adolescents, students, and families.",
  },
  {
    icon: Sparkles,
    title: "Body Image Concerns",
    description:
      "A supportive space to explore concerns around body image, self-perception, confidence, and emotional well-being.",
  },
  {
    icon: ClipboardCheck,
    title: "Psychological Assessment",
    description:
      "Psychological and psychometric assessments to better understand emotional, behavioural, cognitive, and personality-related concerns.",
  },
  {
    icon: Brain,
    title: "Complex Mental Health Concerns",
    description:
      "Professional support and psychological assessment for individuals experiencing personality-related or psychotic disorders, within the appropriate scope of practice.",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Areas of Support"
          title="Support for the concerns that can feel difficult to navigate alone."
          description="Manvi works with adults, students, and parents or caregivers across a range of emotional, relational, and psychological concerns."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {areasOfSupport.map((item) => (
            <ExpertiseCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-muted-foreground">
          Every person's situation is different. An initial consultation can
          help understand your concerns and determine the most appropriate
          next step.
        </p>
      </Container>
    </section>
  );
}