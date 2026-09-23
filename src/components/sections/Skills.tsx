import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/sections/Section";
import { skillGroups } from "@/data/skills";
import { categoryIcons, techIcons } from "@/lib/tech-icons";
import { cn } from "@/lib/utils";
import type { SkillCategoryId } from "@/types/content";

/** Bento : le frontend (cœur de métier) et les groupes les plus fournis prennent plus de place. */
const layout: Partial<Record<SkillCategoryId, string>> = {
  web: "md:col-span-2",
  automation: "md:col-span-2",
  learning: "md:col-span-2 lg:col-span-4 border-dashed bg-transparent",
};
const wide: SkillCategoryId[] = ["web", "automation", "learning"];

export function Skills() {
  return (
    <Section
      id="stack"
      eyebrow="02 — Stack"
      title="Du développement web aux tests automatisés et à l'IA."
      lead="Les outils que j'utilise en projet et en entreprise, regroupés par rôle — et ceux que je renforce en ce moment."
    >
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => {
          const CategoryIcon = categoryIcons[group.id];
          const isWide = wide.includes(group.id);

          return (
            <Reveal
              as="li"
              key={group.id}
              className={cn("bento-card flex flex-col p-5", layout[group.id])}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <CategoryIcon className="size-4" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold">{group.category}</h3>
              </div>
              <p className="mt-2 text-sm text-muted">{group.summary}</p>

              <ul
                className={cn(
                  "mt-4 grid gap-2",
                  isWide ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1",
                )}
              >
                {group.skills.map((skill) => {
                  const Icon = techIcons[skill.name];
                  return (
                    <li
                      key={skill.name}
                      className={cn(
                        "flex items-center gap-3 rounded-xl border border-border bg-background px-3 py-2 text-sm",
                      )}
                    >
                      {Icon ? <Icon className="size-4 shrink-0 text-muted" aria-hidden /> : null}
                      <span className="font-medium">{skill.name}</span>
                      {skill.note ? (
                        <span className="ml-auto rounded-full bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted">
                          {skill.note}
                        </span>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
