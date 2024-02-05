/** @type {import('tailwindcss').Config} */
import { DEFAULT_COLORS, DEFAULT_FONTS } from "./theme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...DEFAULT_COLORS,
    },
    fontSize: {
      ...DEFAULT_FONTS,
    },
    extend: {},
  },
  plugins: [],
};
