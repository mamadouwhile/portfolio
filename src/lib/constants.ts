import type { NavLink } from "@/types/content";

/**
 * URL publique du site, sans slash final. Ordre de priorité :
 * 1. NEXT_PUBLIC_SITE_URL (domaine personnalisé éventuel) ;
 * 2. VERCEL_PROJECT_PRODUCTION_URL (fournie automatiquement par Vercel au build) ;
 * 3. localhost en développement.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Mahamadou Dembele — Développeur fullstack & automatisation",
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Accueil" },
  { href: "/projects", label: "Projets" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];
