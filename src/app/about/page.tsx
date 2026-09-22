import type { Metadata } from "next";

import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "À propos",
  description:
    "Étudiant en Licence Informatique à Angers et développeur web/mobile freelance : double positionnement, stack technique, parcours et façon de travailler.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <About headingLevel="h1" />
      <Skills />
      <Experience />
    </>
  );
}
