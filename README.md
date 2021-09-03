# eslint-config-labrys

## Description

Config for Typescript projects at Labrys which incorporates AirBnb, Shopify, prettier, and React Hook configs. Feel free to add/modify rules through pull requests (send me a slack message so I don't miss it).

## Usage

### Installation

```bash
npm install --save-dev eslint-config-labrys
```

### Install required peer dependencies

for React:

```bash
npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser @shopify/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import eslint-plugin-jsx-a11y typescript
```

for base:

```bash
npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser @shopify/eslint-plugin eslint-plugin-import eslint-plugin-jsx-a11y typescript
```

### Create Eslint Config

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
