import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { HeroSpotlight } from "@/components/sections/HeroSpotlight";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

const featured = projects.find((project) => project.featured);
const productionCount = projects.filter((project) => project.status === "production").length;
const apiProjectsCount = projects.filter((project) =>
  project.repos.some((repo) => repo.label.includes("api")),
).length;

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
        className="mx-auto grid max-w-6xl gap-12 px-4 pt-16 pb-20 md:px-6 md:pt-24 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:pb-28"
      >
        <div className="min-w-0">
          <Reveal>
            <p className="font-mono text-xs tracking-widest text-accent uppercase">
              {site.role} · {site.location}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              id="hero-title"
              className="mt-5 text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-6xl"
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
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg text-pretty text-muted">
              Développeur fullstack, du code à la mise en production. {site.description}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          </Reveal>
          <Reveal delay={0.2}>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <dt className="text-xs text-muted">{stat.label}</dt>
                  <dd className="order-first font-display text-3xl font-semibold">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="min-w-0">
          <figure className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/20">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span aria-hidden="true" className="size-2.5 rounded-full bg-border" />
              <span aria-hidden="true" className="size-2.5 rounded-full bg-border" />
              <span aria-hidden="true" className="size-2.5 rounded-full bg-border" />
              <figcaption className="ml-2 font-mono text-xs text-muted">profil.ts</figcaption>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
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
        </Reveal>
      </section>
    </HeroSpotlight>
  );
}
