import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/sections/Section";
import { skillGroups } from "@/data/skills";
import { categoryIcons, techIcons } from "@/lib/tech-icons";
import { cn } from "@/lib/utils";

/** Bento : le frontend (cœur de métier) et les groupes les plus fournis prennent plus de place. */
const layout: Record<string, string> = {
  frontend: "md:col-span-2",
  tools: "lg:col-span-2",
  learning: "md:col-span-2 border-dashed bg-transparent",
};

export function Skills() {
  return (
    <Section
      id="stack"
      eyebrow="02 — Stack"
      title="Une stack JavaScript/TypeScript, du navigateur au serveur."
      lead="Les outils que j'utilise en projet, regroupés par rôle — et ceux que je renforce en ce moment."
    >
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => {
          const CategoryIcon = categoryIcons[group.id];
          const isWide = group.id !== "backend" && group.id !== "database";

          return (
            <Reveal
              as="li"
              key={group.id}
              className={cn(
                "flex flex-col rounded-2xl border border-border bg-surface p-5",
                layout[group.id],
              )}
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
