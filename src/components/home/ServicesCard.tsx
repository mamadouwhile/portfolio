import { Layers } from "lucide-react";

import { BentoCard } from "@/components/bento/BentoCard";
import { services } from "@/data/services";
import { serviceIcons } from "@/lib/service-icons";
export function ServicesCard({ className }: { className?: string }) {
  return (
    <BentoCard label="Ce que je fais" title="Services" href="/about#services" className={className}>
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {services.map((service, index) => {
          const Icon = serviceIcons[index] ?? Layers;
          return (
            <li
              key={service.title}
              className="flex items-center gap-2 rounded-xl border border-border bg-background/60 px-2.5 py-2"
            >
              <Icon className="size-4 shrink-0 text-accent" aria-hidden />
              <span className="min-w-0 truncate text-xs text-muted">{service.shortTitle}</span>
            </li>
          );
        })}
      </ul>
    </BentoCard>
  );
}
