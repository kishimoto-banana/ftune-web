module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth: {
      uranaiCard: "240px",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
