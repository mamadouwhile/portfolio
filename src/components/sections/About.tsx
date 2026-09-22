import {
  Code2,
  GraduationCap,
  LayoutTemplate,
  Layers,
  Palette,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/sections/Section";
import { experience, workingMethod } from "@/data/experience";
import { services } from "@/data/services";

const serviceIcons: LucideIcon[] = [LayoutTemplate, Smartphone, Layers, Palette];

const study = experience.find((item) => item.title.startsWith("Licence"));
const freelance = experience.find((item) => item.organization === "Indépendant");

const roles = [
  {
    icon: GraduationCap,
    label: "Côté études",
    title: study?.title ?? "",
    text: `À ${study?.organization ?? ""}, je consolide les fondamentaux : ${study?.highlights.join(", ").toLowerCase() ?? ""}.`,
  },
  {
    icon: Code2,
    label: "Côté terrain",
    title: freelance?.title ?? "",
    text: `${freelance?.period ?? ""}, je conçois et livre des projets concrets : ${freelance?.description.charAt(0).toLowerCase() ?? ""}${freelance?.description.slice(1) ?? ""}`,
  },
];

const steps = ["Développer par étapes", "Tester chaque itération", "Corriger, puis avancer"];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — À propos"
      title="Étudiant en informatique, développeur freelance sur le terrain."
      lead="Deux casquettes qui se nourrissent l'une l'autre : la rigueur des fondamentaux d'un côté, des projets réels à livrer de l'autre."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {roles.map((role, index) => (
          <Reveal
            key={role.label}
            delay={index * 0.08}
            className="rounded-2xl border border-border bg-surface p-6 md:p-8"
          >
            <role.icon className="size-6 text-accent" aria-hidden />
            <p className="mt-6 font-mono text-xs tracking-widest text-muted uppercase">
              {role.label}
            </p>
            <h3 className="mt-2 text-xl font-semibold">{role.title}</h3>
            <p className="mt-3 text-pretty text-muted">{role.text}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <h3 className="text-2xl font-semibold">Ce que je fais</h3>
          <p className="mt-3 text-muted">
            Des missions web et mobile, de la première maquette à la mise en production.
          </p>
        </Reveal>
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] ?? Code2;
            return (
              <li key={service.title} className="bg-background p-6">
                <Icon className="size-5 text-accent" aria-hidden />
                <h4 className="mt-4 font-display font-semibold">{service.title}</h4>
                <p className="mt-2 text-sm text-muted">{service.description}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <h3 className="text-2xl font-semibold">Ma façon de travailler</h3>
          <p className="mt-3 text-muted">{workingMethod}</p>
        </Reveal>
        <ol className="grid gap-4 sm:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal
              as="li"
              key={step}
              delay={index * 0.08}
              className="rounded-2xl border border-dashed border-border p-5"
            >
              <span className="font-mono text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-medium">{step}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
