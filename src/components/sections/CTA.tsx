import Link from "next/link";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <Link
        href="/contact"
        className="bg-foreground text-background inline-flex rounded-md px-4 py-2 text-sm font-medium"
      >
        Me contacter
      </Link>
    </section>
  );
}
