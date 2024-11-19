/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F8F8",
        "gray-50": "#C4C4C4",
        "gray-100": "#B3B3B3", 
        "gray-500": "#000000",
        "primary-100": "#FFFFFF",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#4076DC",
        "secondary-500": "#4076DC",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%)",
        "mobile-home": "url('./assets/HomePageBackground.png')",
        "home-background": "url('./assets/HomePageBackground.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        sahitya: ["Sahitya", "serif"],
        nunito: ["Nunito", "sans-serif"],
        sourceserif: ["Source Serif 4", "serif"],
        markazi: ["Markazi Text", "serif"],
      },
      content: {
      },
    },
    screens: {
      xs: "480px",  // Extra small devices like phones in portrait mode
      sm: "768px",  // Small devices like phones in landscape mode and small tablets
      md: "1060px", // Medium devices like tablets or small laptops
      lg: "1280px", // Large devices like laptops and desktops
      xl: "1440px", // Extra large screens like large desktop monitors      
    },
  },
  plugins: [],
}