import type { SiteConfig } from "@/types/content";

export const site: SiteConfig = {
  name: "Mahamadou Dembele",
  role: "Développeur fullstack freelance",
  positioning:
    "Développeur fullstack qui transforme des idées en produits numériques déployés — du code à la mise en production.",
  description:
    "Étudiant en Licence Informatique à Angers et développeur web/mobile freelance indépendant.",
  location: "Angers, France",
  availableForFreelance: true,
  socials: [
    { platform: "github", label: "GitHub", href: "https://github.com/mamadouwhile" },
    // TODO: remplacer null par l'URL LinkedIn réelle (le lien s'affiche automatiquement ensuite).
    { platform: "linkedin", label: "LinkedIn", href: null },
  ],
};
