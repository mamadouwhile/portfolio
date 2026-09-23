import { BentoCard } from "@/components/bento/BentoCard";
import { projects } from "@/data/projects";
import { statusLabels } from "@/lib/project-meta";
import { cn } from "@/lib/utils";

const featured = projects.slice(0, 3);

export function ProjectsCard({ className }: { className?: string }) {
  return (
    <BentoCard label="Réalisations" title="Projets" href="/projects" className={className}>
      <ul className="space-y-1.5">
        {featured.map((project) => (
          <li key={project.slug} className="flex items-center justify-between gap-3 text-sm">
            <span className="truncate font-medium">{project.name}</span>
            <span className="flex shrink-0 items-center gap-1.5 font-mono text-[10px] text-muted">
              <span
                aria-hidden="true"
                className={cn(
                  "size-1.5 rounded-full",
                  project.status === "production" ? "bg-success" : "bg-accent",
                )}
              />
              {statusLabels[project.status]}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-2 font-mono text-[11px] text-muted">
        + {projects.length - featured.length} autres projets
      </p>
    </BentoCard>
  );
}
