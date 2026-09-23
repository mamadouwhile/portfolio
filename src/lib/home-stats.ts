import { projects } from "@/data/projects";

/** Chiffres de l'accueil, toujours calculés depuis les données (jamais écrits en dur). */
export const homeStats = [
  { value: projects.length, label: "projets présentés" },
  {
    value: projects.filter((project) => project.status === "production").length,
    label: "en production",
  },
  {
    value: projects.filter((project) => project.repos.some((repo) => repo.label.includes("api")))
      .length,
    label: "architectures front / API séparées",
  },
];
