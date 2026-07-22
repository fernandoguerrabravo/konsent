import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
    },
    extend: {
      colors: {
        // Brand palette derived from the official Konsent logo (logo.svg)
        // Green: #169d75 · Navy: #262c64
        brand: {
          DEFAULT: "#169d75",
          ink: "#052E22", // dark text for use on brand-colored surfaces
          light: "#33B892",
          deep: "#0A3F30",
          50: "#e9f6f1",
          100: "#c9ebe0",
          200: "#97d9c3",
          300: "#5cc3a1",
          400: "#33B892",
          500: "#169d75",
          600: "#128268",
          700: "#0f6b55",
          800: "#0c5544",
          900: "#0A3F30",
          950: "#06271f",
        },
        // Navy from the brand palette (#262c64)
        navy: {
          DEFAULT: "#262c64",
          light: "#3a4189",
          dark: "#191d45",
        },
        // Gray from the brand palette (#5f636f) + tints for dark UI
        graphite: {
          DEFAULT: "#5f636f",
          light: "#9aa1af", // texto secundario legible sobre fondos oscuros
          lighter: "#c3c7d0",
          dark: "#3f424c",
        },
        // Alias so any legacy `primary-*` usage stays on-brand
        primary: {
          50: "#e9f6f1",
          100: "#c9ebe0",
          200: "#97d9c3",
          300: "#5cc3a1",
          400: "#33B892",
          500: "#169d75",
          600: "#128268",
          700: "#0f6b55",
          800: "#0c5544",
          900: "#0A3F30",
          950: "#06271f",
        },
        dark: {
          50: "#f8fafc",
          100: "#e2e8f0",
          200: "#cbd5e1",
          300: "#94a3b8",
          400: "#64748b",
          500: "#475569",
          600: "#1a1a2e",
          700: "#16162a",
          800: "#12121f",
          900: "#0d0d16",
          950: "#0a0a0f",
        },
        green: {
          400: "#56D1B2",
          500: "#2FB597",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: [
          "var(--font-display)",
          "Space Grotesk",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "JetBrains Mono",
          "ui-monospace",
          "monospace",
        ],
      },
      backgroundImage: {
        "gradient-hero":
          "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(22, 157, 117, 0.15) 0%, rgba(22, 157, 117, 0.05) 40%, transparent 70%)",
        "gradient-cta":
          "linear-gradient(135deg, rgba(38, 44, 100, 0.9) 0%, rgba(15, 107, 85, 0.82) 55%, rgba(10, 63, 48, 0.92) 100%)",
        "gradient-card":
          "linear-gradient(180deg, rgba(22, 157, 117, 0.03) 0%, rgba(51, 184, 146, 0.03) 100%)",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
        "card-hover":
          "0 10px 15px -3px rgba(22, 157, 117, 0.12), 0 4px 6px -4px rgba(0, 0, 0, 0.3)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
