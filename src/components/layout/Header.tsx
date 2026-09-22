import Link from "next/link";

import { AvailabilityBadge } from "@/components/layout/AvailabilityBadge";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { site } from "@/data/site";

export function Header() {
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
          <MobileMenu />
        </div>
      </div>

      <div className="hidden justify-center border-t border-border py-2 md:flex lg:hidden">
        <AvailabilityBadge />
      </div>
    </header>
  );
}
