/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "turbo",
    "prettier",
  ],
  rules: {
    // turbo
    "turbo/no-undeclared-env-vars": "off", // off since we use dotenv files

    // eslint-comments
    "eslint-comments/require-description": "off",
    "eslint-comments/no-unused-disable": "error",
    "eslint-comments/no-unused-enable": "error",
  },
  settings: {
    "import/resolver": {
        typescript: true,
        node: true
    }
  }
};
