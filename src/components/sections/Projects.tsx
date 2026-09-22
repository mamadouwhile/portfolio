import Link from "next/link";

import { Section } from "@/components/sections/Section";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projects" title="Projets">
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug} className="rounded-lg border border-border p-4">
            <h3 className="font-medium">
              <Link href={`/projects/${project.slug}`} className="hover:underline">
                {project.name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-muted">{project.tagline}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
