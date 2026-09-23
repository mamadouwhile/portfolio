import { Briefcase, GraduationCap } from "lucide-react";

import { BentoCard } from "@/components/bento/BentoCard";
import { experience } from "@/data/experience";

export function ExperienceCard({ className }: { className?: string }) {
  return (
    <BentoCard
      label="Formation & missions"
      title="Parcours"
      href="/about#experience"
      className={className}
    >
      <ul className="space-y-1">
        {experience.slice(0, 3).map((item) => {
          const Icon = item.kind === "work" ? Briefcase : GraduationCap;
          return (
            <li key={`${item.title}-${item.period}`} className="flex gap-3">
              <Icon className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
              <div className="min-w-0">
                <p className="truncate text-sm leading-snug font-medium">{item.shortTitle}</p>
                <p className="truncate text-xs text-muted">{item.period}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </BentoCard>
  );
}
