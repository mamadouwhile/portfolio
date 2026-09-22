# CLAUDE.md — Portfolio Mahamadou Dembele

## Projet

Portfolio personnel de Mahamadou Dembele, étudiant en Licence Informatique à Angers et
développeur web/mobile freelance. Le site présente un positionnement clair, des preuves
concrètes (projets réels, stack, parcours) et un formulaire de contact fonctionnel. Design
contemporain : dark mode natif, bento grid, micro-interactions sobres. Déployé sur Vercel,
chaque push déclenche un déploiement (preview sur les branches, production sur `master`).

**Workflow** : travailler et pousser directement sur `master` (pas de branche séparée sauf
demande explicite). Démo : https://portfolio-one-chi-igpe905f4o.vercel.app

## Stack

- Next.js 15 — App Router, Server Components par défaut (`"use client"` seulement si nécessaire)
- TypeScript strict (`strict`, `noUncheckedIndexedAccess`) — pas de `any`
- Tailwind CSS v4 (config CSS-first dans `src/app/globals.css`)
- shadcn/ui : à générer à la demande dans `src/components/ui` (aucun composant à ce jour)
- Animations en CSS pur (keyframes `@theme` + scroll-driven animations) — pas de lib JS d'animation
- Zod pour la validation (formulaire de contact, côté client et serveur)
- Hébergement : Vercel

## Design system

- **Accent unique : orange brûlé** — `#ff6b2c` en sombre, `#c2410c` en clair (assombri pour
  un contraste AA sur blanc). Choisi pour se démarquer des dégradés violet/bleu génériques et
  rester chaleureux sur fond quasi noir. Le vert (`--success`) est réservé à l'indicateur de
  disponibilité.
- Tokens CSS dans `globals.css` (`--background`, `--surface`, `--surface-2`, `--foreground`,
  `--muted`, `--border`, `--accent`…) exposés en classes Tailwind (`bg-surface`, `text-accent`…).
  Jamais de couleur en dur dans les composants.
- Typographie : Space Grotesk (titres, `font-display`), Inter (texte), Geist Mono (code/labels).
- Thème sombre par défaut via `next-themes` (classe `.dark`, persistance localStorage `theme`).
- **Échelle d'espacement (dense)** — à respecter partout, ne pas réintroduire de `py-24+` :
  - Section (`Section.tsx`) : `py-10 md:py-14 lg:py-16`, séparées par un filet `border-t`.
  - En-tête de section → contenu : `mt-8 md:mt-10` ; eyebrow → titre `mt-2` ; titre → lead `mt-3`.
  - Sous-blocs d'une même section : `mt-12` ; grilles de cards : `gap-4` ; colonnes texte/grille :
    `gap-6 lg:gap-10`.
  - Cards : `p-5` (`md:p-6` pour les grandes) ; timeline : `pb-8` entre items.
  - Hero : `pt-10 md:pt-14 lg:pt-16`, `pb-10 md:pb-12`, suivi du bandeau « Stack principale ».
  - Footer : CTA `py-12 md:py-14`, colonnes `py-10`.
- **Typographie** : titres `leading-[1.1]` (hero `leading-[1.05]`), H2 `text-3xl md:text-4xl`,
  hero `text-4xl sm:text-5xl lg:text-6xl`, lead `text-base md:text-lg`.
- Animations : CSS uniquement. Entrée du hero `animate-enter`, transition de page
  `animate-page-enter` (`src/app/template.tsx`), apparition au scroll `.reveal` (mouvement seul,
  sans fondu). Tout est coupé par `prefers-reduced-motion`. Framer Motion a été retiré : il
  rendait le contenu invisible côté serveur (opacity 0 jusqu'à l'hydratation) et dégradait le LCP.

## Décisions d'architecture

- **Contenu** : `src/data/*` est l'unique source ; les composants ne contiennent que du texte
  d'interface. Chiffres du hero calculés depuis les données (jamais écrits en dur).
- **Server Components par défaut**. Composants client limités à : `MobileMenu`, `Navbar`
  (lien actif), `ThemeToggle`, `Providers` (next-themes), `HeroSpotlight` (halo au curseur),
  `FooterCta` (masqué sur `/` et `/contact`), `ContactForm`. Le `Header` reste serveur.
- **Animations CSS, pas de Framer Motion** : retiré car il rendait le contenu en `opacity: 0`
  côté serveur jusqu'à l'hydratation (LCP mobile 3,8 s → ~2,6 s, −40 kB de JS sur l'accueil).
  Apparition au scroll = `.reveal` (scroll-driven, mouvement seul, sans fondu pour garder un
  contraste plein). Aucune animation ne doit partir d'`opacity: 0` au-dessus de la ligne de
  flottaison.
- **URL du site** (`SITE_URL`, `src/lib/constants.ts`) : `NEXT_PUBLIC_SITE_URL` →
  `VERCEL_PROJECT_PRODUCTION_URL` (automatique sur Vercel) → localhost.
- **SEO** : chaque page exporte `pageMetadata({ title, description, path })`
  (`src/lib/metadata.ts`) — Next.js ne fusionne pas `openGraph`/`twitter` entre layout et page,
  le helper redéclare tout. JSON-LD `ProfilePage` + `Person` sur l'accueil
  (`src/lib/structured-data.ts`). `sitemap.ts` / `robots.ts` dynamiques. Pas de `robots` dans le
  layout (conflit avec le `noindex` automatique des 404).
- **Image Open Graph** : `public/og-image.png` (1200×630) statique, rendue depuis le site avec
  ses polices ; à régénérer si le positionnement ou le design change.
- **Titres** : un seul `h1` par page. `Section` accepte `headingLevel` (`h1` sur /about,
  /projects, /contact) ; les sous-titres (About, ProjectCard) descendent d'un niveau en conséquence.
- **Captures de projets** : `public/images/projects/<slug>-screenshot.png`, détectées au build
  (`getScreenshot`, `server-only`) ; à défaut, illustration géométrique déterministe (slug).
- **Contact** : schéma Zod partagé client/serveur (`src/lib/contact-schema.ts`) ; API Resend en
  `fetch` (sans SDK) ; 503 si non configurée ; champ piège `website` → 200 silencieux.
- **Vercel** : `vercel.json` force le preset Next.js (le projet était configuré pour Vite).
- **Budgets qualité** : Lighthouse mobile ≥ 95 perf, 100 a11y / best practices / SEO ; CLS 0 ;
  axe-core sans violation en thèmes clair et sombre.

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
  app/          routes, api/contact, sitemap.ts, robots.ts, icon.svg, template.tsx
  components/
    layout/     Header, Navbar, MobileMenu, ThemeToggle, AvailabilityBadge, Footer, FooterCta
    sections/   Section, Hero, HeroSpotlight, About, Skills, Projects, Experience, Contact
    projects/   ProjectCard, ProjectVisual, ProjectStatusBadge, ProjectLinks
    contact/    ContactForm
    motion/     Reveal (CSS)
    seo/        JsonLd
    ui/         composants shadcn (à la demande)
  data/         site, projects, skills, experience, services — source unique du contenu
  lib/          constants, metadata, structured-data, contact-schema, tech-icons, utils…
  types/        types partagés du contenu
public/         og-image.png, images/projects/, documents/ (CV)
docs/           captures d'écran du README
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
