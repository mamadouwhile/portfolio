import { Section } from "@/components/sections/Section";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section id="stack" title="Stack">
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="font-medium">{group.category}</h3>
            <ul className="text-muted mt-2 text-sm">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
