const windmill = require("@windmill/react-ui/config");
const colors = require("tailwindcss/colors");

module.exports = windmill({
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        // Extend or override colors as needed
        customGray: {
          100: "#252A34",
          // ... other shades of gray
        },
        purple: {
          // ... your custom purple shades
        },
        red: {
          // ... your custom red shades
        },
        pink: {
          // ... your custom pink shades
        },
        green: {
          // ... your custom green shades
        },
        blue: {
          // ... your custom blue shades
        },
      },
      fontFamily: {
        // ... your font families
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
});
