/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    "turbo",
    "prettier",
    "plugin:eslint-comments/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    "arrow-body-style": 2,
    
    // turbo
    "turbo/no-undeclared-env-vars": "off", // off since we use dotenv files

    // eslint-comments
    "eslint-comments/require-description": "off",
    "eslint-comments/no-unused-disable": "error",

    // import
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "import/order": [
        2,
        {
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
  },
  settings: {
    "import/resolver": {
        typescript: true,
        node: true
    }
  }
};
