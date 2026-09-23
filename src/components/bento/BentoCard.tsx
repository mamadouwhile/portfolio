import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BentoCardProps = {
  /** Petit libellé en capitales au-dessus du titre. */
  label?: string;
  title?: string;
  /** Rend toute la carte cliquable (lien étiré sur le titre) avec une flèche en bas à droite. */
  href?: string;
  /** Texte accessible du lien quand la carte n'a pas de titre. */
  linkLabel?: string;
  /** Contenu affiché à gauche de la flèche quand la carte n'a ni libellé ni titre. */
  footer?: ReactNode;
  className?: string;
  children?: ReactNode;
};

export function BentoCard({
  label,
  title,
  href,
  linkLabel,
  footer,
  className,
  children,
}: BentoCardProps) {
  const isExternal = href?.startsWith("http");
  const linkClass =
    "after:absolute after:inset-0 after:z-10 after:rounded-[1.75rem] after:content-[''] focus-visible:outline-none";

  return (
    <article
      className={cn(
        "group bento-card flex min-w-0 flex-col p-5 transition-colors",
        href &&
          "hover:border-accent/50 has-[a[data-card-link]:focus-visible]:outline-2 has-[a[data-card-link]:focus-visible]:outline-offset-2 has-[a[data-card-link]:focus-visible]:outline-accent",
        className,
      )}
    >
      {children}

      {label || title || href ? (
        <div className="mt-auto flex items-end justify-between gap-3 pt-3">
          <div className="min-w-0">
            {label ? (
              <p className="font-mono text-[11px] tracking-widest text-muted uppercase">{label}</p>
            ) : null}
            {title ? (
              <h2 className="mt-1 font-display text-lg leading-tight font-semibold md:text-xl">
                {href ? (
                  isExternal ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      data-card-link=""
                      className={linkClass}
                    >
                      {title}
                    </a>
                  ) : (
                    <Link href={href} data-card-link="" className={linkClass}>
                      {title}
                    </Link>
                  )
                ) : (
                  title
                )}
              </h2>
            ) : href ? (
              <Link href={href} data-card-link="" className={linkClass}>
                <span className="sr-only">{linkLabel}</span>
              </Link>
            ) : null}
            {footer}
          </div>
          {href ? (
            <span
              aria-hidden="true"
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background/60 text-muted transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground"
            >
              <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
            </span>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
