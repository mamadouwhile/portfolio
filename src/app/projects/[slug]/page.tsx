import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    <article className="mx-auto max-w-3xl px-4 py-16">
      <Link href="/projects" className="text-sm text-muted hover:text-foreground">
        ← Tous les projets
      </Link>
      <h1 className="mt-4 text-3xl font-bold">{project.name}</h1>
      <p className="mt-2 text-muted">{project.tagline}</p>
      {project.liveUrl ? (
        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="mt-6 inline-block underline">
          Voir le site en ligne
        </a>
      ) : null}
    </article>
  );
}
