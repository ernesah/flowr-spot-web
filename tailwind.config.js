/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        playfair: ['Playfair Display', 'serif']
      },
      colors: {
        'dusty-grey': '#949EA0',
        'ruddy-pink': '#DF9186'
      },
      backgroundImage: {
        'soft-pink-gradient':
          'linear-gradient(90deg, rgba(234,167,158,1) 0%, rgba(236,188,179,1) 100%)'
      },
      boxShadow: {
        'soft-pink': '0px 15px 20px 0px rgba(234, 168, 159, 0.2)'
      }
    }
  },
  plugins: []
};
