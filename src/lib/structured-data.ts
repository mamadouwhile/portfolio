import { site } from "@/data/site";
import { skillGroups } from "@/data/skills";
import { OG_IMAGE, SITE_URL } from "@/lib/constants";

/** JSON-LD ProfilePage + Person, construit uniquement à partir de src/data. */
export function profilePageJsonLd(): Record<string, unknown> {
  const sameAs = site.socials.flatMap((social) => (social.href ? [social.href] : []));
  const knowsAbout = skillGroups
    .filter((group) => group.id !== "learning")
    .flatMap((group) => group.skills.map((skill) => skill.name));

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: SITE_URL,
    name: `${site.name} — ${site.role}`,
    inLanguage: "fr-FR",
    mainEntity: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: site.name,
      jobTitle: site.role,
      description: site.positioning,
      url: SITE_URL,
      image: `${SITE_URL}${OG_IMAGE.url}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Angers",
        addressCountry: "FR",
      },
      knowsAbout,
      sameAs,
    },
  };
}
