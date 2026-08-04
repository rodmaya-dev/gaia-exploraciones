// Motivo visual de la marca: una franja que imita un radargrama real (la salida
// de un equipo de georadar), con trazas verticales y curvas de reflexión
// hiperbólicas, que es exactamente lo que un GPR dibuja al pasar sobre un
// objeto enterrado. No es decoración genérica: es el propio "producto" del
// negocio convertido en elemento gráfico.

type RadargramStripProps = {
  className?: string;
  traceCount?: number;
};

// Generador determinista (sin Math.random) para que el render del servidor
// y el del cliente coincidan siempre.
function pseudoAmplitude(seed: number) {
  const a = Math.sin(seed * 12.9898) * 43758.5453;
  return a - Math.floor(a);
}

export default function RadargramStrip({
  className = "",
  traceCount = 90,
}: RadargramStripProps) {
  const width = 1200;
  const height = 140;
  const traces = Array.from({ length: traceCount }, (_, i) => {
    const x = (width / traceCount) * i + width / traceCount / 2;
    const noise = pseudoAmplitude(i);
    const barHeight = 14 + noise * 30;
    return { x, barHeight };
  });

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label="Radargrama estilizado, representación de una lectura de georadar"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="rg-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4FB6C7" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#E2793A" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      {traces.map((t, i) => (
        <rect
          key={i}
          x={t.x - 1.5}
          y={height / 2 - t.barHeight / 2}
          width={3}
          height={t.barHeight}
          rx={1.5}
          fill="url(#rg-fade)"
          opacity={0.75}
        />
      ))}

      {/* Curvas de reflexión hiperbólica: la firma visual de un objeto enterrado en un GPR */}
      <path
        d={`M ${width * 0.14} ${height * 0.28} Q ${width * 0.24} ${height * 0.85} ${width * 0.34} ${height * 0.28}`}
        stroke="#F2A93C"
        strokeWidth={2}
        fill="none"
        opacity={0.9}
      />
      <path
        d={`M ${width * 0.62} ${height * 0.18} Q ${width * 0.74} ${height * 0.92} ${width * 0.86} ${height * 0.18}`}
        stroke="#4FB6C7"
        strokeWidth={2}
        fill="none"
        opacity={0.85}
      />
    </svg>
  );
}
