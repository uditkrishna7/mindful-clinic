import Container from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import ExpertiseCard from "@/components/ui/expertise-card";

import {
  Brain,
  HeartHandshake,
  Users,
  Megaphone,
} from "lucide-react";

export default function Expertise() {
  return (
    <section id="expertise" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Expertise"
          title="Supporting emotional well-being through evidence-based psychological care."
          description="Areas of professional focus shaped by clinical training, counselling experience, and a commitment to compassionate mental healthcare."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <ExpertiseCard
            icon={Brain}
            title="Psychological Assessment"
            description="Evidence-based psychological and psychometric assessments to understand emotional, behavioural, and cognitive concerns."
          />

          <ExpertiseCard
            icon={HeartHandshake}
            title="Anxiety & Depression"
            description="Supporting individuals experiencing anxiety, depression, persistent sadness, and emotional distress through evidence-based therapeutic care."
          />

          <ExpertiseCard
            icon={Users}
            title="Relationship & Adolescent Well-being"
            description="Helping adolescents and adults navigate relationship challenges, emotional regulation, self-esteem, and life transitions."
          />

          <ExpertiseCard
            icon={Megaphone}
            title="Mental Health Advocacy"
            description="Promoting awareness through counselling, psychoeducation, community outreach, and evidence-based mental health initiatives."
          />
        </div>
      </Container>
    </section>
  );
}