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
          <li key={project.slug} className="flex items-center gap-2.5 text-sm">
            <span
              aria-hidden="true"
              title={statusLabels[project.status]}
              className={cn(
                "size-2 shrink-0 rounded-full",
                project.status === "production" && "bg-success",
                project.status === "en-developpement" && "bg-accent",
                project.status === "exploration" && "border border-muted",
              )}
            />
            <span className="truncate font-medium">{project.name}</span>
            <span className="sr-only"> — {statusLabels[project.status]}</span>
          </li>
        ))}
      </ul>
      <p className="mt-2 font-mono text-[11px] text-muted">
        + {projects.length - featured.length} autres projets
      </p>
    </BentoCard>
  );
}
