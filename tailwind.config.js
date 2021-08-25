module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: ['./layouts/**/*.html'],
    options: {
      safelist: []
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "merriweather-sans": ['Merriweather Sans', 'sans-serif'],
        "raleway": ['Raleway', 'sans-serif']
      },
      backgroundImage: {
        'banner-home-lg': 'url(/images/home/banner-home-lg.png)',
        'banner-explore-data-home-lg': 'url(/images/home/banner-explore-data-lg.png)',
        'footer-lg': 'url(/images/public/footer.png)',
        'banner-iniciativas-lg': 'url(/images/iniciativas-mapeadas/banner-iniciativas-lg.png)',
        'banner-proveedores-lg': 'url(/images/proveedores/banner-proveedores-lg.png)',
      },
      colors: {
        white: '#FBF9F3',
        'lemon-green': '#00E5BA',
        'blue': '#006999',
        'blue-dark': '#29366D',
        'blue-title': '#006999',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
