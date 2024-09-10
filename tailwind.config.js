/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px'
    },
    extend: {
      colors: {
        PrimaryColor: '#010a5e',
        PrimaryColorLight: '010d78',
        secondaryColor: '#FFCC00',
        whiteColor: '#fff',
         blackColor: '#000',
         greenColor: '#007936',
         redColor:  '#cc3433',
         darkColor:  '#000',
         darkColorLight: '#171717'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem'
      }
    }
  },
  plugins: [],
}
