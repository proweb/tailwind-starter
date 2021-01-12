module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './public/**/*.html',
  ],
  theme: {
    fontFamily: {
      body: ['PT Sans', 'sans-serif'],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
