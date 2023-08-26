/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      maxWidth: {
        1100: "1100px",
      },
      colors: {
        primary: "#F5F5F5",
        secondary: "#1266DD",
        tertiary: "#F73859",
        text: "#333333",
      },
    },
  },
  plugins: [],
};
