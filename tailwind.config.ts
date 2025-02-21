import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'playfair-bold': ['Playfair Display Bold', 'serif'],
      'montserrat-regular': ['Montserrat Regular', 'sans-serif'],
      'montserrat-bold': ['Montserrat Bold', 'sans-serif'],
      'playfair-regular': ['Playfair Display Regular', 'serif']
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkRed:"#690E0D",
        lightRed:"#8D0C07",
        gray:"#272421",
        cream:"#FFFDEF"
      },
    },
  },
  plugins: [],
} satisfies Config;
