interface ResearchCardProps {
  title: string;
  type: string;
  description: string;
}

export default function ResearchCard({
  title,
  type,
  description,
}: ResearchCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
      <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
        {type}
      </span>

      <h3 className="mt-5 text-xl font-bold tracking-tight">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}