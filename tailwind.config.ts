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
        // Brand palette derived from the Konsent logo (logo green: #56D1B2)
        brand: {
          DEFAULT: "#56D1B2",
          ink: "#07231E", // dark text for use on brand-colored surfaces
          light: "#7FDFC8",
          deep: "#0B3F35",
          50: "#eafaf5",
          100: "#cef2e7",
          200: "#a3e8d5",
          300: "#7FDFC8",
          400: "#56D1B2",
          500: "#2FB597",
          600: "#1F9B80",
          700: "#187C67",
          800: "#135E4F",
          900: "#0B3F35",
          950: "#062A24",
        },
        // Alias so any legacy `primary-*` usage stays on-brand
        primary: {
          50: "#eafaf5",
          100: "#cef2e7",
          200: "#a3e8d5",
          300: "#7FDFC8",
          400: "#56D1B2",
          500: "#2FB597",
          600: "#1F9B80",
          700: "#187C67",
          800: "#135E4F",
          900: "#0B3F35",
          950: "#062A24",
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
      },
      backgroundImage: {
        "gradient-hero":
          "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(86, 209, 178, 0.15) 0%, rgba(86, 209, 178, 0.05) 40%, transparent 70%)",
        "gradient-cta":
          "linear-gradient(135deg, rgba(11, 63, 53, 0.85) 0%, rgba(19, 94, 79, 0.8) 50%, rgba(6, 42, 36, 0.9) 100%)",
        "gradient-card":
          "linear-gradient(180deg, rgba(86, 209, 178, 0.03) 0%, rgba(127, 223, 200, 0.03) 100%)",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
        "card-hover":
          "0 10px 15px -3px rgba(86, 209, 178, 0.12), 0 4px 6px -4px rgba(0, 0, 0, 0.3)",
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
