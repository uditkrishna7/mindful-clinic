import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center">
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Clinical Psychologist
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Manvi Mehrotra
          </h1>

          <p className="mt-8 text-xl leading-8 text-muted-foreground">
            Supporting emotional well-being through compassionate,
            evidence-based psychological care.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg">
              Contact Me
            </Button>

            <Button variant="outline" size="lg">
              Download Resume
            </Button>
          </div>

          <div className="mt-16 grid gap-6 text-left sm:grid-cols-2">
            <div>
              <h3 className="font-semibold">
                Psychological Assessment
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Evidence-based evaluation to better understand emotional,
                behavioural and cognitive concerns.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Mental Health Advocacy
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Promoting awareness, education and compassionate conversations
                around mental well-being.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}