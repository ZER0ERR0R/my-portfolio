/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Nova Square", "sans-serif"],
      serif: ["Nova Round", "system-ui"],
      mono: ["Nova Mono", "monospace"],
    },
    extend: {
      colors: {
        lightBlue: "#80D8FF",
        lightGray: "#F1F1F2",
        tealBlue: "#259FB7",
      },
      boxShadow: {
        tealBlue: "0px 0px 8px #259FB7",
        lightBlue: "0px 0px 8px #80D8FF",
      },
    },
  },
  plugins: [],
};
