import type { Metadata } from "next";

import { site } from "@/data/site";
import { OG_IMAGE } from "@/lib/constants";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

/**
 * Metadata complètes d'une page. Next.js remplace (sans fusion profonde) les objets
 * `openGraph` et `twitter` du layout : on les redéclare donc entièrement ici.
 */
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const fullTitle = `${title} — ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
