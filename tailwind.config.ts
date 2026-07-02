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
        primary: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#6366f1",
          700: "#4f46e5",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
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
          400: "#22c55e",
          500: "#22c55e",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-hero":
          "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.05) 40%, transparent 70%)",
        "gradient-cta":
          "linear-gradient(135deg, rgba(88, 28, 135, 0.8) 0%, rgba(49, 46, 129, 0.8) 50%, rgba(30, 27, 75, 0.8) 100%)",
        "gradient-card":
          "linear-gradient(180deg, rgba(99, 102, 241, 0.03) 0%, rgba(129, 140, 248, 0.03) 100%)",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
        "card-hover":
          "0 10px 15px -3px rgba(99, 102, 241, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.3)",
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
