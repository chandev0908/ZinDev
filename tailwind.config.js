/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#F5F5F5",
        "primary-text": "#333333",
        "primary-btn": "#FF8300",
        "secondary-bg": "#FF8300",
        "primary-hover": "#FF8300",
      },
    },
  },
  plugins: [],
};
