import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `Contacto — ${SITE.name}`,
  description: `Solicita un estudio geofísico con ${SITE.name}.`,
};

export default function ContactoPage() {
  return (
    <section className="mx-auto max-w-content px-6 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="eyebrow text-cyan">Hablemos de tu proyecto</p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-ink">
            Contacto
          </h1>
          <p className="mt-4 font-body text-ink-muted">
            Escríbenos con el tipo de proyecto y la ubicación general. Te
            contactamos para definir el método más adecuado.
          </p>

          <div className="mt-10 space-y-4 font-body">
            <div>
              <p className="eyebrow text-amber-soft">Contacto directo</p>
              <p className="mt-1 text-ink">{SITE.contactName}</p>
            </div>
            <div>
              <p className="eyebrow text-amber-soft">Teléfono</p>
              {SITE.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="mt-1 block text-ink hover:text-cyan"
                >
                  {phone}
                </a>
              ))}
            </div>
            <div>
              <p className="eyebrow text-amber-soft">Correo</p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-1 block text-ink hover:text-cyan"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-line bg-surface p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
