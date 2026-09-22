import { Section } from "@/components/sections/Section";
import { site } from "@/data/site";

export function About() {
  return (
    <Section id="about" title="À propos">
      <p className="text-muted max-w-2xl">{site.description}</p>
    </Section>
  );
}
