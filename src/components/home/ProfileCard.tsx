import Image from "next/image";

import { AvailabilityBadge } from "@/components/layout/AvailabilityBadge";
import { BentoCard } from "@/components/bento/BentoCard";
import { site } from "@/data/site";

export function ProfileCard({ className }: { className?: string }) {
  return (
    <BentoCard
      href="/about"
      linkLabel="Mon profil"
      footer={<AvailabilityBadge className="relative z-20" />}
      className={className}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Image
          src={site.photo}
          alt={`Photo de ${site.name}`}
          width={80}
          height={80}
          sizes="(min-width: 640px) 80px, 64px"
          priority
          className="size-16 shrink-0 rounded-[1.25rem] border border-border object-cover sm:size-20"
        />
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
