import type { Metadata } from "next";

import { Contact } from "@/components/sections/Contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Un projet de site vitrine, de plateforme web, d'application mobile ou de base de SaaS ? Écrivez-moi via le formulaire : je suis disponible en freelance.",
  path: "/contact",
});

export default function ContactPage() {
  return <Contact headingLevel="h1" />;
}
