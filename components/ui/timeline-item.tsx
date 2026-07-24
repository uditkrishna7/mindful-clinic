interface TimelineItemProps {
  duration: string;
  title: string;
  organization: string;
  description: string;
  isLast: boolean;
}

export default function TimelineItem({
  duration,
  title,
  organization,
  description,
  isLast,
}: TimelineItemProps) {
  return (
    <div className="relative flex gap-8">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="relative flex h-5 w-5 items-center justify-center">
          <div className="absolute h-5 w-5 rounded-full bg-primary/20" />
          <div className="h-3 w-3 rounded-full bg-primary" />
        </div>

        {!isLast && (
          <div className="mt-2 h-full w-px bg-border" />
        )}
      </div>

      {/* Content */}
      <div className="rounded-2xl border border-border/60 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
        <p className="text-sm font-semibold text-primary">
          {duration}
        </p>

        <h3 className="mt-2 text-xl font-bold tracking-tight">
          {title}
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          {organization}
        </p>

        <p className="mt-4 leading-7 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}