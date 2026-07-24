import { LucideIcon } from "lucide-react";

interface ExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ExpertiseCard({
  icon: Icon,
  title,
  description,
}: ExpertiseCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 transition hover:shadow-md">
      <Icon className="h-8 w-8 text-primary" />

      <h3 className="mt-4 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-muted-foreground leading-7">
        {description}
      </p>
    </div>
  );
}