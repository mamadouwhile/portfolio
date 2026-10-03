import * as Sentry from "@sentry/nextjs";

import { SENTRY_DSN, SENTRY_ENABLED, SENTRY_ENVIRONMENT } from "@/lib/sentry";

export function register() {
  if (process.env.NEXT_RUNTIME === "nodejs" || process.env.NEXT_RUNTIME === "edge") {
    Sentry.init({
      dsn: SENTRY_DSN,
      enabled: SENTRY_ENABLED,
      environment: SENTRY_ENVIRONMENT,
    });
  }
}

/** Remonte à Sentry les erreurs des Server Components, routes et API. */
export const onRequestError = Sentry.captureRequestError;
