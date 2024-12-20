import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "hsl(var(--color-white))",
        black: "hsl(var(--color-black))",
        gray: "hsl(var(--color-gray))",
        "gray-dark": "hsl(var(--color-gray-dark))",
        primary: "hsl(var(--color-primary))",
        "primary-dark": "hsl(var(--color-primary-dark))",
        "primary-light": "hsl(var(--color-primary-light))",
      },
      fontFamily: {
        body: "var(--font-geist-sans)",
        display: "var(--font-geist-sans)",
      },
      screens: {
        sm: "440px",
        md: "834px",
        lg: "1440px",
        xl: "1920px",
      },
      zIndex: {
        hidden: "-1",
        base: "10",
        header: "20",
      },
      backgroundImage: {
        grid: 'url("/vectors/grid.svg")',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
};
export default config;
