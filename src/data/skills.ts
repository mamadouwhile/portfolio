import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    id: "web",
    category: "Web & mobile",
    summary: "Interfaces web et mobiles typées, rapides et responsives.",
    skills: [
      { name: "React", featured: true },
      { name: "Next.js", featured: true },
      { name: "React Native" },
      { name: "TypeScript", featured: true },
      { name: "Tailwind CSS" },
      { name: "HTML5 / CSS3" },
    ],
  },
  {
    id: "backend",
    category: "Backend & API",
    summary: "API structurées, séparées du frontend, architecture MVC.",
    skills: [
      { name: "NestJS" },
      { name: "Node.js", featured: true },
      { name: "Symfony", featured: true },
      { name: "Architecture API REST" },
      // TODO: préciser le moteur NoSQL utilisé si besoin.
      { name: "SQL / MySQL" },
    ],
  },
  {
    id: "qa",
    category: "Tests & QA",
    summary: "Automatiser les tests et valider la tenue en charge avant la mise en production.",
    skills: [
      { name: "Selenium", featured: true },
      { name: "TestNG" },
      { name: "JMeter", featured: true },
      { name: "Tests de charge" },
      { name: "Tests de régression" },
      { name: "Recette fonctionnelle" },
    ],
  },
  {
    id: "automation",
    category: "Automatisation & IA",
    summary: "Automatiser des processus métier et intégrer l'IA dans des outils concrets.",
    skills: [
      { name: "n8n", featured: true },
      { name: "Python", featured: true },
      { name: "Groq API" },
      { name: "NLP (BERT, TF-IDF)" },
      { name: "SentenceTransformers" },
      { name: "scikit-learn" },
      { name: "Streamlit" },
    ],
  },
  {
    id: "languages",
    category: "Langages",
    summary: "Les langages pratiqués en projet et en formation.",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "PHP" },
      { name: "Python" },
      { name: "Java" },
      { name: "SQL" },
    ],
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
      { name: "Cybersécurité / DevSecOps" },
      { name: "Architecture logicielle" },
      { name: "DevOps" },
      { name: "IA locale" },
    ],
  },
];
