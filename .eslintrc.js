/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'no-console': 'warn',
  },
};
