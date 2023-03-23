/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        1: "50rem",
      },
      inset: {
        "21px": "-21px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
