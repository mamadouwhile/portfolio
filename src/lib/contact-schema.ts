import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Indiquez votre nom (2 caractères minimum).")
    .max(100, "Nom trop long (100 caractères maximum)."),
  email: z.string().trim().pipe(z.email("Adresse e-mail invalide.")),
  message: z
    .string()
    .trim()
    .min(10, "Décrivez votre projet en quelques mots (10 caractères minimum).")
    .max(5000, "Message trop long (5000 caractères maximum)."),
  // Champ piège anti-spam, invisible pour les humains : s'il est rempli, l'API ignore le message.
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactField = keyof ContactInput;
