"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { SERVICES } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "No se pudo enviar el mensaje.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "No se pudo enviar el mensaje."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-cyan bg-surface p-8 text-center">
        <p className="font-display text-xl text-ink">¡Mensaje enviado!</p>
        <p className="mt-2 font-body text-ink-muted">
          Gracias por escribir a Gaia Exploraciones. Te responderemos a la
          brevedad.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-line px-5 py-2 font-body text-sm text-ink hover:border-cyan hover:text-cyan"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nombre completo" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            value={form.name}
            onChange={handleChange}
            className="field"
          />
        </Field>

        <Field label="Correo electrónico" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="field"
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Teléfono (opcional)" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="field"
          />
        </Field>

        <Field label="Servicio de interés (opcional)" htmlFor="service">
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className="field"
          >
            <option value="">Selecciona una opción</option>
            {SERVICES.map((service) => (
              <option key={service.code} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Cuéntanos sobre tu proyecto" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="field resize-none"
        />
      </Field>

      {status === "error" && (
        <p role="alert" className="font-body text-sm text-amber-soft">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-amber px-6 py-3 font-body font-medium text-bedrock transition-colors hover:bg-amber-soft disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
      >
        {status === "submitting" ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="font-body text-sm text-ink-muted">
        {label}
      </label>
      <div className="mt-1">{children}</div>
    </div>
  );
}
