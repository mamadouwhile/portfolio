import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  /** Petit libellé au-dessus du titre (ex. « 01 — À propos »). */
  eyebrow: string;
  title: string;
  lead?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, lead, className, children }: SectionProps) {
  const headingId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("mx-auto max-w-6xl scroll-mt-24 px-4 py-20 md:px-6 md:py-28", className)}
    >
      <Reveal className="max-w-2xl">
        <p className="font-mono text-xs tracking-widest text-accent uppercase">{eyebrow}</p>
        <h2
          id={headingId}
          className="mt-3 text-3xl leading-tight font-semibold text-balance md:text-4xl"
        >
          {title}
        </h2>
        {lead ? <p className="mt-4 text-lg text-pretty text-muted">{lead}</p> : null}
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}
