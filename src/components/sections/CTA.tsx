import Link from "next/link";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <Link
        href="/contact"
        className="inline-flex rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background"
      >
        Me contacter
      </Link>
    </section>
  );
}
