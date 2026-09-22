"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { AvailabilityBadge } from "@/components/layout/AvailabilityBadge";
import { Navbar } from "@/components/layout/Navbar";

/** Bouton + panneau de navigation mobile (seule partie interactive du header). */
export function MobileMenu() {
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
    <>
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

      {open ? (
        <div
          id="menu-mobile"
          className="absolute inset-x-0 top-full border-b border-border bg-background px-4 pt-3 pb-5 md:hidden"
        >
          <Navbar orientation="vertical" onNavigate={() => setOpen(false)} />
          <AvailabilityBadge className="mt-4" />
        </div>
      ) : null}
    </>
  );
}
