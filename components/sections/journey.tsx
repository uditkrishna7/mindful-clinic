import Container from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import TimelineItem from "@/components/ui/timeline-item";

const journey = [
  {
    duration: "Aug 2025 – Present",
    title: "Consultant Psychologist",
    organization: "Inner Sanctuary, Sanatan Healthcare • Prayagraj",
    description:
      "Delivering individual psychotherapy and counselling across diverse mental health presentations. Conducting psychometric assessments, developing personalised intervention plans, and leading community mental health awareness programmes in collaboration with hospitals and NGOs.",
  },
  {
    duration: "Apr 2026 – Present",
    title: "Clinical Psychology Intern",
    organization: "Samadhan Abhiyaan • Remote",
    description:
      "Providing rehabilitation counselling for individuals with substance use and psychosocial challenges, facilitating psychoeducation workshops, and supporting multidisciplinary recovery planning.",
  },
  {
    duration: "Jul 2026",
    title: "Master's in Clinical Psychology",
    organization: "Postgraduate Qualification",
    description:
      "Completed postgraduate training in Clinical Psychology with a strong foundation in psychotherapy, psychological assessment, clinical research, and evidence-based mental healthcare.",
  },
  {
    duration: "Professional Development",
    title: "Clinical Training & Early Practice",
    organization: "Manasthan Clinic • MHI • Counsel India",
    description:
      "Built clinical experience through internships and counselling roles involving psychological assessments, case documentation, psychotherapy support, and evidence-based interventions for anxiety, depression, and related mental health concerns.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Professional Journey"
          title="A journey of continuous learning, clinical excellence, and compassionate care."
          description="Professional experiences that have shaped Manvi's evidence-based and client-centred approach to mental healthcare."
        />

        <div className="mt-16 space-y-8">
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
      </Container>
    </section>
  );
}