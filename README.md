# eslint-config-labrys

## Description

Config for Typescript projects at Labrys which incorporates AirBnb, Shopify, prettier, and React Hook configs.

## Usage

### 1. Install package and dependencies

If you have npm 5+ installed on your machine, use this shortcut

```bash
npx install-peerdeps --dev eslint-config-labrys -Y
```

Otherwise, run `npm info "eslint-config-labrys@latest"` peerDependencies to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.

### 2. Create ESLint Config

Create a file named `.eslintrc.js` and add the following for a React project:

```js
module.exports = {
  extends: "eslint-config-labrys",
  parser: "@typescript-eslint/parser",
};
```

and for a non-React project:

```js
module.exports = {
  extends: "eslint-config-labrys/base",
  parser: "@typescript-eslint/parser",
};
```

## Improving this config

See `CONTRIBUTING.md` in the GitLab repo for a guide on how to contribute to this config.
