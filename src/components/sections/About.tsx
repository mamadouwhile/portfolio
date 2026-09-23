import { Code2, GraduationCap, TestTube2 } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/sections/Section";
import { experience, workingMethod } from "@/data/experience";
import { services } from "@/data/services";
import { serviceIcons } from "@/lib/service-icons";

const study = experience.find((item) => item.kind === "education");
const freelance = experience.find((item) => item.organization === "Indépendant");
const qa = experience.find((item) => item.title === "Testeur automaticien");

const roles = [
  {
    icon: GraduationCap,
    label: "Côté études",
    title: study?.title ?? "",
    text: `À l'${study?.organization ?? ""}, je consolide les fondamentaux : ${study?.highlights.join(", ").toLowerCase() ?? ""}.`,
  },
  {
    icon: Code2,
    label: "Côté terrain",
    title: freelance?.title ?? "",
    text: `${freelance?.period ?? ""}, je conçois et livre des projets concrets : ${freelance?.description.charAt(0).toLowerCase() ?? ""}${freelance?.description.slice(1) ?? ""}`,
  },
  {
    icon: TestTube2,
    label: "Côté qualité & automatisation",
    title: `${qa?.title ?? ""} — ${qa?.organization ?? ""}`,
    text: `${qa?.period ?? ""} : tests automatisés (Selenium, TestNG), tests de charge (JMeter) et recette. Aujourd'hui, j'automatise aussi des processus métier avec l'IA (n8n, Python).`,
  },
];

const steps = ["Développer par étapes", "Tester chaque itération", "Corriger, puis avancer"];

type AboutProps = {
  headingLevel?: "h1" | "h2";
};

export function About({ headingLevel = "h2" }: AboutProps = {}) {
  // Sous-titres un niveau sous le titre de section (h1 → h2 sur /about, h2 → h3 sur l'accueil).
  const Sub = headingLevel === "h1" ? "h2" : "h3";
  const SubSub = headingLevel === "h1" ? "h3" : "h4";

  return (
    <Section
      headingLevel={headingLevel}
      id="about"
      eyebrow="01 — À propos"
      title="Développeur fullstack, avec un réflexe qualité et automatisation."
      lead="Étudiant en Licence 3 Informatique à Angers, développeur freelance et ancien testeur automaticien : je conçois des produits, je les teste et j'automatise ce qui peut l'être."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {roles.map((role) => (
          <Reveal key={role.label} className="bento-card p-5 md:p-6">
            <role.icon className="size-5 text-accent" aria-hidden />
            <p className="mt-4 font-mono text-xs tracking-widest text-muted uppercase">
              {role.label}
            </p>
            <Sub className="mt-2 text-xl font-semibold">{role.title}</Sub>
            <p className="mt-3 text-pretty text-muted">{role.text}</p>
          </Reveal>
        ))}
      </div>

      <div id="services" className="mt-12 grid scroll-mt-20 gap-6 lg:grid-cols-[1fr_2fr] lg:gap-10">
        <Reveal>
          <Sub className="text-2xl font-semibold">Ce que je fais</Sub>
          <p className="mt-2 text-muted">
            Des missions web et mobile, de la première maquette à la mise en production.
          </p>
        </Reveal>
        <ul className="grid gap-px overflow-hidden rounded-[1.75rem] border border-border bg-border sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] ?? Code2;
            return (
              <li key={service.title} className="bg-background p-5">
                <Icon className="size-5 text-accent" aria-hidden />
                <SubSub className="mt-3 font-display font-semibold">{service.title}</SubSub>
                <p className="mt-2 text-sm text-muted">{service.description}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-10">
        <Reveal>
          <Sub className="text-2xl font-semibold">Ma façon de travailler</Sub>
          <p className="mt-2 text-muted">{workingMethod}</p>
        </Reveal>
        <ol className="grid gap-4 sm:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal
              as="li"
              key={step}
              className="rounded-2xl border border-dashed border-border p-4"
            >
              <span className="font-mono text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 font-medium">{step}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
