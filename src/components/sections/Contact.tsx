import { Section } from "@/components/sections/Section";

// Le formulaire validé (client + serveur via /api/contact) est implémenté au Bloc 2.
export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="text-muted max-w-2xl">
        Un projet de site, de plateforme ou d&apos;application mobile ? Parlons-en.
      </p>
    </Section>
  );
}
