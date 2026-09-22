# CLAUDE.md — Portfolio Mahamadou Dembele

## Projet

Portfolio personnel de Mahamadou Dembele, étudiant en Licence Informatique à Angers et
développeur web/mobile freelance. Le site présente un positionnement clair, des preuves
concrètes (projets réels, stack, parcours) et un formulaire de contact fonctionnel. Design
contemporain : dark mode natif, bento grid, micro-interactions sobres. Déployé sur Vercel,
chaque push déclenche un déploiement (preview sur les branches, production sur `master`).

## Stack

- Next.js 15 — App Router, Server Components par défaut (`"use client"` seulement si nécessaire)
- TypeScript strict (`strict`, `noUncheckedIndexedAccess`) — pas de `any`
- Tailwind CSS v4 (config CSS-first dans `src/app/globals.css`)
- shadcn/ui pour les primitives UI, générées à la demande dans `src/components/ui`
- Framer Motion pour les animations (variants centralisés dans `src/lib/animations.ts`)
- Zod pour la validation (formulaire de contact, côté client et serveur)
- Hébergement : Vercel

## Commandes

```bash
npm run dev        # serveur de dev (http://localhost:3000)
npm run build      # build de production — doit passer avant chaque push
npm run lint       # ESLint (0 warning toléré)
npm run typecheck  # tsc --noEmit
npm run format     # Prettier (écriture)
```

## Structure

```
src/
  app/          routes (App Router) + api/contact/route.ts
  components/
    layout/     Header, Footer, Navbar (indicateur « disponible en freelance »)
    sections/   Hero, About, Skills, Projects, Experience, Contact, CTA
    ui/         composants shadcn
  data/         projects.ts, experience.ts, skills.ts, site.ts — source unique du contenu
  lib/          utils, constants, variants Framer Motion
  types/        types partagés du contenu
public/images   visuels réels (captures, profil, logo)
```

## Conventions de code

- Composants fonctionnels uniquement, un composant par fichier, nom en PascalCase.
- Pas de `export default`, sauf là où Next.js l'exige (`page`, `layout`, `route`, `not-found`,
  `sitemap`, `robots`, `opengraph-image`, fichiers de config).
- Imports via l'alias `@/` (jamais de `../../..`).
- Classes Tailwind fusionnées avec `cn()` (`src/lib/utils.ts`).
- Types du contenu dans `src/types`, jamais redéfinis inline dans les composants.
- Texte de l'interface en français.
- Commits au format Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`…).

## Règles strictes

- **Aucune donnée factice** : pas de lorem ipsum, pas de faux témoignages, pas de chiffres
  inventés. Tout le contenu affiché provient de `src/data/*`. Une information manquante
  est marquée `TODO` explicitement dans les données, jamais inventée.
- **Mobile-first** : écrire les styles de base pour mobile, puis `md:` / `lg:`. Tester chaque
  composant à 375px, 768px et 1440px.
- **Accessibilité** : HTML sémantique, focus visible, contrastes WCAG AA, respect de
  `prefers-reduced-motion` sur toute animation.
- **Build vert** : `npm run lint`, `npm run typecheck` et `npm run build` passent avant chaque
  commit/push. Si un déploiement Vercel échoue, on corrige avant toute nouvelle étape.
- Commit + push après chaque étape livrée.
