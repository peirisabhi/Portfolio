import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7C3AED",
          50: "#F5F3FF",
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
          DEFAULT: "#06B6D4",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
        },
        accent: {
          DEFAULT: "#22C55E",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
        },
        bg: {
          DEFAULT: "#0B0F19",
          card: "#111827",
          elevated: "#1A2035",
        },
        surface: "#111827",
        "text-primary": "#F8FAFC",
        "text-secondary": "#94A3B8",
        "text-muted": "#64748B",
        border: "#1E293B",
        "border-light": "#334155",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #0B0F19 0%, #0D1224 50%, #0B0F19 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(124, 58, 237, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)",
        "glow-primary":
          "radial-gradient(ellipse at center, rgba(124, 58, 237, 0.3) 0%, transparent 70%)",
        "glow-secondary":
          "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.3) 0%, transparent 70%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "typing": "typing 3.5s steps(40, end) infinite",
        "blink": "blink 0.75s step-end infinite",
        "shimmer": "shimmer 2s linear infinite",
        "orbit": "orbit 10s linear infinite",
        "orbit-reverse": "orbit 14s linear infinite reverse",
        "fadeInUp": "fadeInUp 0.6s ease-out forwards",
        "slideInLeft": "slideInLeft 0.6s ease-out forwards",
        "slideInRight": "slideInRight 0.6s ease-out forwards",
        "scaleIn": "scaleIn 0.5s ease-out forwards",
        "particle-float": "particleFloat 8s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(124, 58, 237, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(124, 58, 237, 0.8), 0 0 80px rgba(124, 58, 237, 0.3)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(100px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(100px) rotate(-360deg)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        particleFloat: {
          "0%, 100%": { transform: "translateY(0) translateX(0)", opacity: "0.3" },
          "33%": { transform: "translateY(-30px) translateX(15px)", opacity: "0.8" },
          "66%": { transform: "translateY(-15px) translateX(-10px)", opacity: "0.5" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#7C3AED" },
        },
        typing: {
          "0%": { width: "0" },
          "50%": { width: "100%" },
          "100%": { width: "0" },
        },
      },
      boxShadow: {
        "glow-primary": "0 0 30px rgba(124, 58, 237, 0.4)",
        "glow-secondary": "0 0 30px rgba(6, 182, 212, 0.4)",
        "glow-accent": "0 0 30px rgba(34, 197, 94, 0.4)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 8px 40px rgba(124, 58, 237, 0.2)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.3)",
      },
      backdropBlur: {
        xs: "2px",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
    },
  },
  plugins: [],
};

export default config;
