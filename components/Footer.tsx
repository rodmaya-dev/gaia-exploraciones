import Link from "next/link";
import { SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-content gap-8 px-6 py-12 font-body text-sm text-ink-muted md:grid-cols-3">
        <div>
          <p className="eyebrow text-cyan">Gaia Exploraciones</p>
          <p className="mt-2 max-w-xs text-ink">{SITE.tagline}</p>
        </div>

        <div>
          <p className="eyebrow text-cyan">Contacto</p>
          <p className="mt-2 text-ink">{SITE.contactName}</p>
          {SITE.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="mt-1 block hover:text-ink"
            >
              {phone}
            </a>
          ))}
          <a href={`mailto:${SITE.email}`} className="mt-1 block hover:text-ink">
            {SITE.email}
          </a>
        </div>

        <div>
          <p className="eyebrow text-cyan">Navegación</p>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/servicios" className="hover:text-ink">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="hover:text-ink">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-ink">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line px-6 py-4 text-center font-mono text-xs text-ink-muted">
        © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
