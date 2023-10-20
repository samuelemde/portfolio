import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Archivo Black", ...fontFamily.sans],
        sans: ["Archivo Narrow", ...fontFamily.sans],
      },
      letterSpacing: {
        normal: "0.05rem",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        inversebg: "hsl(var(--inverse-background))",
        inversefg: "hsl(var(--inverse-foreground))",
        projectfg: "hsl(var(--project-foreground))",
        project1: "hsl(var(--project-1))",
        project2: "hsl(var(--project-2))",
        project3: "hsl(var(--project-3))",
        project4: "hsl(var(--project-4))",
        project5: "hsl(var(--project-5))",
        project6: "hsl(var(--project-6))",
        project7: "hsl(var(--project-7))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        breathing: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        breathing: "breathing 7s infinite ease-in-out",
      },
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
      },
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr))",
      },
      boxShadow: {
        inverse: "0px 8px 15px 2px var(--shadow)",
      },
      transitionProperty: {
        width: "width, height",
        spacing: "letter-spacing",
        border: "border-width",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
