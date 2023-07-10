import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'grayleaf': "url('/imgs/grayleaf-alancabello.jpg')"
      },
      colors: {
        'codgray': '#080808',
      },
    },
  },
  plugins: [],
} satisfies Config;
