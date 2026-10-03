import type { Project } from "@/types/content";

const GITHUB = "https://github.com/mamadouwhile";

/*
 * Captures : /public/images/projects/<slug>-screenshot.webp (1600 px de large, WebP).
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
    repos: [{ label: "2dk-it", href: `${GITHUB}/2dk-it` }],
    liveUrl: "https://2dk-it.vercel.app",
    screenshot: "/images/projects/2dk-it-screenshot.webp",
    featured: true,
  },
  {
    slug: "colis",
    name: "colis",
    tagline:
      "Livrer un fichier à un client, savoir quand il l'ouvre et recevoir sa validation horodatée.",
    description:
      "Outil open source de livraison pour freelances, fork de s3nd (MIT) que j'ai renommé et réorienté. Le fichier part dans un stockage S3 que l'on possède, sous un code de huit caractères imprimé comme un bordereau d'expédition. Le client l'ouvre, le valide ou demande des corrections avec un commentaire, et chaque étape déclenche un webhook signé, avec un nœud n8n dédié. Gros fichiers envoyés directement au stockage par morceaux, avec reprise en cas de coupure. CLI en français : colis envoyer, recevoir, statut.",
    status: "en-developpement",
    stack: ["TypeScript", "Next.js", "S3 / R2", "n8n", "Bun", "Vitest"],
    repos: [{ label: "colis", href: `${GITHUB}/colis` }],
    liveUrl: "https://colis-site.vercel.app",
    screenshot: "/images/projects/colis-screenshot.png",
  },
  {
    slug: "ai-resume-analyzer",
    name: "Analyseur intelligent de CV",
    tagline: "Mesurer en quelques secondes si un CV correspond vraiment à une offre d'emploi.",
    description:
      "Application web qui analyse automatiquement la compatibilité d'un CV avec une offre : score ATS calculé avec BERT, extraction des mots-clés par TF-IDF, rapport rédigé via l'API Groq et export PDF. Un projet centré sur la qualité des données, les algorithmes de scoring et l'automatisation de processus.",
    status: "exploration",
    stack: ["Python", "Streamlit", "SentenceTransformers", "scikit-learn", "Groq API"],
    repos: [{ label: "AI-Resume-Analyzer", href: `${GITHUB}/AI-Resume-Analyzer` }],
    screenshot: "/images/projects/ai-resume-analyzer-screenshot.webp",
  },
  {
    slug: "westafine",
    name: "Westafine",
    tagline: "Le site d'une marque de boissons premium inspirées des saveurs africaines.",
    description:
      "Site de la marque Westafine (bissap, gingembre, ananas), en ligne sur westafinedrinks.com. Projet TypeScript en architecture fullstack séparée : le frontend et l'API dédiée (westafine-api) vivent dans des dépôts distincts.",
    status: "production",
    stack: ["TypeScript", "API REST"],
    // TODO: ajouter le dépôt du frontend Westafine.
    repos: [{ label: "westafine-api", href: `${GITHUB}/westafine-api` }],
    liveUrl: "https://www.westafinedrinks.com",
    screenshot: "/images/projects/westafine-screenshot.webp",
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
    // TODO: fournir une capture (public/images/projects/interuni-screenshot.webp).
    screenshot: "/images/projects/interuni-screenshot.webp",
  },
  {
    slug: "botarena",
    name: "BotArena",
    tagline: "Déposer un bot, le compiler en sandbox et l'affronter en match ou en tournoi.",
    description:
      "Plateforme web universitaire de gestion de bots : dépôt et compilation isolée dans des conteneurs Docker, matchs, tournois round-robin avec classements, et supervision admin. Authentification JWT avec trois rôles (étudiant, relecteur, admin), frontend React/TypeScript, API FastAPI avec workers, et moteur de jeu en C++.",
    status: "exploration",
    stack: ["React", "TypeScript", "FastAPI", "SQLAlchemy", "C++", "Docker"],
    repos: [{ label: "BotArena", href: `${GITHUB}/BotArena` }],
    screenshot: "/images/projects/botarena-screenshot.webp",
  },
];

export const GITHUB_PROFILE = GITHUB;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
