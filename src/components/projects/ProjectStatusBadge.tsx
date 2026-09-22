import { statusLabels } from "@/lib/project-meta";
import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/types/content";

const dotStyles: Record<ProjectStatus, string> = {
  production: "bg-success",
  "en-developpement": "bg-accent",
  exploration: "border border-muted",
};

export function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-2.5 py-1 font-mono text-[11px] text-muted backdrop-blur">
      <span aria-hidden="true" className={cn("size-1.5 rounded-full", dotStyles[status])} />
      {statusLabels[status]}
    </span>
  );
}
