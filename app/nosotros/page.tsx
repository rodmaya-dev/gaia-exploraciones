import type { Metadata } from "next";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `Nosotros — ${SITE.name}`,
  description: `Conoce a ${SITE.contactName} y el enfoque de trabajo de ${SITE.name}.`,
};

// NOTA PARA GIBRÁN: los textos de esta página están escritos de forma
// genérica a propósito, para no inventar datos que no tengo (formación
// académica, años de experiencia, certificaciones, proyectos realizados).
// Reemplaza los bloques marcados con TODO por tu información real.

export default function NosotrosPage() {
  return (
    <section className="mx-auto max-w-content px-6 py-16 md:py-24">
      <p className="eyebrow text-cyan">Quiénes somos</p>
      <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-ink md:text-5xl">
        {SITE.contactName}
      </h1>
      <p className="mt-4 max-w-2xl font-body text-lg text-ink-muted">
        Ingeniero dedicado a la exploración geofísica del subsuelo aplicada a
        proyectos de construcción, geotecnia, localización de infraestructura
        enterrada y estudios especializados.
      </p>

      {/* TODO: reemplaza este párrafo con tu formación académica y trayectoria real. */}
      <div className="mt-10 rounded-lg border border-dashed border-amber-soft/60 bg-surface p-6">
        <p className="eyebrow text-amber-soft">Pendiente de completar</p>
        <p className="mt-2 font-body text-sm text-ink-muted">
          Agrega aquí tu formación académica, certificaciones, años de
          experiencia y, si quieres, un par de proyectos representativos
          (sin datos confidenciales). Edita{" "}
          <code className="font-mono text-ink">app/nosotros/page.tsx</code>.
        </p>
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
