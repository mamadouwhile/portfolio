"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type NavbarProps = {
  orientation?: "horizontal" | "vertical";
  onNavigate?: () => void;
};

export function Navbar({ orientation = "horizontal", onNavigate }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Navigation principale">
      <ul
        className={cn(
          "flex text-sm",
          orientation === "horizontal" ? "items-center gap-1" : "flex-col gap-1",
        )}
      >
        {NAV_LINKS.map((link) => {
          const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onNavigate}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "block rounded-full px-3 py-2 transition-colors",
                  orientation === "vertical" && "text-base",
                  isActive ? "bg-surface-2 text-foreground" : "text-muted hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
