import type { Certification, ExperienceItem, SpokenLanguage } from "@/types/content";

export const experience: ExperienceItem[] = [
  {
    kind: "work",
    title: "Développeur web/mobile freelance",
    shortTitle: "Développeur freelance",
    organization: "Indépendant",
    location: "Angers",
    period: "En parallèle des études",
    description:
      "Conception et développement de sites, de plateformes web et d'applications mobiles, de l'idée à la mise en production.",
    highlights: ["Sites vitrines", "Plateformes web", "Applications React Native"],
  },
  {
    kind: "education",
    title: "Licence Informatique (L3)",
    shortTitle: "Licence Informatique",
    organization: "Université d'Angers",
    location: "Angers",
    period: "2024 – aujourd'hui",
    description: "Formation universitaire aux fondamentaux de l'informatique.",
    highlights: [
      "Programmation",
      "Algorithmique",
      "Architecture logicielle",
      "Théorie des langages",
      "Synthèse d'images",
    ],
  },
  {
    kind: "work",
    title: "Testeur automaticien",
    shortTitle: "Testeur automaticien",
    organization: "TechTrend Solutions",
    location: "Casablanca, Maroc",
    period: "Juin 2023 – déc. 2024",
    description:
      "Conception de scénarios de tests automatisés couvrant plusieurs plateformes métier de l'entreprise, et tests de charge pour valider la résistance des applications en conditions réelles.",
    highlights: ["Selenium", "TestNG", "JMeter", "Tests de charge", "Recette fonctionnelle"],
  },
  {
    kind: "work",
    title: "Stagiaire développeur Symfony",
    shortTitle: "Stage développeur Symfony",
    organization: "TechTrend Solutions",
    location: "Casablanca, Maroc",
    period: "Janv. – juin 2023",
    description:
      "Participation au développement d'une application web pour un organisme de formation (back-office et espace utilisateurs), en équipe, au sein du cycle dev/test.",
    highlights: ["PHP", "Symfony", "Architecture MVC", "Travail en équipe"],
  },
  {
    kind: "education",
    title: "Licence Système d'information",
    shortTitle: "Licence Système d'information",
    organization: "Université Hassan 1er",
    location: "Maroc",
    period: "2020 – 2023",
    description: "Formation aux systèmes d'information.",
    highlights: [],
  },
];

export const certifications: Certification[] = [
  {
    title: "Initiation au test et à la qualité logicielle",
    issuer: "OpenClassrooms",
    year: "2024",
  },
  { title: "Concevez votre site web avec PHP et MySQL", issuer: "OpenClassrooms", year: "2024" },
  { title: "Découvrez l'univers de la cybersécurité", issuer: "OpenClassrooms", year: "2022" },
];

export const spokenLanguages: SpokenLanguage[] = [
  { name: "Français", level: "Langue maternelle" },
  { name: "Bambara", level: "Langue maternelle" },
  { name: "Anglais", level: "Niveau professionnel" },
];

export const workingMethod =
  "Je développe par étapes : chaque itération est testée puis corrigée avant de passer à la suivante — un réflexe hérité de mon expérience de testeur automaticien.";
