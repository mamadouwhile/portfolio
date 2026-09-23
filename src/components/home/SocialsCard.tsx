import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

import { BentoCard } from "@/components/bento/BentoCard";
import { site } from "@/data/site";

const icons = { github: SiGithub, linkedin: FaLinkedin };

export function SocialsCard({ className }: { className?: string }) {
  const socials = site.socials.filter((social) => social.href);

  return (
    <BentoCard label="Me suivre" title="Réseaux" className={className}>
      <p className="mb-3 text-sm text-muted">Dépôts publics et projets en cours.</p>
      <ul className="flex flex-wrap gap-2">
        {socials.map((social) => {
          const Icon = icons[social.platform];
          return (
            <li key={social.platform}>
              <a
                href={social.href ?? undefined}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="size-4" aria-hidden />
                {social.label}
                <span className="sr-only"> (nouvel onglet)</span>
              </a>
            </li>
          );
        })}
      </ul>
    </BentoCard>
  );
}
