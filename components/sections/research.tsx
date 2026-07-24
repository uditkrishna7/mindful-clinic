import Container from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import ResearchCard from "@/components/ui/research-card";

const research = [
  {
    title:
      "Effect of Parenting on People with Borderline Personality Disorder",
    type: "Dissertation",
    description:
      "An academic study exploring how parenting styles influence emotional regulation, interpersonal relationships, and behavioural patterns among individuals with Borderline Personality Disorder.",
  },
  {
    title:
      "Parental Stress among Caregivers of Children with Cerebral Palsy",
    type: "Dissertation",
    description:
      "A research project examining the psychological impact, stress levels, and coping mechanisms experienced by caregivers of children living with Cerebral Palsy.",
  },
];

export default function Research() {
  return (
    <section id="research" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Research & Publications"
          title="Committed to evidence-based psychological research."
          description="Research interests focused on understanding human behaviour, caregiving, emotional well-being, and improving clinical practice through scientific inquiry."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {research.map((item) => (
            <ResearchCard
              key={item.title}
              title={item.title}
              type={item.type}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}