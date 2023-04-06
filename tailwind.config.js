/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rebeccapurple: "#663399",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
      width: {
        1200: "1200px",
      },
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar"),
  ],
};
