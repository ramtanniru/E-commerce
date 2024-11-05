/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange_grad: "linear-gradient(90deg, #F59E0B 39.95%, #EF4444 77.15%)",
        transparent: "transparent",
        stroke: "#EEEEEE",
        strokedark: "#2D2F40",
        hoverdark: "#252A42",
        titlebg: "#ADFFF8",
        titlebg2: "#FFEAC2",
        titlebgdark: "#46495A",
        btndark: "#292E45",
        black: "#161513",
        blackho: "#2C3149",
        blacksection: "#1C2136",
        primary: "#006BFF",
        primaryho: "#0063EC",
        meta: "#20C5A8",
        waterloo: "#757693",
        manatee: "#999AA1",
        alabaster: "#FBFBFB",
        zumthor: "#EDF5FF",
        socialicon: "#D1D8E0",
      },
    },
  },
  plugins: [],
};
