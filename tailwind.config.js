/** @type {import('tailwindcss').Config} */
const config = {
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
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "hero-mob": "url(/img/hero/heroMob-3x.png)",
        "hero-mob-1": "url(/img/hero/heroMob-1x.png)",
        "hero-dt": "url(/img/hero/heroDT-3x.jpg)",
        "hero-dt-1": "url(/img/hero/heroDT-3x-2.jpg)", 
        "pluses-bg": "url(/img/pluses/bg-main.jpg)",
        "comertional-bg": "url(/img/comertional/comartionalBG-3x.png)" 
      },  
    },
    colors: {
      transparent: "transparent",
      "main-background": "#F6F5F5",
      "second-backround": "#F1E8E3",
      "btn-bg-primery-color": "#FFFFFF",
      "btn-second-color": "#45372E",
      "text-accent-color": "#FFFFFF",
      "bg-modal-basket": "#656565"
    },
    opacity: {
      "50": "0.5",
    },
    screens: {
      sm: "390px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
    },  
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          minWidth: "100%",
          "@screen sm": {
            minWidth: "390px",
          },
          "@screen md": {
            minWidth: "768px",
          },
          "@screen lg": {
            minWidth: "1200px",
          },
          "@screen xl": {
            minWidth: "1440px",
          },
        }
      })
    }
  ]
}

export default config;
