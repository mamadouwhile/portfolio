import { Section } from "@/components/sections/Section";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section id="stack" eyebrow="02 — Stack" title="Stack">
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="font-medium">{group.category}</h3>
            <ul className="mt-2 text-sm text-muted">
              {group.skills.map((skill) => (
                <li key={skill.name}>{skill.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
