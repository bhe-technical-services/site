// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: {
    applyComplexClasses: true,
  },
  purge: ["./src/**/*.js"],
  theme: {
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '4/5': '75%',
      'full': '100%',
      '19rem': '19rem',
      'screen': '100vh',
    },
    extend: {

      colors: {
        'writing-black' : '#212121',
        'writing-gray' : '#757575',
        'flat-gray' : '#393939',
        'off-white' : '#F0F0EF',
        'primary-green': {
          50: '#FBFCF7',
          100: '#F7F8EF',
          200: '#ECEFD7',
          300: '#E0E5BE',
          400: '#C8D18E',
          500: '#B1BD5D',
          600: '#9FAA54',
          700: '#6A7138',
          800: '#50552A',
          900: '#35391C',
          },
          'secondary-brown': {
            50: '#FEFDF9',
            100: '#FDFBF4',
            200: '#FBF5E3',
            300: '#F8EFD3',
            400: '#F3E2B1',
            500: '#EED690',
            600: '#D6C182',
            700: '#8F8056',
            800: '#6B6041',
            900: '#47402B',
          },
      }
    }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [
    require('@tailwindcss/ui'),
  ],
};
