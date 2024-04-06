/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/react-tailwindcss-datepicker-vsg/dist/index.esm.js"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#1a9ed8",
        darkerPrimary: "#0B4259",
        secondary: "#707EAE",
        background: "#F4F7FE",
        green: "#46FF59",
        red: "#FF4646",
      },
      fontFamily: {
        graphie: ["Graphie", "sans-serif"],
        sans: ["Graphie", "sans-serif"],
      },
      boxShadow: {
        light: "0px 2px 20px rgba(22, 54, 172, 0.08)",
      },
      keyframes: {
        "pulse-big": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        "pulse-big": "pulse-big 300ms ease-in-out",
        wiggle: "wiggle 200ms ease-in-out",
      },
      gridTemplateRows: {
        12: "repeat(12, minmax(0, 1fr))"
      }
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true,             preferredStrategy: 'pseudoelements',  // <- Prefer pseudoelement scrollbars where possible
 })],
}

