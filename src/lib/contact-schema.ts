import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(100),
  email: z.string().trim().email("Adresse email invalide"),
  message: z.string().trim().min(10, "Message trop court").max(5000),
  // Champ piège anti-spam : doit rester vide.
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
