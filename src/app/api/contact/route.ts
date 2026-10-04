import * as Sentry from "@sentry/nextjs";
import { NextResponse } from "next/server";
import { z } from "zod";

import { contactSchema } from "@/lib/contact-schema";
import {
  contactConfirmationEmail,
  contactNotificationEmail,
  type RenderedEmail,
} from "@/lib/emails/contact-emails";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

type SendOptions = { apiKey: string; from: string; to: string; replyTo?: string };

function sendEmail({ apiKey, from, to, replyTo }: SendOptions, email: RenderedEmail) {
  return fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to, reply_to: replyTo, ...email }),
  });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Données invalides", fields: z.flattenError(parsed.error).fieldErrors },
      { status: 422 },
    );
  }

  const { name, email, message, website } = parsed.data;
  // Bot détecté : on répond OK sans rien envoyer.
  if (website) return NextResponse.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <contact@mamadouwhile.dev>";

  if (!apiKey || !to) {
    const missing = [!apiKey && "RESEND_API_KEY", !to && "CONTACT_TO_EMAIL"].filter(Boolean);
    console.error(`[contact] Envoi désactivé : variable(s) manquante(s) ${missing.join(", ")}`);
    Sentry.captureMessage(
      `Formulaire de contact désactivé : ${missing.join(", ")} manquant(s)`,
      "error",
    );
    return NextResponse.json(
      { error: "Envoi indisponible pour le moment", fallback: "mailto" },
      { status: 503 },
    );
  }

  const contact = { name, email, message };
  let response: Response;
  try {
    response = await sendEmail(
      { apiKey, from, to, replyTo: email },
      contactNotificationEmail(contact, new Date()),
    );
  } catch (error) {
    console.error("[contact] Resend injoignable :", error);
    Sentry.captureException(error);
    return NextResponse.json({ error: "Échec de l'envoi" }, { status: 502 });
  }

  if (!response.ok) {
    // Motif exact renvoyé par Resend (clé invalide, domaine non vérifié, destinataire refusé…),
    // visible dans Vercel → Logs.
    const detail = await response.text();
    console.error(`[contact] Resend a refusé l'envoi (${response.status}) :`, detail);
    Sentry.captureMessage(`Resend a refusé l'envoi (${response.status}) : ${detail}`, "error");
    return NextResponse.json({ error: "Échec de l'envoi" }, { status: 502 });
  }

  // Accusé de réception : envoyé seulement une fois le message transmis, et sans bloquer la
  // réponse s'il échoue (le message, lui, est bien arrivé).
  try {
    const confirmation = await sendEmail(
      { apiKey, from, to: email },
      contactConfirmationEmail(contact),
    );
    if (!confirmation.ok) {
      const detail = await confirmation.text();
      console.error(`[contact] Accusé de réception refusé (${confirmation.status}) :`, detail);
      Sentry.captureMessage(
        `Accusé de réception refusé (${confirmation.status}) : ${detail}`,
        "warning",
      );
    }
  } catch (error) {
    console.error("[contact] Accusé de réception non envoyé :", error);
    Sentry.captureException(error);
  }

  return NextResponse.json({ ok: true });
}
