/** @type {import('tailwindcss').Config} */
export default {
  // 👇 Tailwind scanne tous tes fichiers React pour générer uniquement
  //    les classes CSS utilisées (optimisation de la taille du bundle)
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      // ─────────────────────────────────────────────
      // TYPOGRAPHIE
      // ─────────────────────────────────────────────
      fontFamily: {
        // Police principale — corps de texte
        sans: ["DM Sans", "sans-serif"],
        // Police d'affichage — titres, chiffres KPI
        display: ["Fraunces", "serif"],
        // Police monospace — codes, IDs animaux
        mono: ["JetBrains Mono", "monospace"],
      },

      // ─────────────────────────────────────────────
      // COULEURS PERSONNALISÉES
      // ─────────────────────────────────────────────
      colors: {

        // Couleur primaire : Vert forêt (agriculture, nature, actions)
        primary: {
          50:  "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",  // ← couleur principale
          600: "#16a34a",  // ← hover
          700: "#15803d",  // ← active / pressed
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },

        // Couleur secondaire : Terre brûlée (élevage, sol, accents)
        earth: {
          50:  "#fdf8f0",
          100: "#faefd8",
          200: "#f5ddb0",
          300: "#edc57d",
          400: "#e3a64a",
          500: "#d4882a",  // ← couleur principale
          600: "#b86d1e",
          700: "#96531a",
          800: "#7a4319",
          900: "#64371a",
        },

        // Couleur ciel : eau, irrigation, info
        sky: {
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
        },

        // Couleur danger : alertes critiques, suppression
        danger: {
          50:  "#fef2f2",
          100: "#fee2e2",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
        },

        // Couleur warning : seuils d'alerte, attention
        warning: {
          50:  "#fffbeb",
          100: "#fef3c7",
          500: "#f59e0b",
          600: "#d97706",
        },

        // Couleur success : confirmation, validation
        success: {
          50:  "#f0fdf4",
          500: "#22c55e",
          600: "#16a34a",
        },
      },

      // ─────────────────────────────────────────────
      // OMBRES PERSONNALISÉES
      // ─────────────────────────────────────────────
      boxShadow: {
        "card":    "0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.04)",
        "card-md": "0 4px 12px 0 rgba(0,0,0,0.08)",
        "card-lg": "0 8px 24px 0 rgba(0,0,0,0.10)",
        "modal":   "0 20px 60px 0 rgba(0,0,0,0.20)",
        "green":   "0 4px 14px 0 rgba(34,197,94,0.30)",
      },

      // ─────────────────────────────────────────────
      // ANIMATIONS
      // ─────────────────────────────────────────────
      animation: {
        "fade-in":     "fadeIn 0.2s ease-out",
        "slide-up":    "slideUp 0.3s ease-out",
        "slide-right": "slideRight 0.3s ease-out",
        "pulse-slow":  "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideRight: {
          "0%":   { opacity: "0", transform: "translateX(-12px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },

      // ─────────────────────────────────────────────
      // BORDURES
      // ─────────────────────────────────────────────
      borderRadius: {
        "xl":  "12px",
        "2xl": "16px",
        "3xl": "24px",
      },

      // ─────────────────────────────────────────────
      // ESPACEMENTS SUPPLÉMENTAIRES
      // ─────────────────────────────────────────────
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "sidebar": "14rem",       // largeur sidebar desktop
        "sidebar-sm": "4rem",    // largeur sidebar collapsée
      },
    },
  },

  plugins: [],
};

