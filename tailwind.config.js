/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: "#003C43",
    },
  },
  plugins: [],
  safelist: [
    // Safelist your dynamic patterns
    { pattern: /grid-cols-(1|2|3|4|5|6|7|8|9|10|11|12)/ },
    // More patterns as needed
  ],
};
