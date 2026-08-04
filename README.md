# Gaia Exploraciones — sitio web

> **Sobre este proyecto:** esta es una versión **DEMO**, construida
> como pieza de portafolio y como propuesta de entrada para el Ing. Gibrán
> Armenta. Cubre lo esencial para tener presencia web profesional: presentación
> de servicios, información de contacto y un formulario funcional. Si el
> negocio crece o necesita algo más (agenda de citas, panel de administración,
> blog, multi-idioma, etc.), esas son funcionalidades de una versión de pago —
> el mismo modelo que usan Spotify o Notion: la base es gratis, lo avanzado se
> cobra. Ve la sección **"Posibles mejoras (versión de pago)"** al final de
> este documento.

Sitio en Next.js 14 (App Router) + TypeScript + Tailwind CSS, con formulario
de contacto funcional que envía correo real mediante [Resend](https://resend.com).

## Estructura del proyecto

```
app/
  layout.tsx            Layout raíz: fuentes, Header, Footer, metadata SEO
  page.tsx               Inicio
  servicios/page.tsx      Catálogo de métodos geofísicos
  nosotros/page.tsx       Sobre Gibrán / Gaia Exploraciones (revisar TODOs)
  contacto/page.tsx       Datos de contacto + formulario
  api/contact/route.ts    Endpoint POST que valida y envía el correo
components/               Header, Footer, ContactForm, ServiceCard, RadargramStrip
lib/
  content.ts              Textos, datos de contacto y catálogo de servicios (edítalo aquí)
  validation.ts            Esquema Zod compartido cliente/servidor
  email.ts                 Envío de correo con Resend
```

## 1. Instalación

Este proyecto se generó sin acceso a internet, así que **no tiene `node_modules`
instalado todavía**. En tu máquina, con Node.js 18+ instalado:

```bash
npm install
```

## 2. Configurar el envío de correo

1. Crea una cuenta gratuita en https://resend.com
2. Genera una API key.
3. Copia `.env.example` a `.env.local` y complétalo:

```bash
cp .env.example .env.local
```

```
RESEND_API_KEY=tu_api_key
CONTACT_FROM_EMAIL=onboarding@resend.dev   # válido para pruebas
CONTACT_TO_EMAIL=gaiaexploraciones@outlook.com
```

Mientras no verifiques un dominio propio en Resend, `onboarding@resend.dev`
funciona como remitente de pruebas, pero solo te dejará enviar correos a la
cuenta con la que te registraste en Resend. Para producción real, verifica un
dominio propio (por ejemplo `gaiaexploraciones.com` si lo llegan a comprar) en
la sección **Domains** de Resend y usa un remitente de ese dominio.

## 3. Levantar en desarrollo

```bash
npm run dev
```

Abre http://localhost:3000

## 4. Contenido pendiente de revisar

- `app/nosotros/page.tsx` tiene un bloque marcado como **"Pendiente de
  completar"** — ahí va la formación académica, certificaciones y experiencia
  real de Gibrán. No inventé esos datos a propósito.
- `lib/content.ts` tiene el catálogo de servicios (GPR, ERT, SEV, MAG, SR,
  venta/renta de equipo) redactado como borrador razonable para un negocio de
  geofísica aplicada — revísalo y ajusta lo que no corresponda exactamente a
  los servicios que ofrece Gaia Exploraciones.
- El logo en `public/logo.png` se recortó de la tarjeta de presentación sobre
  fondo blanco. Para verse bien en más contextos, conviene pedir al diseñador
  original una versión en PNG con fondo transparente.

## 5. Despliegue (100% gratis)

Esta versión demo se puede publicar sin pagar nada:

| Servicio                                 | Uso                             | Costo                                   |
| ---------------------------------------- | ------------------------------- | --------------------------------------- |
| Vercel (plan **Hobby**)                  | Hospedaje del sitio             |
| Resend (plan **Free**)                   | Envío de correos del formulario | $0 — 3,000 correos/mes, tope de 100/día |
| GitHub                                   | Repositorio conectado a Vercel  |
| Dominio propio (`gaiaexploraciones.com`) | Opcional                        | ~$150–300 MXN/año (único costo real)    |

**Nota:** el plan Hobby de Vercel está pensado en sus términos de
servicio para uso personal/no comercial. En la práctica, sitios de negocio de
bajo tráfico como este corren ahí sin problema mientras no proceses pagos
dentro del sitio — pero si en algún momento quieres estar 100% alineado con
los términos, la opción correcta es el plan Pro ($20 USD/mes).

### Pasos

1. Sube este proyecto a un repositorio de GitHub (puede ser privado).
2. Crea cuenta en [vercel.com](https://vercel.com) con tu cuenta de GitHub.
3. **Add New → Project** → selecciona el repositorio. Vercel detecta que es
   Next.js automáticamente, no hay que configurar nada más.
4. En **Settings → Environment Variables**, agrega las mismas variables del
   `.env.local`:
   - `RESEND_API_KEY`
   - `CONTACT_FROM_EMAIL`
   - `CONTACT_TO_EMAIL`
5. **Deploy.** Obtienes una URL gratuita tipo
   `gaia-exploraciones.vercel.app` con HTTPS incluido.
6. (Opcional, de pago) Si más adelante compran un dominio propio, se conecta
   en **Project Settings → Domains** dentro de Vercel.

## Notas técnicas

- El formulario de contacto (`components/ContactForm.tsx`) valida en el
  cliente y vuelve a validar en el servidor (`app/api/contact/route.ts`) con
  el mismo esquema Zod — nunca confíes solo en la validación del cliente.
- `lib/content.ts` es la única fuente de verdad para textos y datos de
  contacto: si cambia un teléfono o un servicio, se edita ahí y se refleja en
  todo el sitio.

## Posibles mejoras (versión de pago)

Esta demo cubre lo esencial: presencia web, catálogo de servicios y un
formulario que llega por correo. Todo lo de aquí abajo es trabajo adicional
facturable — la versión "premium" del sitio:

- **Panel de administración de leads** — en vez de que los mensajes solo
  lleguen por correo, guardarlos en una base de datos (Postgres/Prisma) con
  una vista para marcarlos como atendidos, filtrar y exportar.
- **Agenda de citas / visitas técnicas** — integración con Google Calendar o
  Cal.com para que el cliente reserve directamente una fecha de estudio.
- **Sistema de cotización** — formulario más avanzado que calcule un rango
  de precio estimado según tipo de estudio, área y ubicación.
- **CMS conectado** — que Gibrán pueda editar servicios, precios y fotos de
  proyectos sin tocar código (Sanity, Payload o un panel propio).
- **Galería de proyectos realizados** — con antes/después, ubicación
  aproximada y tipo de estudio (requiere que el cliente aporte el material).
- **Blog / SEO técnico** — artículos sobre casos de uso de georadar para
  posicionar el sitio en buscadores y atraer tráfico orgánico.
- **Multi-idioma** (ES/EN) — si apunta a clientes internacionales o
  arqueológicos/académicos extranjeros.
- **Dominio propio + plan Vercel Pro** — para separar el sitio de negocio de
  la infraestructura gratuita compartida.
- **Analítica** (Vercel Analytics o Plausible) — saber cuántas visitas llegan
  y desde dónde, para medir si el sitio está generando contactos reales.
