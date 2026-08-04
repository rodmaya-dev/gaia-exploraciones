import Link from "next/link";
import RadargramStrip from "@/components/RadargramStrip";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES, SITE } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-bedrock">
        <div className="mx-auto max-w-content px-6 pt-16 md:pt-24">
          <p className="eyebrow text-cyan">GPR · ERT · SEV · MAG · SR</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
            Vemos lo que hay bajo el suelo antes de que tú excaves.
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg text-ink-muted">
            {SITE.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contacto"
              className="rounded-full bg-amber px-6 py-3 font-body font-medium text-bedrock transition-colors hover:bg-amber-soft"
            >
              Solicitar un estudio
            </Link>
            <Link
              href="/servicios"
              className="rounded-full border border-line px-6 py-3 font-body font-medium text-ink transition-colors hover:border-cyan hover:text-cyan"
            >
              Ver servicios
            </Link>
          </div>
        </div>

        <RadargramStrip className="mt-16 h-28 w-full md:h-36" />
      </section>

      {/* Servicios resumidos */}
      <section className="mx-auto max-w-content px-6 py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-cyan">Métodos de exploración</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
              Servicios
            </h2>
          </div>
          <Link
            href="/servicios"
            className="hidden font-body text-sm text-cyan hover:text-ink md:block"
          >
            Ver todos →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 3).map((service) => (
            <ServiceCard key={service.code} service={service} />
          ))}
        </div>

        <Link
          href="/servicios"
          className="mt-8 inline-block font-body text-sm text-cyan hover:text-ink md:hidden"
        >
          Ver todos los servicios →
        </Link>
      </section>

      {/* Por qué georadar */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-content gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-cyan">Sin excavaciones exploratorias</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
              Información del subsuelo sin romper el pavimento
            </h2>
            <p className="mt-4 font-body text-ink-muted">
              Los métodos geofísicos permiten conocer lo que hay bajo la
              superficie —tuberías, cables, cavidades, estratos— de forma no
              invasiva, reduciendo riesgos, tiempos y costos frente a la
              excavación directa.
            </p>
          </div>
          <ul className="space-y-4 font-body text-ink-muted">
            <li className="rounded-lg border border-line bg-surface-raised p-4">
              <span className="font-mono text-xs text-amber-soft">01</span>
              <p className="mt-1 text-ink">
                Reduce el riesgo de dañar infraestructura existente al excavar.
              </p>
            </li>
            <li className="rounded-lg border border-line bg-surface-raised p-4">
              <span className="font-mono text-xs text-amber-soft">02</span>
              <p className="mt-1 text-ink">
                Genera evidencia técnica objetiva para la toma de decisiones.
              </p>
            </li>
            <li className="rounded-lg border border-line bg-surface-raised p-4">
              <span className="font-mono text-xs text-amber-soft">03</span>
              <p className="mt-1 text-ink">
                Aplica tanto a obra civil como a estudios académicos y periciales.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-content px-6 py-20 text-center">
        <h2 className="font-display text-3xl font-semibold text-ink">
          ¿Tienes un proyecto que requiere estudio de subsuelo?
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-body text-ink-muted">
          Cuéntanos de tu sitio y el tipo de información que necesitas. Te
          respondemos con el método más adecuado para tu caso.
        </p>
        <Link
          href="/contacto"
          className="mt-8 inline-block rounded-full bg-amber px-8 py-3 font-body font-medium text-bedrock transition-colors hover:bg-amber-soft"
        >
          Contactar a Gaia Exploraciones
        </Link>
      </section>
    </>
  );
}
