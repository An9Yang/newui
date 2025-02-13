import type { Config } from "tailwindcss";

const config: Config = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  		},
  		colors: {
  			foreground: 'rgb(var(--foreground-rgb))',
  			background: 'rgb(var(--background-rgb))',
  		},
  	}
  },
  plugins: [],
} satisfies Config;

export default config;
