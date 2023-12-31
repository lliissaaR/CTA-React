/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD58",
        "secondary-500": "#FFC132",
      },
      /*backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/img/background.jpg')"
      }),*/
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"], 
        montserrat: ["Montserrat", "sans-serif"]
      },
      content: {
        Logo: "url('./assets/img/logo.jpg')",  //pour importer dans tailwind
            }
    },
    screens: { 
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}