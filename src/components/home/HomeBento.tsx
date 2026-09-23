import { ContactCard } from "@/components/home/ContactCard";
import { ExperienceCard } from "@/components/home/ExperienceCard";
import { MarqueeCard } from "@/components/home/MarqueeCard";
import { ProfileCard } from "@/components/home/ProfileCard";
import { ProjectsCard } from "@/components/home/ProjectsCard";
import { ServicesCard } from "@/components/home/ServicesCard";
import { SocialsCard } from "@/components/home/SocialsCard";
import { StackCard } from "@/components/home/StackCard";
import { StatsCard } from "@/components/home/StatsCard";

/*
 * Accueil « tableau de bord » : tout tient sur un écran desktop.
 *   [ bandeau défilant ····························· ]
 *   [ profil (2)          ][ projets ][ parcours ]
 *   [ stack ][ services (2)          ][ réseaux  ]
 *   [ chiffres (2)        ][ travaillons ensemble (2) ]
 * Chaque carte mène à sa partie du site. En mobile, les cartes s'empilent.
 */
export function HomeBento() {
  return (
    <div className="mx-auto grid max-w-6xl gap-3 px-4 py-4 sm:grid-cols-2 md:px-6 lg:min-h-[calc(100dvh-4rem-3.1rem)] lg:grid-cols-4 lg:grid-rows-[auto_repeat(3,minmax(min-content,1fr))] lg:gap-3 lg:py-4">
      <MarqueeCard className="sm:col-span-2 lg:col-span-4" />
      <ProfileCard className="sm:col-span-2" />
      <ProjectsCard />
      <ExperienceCard />
      <StackCard />
      {/* Placé explicitement en desktop pour rester à côté de Stack en tablette. */}
      <SocialsCard className="lg:col-start-4 lg:row-start-3" />
      <ServicesCard className="sm:col-span-2" />
      <StatsCard className="sm:col-span-2" />
      <ContactCard className="sm:col-span-2" />
    </div>
  );
}
