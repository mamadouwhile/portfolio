import { Briefcase, GraduationCap } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/sections/Section";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="04 — Parcours"
      title="Un parcours mené en parallèle : formation et missions."
      lead="La Licence apporte les fondamentaux, l'activité freelance les confronte à des projets réels."
    >
      <ol className="relative max-w-3xl">
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[15px] w-px bg-gradient-to-b from-accent via-border to-transparent"
        />
        {experience.map((item) => {
          const Icon = item.organization === "Indépendant" ? Briefcase : GraduationCap;

          return (
            <Reveal as="li" key={item.title} className="relative pb-8 pl-12 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 inline-flex size-8 items-center justify-center rounded-full border border-border bg-background text-accent"
              >
                <Icon className="size-4" />
              </span>
              <p className="font-mono text-xs tracking-widest text-accent uppercase">
                {item.period}
              </p>
              <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-muted">{item.organization}</p>
              <p className="mt-2 text-pretty text-muted">{item.description}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Points clés">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
