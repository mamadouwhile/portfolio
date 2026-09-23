import { HomeBento } from "@/components/home/HomeBento";
import { JsonLd } from "@/components/seo/JsonLd";
import { profilePageJsonLd } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={profilePageJsonLd()} />
      <HomeBento />
    </>
  );
}
