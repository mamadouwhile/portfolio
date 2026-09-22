import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, title, className, children }: SectionProps) {
  const headingId = id ? `${id}-title` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("mx-auto max-w-6xl px-4 py-12", className)}
    >
      <h2 id={headingId} className="mb-6 text-2xl font-semibold">
        {title}
      </h2>
      {children}
    </section>
  );
}
