import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    category: "Frontend",
    summary: "Interfaces web et mobiles typées, rapides et responsives.",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "React Native" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "backend",
    category: "Backend",
    summary: "APIs structurées et séparées du frontend.",
    skills: [{ name: "NestJS" }, { name: "Node.js" }, { name: "Architecture API REST" }],
  },
  {
    id: "database",
    category: "Bases de données",
    summary: "Modèles relationnels et documentaires selon le besoin.",
    // TODO: préciser les moteurs utilisés (ex. PostgreSQL, MongoDB) selon les projets.
    skills: [{ name: "SQL" }, { name: "NoSQL" }],
  },
  {
    id: "tools",
    category: "Outils",
    summary: "Versionner, conteneuriser, livrer.",
    skills: [
      { name: "Git / GitHub" },
      { name: "Docker", note: "en apprentissage" },
      { name: "CI/CD" },
    ],
  },
  {
    id: "learning",
    category: "En apprentissage actif",
    summary: "Ce que je renforce en ce moment.",
    skills: [
      { name: "Architecture logicielle" },
      { name: "Tests automatisés" },
      { name: "DevOps" },
      { name: "IA locale" },
    ],
  },
];
