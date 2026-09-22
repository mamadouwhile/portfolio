"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { AvailabilityBadge } from "@/components/layout/AvailabilityBadge";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-foreground"
      >
        Aller au contenu
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="font-display text-base font-semibold tracking-tight">
          {site.name.split(" ")[0]}
          <span className="text-accent">.</span>
          <span className="sr-only"> {site.name} — accueil</span>
        </Link>

        <AvailabilityBadge className="hidden lg:inline-flex" />

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Navbar />
          </div>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full border border-border md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="menu-mobile" className="border-t border-border px-4 pt-3 pb-5 md:hidden">
          <Navbar orientation="vertical" onNavigate={() => setOpen(false)} />
          <AvailabilityBadge className="mt-4" />
        </div>
      ) : null}

      <div className="hidden justify-center border-t border-border py-2 md:flex lg:hidden">
        <AvailabilityBadge />
      </div>
    </header>
  );
}
