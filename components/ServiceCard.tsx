import type { ServiceMethod } from "@/lib/content";

export default function ServiceCard({ service }: { service: ServiceMethod }) {
  return (
    <article className="rounded-lg border border-line bg-surface p-6 transition-colors hover:border-cyan">
      <p className="eyebrow text-amber-soft">{service.code}</p>
      <h3 className="mt-2 font-display text-xl font-semibold text-ink">
        {service.title}
      </h3>
      <p className="mt-3 font-body text-sm text-ink-muted">
        {service.description}
      </p>
      <ul className="mt-4 space-y-1 font-body text-sm text-ink-muted">
        {service.useCases.map((useCase) => (
          <li key={useCase} className="flex gap-2">
            <span aria-hidden className="text-cyan">
              —
            </span>
            {useCase}
          </li>
        ))}
      </ul>
    </article>
  );
}
