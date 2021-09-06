module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: ["./layouts/**/*.html"],
    options: {
      safelist: [
        "nav",
        "nav--active",
        "menu-button",
        "menu-icon",
        "menu-icon--active",
        "overlay",
        "hidden",
        "modal",
        "modal-left",
        "modal-right",
        "modal-button--close",
        "modal-hidden",
        "modal-overlay",
        "modal-overlay-hidden",
        "-left-full",
        "left-0",
        "hidde"
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "merriweather-sans": ["Merriweather Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        "banner-home-lg": "url(/images/home/banner-home-lg.png)",
        "banner-explore-data-home-lg":
          "url(/images/home/banner-explore-data-lg.png)",
        "footer-lg": "url(/images/public/footer.png)",
        "banner-iniciativas-lg":
          "url(/images/iniciativas-mapeadas/banner-iniciativas-lg.png)",
        "banner-proveedores-lg":
          "url(/images/proveedores/banner-proveedores-lg.png)",
        "banner-datos-lg": "url(/images/explorador-datos/banner-datos-lg.png)",
      },
      colors: {
        white: "#FBF9F3",
        "lemon-green": "#00E5BA",
        blue: "#006999",
        "blue-dark": "#29366D",
        "blue-title": "#006999",
        "light-green": "#009A9C",
        body: "#00284A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
