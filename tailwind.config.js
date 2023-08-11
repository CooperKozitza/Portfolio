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
      backgroundImage: {
        'hero-pattern': "url('/img/glow_1.png')"
      }
    },
  },
  plugins: [],
}

