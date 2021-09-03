module.exports = {
  extends: [
    "eslint-config-labrys/base",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "airbnb/hooks",
    "prettier/react",
  ],
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "react/require-default-props": 0,
    "react/prop-types": 0,
    "@shopify/eslint-plugin/jsx-no-complex-expressions": 1,
  },
};
