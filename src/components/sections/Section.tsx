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
      className={cn(
        "mx-auto max-w-6xl scroll-mt-20 border-t border-border/60 px-4 py-10 first:border-t-0 md:px-6 md:py-14 lg:py-16 [[data-hero]+&]:border-t-0",
        className,
      )}
    >
      <Reveal className="max-w-2xl">
        <p className="font-mono text-xs tracking-widest text-accent uppercase">{eyebrow}</p>
        <h2
          id={headingId}
          className="mt-2 text-3xl leading-[1.1] font-semibold text-balance md:text-4xl"
        >
          {title}
        </h2>
        {lead ? <p className="mt-3 text-base text-pretty text-muted md:text-lg">{lead}</p> : null}
      </Reveal>
      <div className="mt-8 md:mt-10">{children}</div>
    </section>
  );
}
