/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      animation: {
        slideDown: "slideDown 2s ease-in-out infinite",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.border-custom': {
          borderRadius: '30% 70% 27% 73% / 88% 23% 77% 12% ',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

