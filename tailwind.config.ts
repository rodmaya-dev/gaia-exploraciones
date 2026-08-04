import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bedrock: "#0E1A24",
        surface: "#16232F",
        "surface-raised": "#1D2E3D",
        stone: "#EDE7DA",
        amber: {
          DEFAULT: "#E2793A",
          soft: "#F2A93C",
        },
        cyan: {
          DEFAULT: "#4FB6C7",
        },
        ink: "#F4F1E8",
        "ink-muted": "#93A5B3",
        line: "rgba(244, 241, 232, 0.12)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "core-gradient": "radial-gradient(circle at 30% 30%, #F2A93C 0%, #E2793A 45%, #B84A1E 100%)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
