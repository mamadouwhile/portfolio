import type { ProjectStatus } from "@/types/content";

export const statusLabels: Record<ProjectStatus, string> = {
  production: "Production",
  "en-developpement": "En développement",
  termine: "Terminé",
  exploration: "Projet d'exploration",
};
