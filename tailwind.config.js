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
      fontFamily: {
        playfair: ["Playfair Display"],
        raleway: ["Raleway"],
      },
      colors: {
        white: "#ffffff",
        lightBlue: "#00d2ff",
        blue: "#3a7bd5",
      },
    },
  },
  plugins: [],
};
