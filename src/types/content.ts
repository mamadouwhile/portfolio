export type NavLink = {
  href: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  location: string;
  availableForFreelance: boolean;
  socials: SocialLink[];
};

export type ProjectStatus = "production" | "en-cours" | "exploration";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  status: ProjectStatus;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type ExperienceItem = {
  title: string;
  organization: string;
  period: string;
  description: string;
};
