module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      purple: "#8D7DFF",
      gray: {
        200: "#ffffff12",
        300: "#ffffff5e",
        400: "#292934",
        500: "#ffffffb5",
        600: "#252530",
        800: "#1C1C26",
      },
      black: {
        200: "#90caf929",
        300: "#2e2e2e",
      },
      white: "#FFFFFF",
      border: "#FF0000",
    },
    fontSize: {
      base: [
        "1.375rem",
        {
          lineHeight: 1.875,
        },
      ],
      xl: "1.25rem",
      "4xl": "2.25rem",
      "6xl": [
        "3.5rem",
        {
          lineHeight: 1,
        },
      ],
    },
    extend: {
      backgroundImage: {
        landing:
          "linear-gradient(to top, rgba(28,28,38,0.922), rgba(28,28,38,0.922)), url('/bg.svg')",
      },
      boxShadow: {
        inner: "0 0 0 1px #8d7dff, inset 0 0 0 1px #8d7dff",
      },
    },
  },
  plugins: [],
};
