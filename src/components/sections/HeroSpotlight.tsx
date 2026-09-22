"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

/**
 * Micro-interaction du hero : un halo d'accent suit le curseur (pointeur fin uniquement),
 * sur un fond de grain subtil. Aucun effet pour les écrans tactiles ; halo statique si
 * l'utilisateur préfère réduire les animations (géré par la transition CSS globale).
 */
export function HeroSpotlight({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--x", `${event.clientX - rect.left}px`);
    ref.current.style.setProperty("--y", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      data-hero=""
      onPointerMove={handlePointerMove}
      className="group/hero grain relative isolate overflow-hidden [--x:70%] [--y:30%]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 transition-opacity duration-500 group-hover/hero:opacity-100"
        style={{
          background:
            "radial-gradient(520px circle at var(--x) var(--y), var(--accent-soft), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)] bg-[size:56px_56px] opacity-40"
      />
      {children}
    </div>
  );
}
