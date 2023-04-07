/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    
    
    extend: {
      bgheight: {sm:'600px'},
    bgwidth: {sm:'1000px'},
    bgmarginTop: {sm:'50px'},
    },
  },
  plugins: [],
}
