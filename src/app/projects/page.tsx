import type { Metadata } from "next";

import { Projects } from "@/components/sections/Projects";
import { projects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Projets",
  description: `${projects.length} projets réels, dont 2DK IT en production : accroche, stack, statut et liens GitHub de chaque réalisation.`,
  path: "/projects",
});

export default function ProjectsPage() {
  return <Projects headingLevel="h1" />;
}
