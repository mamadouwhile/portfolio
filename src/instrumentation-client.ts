import type * as SentryModule from "@sentry/nextjs";

import { SENTRY_DSN, SENTRY_ENABLED, SENTRY_ENVIRONMENT } from "@/lib/sentry";

/*
 * Sentry navigateur chargé uniquement quand une erreur se produit : sans erreur, aucun octet
 * du SDK n'est téléchargé (budget Lighthouse ≥ 95). Un écouteur natif minimal capte la
 * première erreur, charge le SDK, la lui transmet ; le SDK prend ensuite le relais pour les
 * suivantes. Erreurs uniquement (pas de tracing, replay ni sessions). Rien en local.
 */
if (SENTRY_ENABLED && typeof window !== "undefined") {
  let sentry: Promise<typeof SentryModule> | undefined;

  const loadSentry = () => {
    sentry ??= import("@sentry/nextjs").then((Sentry) => {
      Sentry.init({
        dsn: SENTRY_DSN,
        environment: SENTRY_ENVIRONMENT,
        integrations: (defaults) =>
          defaults.filter((integration) => integration.name !== "BrowserSession"),
      });
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
      return Sentry;
    });
    return sentry;
  };

  function onError(event: ErrorEvent) {
    const error: unknown = event.error ?? event.message;
    void loadSentry().then((Sentry) => Sentry.captureException(error));
  }

  function onRejection(event: PromiseRejectionEvent) {
    const reason: unknown = event.reason;
    void loadSentry().then((Sentry) => Sentry.captureException(reason));
  }

  window.addEventListener("error", onError);
  window.addEventListener("unhandledrejection", onRejection);
}
