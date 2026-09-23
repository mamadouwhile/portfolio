import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

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

        <div className="hidden md:block">
          <Navbar />
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Discutons
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
