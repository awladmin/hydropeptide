import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "hp-black": "#000000",
        "hp-white": "#ffffff",
        "hp-softGray": "#f7f8f9",
        "hp-navy": "#0f2d64",
        "hp-softBlue": "#c8d3f3",
        "hp-text": "#000000", // body text = black per guide
        "hp-border": "#f0f2f5", // subtle border (slightly darker than softGray)
      },
      fontFamily: {
        serif2: [
          "var(--font-secondary-thin)",
          "Times New Roman",
          "Times",
          "serif",
        ],
        sans: [
          "var(--font-primary)",
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
