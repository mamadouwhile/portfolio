import { BentoCard } from "@/components/bento/BentoCard";
import { skillGroups } from "@/data/skills";
import { techIcons } from "@/lib/tech-icons";

const core = skillGroups
  .flatMap((group) => group.skills)
  .filter((skill) => skill.featured && techIcons[skill.name]);

export function StackCard({ className }: { className?: string }) {
  return (
    <BentoCard label="Technologies" title="Stack" href="/about#stack" className={className}>
      <ul className="grid grid-cols-5 gap-2" aria-label="Technologies principales">
        {core.map((skill) => {
          const Icon = techIcons[skill.name];
          return (
            <li
              key={skill.name}
              title={skill.name}
              className="flex aspect-square items-center justify-center rounded-xl border border-border bg-background/60"
            >
              {Icon ? <Icon className="size-4 text-muted" aria-hidden /> : null}
              <span className="sr-only">{skill.name}</span>
            </li>
          );
        })}
      </ul>
    </BentoCard>
  );
}
