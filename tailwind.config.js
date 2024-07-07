/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './*.html', '*/icons/*.svg'
  ],
  theme: {
    extend: {
      'fontFamily': {
        sans: ['Segoe UI', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}