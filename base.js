module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "airbnb",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@shopify/typescript",
    "plugin:@shopify/typescript-type-checking",
    "plugin:@shopify/prettier",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-undef": 0,
    "no-unused-vars": 0,
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "arrow-body-style": 2,
    "no-underscore-dangle": 0,
    quotes: ["error", "double"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
  },
};
