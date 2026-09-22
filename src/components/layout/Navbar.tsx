import Link from "next/link";

import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  return (
    <nav aria-label="Navigation principale">
      <ul className="flex flex-wrap items-center gap-4 text-sm">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-muted hover:text-foreground">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
