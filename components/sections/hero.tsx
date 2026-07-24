import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40">
      {/* Soft background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute right-1/4 bottom-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <Container>
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Clinical Psychologist • Mental Health Professional
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
            Manvi Mehrotra
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-muted-foreground sm:text-2xl">
            Supporting emotional well-being through compassionate,
            evidence-based psychological care in a safe and understanding
            environment.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Button
              size="lg"
              className="rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Contact Me
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Download Resume
            </Button>

          </div>


          <div className="mt-20 grid gap-6 text-left sm:grid-cols-2">

            <div className="rounded-2xl border border-border/60 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">

              <h3 className="text-lg font-semibold text-primary">
                Psychological Assessment
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                Evidence-based psychological evaluation to understand
                emotional, behavioural, and cognitive concerns.
              </p>

            </div>


            <div className="rounded-2xl border border-border/60 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">

              <h3 className="text-lg font-semibold text-primary">
                Mental Health Advocacy
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                Promoting awareness, psychoeducation, and compassionate
                conversations around mental well-being.
              </p>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}