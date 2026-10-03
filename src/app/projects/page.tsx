import type { Metadata } from "next";

import { ContactStrip } from "@/components/home/ContactStrip";
import { Projects } from "@/components/sections/Projects";
import { projects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Projets",
  description: `${projects.length} projets réels, dont InterUni (plateforme étudiante web, mobile et API) : accroche, stack, statut et liens de chaque réalisation.`,
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <Projects headingLevel="h1" />
      <ContactStrip />
    </>
  );
}
