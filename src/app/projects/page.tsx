import type { Metadata } from "next";

import { Projects } from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projets",
};

export default function ProjectsPage() {
  return <Projects />;
}
