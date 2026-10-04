/*
 * Limiteur en mémoire (fenêtre glissante). La mémoire n'est partagée que par les requêtes
 * servies par une même instance de fonction : c'est une barrière de base contre les envois en
 * boucle, à doubler par une règle « Rate limiting » du pare-feu Vercel (voir CLAUDE.md).
 */
type Limiter = {
  /** Enregistre un passage et indique s'il reste sous la limite. */
  consume: (key: string) => boolean;
};

export function createRateLimiter({
  limit,
  windowMs,
}: {
  limit: number;
  windowMs: number;
}): Limiter {
  const hits = new Map<string, number[]>();

  return {
    consume(key) {
      const now = Date.now();
      const recent = (hits.get(key) ?? []).filter((time) => now - time < windowMs);

      // Ménage occasionnel pour que la table ne grossisse pas indéfiniment.
      if (hits.size > 5000) {
        for (const [storedKey, times] of hits) {
          if (times.every((time) => now - time >= windowMs)) hits.delete(storedKey);
        }
      }

      if (recent.length >= limit) {
        hits.set(key, recent);
        return false;
      }
      recent.push(now);
      hits.set(key, recent);
      return true;
    },
  };
}

/** IP du visiteur : sur Vercel, `x-forwarded-for` est réécrit par la plateforme. */
export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip") || "inconnue";
}
