import { site } from "@/data/site";
import { SITE_URL } from "@/lib/constants";

/*
 * Gabarit commun des e-mails : HTML en tableaux et styles en ligne, seule mise en page fiable
 * dans Gmail, Outlook et Apple Mail. Thème clair (les clients mail inversent mal les thèmes
 * sombres) avec le bandeau sombre et l'accent orange du site (#c2410c : contraste AA sur blanc).
 */
export const emailColors = {
  page: "#f4f1ee",
  card: "#ffffff",
  ink: "#0b0b0c",
  text: "#27272a",
  muted: "#6b6b73",
  border: "#e7e2dc",
  soft: "#faf7f4",
  accent: "#c2410c",
  accentBright: "#ff6b2c",
} as const;

const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
const MONO = "'SFMono-Regular', Menlo, Consolas, 'Liberation Mono', monospace";

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Texte libre → HTML échappé, retours à la ligne conservés. */
export function multiline(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, "<br />");
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/Paris",
  }).format(date);
}

export function eyebrow(label: string): string {
  return `<p style="margin:0 0 8px;font-family:${MONO};font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:${emailColors.accent};">${escapeHtml(label)}</p>`;
}

export function heading(text: string): string {
  return `<h1 style="margin:0;font-family:${FONT};font-size:26px;line-height:1.2;font-weight:700;color:${emailColors.ink};">${text}</h1>`;
}

export function paragraph(html: string): string {
  return `<p style="margin:16px 0 0;font-family:${FONT};font-size:16px;line-height:1.6;color:${emailColors.text};">${html}</p>`;
}

export function button(label: string, href: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:28px;">
  <tr>
    <td style="border-radius:999px;background:${emailColors.accent};">
      <a href="${escapeHtml(href)}" style="display:inline-block;padding:13px 26px;font-family:${FONT};font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:999px;">${escapeHtml(label)} &rarr;</a>
    </td>
  </tr>
</table>`;
}

export function divider(): string {
  return `<div style="height:1px;line-height:1px;font-size:0;background:${emailColors.border};margin:28px 0;">&nbsp;</div>`;
}

type LayoutOptions = {
  /** Aperçu affiché après l'objet dans la boîte de réception. */
  preheader: string;
  body: string;
  footer: string;
};

export function renderLayout({ preheader, body, footer }: LayoutOptions): string {
  const socials = site.socials
    .flatMap(({ href, label }) => (href ? [{ href, label }] : []))
    .map(
      (social) =>
        `<a href="${escapeHtml(social.href)}" style="color:${emailColors.muted};text-decoration:underline;">${escapeHtml(social.label)}</a>`,
    )
    .join(" &nbsp;·&nbsp; ");
  const domain = SITE_URL.replace(/^https?:\/\//, "");

  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="color-scheme" content="light" />
<meta name="supported-color-schemes" content="light" />
<title>${escapeHtml(site.name)}</title>
</head>
<body style="margin:0;padding:0;background:${emailColors.page};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${emailColors.page};">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">
        <tr>
          <td style="background:${emailColors.ink};border-radius:20px 20px 0 0;padding:22px 32px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="width:40px;height:40px;border-radius:12px;background:${emailColors.accentBright};text-align:center;vertical-align:middle;font-family:${FONT};font-size:15px;font-weight:700;color:${emailColors.ink};">MD</td>
                <td style="padding-left:14px;font-family:${FONT};">
                  <div style="font-size:16px;font-weight:700;color:#ffffff;">${escapeHtml(site.name)}</div>
                  <div style="font-size:13px;color:#a1a1aa;">${escapeHtml(site.role)}</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:${emailColors.card};border:1px solid ${emailColors.border};border-top:0;border-radius:0 0 20px 20px;padding:36px 32px;">
            ${body}
          </td>
        </tr>
        <tr>
          <td style="padding:24px 8px 0;text-align:center;font-family:${FONT};font-size:12px;line-height:1.6;color:${emailColors.muted};">
            ${footer}
            <p style="margin:8px 0 0;"><a href="${escapeHtml(SITE_URL)}" style="color:${emailColors.muted};text-decoration:underline;">${escapeHtml(domain)}</a> &nbsp;·&nbsp; ${socials}</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

export const emailFonts = { FONT, MONO };
