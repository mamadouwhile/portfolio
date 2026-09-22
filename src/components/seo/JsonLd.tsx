type JsonLdProps = {
  data: Record<string, unknown>;
};

/** Données structurées schema.org, sérialisées sans risque d'injection de balise. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
