/*
 * @Description: .eslintrc.js
 * @Date: 2021-02-25 16:35:42
 * @Author: LeiLiu
 */
module.exports = {
  extends: [
    "react-app",
    "react-app/jest",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  // parser: "@typescript-eslint/parser",
  // parserOptions: {
  //   ecmaFeatures: {
  //     jsx: true,
  //     tsx: true,
  //     modules: true,
  //   },
  //   ecmaVersion: 2020,
  //   sourceType: "module",
  // },
  rules: {
    semi: "warn",
    "no-unused-vars": "off",
    "no-cond-assign": "error",
    "no-debugger": "warn",
    "no-dupe-args": "error",
    "no-caller": "error",
    "no-unmodified-loop-condition": "error",
    "no-with": "error",
    "no-catch-shadow": "error",

    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "prettier/prettier": "warn"
  }
};
