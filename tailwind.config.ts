import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: "1rem",
      sm: "1.25rem",
      base: "1.5rem",
      lg: "3rem",
      xl: "4rem",
    },
    extend: {
      colors: {
        orange: "#FF8181",
        purple: "#4732BA",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        title: ["Lexend Exa", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
