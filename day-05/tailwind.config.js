/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F4CF6B",
          dark: "#A6841C",
        },
        carbon: {
          DEFAULT: "#0A0A0A",
          light: "#1A1A1A",
          medium: "#2A2A2A",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "shine": "shine 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shine: {
          "0%, 100%": { backgroundPosition: "200% center" },
          "50%": { backgroundPosition: "-200% center" },
        },
      },
    },
  },
  plugins: [],
};
