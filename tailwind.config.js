module.exports = {
  content: [
    "./*/*.html",
    "./*.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        abc: {
          500: "#db03f3",
          600: "#db03f3",
        },
        red: {
          400: "db03f3"
        }
      },
      spacing : {
        1: "4px"
      },
      fontSize: {
        h2: ["48px","64px"],
        lead1: ["18px","32px"]
      }
    },
  },
  plugins: [],
}