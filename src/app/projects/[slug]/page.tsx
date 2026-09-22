import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { ProjectStatusBadge } from "@/components/projects/ProjectStatusBadge";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return { title: project.name, description: project.tagline };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Tous les projets
      </Link>

      <header className="mt-6">
        <ProjectStatusBadge status={project.status} />
        <h1 className="mt-3 text-4xl leading-[1.1] font-semibold md:text-5xl">{project.name}</h1>
        <p className="mt-3 text-lg text-pretty text-muted md:text-xl">{project.tagline}</p>
      </header>

      <ProjectVisual
        project={project}
        priority
        sizes="(min-width: 896px) 896px, 100vw"
        className="mt-8 aspect-[16/9] rounded-2xl border border-border"
      />

      <div className="mt-8 grid gap-8 md:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="text-xl font-semibold">Le projet</h2>
          <p className="mt-3 text-pretty text-muted">{project.description}</p>
        </div>
        <dl className="space-y-6">
          {project.stack.length > 0 ? (
            <div>
              <dt className="font-mono text-xs tracking-widest text-muted uppercase">Stack</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-md bg-surface-2 px-2 py-1 font-mono text-xs">
                    {tech}
                  </span>
                ))}
              </dd>
            </div>
          ) : null}
          <div>
            <dt className="font-mono text-xs tracking-widest text-muted uppercase">Liens</dt>
            <dd className="mt-2">
              <ProjectLinks project={project} />
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
