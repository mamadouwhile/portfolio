import { Sparkle } from "lucide-react";

import { services } from "@/data/services";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const items = [site.location, ...services.map((service) => service.title)];

/** Bandeau défilant décoratif (dupliqué pour une boucle continue, masqué aux lecteurs d'écran). */
export function MarqueeCard({ className }: { className?: string }) {
  return (
    <div className={cn("min-w-0", className)}>
      <div className="marquee bento-card flex items-center py-3" aria-hidden="true">
        <div className="marquee-track flex w-max shrink-0 gap-8 pr-8">
          {[...items, ...items].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-8 font-mono text-xs tracking-widest whitespace-nowrap text-muted uppercase"
            >
              {item}
              <Sparkle className="size-3 text-accent" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
