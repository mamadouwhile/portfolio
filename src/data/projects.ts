import type { Project } from "@/types/content";

const GITHUB = "https://github.com/mamadouwhile";

/*
 * Captures : déposer les fichiers dans /public/images/projects/<slug>-screenshot.png.
 * Tant qu'un fichier est absent, une illustration géométrique est affichée à la place.
 */
export const projects: Project[] = [
  {
    slug: "2dk-it",
    name: "2DK IT",
    tagline: "Une plateforme web pensée, développée et mise en production de bout en bout.",
    description:
      "Projet personnel abouti : une plateforme web développée en TypeScript avec Next.js et déployée en production sur Vercel. C'est mon projet le plus complet, et il est accessible publiquement.",
    status: "production",
    stack: ["TypeScript", "Next.js", "Vercel"],
    // TODO: ajouter l'URL du dépôt GitHub de 2DK IT.
    repos: [],
    liveUrl: "https://2dk-it.vercel.app",
    screenshot: "/images/projects/2dk-it-screenshot.png",
    featured: true,
  },
  {
    slug: "westafine",
    name: "Westafine",
    tagline: "Un frontend et une API séparés pour que chaque couche évolue sans casser l'autre.",
    description:
      "Projet TypeScript en architecture fullstack séparée : le frontend et l'API dédiée (westafine-api) vivent dans des dépôts distincts.",
    // TODO: confirmer le statut.
    status: "en-developpement",
    stack: ["TypeScript", "API REST"],
    // TODO: ajouter le dépôt du frontend Westafine.
    repos: [{ label: "westafine-api", href: `${GITHUB}/westafine-api` }],
    screenshot: "/images/projects/westafine-screenshot.png",
  },
  {
    slug: "black-sphere",
    name: "Black Sphere",
    tagline: "Une application et son API découplées, chacune avec une responsabilité claire.",
    description:
      "Projet fullstack TypeScript composé d'une application (black_sphere_app) et d'une API dédiée (black-sphere-api), avec une séparation nette des responsabilités entre les deux.",
    // TODO: confirmer le statut.
    status: "en-developpement",
    stack: ["TypeScript", "API REST"],
    repos: [
      { label: "black_sphere_app", href: `${GITHUB}/black_sphere_app` },
      { label: "black-sphere-api", href: `${GITHUB}/black-sphere-api` },
    ],
    screenshot: "/images/projects/black-sphere-screenshot.png",
  },
  {
    slug: "interuni",
    name: "Interuni",
    tagline: "Un produit construit par itérations courtes, testé et corrigé à chaque étape.",
    description:
      "Projet TypeScript en développement actif, avec de nombreuses itérations récentes.",
    status: "en-developpement",
    stack: ["TypeScript"],
    // TODO: ajouter l'URL du dépôt GitHub d'Interuni.
    repos: [],
    screenshot: "/images/projects/interuni-screenshot.png",
  },
  {
    slug: "botarena",
    name: "BotArena",
    tagline: "Un terrain d'expérimentation pour se confronter à des problèmes algorithmiques.",
    description: "Projet Python d'exploration technique et algorithmique.",
    status: "exploration",
    stack: ["Python"],
    // TODO: ajouter l'URL du dépôt GitHub de BotArena.
    repos: [],
    screenshot: "/images/projects/botarena-screenshot.png",
  },
  {
    slug: "ai-resume-analyzer",
    name: "AI-Resume-Analyzer",
    tagline: "Confier la lecture et l'analyse de CV à une IA plutôt qu'à un tri manuel.",
    description: "Projet Python autour de l'intelligence artificielle appliquée à l'analyse de CV.",
    status: "exploration",
    stack: ["Python", "IA"],
    // TODO: ajouter l'URL du dépôt GitHub d'AI-Resume-Analyzer.
    repos: [],
    screenshot: "/images/projects/ai-resume-analyzer-screenshot.png",
  },
  {
    slug: "assistant-messagerie-ia",
    name: "Assistant de messagerie IA",
    tagline:
      "Automatiser les réponses aux e-mails clients, et passer la main à un humain quand il le faut.",
    description:
      "Assistance client basée sur l'IA : automatisation des e-mails, base de connaissances et remontée d'informations vers un humain lorsque la demande le nécessite.",
    // TODO: confirmer le statut et la stack.
    status: "exploration",
    stack: ["IA"],
    // TODO: ajouter l'URL du dépôt GitHub.
    repos: [],
    screenshot: "/images/projects/assistant-messagerie-ia-screenshot.png",
  },
];

export const GITHUB_PROFILE = GITHUB;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
