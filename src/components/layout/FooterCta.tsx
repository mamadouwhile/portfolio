"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/** Appel à l'action final vers le contact, masqué là où le formulaire est déjà affiché. */
export function FooterCta() {
  const pathname = usePathname();
  if (pathname === "/" || pathname === "/contact") return null;

  return (
    <div className="border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 md:flex-row md:items-end md:justify-between md:px-6 md:py-14">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-widest text-accent uppercase">Prochaine étape</p>
          <p className="mt-2 font-display text-3xl leading-[1.1] font-semibold text-balance md:text-4xl lg:text-5xl">
            Votre idée mérite d&apos;être mise en production.
          </p>
        </div>
        <Link
          href="/contact"
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
        >
          Démarrer un projet
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </Link>
      </div>
    </div>
  );
}
