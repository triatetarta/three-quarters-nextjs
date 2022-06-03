const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    important: true,
    colors: colors,
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        "primary-1": "#5c43f5",
        "primary-2": "#705df2",
        "btn-dark": "#272727",
        "clr-white": "#fff",
        "clr-black": "#1a1a1a",
        "dark-gray": "#222",
        "clr-footer": "#202020",
        "light-gray": "#8b8b8b",
      },
      fontFamily: {},
      transitionTimingFunction: {
        "in-button-out": "cubic-bezier(0.53, 0.21, 0,1)",
      },
    },
  },
  plugins: [],
};
