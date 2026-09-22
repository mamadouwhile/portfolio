import type { Metadata } from "next";

import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";

export const metadata: Metadata = {
  title: "À propos",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Skills />
      <Experience />
    </>
  );
}
