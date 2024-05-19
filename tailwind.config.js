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
      fontSize: {
        title: ['40px', '40px'],
        subtitle: ['17px', '17px']
      },
      colors: {
        mercury: '#DFE5EA',
        'bluish-cyan': '#334144',
        'dusty-grey': '#949EA0',
        'ruddy-pink': '#DF9186',
        'white-lilac': '#F5F6F7'
      },
      width: {
        'circle-small': '30px'
      },
      height: {
        'circle-small': '30px',
        panel: '500px'
      },
      backgroundImage: {
        'soft-pink-gradient':
          'linear-gradient(90deg, rgba(234,167,158,1) 0%, rgba(236,188,179,1) 100%)',
        'flowers-background': "url('./assets/images/pl-hero.png')"
      },
      boxShadow: {
        'soft-pink': '0px 15px 20px 0px rgba(234, 168, 159, 0.2)'
      }
    }
  },
  plugins: []
};
