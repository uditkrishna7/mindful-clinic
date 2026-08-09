import Container from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";

export default function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title="A thoughtful, evidence-based approach to mental health."
          description="I believe psychological support begins with creating a space where you can feel heard, understood, and respected."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <p className="text-lg leading-8 text-muted-foreground">
            I have completed my Master&apos;s in Clinical Psychology and have
            developed hands-on experience across clinical, counselling,
            rehabilitation, and community mental health settings. My work
            involves psychological assessment, psychotherapy, counselling,
            psychoeducation, and supporting individuals through a range of
            emotional and psychological concerns.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            My approach is compassionate, professional, and grounded in
            evidence-based psychological practice. I aim to create a
            confidential, non-judgmental space where individuals can better
            understand their experiences, work through their concerns, and
            move towards meaningful change at their own pace.
          </p>
        </div>
      </Container>
    </section>
  );
}