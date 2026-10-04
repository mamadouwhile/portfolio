import { ArrowUpRight, Award, Code2, ShieldCheck, TestTube2, type LucideIcon } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { certificationCategories, certifications } from "@/data/certifications";
import type { CertificationCategoryId } from "@/types/content";

const categoryIcons: Record<CertificationCategoryId, LucideIcon> = {
  qa: TestTube2,
  web: Code2,
  languages: Award,
  tools: ShieldCheck,
};

const monthFormatter = new Intl.DateTimeFormat("fr-FR", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function formatIssued(issued: string): string {
  return monthFormatter.format(new Date(`${issued}-01T00:00:00Z`));
}

/** Sous-bloc « Certifications » de la section Parcours, groupé par thème. */
export function Certifications() {
  const years = certifications.map((certification) => certification.issued.slice(0, 4)).sort();
  const issuers = [...new Set(certifications.map((certification) => certification.issuer))];

  return (
    <div id="certifications" className="mt-12 scroll-mt-24">
      <h3 className="font-display text-2xl leading-[1.1] font-semibold">Certifications</h3>
      <p className="mt-3 text-pretty text-muted">
        {certifications.length} certifications {issuers.join(", ")} obtenues de {years[0]} à{" "}
        {years.at(-1)}, du développement web au test automatisé.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {certificationCategories.map((category) => {
          const items = certifications
            .filter((certification) => certification.category === category.id)
            .sort((a, b) => b.issued.localeCompare(a.issued));
          if (items.length === 0) return null;
          const Icon = categoryIcons[category.id];

          return (
            <Reveal key={category.id} className="bento-card p-5">
              <h4 className="flex items-center gap-2 font-semibold">
                <Icon className="size-4 shrink-0 text-accent" aria-hidden />
                {category.title}
                <span className="ml-auto font-mono text-xs text-muted">{items.length}</span>
              </h4>
              <ul className="mt-4 space-y-4">
                {items.map((certification) => (
                  <li key={certification.credentialId}>
                    <a
                      href={certification.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group/cert inline-flex items-start gap-1 text-sm leading-snug font-medium transition-colors hover:text-accent"
                    >
                      {certification.title}
                      <ArrowUpRight
                        className="mt-0.5 size-3.5 shrink-0 text-muted transition-colors group-hover/cert:text-accent"
                        aria-hidden
                      />
                      <span className="sr-only"> : voir le certificat (nouvel onglet)</span>
                    </a>
                    <p className="mt-0.5 text-xs text-muted">
                      {certification.issuer} · {formatIssued(certification.issued)}
                    </p>
                    {certification.skills.length > 0 ? (
                      <ul className="mt-1.5 flex flex-wrap gap-1" aria-label="Compétences">
                        {certification.skills.map((skill) => (
                          <li
                            key={skill}
                            className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
