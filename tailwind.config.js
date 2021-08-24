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
        'methodology-lg': 'url(/images/home/methodology.png)',
        'footer-lg': 'url(/images/public/footer.png)'
      },
      colors: {
        white: '#FBF9F3',
        'lemon-green': '#00E5BA',
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
