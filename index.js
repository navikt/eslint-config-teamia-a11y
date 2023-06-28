module.exports = {
  extends: ["plugin:jsx-a11y/recommended"],
  plugins: ["jsx-a11y"],
  rules: {
    "jsx-a11y/anchor-ambiguous-text": [
      2,
      {
        words: [
          "her",
          "klikk",
          "klikk her",
          "trykk",
          "trykk her",
          "lenken",
          "linken",
          "lenka",
          "lenken her",
          "linken her",
          "lenka her",
          "denne lenken",
          "denne linken",
          "denne lenka",
        ],
      },
    ],
  },
  overrides: [],
  settings: {},
};
