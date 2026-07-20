export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Manvi Mehrotra
        </h1>

        <p className="mt-3 text-xl text-muted-foreground">
          Clinical Psychologist
        </p>

        <div className="mt-8 max-w-2xl">
          <p className="text-lg leading-8 text-muted-foreground">
            I am a Clinical Psychology postgraduate dedicated to promoting
            emotional well-being through evidence-based psychological care.
            My interests include psychological assessment, psychotherapy,
            research, and mental health advocacy. This website serves as a
            platform to share my professional journey, research, and resources
            while making it easier for recruiters, institutions, and clients to
            connect with me.
          </p>
        </div>
      </section>
    </main>
  );
}