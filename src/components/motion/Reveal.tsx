import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
};

/**
 * Apparition au scroll en CSS pur (scroll-driven animations, classe `.reveal` dans
 * globals.css). Aucun JavaScript : le contenu est visible dès le rendu serveur, et reste
 * simplement statique sur les navigateurs sans `animation-timeline` ou avec
 * `prefers-reduced-motion: reduce`.
 */
export function Reveal({ children, className, as: Component = "div" }: RevealProps) {
  return <Component className={cn("reveal", className)}>{children}</Component>;
}
