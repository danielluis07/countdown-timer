/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gradientColorStopPositions: {
        50: "50%",
      },
      backgroundImage: {
        stars: "url('/images/bg-stars.svg')",
        hills: "url('/images/pattern-hills.svg')",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        gblue: "hsl(237, 18%, 59%)",
        softred: "hsl(345, 95%, 68%)",
        darkblue: "hsl(236, 21%, 26%)",
        darkerblue: "hsla(236, 21%, 21%, 1)",
        verydarkblue: "hsl(235, 16%, 14%)",
        superdarkblue: "hsl(234, 17%, 12%)",
      },
    },
  },
  plugins: [],
};
