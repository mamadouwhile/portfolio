import { BentoCard } from "@/components/bento/BentoCard";
import { homeStats } from "@/lib/home-stats";
import { cn } from "@/lib/utils";

export function StatsCard({ className }: { className?: string }) {
  return (
    <BentoCard className={cn("justify-center", className)}>
      <dl className="grid grid-cols-3 gap-2">
        {homeStats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-1 rounded-2xl border border-border bg-background/60 p-4"
          >
            <dt className="text-xs leading-tight text-muted">{stat.label}</dt>
            <dd className="order-first font-display text-4xl font-semibold md:text-5xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </BentoCard>
  );
}
