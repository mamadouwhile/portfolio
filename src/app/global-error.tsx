"use client";

import { useEffect } from "react";

import "./globals.css";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

/** Dernier filet de sécurité : erreur dans le layout racine (rendu sans le layout). */
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    void import("@sentry/nextjs").then((Sentry) => Sentry.captureException(error));
  }, [error]);

  return (
    <html lang="fr" className="dark">
      <body className="flex min-h-dvh items-center justify-center bg-background p-6 text-foreground">
        <main className="max-w-md text-center">
          <h1 className="text-2xl font-semibold">Une erreur est survenue</h1>
          <p className="mt-3 text-muted">
            Le problème a été signalé automatiquement. Vous pouvez réessayer.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground"
          >
            Réessayer
          </button>
        </main>
      </body>
    </html>
  );
}
