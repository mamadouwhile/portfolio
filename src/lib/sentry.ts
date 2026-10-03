/**
 * Configuration Sentry partagée (navigateur, serveur Node et Edge).
 * Le DSN n'est pas un secret : il identifie seulement le projet Sentry.
 */
export const SENTRY_DSN =
  process.env.NEXT_PUBLIC_SENTRY_DSN ??
  "https://0c431f4eef3eb5ef546662fbd9ccfffb@o4512193580957696.ingest.de.sentry.io/4512193593868368";

/** Environnement Vercel (production / preview), absent en local. */
export const SENTRY_ENVIRONMENT = process.env.NEXT_PUBLIC_VERCEL_ENV ?? process.env.VERCEL_ENV;

/** Sentry n'envoie rien en local : uniquement sur les déploiements Vercel. */
export const SENTRY_ENABLED = Boolean(SENTRY_ENVIRONMENT);
