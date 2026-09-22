import { Section } from "@/components/sections/Section";

// Le formulaire validé (client + serveur via /api/contact) est implémenté au Bloc 2.
export function Contact() {
  return (
    <Section id="contact" eyebrow="05 — Contact" title="Contact">
      <p className="max-w-2xl text-muted">
        Un projet de site, de plateforme ou d&apos;application mobile ? Parlons-en.
      </p>
    </Section>
  );
}
