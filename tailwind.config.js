/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "-8px 15px 258px -5px rgba(248,196,25,1)",
      },
      colors: {
        dark: "#23272F",
        light: "#F3F4F6",
        extraDark: "#16181D",
      },
    },
  },
  plugins: [],
};
