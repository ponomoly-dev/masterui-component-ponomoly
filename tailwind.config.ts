/** @type {import('tailwindcss').Config} */
import { DEFAULT_COLORS } from "./theme/colors";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...DEFAULT_COLORS,
    },
    extend: {},
  },
  plugins: [],
};
