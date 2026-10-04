import { site } from "@/data/site";
import { SITE_URL } from "@/lib/constants";
import type { ContactInput } from "@/lib/contact-schema";
import {
  button,
  divider,
  emailColors,
  emailFonts,
  escapeHtml,
  eyebrow,
  formatDate,
  heading,
  multiline,
  paragraph,
  renderLayout,
} from "@/lib/emails/layout";

type ContactMessage = Pick<ContactInput, "name" | "email" | "message">;

export type RenderedEmail = { subject: string; html: string; text: string };

const { FONT } = emailFonts;

function firstName(name: string): string {
  return name.split(/\s+/)[0]?.slice(0, 40) ?? name;
}

/** E-mail reçu par Mahamadou : le message, l'expéditeur et un bouton pour répondre. */
export function contactNotificationEmail(
  { name, email, message }: ContactMessage,
  receivedAt: Date,
): RenderedEmail {
  const date = formatDate(receivedAt);
  const replyHref = `mailto:${email}?subject=${encodeURIComponent("Re : votre message sur mon portfolio")}`;

  const row = (label: string, value: string) => `<tr>
  <td style="padding:10px 0;width:90px;vertical-align:top;font-family:${FONT};font-size:13px;color:${emailColors.muted};border-bottom:1px solid ${emailColors.border};">${label}</td>
  <td style="padding:10px 0;vertical-align:top;font-family:${FONT};font-size:15px;color:${emailColors.ink};border-bottom:1px solid ${emailColors.border};">${value}</td>
</tr>`;

  const body = `${eyebrow("Nouveau message · Portfolio")}
${heading(`${escapeHtml(name)} vous a écrit`)}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:24px;">
  ${row("Nom", escapeHtml(name))}
  ${row("E-mail", `<a href="mailto:${escapeHtml(email)}" style="color:${emailColors.accent};text-decoration:none;">${escapeHtml(email)}</a>`)}
  ${row("Reçu le", escapeHtml(date))}
</table>
<div style="margin-top:24px;padding:20px 22px;background:${emailColors.soft};border-left:3px solid ${emailColors.accent};border-radius:0 12px 12px 0;font-family:${FONT};font-size:15px;line-height:1.65;color:${emailColors.text};">${multiline(message)}</div>
${button(`Répondre à ${firstName(name)}`, replyHref)}`;

  return {
    subject: `Nouveau message de ${name}`,
    html: renderLayout({
      preheader: message.slice(0, 120),
      body,
      footer: `<p style="margin:0;">Envoyé depuis le formulaire de contact. « Répondre » écrit directement à ${escapeHtml(email)}.</p>`,
    }),
    text: `Nouveau message de ${name} <${email}>\nReçu le ${date}\n\n${message}\n`,
  };
}

/**
 * Accusé de réception envoyé à la personne. Volontairement sans copie du message : le
 * formulaire étant public, recopier un texte libre permettrait d'envoyer n'importe quel contenu
 * à n'importe quelle adresse depuis ce domaine.
 */
export function contactConfirmationEmail({ name }: ContactMessage): RenderedEmail {
  const greeting = firstName(name);
  const projectsUrl = `${SITE_URL}/projects`;

  const body = `${eyebrow("Message bien reçu")}
${heading(`Merci ${escapeHtml(greeting)}&nbsp;!`)}
${paragraph("Votre message m'est bien parvenu et je vous remercie d'avoir pris le temps de m'écrire.")}
${paragraph("Je le lis avec attention et je reviens vers vous rapidement pour en discuter&nbsp;: vos besoins, les délais et la meilleure façon d'avancer ensemble.")}
${divider()}
<p style="margin:0;font-family:${FONT};font-size:15px;font-weight:600;color:${emailColors.ink};">En attendant</p>
<p style="margin:8px 0 0;font-family:${FONT};font-size:15px;line-height:1.6;color:${emailColors.text};">Vous pouvez découvrir les projets que j'ai conçus et mis en production, du site vitrine à la plateforme web et mobile.</p>
${button("Voir mes projets", projectsUrl)}
<p style="margin:32px 0 0;font-family:${FONT};font-size:15px;line-height:1.6;color:${emailColors.text};">À très vite,<br /><strong style="color:${emailColors.ink};">${escapeHtml(site.name)}</strong><br /><span style="color:${emailColors.muted};">${escapeHtml(site.role)} · ${escapeHtml(site.location)}</span></p>`;

  return {
    subject: "Merci pour votre message",
    html: renderLayout({
      preheader: "J'ai bien reçu votre message et je reviens vers vous rapidement.",
      body,
      footer: `<p style="margin:0;">Vous recevez cet e-mail car vous m'avez écrit via le formulaire de contact de mon portfolio.</p>`,
    }),
    text: `Merci ${greeting} !\n\nVotre message m'est bien parvenu et je vous remercie d'avoir pris le temps de m'écrire. Je le lis avec attention et je reviens vers vous rapidement.\n\nEn attendant, mes projets : ${projectsUrl}\n\nÀ très vite,\n${site.name}\n${site.role} · ${site.location}\n`,
  };
}
