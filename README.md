# eslint-config-labrys

## Description

Config for Typescript projects at Labrys which incorporates AirBnb, prettier, and React Hook configs. Feel free to add/modify rules through pull requests.

## Usage

### Installation

```bash
npm install eslint-config-labrys
```

### Install required peer dependencies

for React:

```bash
npm install eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import eslint-plugin-jsx-a11y typescript
```

for base:

```bash
npm install eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import eslint-plugin-jsx-a11y typescript
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
