import Container from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";

export default function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="About Manvi"
          title="A thoughtful, compassionate approach to psychological care."
          description="Psychological support begins with feeling heard, understood, and respected."
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm sm:p-10">
            <div className="space-y-6 text-lg leading-8 text-muted-foreground">
              <p>
                I am Manvi Mehrotra, a Mental Health Professional and
                Psychotherapist currently pursuing my Master's in Clinical
                Psychology. My experience has allowed me to work across
                clinical, counselling, community, and rehabilitation settings.
              </p>

              <p>
                My work involves psychological assessment, psychometric
                evaluation, counselling, and therapeutic support for people
                navigating a range of emotional and psychological concerns.
              </p>

              <p>
                I believe that seeking psychological support should feel
                approachable and non-judgmental. Every person's experiences
                are different, which is why I aim to understand the individual
                behind the concern rather than reducing someone to a diagnosis
                or label.
              </p>

              <p>
                My approach combines psychological science and evidence-based
                practice with empathy, confidentiality, and genuine human
                connection.
              </p>
            </div>

            <div className="mt-10 grid gap-4 border-t border-border/60 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-primary">
                  Clinical Psychology
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Assessment & psychological support
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-primary">
                  Client Focus
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Adults, students & caregivers
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-primary">
                  Approach
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Compassionate & evidence-based
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}