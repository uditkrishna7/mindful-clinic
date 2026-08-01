import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
}

export default function ContactCard({
  icon: Icon,
  title,
  value,
  href,
}: ContactCardProps) {
  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group block rounded-2xl border border-border/60 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
    >
      <Icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />

      <h3 className="mt-4 text-lg font-bold tracking-tight">
        {title}
      </h3>

      <p className="mt-2 text-muted-foreground">
        {value}
      </p>
    </a>
  );
}