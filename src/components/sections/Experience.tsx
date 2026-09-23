import { Award, Briefcase, GraduationCap, Languages } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/sections/Section";
import { certifications, experience, spokenLanguages } from "@/data/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="04 — Parcours"
      title="Formation, missions et expérience en entreprise."
      lead="Des fondamentaux universitaires, deux expériences chez TechTrend Solutions (développement puis test automatisé) et une activité freelance en parallèle des études."
    >
      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <ol className="relative">
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[15px] w-px bg-gradient-to-b from-accent via-border to-transparent"
          />
          {experience.map((item) => {
            const Icon = item.kind === "work" ? Briefcase : GraduationCap;

            return (
              <Reveal
                as="li"
                key={`${item.title}-${item.period}`}
                className="relative pb-8 pl-12 last:pb-0"
              >
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
                <p className="text-sm text-muted">
                  {item.organization}
                  {item.location ? ` · ${item.location}` : null}
                </p>
                <p className="mt-2 text-pretty text-muted">{item.description}</p>
                {item.highlights.length > 0 ? (
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
                ) : null}
              </Reveal>
            );
          })}
        </ol>

        <div className="space-y-4">
          <Reveal className="bento-card p-5">
            <h3 className="flex items-center gap-2 font-semibold">
              <Award className="size-4 text-accent" aria-hidden />
              Certifications
            </h3>
            <ul className="mt-4 space-y-3">
              {certifications.map((certification) => (
                <li key={certification.title}>
                  <p className="text-sm leading-snug font-medium">{certification.title}</p>
                  <p className="text-xs text-muted">
                    {certification.issuer} · {certification.year}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="bento-card p-5">
            <h3 className="flex items-center gap-2 font-semibold">
              <Languages className="size-4 text-accent" aria-hidden />
              Langues
            </h3>
            <ul className="mt-4 space-y-2">
              {spokenLanguages.map((language) => (
                <li key={language.name} className="flex justify-between gap-3 text-sm">
                  <span className="font-medium">{language.name}</span>
                  <span className="text-muted">{language.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
