/**
 * Define the base eslint-config for any TypeScript project
 */
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
    "plugin:eslint-comments/recommended",
    "prettier",
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
  plugins: ["@typescript-eslint", "@shopify"],
  rules: {
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "no-use-before-define": 0,
    "no-undef": 0,
    "no-unused-vars": 0,
    "import/order": [
      2,
      {
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "arrow-body-style": 2,
    "no-underscore-dangle": 0,
    quotes: [2, "double"],
    "no-shadow": 0,
    "@typescript-eslint/no-shadow": ["error"],
    "@shopify/prefer-early-return": 1,
    "@shopify/typescript/prefer-pascal-case-enums": 2,
    "@shopify/typescript/prefer-singular-enums": 2,
    "import/prefer-default-export": "off",
    "eslint-comments/require-description": ["error", { ignore: [] }],
    "import/no-extraneous-dependencies": [
      "off",
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    "no-plusplus": ["error", {
       "allowForLoopAfterthoughts": true,
    }],
  },
};
