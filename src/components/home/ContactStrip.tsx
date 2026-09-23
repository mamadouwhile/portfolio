import { ContactCard } from "@/components/home/ContactCard";

/** Carte « Travaillons ensemble » en fin de page intérieure. */
export function ContactStrip() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-10 md:px-6 md:pb-14">
      <ContactCard className="min-h-48" />
    </div>
  );
}
