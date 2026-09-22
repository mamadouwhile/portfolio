import { site } from "@/data/site";

export function AvailabilityBadge() {
  if (!site.availableForFreelance) return null;

  return (
    <p className="text-muted flex items-center gap-2 text-xs">
      <span aria-hidden="true" className="size-2 rounded-full bg-emerald-500" />
      Disponible en freelance
    </p>
  );
}
