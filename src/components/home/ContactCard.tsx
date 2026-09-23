import { Sparkle } from "lucide-react";

import { BentoCard } from "@/components/bento/BentoCard";
import { cn } from "@/lib/utils";

export function ContactCard({ className }: { className?: string }) {
  return (
    <BentoCard
      label="Un projet en tête ?"
      title="Me contacter"
      href="/contact"
      className={className}
    >
      <Sparkle className="size-6 text-accent" aria-hidden />
      <p
        className={cn(
          "mt-3 font-display text-3xl leading-[1.05] font-semibold text-balance md:text-4xl",
        )}
      >
        Travaillons <span className="text-accent">ensemble.</span>
      </p>
    </BentoCard>
  );
}
