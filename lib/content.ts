// Fuente única de verdad para el contenido del sitio.
// Cambia textos aquí en vez de buscarlos por todo el código: es la "tabla maestra" del sitio.

export const SITE = {
  name: "Gaia Exploraciones",
  tagline: "Servicios y venta de equipos geofísicos",
  contactName: "Gibrán L. Armenta Maya",
  phones: ["555 158 8310", "552 268 6571"],
  email: "gaiaexploraciones@outlook.com",
  description:
    "Estudios de georadar (GPR), resistividad eléctrica, sísmica y magnetometría para proyectos de construcción, geotecnia, arqueología y localización de infraestructura enterrada.",
} as const;

export type ServiceMethod = {
  /** Sigla técnica del método, se usa como "eyebrow" en las tarjetas de servicio */
  code: string;
  title: string;
  description: string;
  useCases: string[];
};

export const SERVICES: ServiceMethod[] = [
  {
    code: "GPR",
    title: "Georadar (Ground Penetrating Radar)",
    description:
      "Exploración del subsuelo mediante ondas electromagnéticas para detectar tuberías, cables, cavidades y elementos enterrados sin necesidad de excavar.",
    useCases: [
      "Localización de instalaciones antes de excavar",
      "Inspección de losas y elementos de concreto",
      "Detección de cavidades u oquedades",
    ],
  },
  {
    code: "ERT",
    title: "Tomografía de Resistividad Eléctrica",
    description:
      "Genera un perfil 2D o 3D de la resistividad del subsuelo, útil para caracterizar estratos, fallas y zonas de humedad en profundidad.",
    useCases: [
      "Estudios geotécnicos previos a construcción",
      "Prospección de agua subterránea",
      "Caracterización de rellenos y taludes",
    ],
  },
  {
    code: "SEV",
    title: "Sondeo Eléctrico Vertical",
    description:
      "Determina la variación de resistividad con la profundidad en un punto específico, complementando estudios de suelo y de agua subterránea.",
    useCases: [
      "Estudios de mecánica de suelos",
      "Exploración hidrogeológica puntual",
    ],
  },
  {
    code: "MAG",
    title: "Magnetometría",
    description:
      "Mide variaciones del campo magnético para localizar objetos metálicos enterrados o anomalías geológicas.",
    useCases: [
      "Detección de estructuras metálicas enterradas",
      "Apoyo a estudios arqueológicos",
    ],
  },
  {
    code: "SR",
    title: "Sísmica de Refracción",
    description:
      "Caracteriza la velocidad de propagación de ondas en el subsuelo para estimar la rigidez y estratigrafía del terreno.",
    useCases: [
      "Estudios geotécnicos de cimentación",
      "Caracterización de macizos rocosos",
    ],
  },
  {
    code: "EQ",
    title: "Venta y renta de equipo geofísico",
    description:
      "Comercialización y renta de equipos de georadar y prospección geofísica, con asesoría técnica para elegir el equipo adecuado a cada proyecto.",
    useCases: ["Adquisición de equipo propio", "Renta para proyectos puntuales"],
  },
];
