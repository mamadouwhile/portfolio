import { Section } from "@/components/sections/Section";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" title="Parcours">
      <ol className="space-y-6 border-l border-border pl-6">
        {experience.map((item) => (
          <li key={item.title}>
            <p className="text-xs text-muted">{item.period}</p>
            <h3 className="font-medium">
              {item.title} — {item.organization}
            </h3>
            <p className="mt-1 text-sm text-muted">{item.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
