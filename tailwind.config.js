/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "429px",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
        work: "Work Sans, sans-serif",
      },
      colors: {
        "primary-50": "#D8DDF6",
        "primary-300": "#8B98E5",
        "primary-500": "#3E54D3",
        "primary-700": "#25327F",
        "primary-900": "#0C112A",
        "secondary-50": "#EDFCF8",
        "secondary-300": "#EDFCF8",
        "secondary-500": "#4FE0B6",
        "secondary-700": "#30896F",
        "secondary-900": "#113228",
        "error-50": "#FFF0F0",
        "error-300": "#FFA4A4",
        "error-500": "#FF6868",
        "error-700": "#B23E3E",
        "error-900": "#651515",
        "warning-50": "#FFFBEF",
        "warning-300": "#FDE89D",
        "warning-500": "#FBD85C",
        "warning-700": "#A99038",
        "warning-900": "#574813",
        "neutral-50": "#F0F0F3",
        "neutral-100": "#E0E1E6",
        "neutral-300": "#A2A5B5",
        "neutral-500": "#646983",
        "neutral-700": "#3C3F4F",
        "neutral-900": "#14151A",
        bright: "#FFFFFF",
      },
      boxShadow: {
        glow: "0px 4px 10px #8B98E5",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(-10%)", opacity: 0 },
          "20%": { transform: "translateY(0)", opacity: 1 },
          "90%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(-10%)", opacity: 0 },
        },
      },
      animation: {
        slideIn: "slideIn 2s ease-in-out",
      },
    },
  },
  plugins: [],
}
