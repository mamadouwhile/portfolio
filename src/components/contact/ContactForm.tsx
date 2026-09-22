"use client";

import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";

import { contactSchema, type ContactField } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";
type FieldErrors = Partial<Record<ContactField, string>>;

const fields: {
  name: Exclude<ContactField, "website">;
  label: string;
  type: "text" | "email" | "textarea";
  autoComplete?: string;
}[] = [
  { name: "name", label: "Nom", type: "text", autoComplete: "name" },
  { name: "email", label: "E-mail", type: "email", autoComplete: "email" },
  { name: "message", label: "Votre projet", type: "textarea" },
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    const parsed = contactSchema.safeParse(values);

    if (!parsed.success) {
      const fieldErrors = z.flattenError(parsed.error).fieldErrors;
      const nextErrors: FieldErrors = {};
      for (const field of fields) {
        const message = fieldErrors[field.name]?.[0];
        if (message) nextErrors[field.name] = message;
      }
      setErrors(nextErrors);
      setStatus("error");
      setFeedback("Certains champs sont à corriger.");
      const firstInvalid = fields.find((field) => nextErrors[field.name]);
      if (firstInvalid) form.querySelector<HTMLElement>(`[name="${firstInvalid.name}"]`)?.focus();
      return;
    }

    setErrors({});
    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
        setFeedback("Message envoyé, merci ! Je vous réponds rapidement.");
        return;
      }

      setStatus("error");
      setFeedback(
        response.status === 503
          ? "L'envoi par formulaire est momentanément indisponible. Vous pouvez me contacter via GitHub en attendant."
          : "L'envoi a échoué. Réessayez dans un instant.",
      );
    } catch {
      setStatus("error");
      setFeedback("Connexion impossible. Vérifiez votre réseau puis réessayez.");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-describedby="contact-feedback"
      aria-busy={isSubmitting}
      className="relative rounded-2xl border border-border bg-surface p-5 md:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => {
          const error = errors[field.name];
          const inputId = `contact-${field.name}`;
          const errorId = `${inputId}-error`;
          const inputClass = cn(
            "mt-1.5 w-full rounded-xl border bg-background px-3.5 py-2.5 text-base text-foreground transition-colors focus:border-accent",
            error ? "border-red-500" : "border-border",
          );
          const common = {
            id: inputId,
            name: field.name,
            required: true,
            disabled: isSubmitting,
            "aria-invalid": error ? true : undefined,
            "aria-describedby": error ? errorId : undefined,
          };

          return (
            <div key={field.name} className={cn(field.type === "textarea" && "sm:col-span-2")}>
              <label htmlFor={inputId} className="text-sm font-medium">
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea {...common} rows={5} className={cn(inputClass, "resize-y")} />
              ) : (
                <input
                  {...common}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  className={inputClass}
                />
              )}
              {error ? (
                <p id={errorId} className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {error}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      {/* Champ piège anti-spam : hors écran et ignoré par les lecteurs d'écran. */}
      <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
        <label htmlFor="contact-website">Site web</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p
          id="contact-feedback"
          role="status"
          aria-live="polite"
          className={cn(
            "flex items-center gap-2 text-sm",
            status === "success" && "text-success",
            status === "error" && "text-red-600 dark:text-red-400",
            (status === "idle" || status === "submitting") && "text-muted",
          )}
        >
          {status === "success" ? <CheckCircle2 className="size-4 shrink-0" aria-hidden /> : null}
          {feedback}
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {isSubmitting ? (
            <Loader2 className="size-4 animate-spin" aria-hidden />
          ) : (
            <Send className="size-4" aria-hidden />
          )}
          {isSubmitting ? "Envoi…" : "Envoyer"}
        </button>
      </div>
    </form>
  );
}
