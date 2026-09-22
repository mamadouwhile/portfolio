import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/contact-schema";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

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
      { error: "Données invalides", fields: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const { name, email, message, website } = parsed.data;
  // Bot détecté : on répond OK sans rien envoyer.
  if (website) return NextResponse.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return NextResponse.json(
      { error: "Envoi indisponible pour le moment", fallback: "mailto" },
      { status: 503 },
    );
  }

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `Portfolio — message de ${name}`,
      text: message,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Échec de l'envoi" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
