import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "hp-navy": "#0f2a55",
        "hp-navy-2": "#163665",
        "hp-text": "#0b1020",
        "hp-muted": "#5a667d",
        "hp-border": "#e6e9ef",
      },
      fontFamily: {
        serif2: [
          "var(--font-secondary-thin)",
          "Times New Roman",
          "Times",
          "serif",
        ],
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
        ],
      },
      boxShadow: { card: "0 10px 30px rgba(0,0,0,0.15)" },
      maxWidth: { page: "1200px" },
    },
  },
  plugins: [],
};
export default config;
