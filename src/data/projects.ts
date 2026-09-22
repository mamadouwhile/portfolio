import type { Project } from "@/types/content";

// Fiches complètes (accroche, problème, solution, captures) ajoutées au Bloc 2.
export const projects: Project[] = [
  {
    slug: "2dk-it",
    name: "2DK IT",
    tagline: "Plateforme web déployée en production sur Vercel.",
    status: "production",
    stack: [],
    liveUrl: "https://2dk-it.vercel.app",
    featured: true,
  },
  {
    slug: "westafine",
    name: "Westafine",
    tagline: "Projet TypeScript avec une API dédiée.",
    status: "en-cours",
    stack: ["TypeScript"],
  },
  {
    slug: "black-sphere",
    name: "Black Sphere",
    tagline: "Application et API dédiée.",
    status: "en-cours",
    stack: [],
  },
  {
    slug: "interuni",
    name: "Interuni",
    tagline: "Projet TypeScript en développement actif.",
    status: "en-cours",
    stack: ["TypeScript"],
  },
  {
    slug: "botarena",
    name: "BotArena",
    tagline: "Exploration technique et algorithmique.",
    status: "exploration",
    stack: ["Python"],
  },
  {
    slug: "ai-resume-analyzer",
    name: "AI-Resume-Analyzer",
    tagline: "IA appliquée à l'analyse de CV.",
    status: "exploration",
    stack: ["Python"],
  },
  {
    slug: "assistant-messagerie-ia",
    name: "Assistant de messagerie IA",
    tagline: "Assistance client automatisée basée sur l'IA.",
    status: "exploration",
    stack: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
