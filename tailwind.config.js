module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      purple: "#7163D6",
      gray: {
        400: "#292934",
        600: "#252530",
        800: "#1C1C26"
      }
    },
    extend: {
      backgroundImage: {
        'landing': "linear-gradient(to top, rgba(28,28,38,0.922), rgba(28,28,38,0.922)), url('/bg.svg')"
      }
    },
  },
  plugins: [],
};
