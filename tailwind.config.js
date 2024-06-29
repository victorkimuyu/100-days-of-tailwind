/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './*.html', '*/icons/*.svg'
  ],
  theme: {
    extend: {
      'fontFamily': {
        'sans': ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}