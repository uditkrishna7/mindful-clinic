import Container from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";

export default function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Helping individuals navigate emotional well-being with compassion and evidence."
          description="My approach combines scientific understanding with empathy, creating a safe and supportive environment for personal growth and mental well-being."
        />

        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-8 text-muted-foreground">
            As a Clinical Psychology postgraduate, I am passionate about
            psychological assessment, psychotherapy, research, and mental health
            advocacy. My goal is to provide thoughtful, evidence-based care while
            contributing to greater awareness and understanding of mental health.
          </p>
        </div>
      </Container>
    </section>
  );
}