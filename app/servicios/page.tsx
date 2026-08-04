import type { Metadata } from "next";
import RadargramStrip from "@/components/RadargramStrip";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `Servicios — ${SITE.name}`,
  description:
    "Métodos geofísicos: georadar (GPR), resistividad eléctrica, sísmica y magnetometría.",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="border-b border-line bg-bedrock">
        <div className="mx-auto max-w-content px-6 pt-16">
          <p className="eyebrow text-cyan">Catálogo de métodos</p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-ink md:text-5xl">
            Servicios de exploración geofísica
          </h1>
          <p className="mt-4 max-w-xl font-body text-ink-muted">
            Cada proyecto necesita un método distinto según el tipo de suelo,
            la profundidad de interés y la información que se busca. Estos son
            los métodos con los que trabajamos.
          </p>
        </div>
        <RadargramStrip className="mt-12 h-20 w-full" traceCount={70} />
      </section>

      <section className="mx-auto max-w-content px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((service) => (
            <ServiceCard key={service.code} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}
