import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        articulat: ["Articulat", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/background.png')",
        "custom-gradient":
          "linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 22.49%, rgba(255, 255, 255, 1) 76.76%, rgba(255, 255, 255, 0))",
      },
      backgroundSize: {
        customHero: "145% 119%",
      },
      animation: {
        bounceCustom: "bounce 2s ease-out forwards",
        bounceReverse: "bounceReverse 2s ease-out forwards",
        "infinite-scroll": "infinite-scroll 160s linear infinite",
        "infinite-scroll-reverse":
          "infinite-scroll-reverse 160s linear infinite",
        slideUpFadeIn: "slideUpFadeIn 0.65s ease-out forwards",
      },
      keyframes: {
        slideUpFadeIn: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceReverse: {
          "0%, 100%": {
            transform: "translateY(0%)",
            "animation-timing-function": "cubic-bezier(0.42, 0, 0.58, 1)",
          },
          "50%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.42, 0, 0.58, 1)",
          },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-reverse": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      safelist: ["scale-0", "scale-100", "opacity-0", "opacity-100"],
      colors: {
        white: "#ffffff",
        black: "#141413",
        turquoise: "#1bd6ff",
        orange: "#ffcd1b",
        purple: "#dab5e0",
        yellow: "#fff493",
        gray: "#F1F3F9",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
