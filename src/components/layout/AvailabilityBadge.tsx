import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type AvailabilityBadgeProps = {
  className?: string;
};

export function AvailabilityBadge({ className }: AvailabilityBadgeProps) {
  if (!site.availableForFreelance) return null;

  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted",
        className,
      )}
    >
      <span aria-hidden="true" className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
        <span className="relative inline-flex size-2 rounded-full bg-success" />
      </span>
      Disponible pour projets freelance
    </p>
  );
}
