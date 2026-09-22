import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-sm text-muted">{site.location}</p>
      <h1 className="mt-2 text-4xl font-bold">{site.title}</h1>
      <p className="mt-4 max-w-2xl text-muted">{site.description}</p>
    </section>
  );
}
