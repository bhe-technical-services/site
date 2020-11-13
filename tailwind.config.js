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
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      "4/5": "75%",
      full: "100%",
      "19rem": "19rem",
      screen: "100vh",
    },
    extend: {
      minWidth: {
          px: "1px",
          0: "0",
          1: "0.25rem",
          2: "0.5rem",
          3: "0.75rem",
          4: "1rem",
          5: "1.25rem",
          6: "1.5rem",
          7: "1.75rem",
          8: "2rem",
          9: "2.25rem",
          10: "2.5rem",
          12: "3rem",
          14: "3.5rem",
          16: "4rem",
          20: "5rem",
          22: "5.5rem",
          24: "6rem",
          26: "6.5rem",
          28: "7rem",
          30: "7.5rem",
          32: "8rem",
          34: "8.5rem",
          36: "9rem",
          38: "9.5rem",
          40: "10rem",
          44: "11rem",
          48: "12rem",
          52: "13rem",
          56: "14rem",
          60: "15rem",
          64: "16rem",
          68: "17rem",
          72: "18rem",
          76: "19rem",
          80: "20rem",
          88: "22rem",
          96: "24rem",
          104: "26rem",
          110: "28rem",
          118: "30rem",
          126: "32rem",
          132: "34rem",
          140: "36rem",
      },

      colors: {
        "writing-black": "#212121",
        "writing-gray": "#757575",
        "flat-gray": "#393939",
        "off-white": "#F0F0EF",
        "primary-green": {
          50: "#FBFCF7",
          100: "#F7F8EF",
          200: "#ECEFD7",
          300: "#E0E5BE",
          400: "#C8D18E",
          500: "#B1BD5D",
          600: "#9FAA54",
          700: "#6A7138",
          800: "#50552A",
          900: "#35391C",
        },
        "secondary-brown": {
          50: "#FEFDF9",
          100: "#FDFBF4",
          200: "#FBF5E3",
          300: "#F8EFD3",
          400: "#F3E2B1",
          500: "#EED690",
          600: "#D6C182",
          700: "#8F8056",
          800: "#6B6041",
          900: "#47402B",
        },
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/ui")],
};
