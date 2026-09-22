import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { HeroSpotlight } from "@/components/sections/HeroSpotlight";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { skillGroups } from "@/data/skills";
import { techIcons } from "@/lib/tech-icons";

const featured = projects.find((project) => project.featured);
const productionCount = projects.filter((project) => project.status === "production").length;
const apiProjectsCount = projects.filter((project) =>
  project.repos.some((repo) => repo.label.includes("api")),
).length;

/** Bandeau « stack principale » : frontend + backend, uniquement les technos avec logo. */
const coreStack = skillGroups
  .filter((group) => group.id === "frontend" || group.id === "backend")
  .flatMap((group) => group.skills)
  .filter((skill) => techIcons[skill.name] && !skill.name.startsWith("Architecture"));

const stats = [
  { value: projects.length, label: "projets présentés" },
  { value: productionCount, label: "en production" },
  { value: apiProjectsCount, label: "architectures front / API séparées" },
];

export function Hero() {
  return (
    <HeroSpotlight>
      <section
        aria-labelledby="hero-title"
        className="mx-auto grid max-w-6xl gap-10 px-4 pt-10 pb-10 md:px-6 md:pt-14 md:pb-12 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-12 lg:pt-16"
      >
        <div className="min-w-0">
          <div className="animate-enter">
            <p className="font-mono text-xs tracking-widest text-accent uppercase">
              {site.role} · {site.location}
            </p>
          </div>
          <div className="animate-enter">
            <h1
              id="hero-title"
              className="mt-4 text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-6xl"
            >
              Des idées aux produits numériques{" "}
              <span className="relative whitespace-nowrap text-accent">
                déployés
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover/hero:scale-x-100"
                />
              </span>
              .
            </h1>
          </div>
          <div className="animate-enter">
            <p className="mt-5 max-w-xl text-base text-pretty text-muted md:text-lg">
              Développeur fullstack, du code à la mise en production. {site.description}
            </p>
          </div>
          <div className="animate-enter" style={{ animationDelay: "180ms" }}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Voir les projets
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-foreground"
              >
                Discuter d&apos;un projet
              </Link>
            </div>
          </div>
          <div className="animate-enter" style={{ animationDelay: "240ms" }}>
            <dl className="mt-8 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-5">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <dt className="text-xs text-muted">{stat.label}</dt>
                  <dd className="order-first font-display text-3xl font-semibold">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="min-w-0 animate-enter" style={{ animationDelay: "240ms" }}>
          <figure className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/20">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span aria-hidden="true" className="size-2.5 rounded-full bg-border" />
              <span aria-hidden="true" className="size-2.5 rounded-full bg-border" />
              <span aria-hidden="true" className="size-2.5 rounded-full bg-border" />
              <figcaption className="ml-2 font-mono text-xs text-muted">profil.ts</figcaption>
            </div>
            <pre className="p-5 font-mono text-[13px] leading-relaxed break-words whitespace-pre-wrap">
              <code>
                <span className="text-muted">{"// du code à la mise en production\n"}</span>
                <span className="text-accent">const</span>
                {" profil = {\n"}
                {"  role: "}
                <span className="text-success">{`"${site.role}"`}</span>
                {",\n  base: "}
                <span className="text-success">{`"${site.location}"`}</span>
                {",\n  stack: ["}
                <span className="text-success">{'"Next.js", "NestJS", "React Native"'}</span>
                {"],\n  disponible: "}
                <span className="text-accent">{String(site.availableForFreelance)}</span>
                {",\n};\n\n"}
                <span className="text-accent">await</span>
                {" deploy("}
                <span className="text-success">{`"${featured?.name ?? ""}"`}</span>
                {");\n"}
                <span className="text-muted">{`// → ${featured?.liveUrl?.replace("https://", "") ?? ""} ✓`}</span>
              </code>
            </pre>
            {featured?.liveUrl ? (
              <a
                href={featured.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between border-t border-border px-5 py-3 text-xs text-muted transition-colors hover:text-foreground"
              >
                Voir {featured.name} en production
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            ) : null}
          </figure>
        </div>
      </section>
      <div className="border-y border-border bg-surface/50">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 px-4 py-4 md:px-6">
          <p className="font-mono text-xs tracking-widest text-muted uppercase">Stack principale</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {coreStack.map((skill) => {
              const Icon = techIcons[skill.name];
              return (
                <li key={skill.name} className="flex items-center gap-2 text-sm text-muted">
                  {Icon ? <Icon className="size-4" aria-hidden /> : null}
                  {skill.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </HeroSpotlight>
  );
}
