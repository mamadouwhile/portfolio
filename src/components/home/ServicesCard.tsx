import { Layers, LayoutTemplate, Palette, Smartphone, type LucideIcon } from "lucide-react";

import { BentoCard } from "@/components/bento/BentoCard";
import { services } from "@/data/services";

const icons: LucideIcon[] = [LayoutTemplate, Smartphone, Layers, Palette];

export function ServicesCard({ className }: { className?: string }) {
  return (
    <BentoCard label="Ce que je fais" title="Services" href="/about#services" className={className}>
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {services.map((service, index) => {
          const Icon = icons[index] ?? Layers;
          return (
            <li
              key={service.title}
              className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-background/60 px-2 py-2.5 text-center"
            >
              <Icon className="size-4 text-accent" aria-hidden />
              <span className="text-xs leading-tight text-muted">{service.title}</span>
            </li>
          );
        })}
      </ul>
    </BentoCard>
  );
}
