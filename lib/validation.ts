import { z } from "zod";

// Mismo esquema en cliente y servidor: la UI valida para dar feedback rápido,
// pero la API vuelve a validar porque nunca debes confiar en datos que vienen del cliente.
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Escribe tu nombre completo")
    .max(120, "El nombre es demasiado largo"),
  email: z.string().trim().email("Escribe un correo válido"),
  phone: z
    .string()
    .trim()
    .max(20, "El teléfono es demasiado largo")
    .optional()
    .or(z.literal("")),
  service: z.string().trim().max(80).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Cuéntanos un poco más sobre tu proyecto")
    .max(2000, "El mensaje es demasiado largo"),
});

export type ContactInput = z.infer<typeof contactSchema>;
