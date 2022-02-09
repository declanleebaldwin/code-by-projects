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
        400: "#292934",
        500: "#ffffffb5",
        600: "#252530",
        800: "#1C1C26",
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
      'xl': '1.25rem',
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
    },
  },
  plugins: [],
};
