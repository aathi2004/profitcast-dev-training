/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#070d18",
          900: "#0b1324",
          800: "#131d33",
        },
        brand: {
          400: "#e3bd85",
          500: "#d4a574",
          600: "#b8895a",
        },
        accent: {
          400: "#7dd3c0",
          500: "#4fb5a0",
        },
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(212, 165, 116, 0.55)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(212,165,116,0.16), transparent 60%), radial-gradient(ellipse at bottom right, rgba(79,181,160,0.12), transparent 55%)",
      },
    },
  },
  plugins: [],
};
