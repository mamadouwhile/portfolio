import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { GITHUB_PROFILE } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";

type ProjectLinksProps = {
  project: Project;
  className?: string;
};

/** Liens GitHub + démo. Sans dépôt connu, renvoie vers le profil GitHub. */
export function ProjectLinks({ project, className }: ProjectLinksProps) {
  const repos =
    project.repos.length > 0 ? project.repos : [{ label: "Profil GitHub", href: GITHUB_PROFILE }];

  return (
    <ul className={cn("relative z-20 flex flex-wrap gap-2", className)}>
      {project.liveUrl ? (
        <li>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Démo en ligne
            <ArrowUpRight className="size-3.5" aria-hidden />
            <span className="sr-only">de {project.name} (nouvel onglet)</span>
          </a>
        </li>
      ) : null}
      {repos.map((repo) => (
        <li key={repo.href}>
          <a
            href={repo.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-foreground hover:text-foreground"
          >
            <SiGithub className="size-3.5" aria-hidden />
            {repo.label}
            <span className="sr-only"> sur GitHub (nouvel onglet)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
