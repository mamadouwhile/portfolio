import { site } from "@/data/site";

/** Pied de page sobre, sur une ligne : l'accueil doit tenir sur un seul écran. */
export function Footer() {
  const github = site.socials.find((social) => social.platform === "github")?.href;

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-4 text-xs text-muted md:px-6">
        <p>
          © {new Date().getFullYear()} {site.name}
          <span className="text-accent">.</span> Tous droits réservés.
        </p>
        <p>
          {site.location}
          {github ? (
            <>
              {" · "}
              <a href={github} target="_blank" rel="noreferrer" className="hover:text-foreground">
                GitHub<span className="sr-only"> (nouvel onglet)</span>
              </a>
            </>
          ) : null}
        </p>
      </div>
    </footer>
  );
}
