export type NavLink = {
  href: string;
  label: string;
};

export type SocialPlatform = "github" | "linkedin";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  /** `null` tant que l'URL réelle n'est pas fournie : le lien n'est pas affiché. */
  href: string | null;
};

export type SiteConfig = {
  name: string;
  role: string;
  /** Positionnement en une phrase. */
  positioning: string;
  description: string;
  location: string;
  availableForFreelance: boolean;
  socials: SocialLink[];
};

export type ProjectStatus = "production" | "en-developpement" | "exploration";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  /** Accroche orientée problème résolu. */
  tagline: string;
  description: string;
  status: ProjectStatus;
  stack: string[];
  repos: ProjectLink[];
  liveUrl?: string;
  /** Capture réelle dans /public/images/projects — absente tant qu'elle n'est pas fournie. */
  screenshot?: string;
  featured?: boolean;
};

export type SkillCategoryId = "frontend" | "backend" | "database" | "tools" | "learning";

export type Skill = {
  name: string;
  /** Précision affichée à côté du nom (ex. « en apprentissage »). */
  note?: string;
};

export type SkillGroup = {
  id: SkillCategoryId;
  category: string;
  summary: string;
  skills: Skill[];
};

export type ExperienceItem = {
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
};

export type Service = {
  title: string;
  description: string;
};
