import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold">Page introuvable</h1>
      <Link href="/" className="mt-6 inline-block underline">
        Retour à l&apos;accueil
      </Link>
    </section>
  );
}
