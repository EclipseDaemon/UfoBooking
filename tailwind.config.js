const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        baseBlue: "#03071e",
        baseRed: "#6a040f",
        baseOrange: "#dc2f02",
      },
      maxWidth: {
        themewidth: "1536px",
      },
      // backgroundImage: {
      //   heroimg: "url('./src/Images/heroImg.jpg')",
      // },
    },
  },
  plugins: [flowbite.plugin()],
};
