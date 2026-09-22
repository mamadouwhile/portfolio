import "server-only";

import { existsSync } from "node:fs";
import path from "node:path";

import type { Project } from "@/types/content";

/** Renvoie le chemin de la capture si le fichier existe réellement dans /public. */
export function getScreenshot(project: Project): string | undefined {
  if (!project.screenshot) return undefined;
  const file = path.join(process.cwd(), "public", project.screenshot);
  return existsSync(file) ? project.screenshot : undefined;
}
