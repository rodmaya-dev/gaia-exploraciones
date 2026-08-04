"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bedrock/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="relative h-9 w-24 overflow-hidden rounded bg-stone">
            <Image
              src="/logo.png"
              alt="Gaia Exploraciones"
              fill
              sizes="96px"
              className="object-contain p-1"
              priority
            />
          </span>
          <span className="font-display text-lg tracking-tight text-ink">
            Gaia Exploraciones
          </span>
        </Link>

        <nav className="hidden gap-8 font-body text-sm text-ink-muted md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contacto"
          className="hidden rounded-full bg-amber px-5 py-2 font-body text-sm font-medium text-bedrock transition-colors hover:bg-amber-soft md:inline-block"
        >
          Solicitar estudio
        </Link>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded border border-line text-ink md:hidden"
          aria-expanded={isOpen}
          aria-label="Abrir menú de navegación"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span aria-hidden className="font-mono text-lg">
            {isOpen ? "×" : "≡"}
          </span>
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-line bg-bedrock px-6 py-4 font-body text-sm md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-ink-muted hover:text-ink"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contacto"
                className="mt-2 inline-block rounded-full bg-amber px-5 py-2 font-medium text-bedrock"
                onClick={() => setIsOpen(false)}
              >
                Solicitar estudio
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
