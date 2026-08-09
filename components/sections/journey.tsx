import Container from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import TimelineItem from "@/components/ui/timeline-item";

const journey = [
  {
    duration: "11 Months",
    title: "Consultant Psychologist",
    organization: "Inner Sanctuary, Sanatan Healthcare • Tagore Town, Prayagraj",
    description:
      "Delivered individual psychotherapy and counselling across diverse mental health presentations. Conducted psychometric evaluations, formulated tailored intervention plans, facilitated community wellness workshops, and contributed to institutional outreach and mental health awareness programmes.",
  },
  {
    duration: "Apr 2026 – Jun 2026",
    title: "Rehabilitation / NGO Counsellor",
    organization: "Samadhan Abhiyan • Rehabilitation Centre, Prayagraj",
    description:
      "Provided rehabilitation counselling to individuals experiencing substance use and psychosocial challenges. Co-developed individualised recovery plans, facilitated group therapy and psychoeducation sessions, and worked alongside a multidisciplinary team.",
  },
  {
    duration: "6 Months",
    title: "Clinical Psychology Intern",
    organization: "Manasthan Clinic • Prayagraj",
    description:
      "Administered standardised psychological assessments, maintained clinical case documentation, and developed experience in the assessment and management of anxiety, depression, and related psychological concerns.",
  },
  {
    duration: "8 Months",
    title: "Trainee Clinical Psychologist",
    organization: "Clinical Setting • Prayagraj",
    description:
      "Assisted with psycho-diagnostic procedures and standardised psychological assessments while supporting therapy sessions for clients experiencing anxiety and depression under clinical supervision.",
  },
  {
    duration: "Professional Experience",
    title: "Junior & Associate Psychologist",
    organization: "Counsel India • Manasthan Clinic • Samadhan Abhiyan",
    description:
      "Built practical experience through counselling, psychological testing, case management, therapeutic intervention, and recovery planning across varied client demographics and rehabilitation settings.",
  },
  {
    duration: "Professional Practice",
    title: "Consultant Psychologist — Pro Bono",
    organization: "HroHour",
    description:
      "Provided pro bono psychological consultations and mental health support while contributing to accessible mental health services and community wellbeing initiatives.",
  },
  {
    duration: "2024 – 2026",
    title: "Master's in Clinical Psychology",
    organization: "Amity University, Noida • Pursuing",
    description:
      "Advanced academic training in Clinical Psychology alongside practical experience in psychological assessment, counselling, psychotherapy, clinical research, and mental health practice.",
  },
  {
    duration: "2021 – 2024",
    title: "Bachelor's in Philosophy & Psychology",
    organization: "Ewing Christian College • Prayagraj",
    description:
      "Undergraduate foundation in Philosophy and Psychology, providing the academic foundation for further training and professional development in clinical psychology.",
  },
];

export default function Journey() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Professional Journey"
          title="Experience shaped across clinical, counselling & community settings."
          description="A growing professional journey combining academic training with practical experience across psychological care, assessment, counselling, rehabilitation, and community mental health."
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
      </Container>
    </section>
  );
}