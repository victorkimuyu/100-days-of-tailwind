/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './*.html', '*/icons/*.svg'
  ],
  theme: {
    extend: {
      'fontFamily': {
        sans: ['Lexend Deca', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}