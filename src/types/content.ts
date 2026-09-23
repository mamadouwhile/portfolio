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

export type SkillCategoryId =
  "web" | "backend" | "qa" | "automation" | "languages" | "tools" | "learning";

export type Skill = {
  name: string;
  /** Précision affichée à côté du nom (ex. « en apprentissage »). */
  note?: string;
  /** Affichée dans la carte « Stack » de l'accueil. */
  featured?: boolean;
};

export type SkillGroup = {
  id: SkillCategoryId;
  category: string;
  summary: string;
  skills: Skill[];
};

export type ExperienceKind = "work" | "education";

export type ExperienceItem = {
  kind: ExperienceKind;
  title: string;
  /** Libellé court pour la carte de l'accueil. */
  shortTitle: string;
  organization: string;
  location?: string;
  period: string;
  description: string;
  highlights: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
};

export type SpokenLanguage = {
  name: string;
  level: string;
};

export type Service = {
  title: string;
  /** Libellé court pour la carte de l'accueil. */
  shortTitle: string;
  description: string;
};
