import { Section } from "@/components/sections/Section";
import { site } from "@/data/site";

export function About() {
  return (
    <Section id="about" title="À propos">
      <p className="max-w-2xl text-muted">{site.description}</p>
    </Section>
  );
}
