import { withSentryConfig } from "@sentry/nextjs/config";
import type { NextConfig } from "next";

/*
 * Politique de sécurité des contenus. Statique (sans nonce) pour garder des pages pré-rendues :
 * les scripts en ligne de Next.js et de next-themes imposent 'unsafe-inline'. vercel.live sert
 * la barre d'outils Vercel des previews. 'unsafe-eval' seulement en développement.
 */
const isDev = process.env.NODE_ENV === "development";
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://vercel.live`,
  "style-src 'self' 'unsafe-inline' https://vercel.live",
  "img-src 'self' data: blob: https://vercel.live https://vercel.com",
  "font-src 'self' data: https://vercel.live https://assets.vercel.com",
  "connect-src 'self' https://vercel.live wss://ws-us3.pusher.com",
  "frame-src https://vercel.live",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

/** Ancienne adresse de production : redirigée vers le domaine (les previews ne sont pas touchées). */
const LEGACY_HOST = "portfolio-one-chi-igpe905f4o.vercel.app";
const CANONICAL_ORIGIN = "https://mamadouwhile.dev";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 768, 1024, 1280, 1440, 1920],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: LEGACY_HOST }],
        destination: `${CANONICAL_ORIGIN}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default withSentryConfig(nextConfig, {
  // Pas de projet/organisation ni de jeton : aucun envoi de source maps au build.
  silent: true,
  telemetry: false,
  sourcemaps: { disable: true },
  // Fait transiter les rapports par le site pour éviter les bloqueurs de pubs.
  tunnelRoute: "/monitoring",
});
