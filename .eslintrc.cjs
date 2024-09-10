const config = {
  root: true,

  plugins: ["prettier", "@typescript-eslint", "unused-imports"],
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "no-var": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "no-console": "warn",
    "react/react-in-jsx-scope": "off",
    "react/display-name": 1,
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "prettier/prettier": "warn",
    "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
  ignorePatterns: ["**/*.css"],
};

module.exports = config;
