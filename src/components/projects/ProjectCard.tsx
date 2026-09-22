import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { ProjectStatusBadge } from "@/components/projects/ProjectStatusBadge";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";

type ProjectCardProps = {
  project: Project;
  variant?: "featured" | "wide" | "default";
};

export function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const isWide = variant === "wide";

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/60",
        isWide && "lg:flex-row",
      )}
    >
      <div
        className={cn(
          "relative",
          isWide && "lg:w-2/5 lg:shrink-0",
          isFeatured && "lg:flex lg:flex-1 lg:flex-col",
        )}
      >
        <ProjectVisual
          project={project}
          priority={isFeatured}
          dense={isFeatured}
          sizes={isFeatured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className={cn(
            "border-b border-border",
            isFeatured ? "aspect-[16/9] lg:aspect-auto lg:min-h-64 lg:flex-1" : "aspect-[2/1]",
            isWide && "lg:aspect-auto lg:h-full lg:min-h-56 lg:border-r lg:border-b-0",
          )}
        />
        <div className="absolute top-3 left-3">
          <ProjectStatusBadge status={project.status} />
        </div>
      </div>

      <div className={cn("flex flex-1 flex-col p-5", isFeatured && "md:p-6 lg:flex-none")}>
        {isFeatured ? (
          <p className="font-mono text-xs tracking-widest text-accent uppercase">Projet phare</p>
        ) : null}
        <h3 className={cn("font-semibold", isFeatured ? "mt-2 text-2xl md:text-3xl" : "text-xl")}>
          <Link
            href={`/projects/${project.slug}`}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          >
            {project.name}
          </Link>
        </h3>
        <p className={cn("mt-2 text-pretty text-muted", isFeatured && "text-lg")}>
          {project.tagline}
        </p>

        {project.stack.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Stack utilisée">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md bg-surface-2 px-2 py-1 font-mono text-[11px] text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-5">
          <ProjectLinks project={project} />
          <ArrowRight
            className="size-4 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
            aria-hidden
          />
        </div>
      </div>
    </article>
  );
}
