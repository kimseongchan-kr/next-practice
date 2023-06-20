module.exports = {
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["import", "react-hooks", "@typescript-eslint"],
  "root": true,
  "rules": {
    "react/prop-types": 0
  }
}
