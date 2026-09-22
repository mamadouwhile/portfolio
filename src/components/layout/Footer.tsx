import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

import { AvailabilityBadge } from "@/components/layout/AvailabilityBadge";
import { FooterCta } from "@/components/layout/FooterCta";
import { site } from "@/data/site";
import { NAV_LINKS } from "@/lib/constants";

const socialIcons = { github: SiGithub, linkedin: FaLinkedin };

export function Footer() {
  const socials = site.socials.filter((social) => social.href);

  return (
    <footer className="border-t border-border bg-surface/40">
      <FooterCta />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[2fr_1fr_1fr] md:px-6">
        <div>
          <p className="font-display text-lg font-semibold">
            {site.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-2 max-w-sm text-sm text-muted">{site.positioning}</p>
          <AvailabilityBadge className="mt-5" />
        </div>

        <nav aria-label="Pied de page">
          <p className="font-mono text-xs tracking-widest text-muted uppercase">Navigation</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-xs tracking-widest text-muted uppercase">Réseaux</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {socials.map((social) => {
              const Icon = socialIcons[social.platform];
              return (
                <li key={social.platform}>
                  <a
                    href={social.href ?? undefined}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
                  >
                    <Icon className="size-4" aria-hidden />
                    {social.label}
                    <span className="sr-only"> (nouvel onglet)</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted md:px-6">
          © {new Date().getFullYear()} {site.name} — Conçu et développé avec Next.js.
        </p>
      </div>
    </footer>
  );
}
