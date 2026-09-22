import type { ReactNode } from "react";

/**
 * Transition de page en CSS pur (fade + léger translate) : rejouée à chaque navigation car le
 * template est remonté, mais sans attendre l'hydratation JS — le contenu n'est jamais rendu
 * invisible côté serveur (meilleur LCP). Désactivée par `prefers-reduced-motion`.
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="animate-page-enter">{children}</div>;
}
