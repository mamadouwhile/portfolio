import { AvailabilityBadge } from "@/components/layout/AvailabilityBadge";
import { BentoCard } from "@/components/bento/BentoCard";
import { site } from "@/data/site";

const initials = site.name
  .split(" ")
  .map((part) => part.charAt(0))
  .join("");

export function ProfileCard({ className }: { className?: string }) {
  return (
    <BentoCard
      href="/about"
      linkLabel="Mon profil"
      footer={<AvailabilityBadge className="relative z-20" />}
      className={className}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {/* TODO: remplacer le monogramme par une vraie photo (public/images/). */}
        <div
          aria-hidden="true"
          className="flex size-16 shrink-0 items-center justify-center rounded-[1.25rem] border border-border bg-gradient-to-br from-accent/90 to-accent/40 font-display text-xl font-semibold text-accent-foreground sm:size-20 sm:text-2xl"
        >
          {initials}
        </div>
        <div className="min-w-0">
          <p className="font-mono text-[11px] tracking-widest text-accent uppercase">{site.role}</p>
          <h1 className="mt-2 font-display text-3xl leading-[1.05] font-semibold whitespace-nowrap max-sm:whitespace-normal">
            {site.name}
          </h1>
          <p className="mt-2 text-sm text-pretty text-muted">
            Des idées aux produits numériques déployés — du code à la mise en production.
          </p>
        </div>
      </div>
    </BentoCard>
  );
}
