import type { Metadata } from "next";

import { ContactStrip } from "@/components/home/ContactStrip";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "À propos",
  description:
    "Étudiant en Licence 3 Informatique à Angers, développeur fullstack freelance et ancien testeur automaticien : stack, tests & QA, automatisation IA, parcours et certifications.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <About headingLevel="h1" />
      <Skills />
      <Experience />
      <ContactStrip />
    </>
  );
}
