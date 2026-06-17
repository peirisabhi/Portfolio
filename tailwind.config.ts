import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          50:  "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
        },
        bg: {
          DEFAULT: "var(--color-bg)",
          card:    "var(--color-bg-card)",
          elevated:"var(--color-bg-elevated)",
        },
        surface:         "var(--color-surface)",
        "text-primary":  "var(--color-text)",
        "text-secondary":"var(--color-text-secondary)",
        "text-muted":    "var(--color-text-muted)",
        border:          "var(--color-border)",
        "border-light":  "var(--color-border-light)",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body:    ["var(--font-inter)", "sans-serif"],
        mono:    ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":  "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "card-gradient":
          "linear-gradient(135deg, rgba(124,58,237,0.05) 0%, rgba(6,182,212,0.05) 100%)",
      },
      animation: {
        "float":          "float 6s ease-in-out infinite",
        "float-delayed":  "float 6s ease-in-out 2s infinite",
        "pulse-slow":     "pulse 4s ease-in-out infinite",
        "spin-slow":      "spin 20s linear infinite",
        "glow":           "glow 2s ease-in-out infinite alternate",
        "shimmer":        "shimmer 2s linear infinite",
        "fadeInUp":       "fadeInUp 0.6s ease-out forwards",
        "slideInLeft":    "slideInLeft 0.6s ease-out forwards",
        "slideInRight":   "slideInRight 0.6s ease-out forwards",
        "scaleIn":        "scaleIn 0.5s ease-out forwards",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":       { transform: "translateY(-20px)" },
        },
        glow: {
          "0%":   { boxShadow: "0 0 20px rgba(124,58,237,0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(124,58,237,0.8), 0 0 80px rgba(124,58,237,0.3)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%":   { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%":   { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%":   { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":       { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        "glow-primary":   "0 0 30px rgba(124,58,237,0.4)",
        "glow-secondary": "0 0 30px rgba(6,182,212,0.4)",
        "glow-accent":    "0 0 30px rgba(34,197,94,0.4)",
        "card":           "0 4px 24px rgba(0,0,0,0.08)",
        "card-hover":     "0 8px 40px rgba(124,58,237,0.15)",
        "glass":          "0 8px 32px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
