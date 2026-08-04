import type { Metadata } from "next";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `Nosotros — ${SITE.name}`,
  description: `Conoce a ${SITE.contactName} y el enfoque de trabajo de ${SITE.name}.`,
};

export default function NosotrosPage() {
  return (
    <section className="mx-auto max-w-content px-6 py-16 md:py-24">
      <p className="eyebrow text-cyan">Quiénes somos</p>
      <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-ink md:text-5xl">
        {SITE.contactName}
      </h1>
      <p className="mt-4 max-w-2xl font-body text-lg text-ink-muted">
        Ingeniero Geofísico egresado de la Universidad Nacional Autónoma de
        México (UNAM), especializado en exploración petrolera. Fundador y
        director de Gaia Exploraciones desde 2020, donde aplica más de dos
        décadas de experiencia en control de calidad y exploración geofísica
        a estudios de georadar (GPR) para proyectos de construcción,
        geotecnia y localización de infraestructura enterrada.
      </p>

      <div className="mt-10 rounded-lg border border-line bg-surface p-6">
        <p className="eyebrow text-amber-soft">Trayectoria</p>
        <ul className="mt-3 space-y-2 font-body text-sm text-ink-muted">
          <li className="flex gap-2">
            <span aria-hidden className="text-cyan">—</span>
            Ingeniero Geofísico, UNAM (1996–2001), especialidad en
            Exploración Petrolera.
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="text-cyan">—</span>
            QC Analyst en Schlumberger WesternGeco, en proyectos de
            exploración en Veracruz y Chiapas.
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="text-cyan">—</span>
            Experiencia en supervisión topográfica y control de calidad para
            proyectos de infraestructura energética (Fermaca, Sicim,
            Compañía Mexicana de Exploraciones).
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="text-cyan">—</span>
            Fundador y CEO de Gaia Exploraciones desde 2020, enfocado en
            estudios de georadar (GPR).
          </li>
        </ul>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-line bg-surface p-6">
          <p className="eyebrow text-cyan">Enfoque</p>
          <p className="mt-2 font-body text-ink-muted">
            Cada estudio se define según el objetivo del cliente: no se
            aplica un método genérico, se elige la técnica geofísica
            adecuada para el tipo de suelo y la profundidad de interés.
          </p>
        </div>
        <div className="rounded-lg border border-line bg-surface p-6">
          <p className="eyebrow text-cyan">Entregables</p>
          <p className="mt-2 font-body text-ink-muted">
            Los resultados se presentan en reportes técnicos claros, con
            interpretación de los datos y recomendaciones aplicables al
            proyecto.
          </p>
        </div>
        <div className="rounded-lg border border-line bg-surface p-6">
          <p className="eyebrow text-cyan">Equipo</p>
          <p className="mt-2 font-body text-ink-muted">
            Además del servicio de estudio, Gaia Exploraciones ofrece venta
            y renta de equipos geofísicos con asesoría técnica.
          </p>
        </div>
      </div>
    </section>
  );
}
