import { Resend } from "resend";
import type { ContactInput } from "./validation";

// Se aísla el envío de correo en su propia función para poder probarla o
// reemplazar el proveedor (Resend -> otro) sin tocar la ruta API.
export async function sendContactEmail(data: ContactInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    throw new Error(
      "Faltan variables de entorno para el envío de correo (RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL)."
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: `Gaia Exploraciones <${from}>`,
    to,
    reply_to: data.email, // estaba como replyTo
    subject: `Nuevo contacto desde el sitio web: ${data.name}`,
    text: [
      `Nombre: ${data.name}`,
      `Correo: ${data.email}`,
      data.phone ? `Teléfono: ${data.phone}` : null,
      data.service ? `Servicio de interés: ${data.service}` : null,
      "",
      "Mensaje:",
      data.message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    throw new Error(error.message);
  }
}
