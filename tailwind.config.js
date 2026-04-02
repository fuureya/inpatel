/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'inpatel-dark': 'var(--inpatel-dark)',
        'inpatel-primary': 'var(--inpatel-primary)',
        'inpatel-light': 'var(--inpatel-light)',
        'telkom-red': 'var(--inpatel-primary)',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}