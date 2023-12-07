/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  css: {
    loaderOptions: {
      css: {
        additionalData: `@import "../globals.css"`,
      },
    },
  },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          
      },
      sm: { min: "390px"},      
      md: { min: "768px" },      
      lg: { min: "1200px"},

     
    },
    colors: {
      mainBgColor: "#F1E8E3",
      addBgColor: "#ffffff",
      textColor: "#45372E",
      textColorLight: "#fff",
      bgBtnColor: "#45372E", 
      cardColor: "#D0C3BB"     
    },   
  }



