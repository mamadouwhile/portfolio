import Link from "next/link";

import { AvailabilityBadge } from "@/components/layout/AvailabilityBadge";
import { Navbar } from "@/components/layout/Navbar";
import { site } from "@/data/site";

export function Header() {
  return (
    <header className="border-border border-b">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="font-semibold">
          {site.name}
        </Link>
        <AvailabilityBadge />
        <Navbar />
      </div>
    </header>
  );
}
