import {
  Blocks,
  Cpu,
  Database,
  DatabaseZap,
  FlaskConical,
  Monitor,
  Network,
  Server,
  Sparkles,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiDocker,
  SiGithub,
  SiGithubactions,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import type { SkillCategoryId } from "@/types/content";

export const categoryIcons: Record<SkillCategoryId, LucideIcon> = {
  frontend: Monitor,
  backend: Server,
  database: Database,
  tools: Wrench,
  learning: Sparkles,
};

/** Icône associée à une technologie (logo officiel si disponible, pictogramme sinon). */
export const techIcons: Record<string, IconType | LucideIcon> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  "React Native": SiReact,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  NestJS: SiNestjs,
  "Node.js": SiNodedotjs,
  "Architecture API REST": Network,
  "API REST": Network,
  SQL: Database,
  NoSQL: DatabaseZap,
  "Git / GitHub": SiGithub,
  Docker: SiDocker,
  "CI/CD": SiGithubactions,
  Python: SiPython,
  "Architecture logicielle": Blocks,
  "Tests automatisés": FlaskConical,
  DevOps: Workflow,
  "IA locale": Cpu,
};
