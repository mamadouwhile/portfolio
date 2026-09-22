import { ArrowUpRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

import { ContactForm } from "@/components/contact/ContactForm";
import { AvailabilityBadge } from "@/components/layout/AvailabilityBadge";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/sections/Section";
import { site } from "@/data/site";

const socialIcons = { github: SiGithub, linkedin: FaLinkedin };

export function Contact() {
  const socials = site.socials.filter((social) => social.href);

  return (
    <Section
      id="contact"
      eyebrow="05 — Contact"
      title="Un projet en tête ? Parlons-en."
      lead="Site vitrine, plateforme, application mobile ou base de SaaS : décrivez votre besoin, je vous réponds avec une première approche."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-10">
        <Reveal className="space-y-6">
          <AvailabilityBadge />
          <div>
            <p className="font-mono text-xs tracking-widest text-muted uppercase">Localisation</p>
            <p className="mt-2">{site.location}</p>
          </div>
          {socials.length > 0 ? (
            <div>
              <p className="font-mono text-xs tracking-widest text-muted uppercase">Ailleurs</p>
              <ul className="mt-3 space-y-2">
                {socials.map((social) => {
                  const Icon = socialIcons[social.platform];
                  return (
                    <li key={social.platform}>
                      <a
                        href={social.href ?? undefined}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-3 text-muted transition-colors hover:text-foreground"
                      >
                        <Icon className="size-4" aria-hidden />
                        {social.label}
                        <ArrowUpRight
                          className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden
                        />
                        <span className="sr-only"> (nouvel onglet)</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
