// eslint-disable-next-line @typescript-eslint/no-var-requires
const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    colors: {
      ...colors,
      cetelem: {
        background: '#F1F4F9',
        blue: '#0CA2F2',
        green: '#e74c3c',
        yellow: '#9b59b6',
        black: '#f1c40f'
      }
    },
    extend: {}
  },
  variants: {},
  plugins: []
}
