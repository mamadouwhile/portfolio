import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Section } from "@/components/sections/Section";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

/*
 * Bento asymétrique sur 6 colonnes (lg) :
 * [ projet phare 4×2 ][ 2 ]
 * [                  ][ 2 ]
 * [ 2 ][ 2 ][ 2 ]
 * [ carte large 6    ]
 */
const placement = [
  "md:col-span-2 lg:col-span-4 lg:row-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-6",
];

export function Projects() {
  const featured = projects.find((project) => project.featured);
  const others = projects.filter((project) => !project.featured);
  const ordered = featured ? [featured, ...others] : others;

  return (
    <Section
      id="projects"
      eyebrow="03 — Projets"
      title="Des projets réels, du prototype à la production."
      lead="Réalisations personnelles et missions : chaque fiche indique le problème traité, la stack et l'état du projet."
    >
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        {ordered.map((project, index) => {
          const isLast = index === ordered.length - 1;
          const variant = project.featured ? "featured" : isLast ? "wide" : "default";

          return (
            <Reveal as="li" key={project.slug} className={cn(placement[index])}>
              <ProjectCard project={project} variant={variant} />
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
