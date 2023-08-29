/**
 * @type {import("eslint").Linter.Config}
 * 
 * This requires installing `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser` since we are
 * extending [`universe/native`](https://github.com/expo/expo/tree/master/packages/eslint-config-universe).
 */
module.exports = {
    extends: ["./base.js", "universe/native"],
  };
  