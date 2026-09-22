import { Section } from "@/components/sections/Section";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" title="Parcours">
      <ol className="border-border space-y-6 border-l pl-6">
        {experience.map((item) => (
          <li key={item.title}>
            <p className="text-muted text-xs">{item.period}</p>
            <h3 className="font-medium">
              {item.title} — {item.organization}
            </h3>
            <p className="text-muted mt-1 text-sm">{item.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
