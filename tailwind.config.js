/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)'],
        display: ['var(--font-helvetica)']
      },
      fontWeight: {
        sans: '400',
        display: '700',
      },
      colors: {
        highlight: '#40d672'
      }
    },
  },
  plugins: [],
}

