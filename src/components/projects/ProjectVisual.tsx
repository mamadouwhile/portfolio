import Image from "next/image";

import { getScreenshot } from "@/lib/project-assets";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";

type ProjectVisualProps = {
  project: Project;
  className?: string;
  sizes: string;
  priority?: boolean;
  /** Motif plus fin pour les grands formats. */
  dense?: boolean;
};

function hash(value: string): number {
  let result = 2166136261;
  for (const char of value) {
    result ^= char.charCodeAt(0);
    result = Math.imul(result, 16777619);
  }
  return result >>> 0;
}

/**
 * Capture réelle si elle existe, sinon illustration géométrique originale et déterministe
 * (dérivée du slug) : chaque projet garde toujours la même.
 */
export function ProjectVisual({
  project,
  className,
  sizes,
  priority,
  dense = false,
}: ProjectVisualProps) {
  const screenshot = getScreenshot(project);

  if (screenshot) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image
          src={screenshot}
          alt={`Capture d'écran de ${project.name}`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  const seed = hash(project.slug);
  const scale = dense ? 2 : 1;
  const cols = 12 * scale;
  const rows = 6 * scale;
  const cells = Array.from({ length: cols * rows }, (_, index) => {
    const bit = (Math.imul(seed ^ (index * 2654435761), 1597334677) >>> 0) % 9;
    return { x: index % cols, y: Math.floor(index / cols), accent: bit === 0, filled: bit < 3 };
  });
  const cx = (20 + (seed % 60)) * scale;
  const radius = (18 + (seed % 14)) * scale;

  return (
    <div aria-hidden="true" className={cn("relative overflow-hidden bg-surface-2", className)}>
      <svg
        viewBox={`0 0 ${120 * scale} ${60 * scale}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 size-full transition-transform duration-700 group-hover:scale-105"
      >
        {cells.map((cell) => (
          <circle
            key={`${cell.x}-${cell.y}`}
            cx={cell.x * 10 + 5}
            cy={cell.y * 10 + 5}
            r={cell.accent ? 1.1 : 0.7}
            fill={cell.accent ? "var(--accent)" : "var(--border)"}
            opacity={cell.filled ? 1 : 0.45}
          />
        ))}
        <circle
          cx={cx}
          cy={30 * scale}
          r={radius}
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.5"
          strokeWidth="0.4"
        />
        <circle
          cx={cx}
          cy={30 * scale}
          r={radius / 2}
          fill="var(--accent-soft)"
          stroke="var(--accent)"
          strokeOpacity="0.3"
          strokeWidth="0.3"
        />
      </svg>
      <span className="absolute bottom-3 left-4 font-mono text-[11px] text-muted">
        /{project.slug}
      </span>
    </div>
  );
}
