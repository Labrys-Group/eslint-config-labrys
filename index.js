/**
 * Define the extended eslint-config for react apps
 */
module.exports = {
  extends: [
    "eslint-config-labrys/base",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "airbnb/hooks",
    "plugin:react/jsx-runtime",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "prettier"
  ],
  plugins: ["react", "@tanstack/query"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "react/require-default-props": 0,
    "react/prop-types": 0,
    "@shopify/jsx-prefer-fragment-wrappers": 1,
    "react/jsx-props-no-spreading": 0,
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
  },
};
